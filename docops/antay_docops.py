#!/usr/bin/env python3
"""
Antay DOCOPS - Documentation Operations Library
Provides core functions for Notion-GitHub synchronization following Antay Software Factory methodology.

Author: Antay Peru - Consultoría
Version: 1.0.0
"""

import os
import sys
import json
import logging
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Any

try:
    from notion_client import Client
    from dotenv import load_dotenv
    from rich.console import Console
    from rich.table import Table
    from rich import print as rprint
except ImportError as e:
    print(f"❌ Error: Missing required dependency: {e}")
    print("Please install dependencies: pip install -r docops/requirements.txt")
    sys.exit(1)

# Initialize Rich console for better terminal output
console = Console()

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('docops/docops.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


class AntayDOCOPS:
    """Main DOCOPS class for Notion-GitHub synchronization."""
    
    def __init__(self, config_path: str = "docops/docops_config.json"):
        """Initialize DOCOPS with configuration."""
        self.config_path = Path(config_path)
        self.config = self._load_config()
        self.notion_token = os.getenv("NOTION_API_TOKEN")
        self.database_id = os.getenv("NOTION_DATABASE_ID")
        self.notion_client = None
        
    def _load_config(self) -> Dict:
        """Load DOCOPS configuration from JSON file."""
        try:
            with open(self.config_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            logger.error(f"Configuration file not found: {self.config_path}")
            raise
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON in configuration file: {e}")
            raise
    
    def preflight_check(self) -> Dict[str, Any]:
        """
        Gate 0: Preflight Check
        Validates configuration and environment before starting work.
        
        Returns:
            Dict with check results and overall status
        """
        console.print("\n[bold cyan]🚀 Gate 0: Preflight Check[/bold cyan]\n")
        
        results = {
            "timestamp": datetime.now().isoformat(),
            "checks": {},
            "overall_status": "PASS"
        }
        
        # Check 1: .env file exists
        env_exists = Path(".env").exists()
        results["checks"]["env_file_exists"] = env_exists
        console.print(f"{'✅' if env_exists else '❌'} .env file exists: {env_exists}")
        
        # Check 2: Required environment variables
        required_vars = ["NOTION_API_TOKEN", "NOTION_DATABASE_ID"]
        env_vars_ok = all(os.getenv(var) for var in required_vars)
        results["checks"]["env_vars_present"] = env_vars_ok
        console.print(f"{'✅' if env_vars_ok else '❌'} Required environment variables: {env_vars_ok}")
        
        # Check 3: Notion API connection
        notion_ok = self._test_notion_connection()
        results["checks"]["notion_api_connection"] = notion_ok
        console.print(f"{'✅' if notion_ok else '❌'} Notion API connection: {notion_ok}")
        
        # Check 4: Git status
        git_ok = self._check_git_status()
        results["checks"]["git_status_clean"] = git_ok
        console.print(f"{'✅' if git_ok else '⚠️'} Git status clean: {git_ok}")
        
        # Check 5: Required directories
        required_dirs = ["docops", "scripts", "src"]
        dirs_ok = all(Path(d).exists() for d in required_dirs)
        results["checks"]["required_directories"] = dirs_ok
        console.print(f"{'✅' if dirs_ok else '❌'} Required directories: {dirs_ok}")
        
        # Overall status
        critical_checks = ["env_file_exists", "env_vars_present", "notion_api_connection"]
        if not all(results["checks"].get(check, False) for check in critical_checks):
            results["overall_status"] = "FAIL"
        
        console.print(f"\n[bold {'green' if results['overall_status'] == 'PASS' else 'red'}]Overall Status: {results['overall_status']}[/bold {'green' if results['overall_status'] == 'PASS' else 'red'}]\n")
        
        return results
    
    def _test_notion_connection(self) -> bool:
        """Test connection to Notion API."""
        if not self.notion_token or not self.database_id:
            return False
        
        try:
            self.notion_client = Client(auth=self.notion_token)
            # Try to retrieve database
            self.notion_client.databases.retrieve(database_id=self.database_id)
            return True
        except Exception as e:
            logger.error(f"Notion connection failed: {e}")
            return False
    
    def _check_git_status(self) -> bool:
        """Check if Git working tree is clean."""
        import subprocess
        try:
            result = subprocess.run(
                ["git", "status", "--porcelain"],
                capture_output=True,
                text=True,
                check=True
            )
            return len(result.stdout.strip()) == 0
        except subprocess.CalledProcessError:
            return False
    
    def query_ready(self) -> List[Dict]:
        """
        Query tasks in 'Ready' status from Notion database.
        
        Returns:
            List of tasks ready to be worked on
        """
        if not self.notion_client:
            self._test_notion_connection()
        
        try:
            status_prop = self.config["notion_config"]["properties"]["status_property_name"]
            
            response = self.notion_client.databases.query(
                database_id=self.database_id,
                filter={
                    "property": status_prop,
                    "status": {
                        "equals": "Ready"
                    }
                }
            )
            
            tasks = []
            for page in response.get("results", []):
                task = self._parse_notion_page(page)
                tasks.append(task)
            
            console.print(f"\n[bold green]Found {len(tasks)} tasks in 'Ready' status[/bold green]\n")
            
            if tasks:
                self._display_tasks_table(tasks)
            
            return tasks
            
        except Exception as e:
            logger.error(f"Failed to query ready tasks: {e}")
            return []
    
    def move_card(self, page_id: str, new_status: str) -> bool:
        """
        Update task status in Notion.
        
        Args:
            page_id: Notion page ID
            new_status: New status value
            
        Returns:
            True if successful, False otherwise
        """
        if not self.notion_client:
            self._test_notion_connection()
        
        try:
            status_prop = self.config["notion_config"]["properties"]["status_property_name"]
            
            self.notion_client.pages.update(
                page_id=page_id,
                properties={
                    status_prop: {
                        "status": {
                            "name": new_status
                        }
                    }
                }
            )
            
            console.print(f"✅ Updated task status to: [bold]{new_status}[/bold]")
            return True
            
        except Exception as e:
            logger.error(f"Failed to update task status: {e}")
            return False
    
    def append_log(self, message: str, level: str = "INFO") -> None:
        """
        Append log entry to DOCOPS log file.
        
        Args:
            message: Log message
            level: Log level (INFO, WARNING, ERROR)
        """
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "level": level,
            "message": message
        }
        
        if level == "INFO":
            logger.info(message)
        elif level == "WARNING":
            logger.warning(message)
        elif level == "ERROR":
            logger.error(message)
    
    def update_handoff(self, handoff_data: Dict) -> None:
        """
        Update handoff.json with current session information.
        
        Args:
            handoff_data: Dictionary containing handoff information
        """
        handoff_path = Path("docops/handoff.json")
        
        handoff_entry = {
            "timestamp": datetime.now().isoformat(),
            "agent": handoff_data.get("agent", "Antigravity"),
            "session_id": handoff_data.get("session_id", ""),
            "tasks_completed": handoff_data.get("tasks_completed", []),
            "next_steps": handoff_data.get("next_steps", []),
            "notes": handoff_data.get("notes", "")
        }
        
        # Load existing handoffs
        handoffs = []
        if handoff_path.exists():
            with open(handoff_path, 'r', encoding='utf-8') as f:
                handoffs = json.load(f)
        
        # Append new handoff
        handoffs.append(handoff_entry)
        
        # Save updated handoffs
        with open(handoff_path, 'w', encoding='utf-8') as f:
            json.dump(handoffs, f, indent=2, ensure_ascii=False)
        
        console.print("✅ Handoff updated successfully")
    
    def _parse_notion_page(self, page: Dict) -> Dict:
        """Parse Notion page object into simplified task dictionary."""
        props = page.get("properties", {})
        title_prop = self.config["notion_config"]["properties"]["title_property_name"]
        status_prop = self.config["notion_config"]["properties"]["status_property_name"]
        
        # Extract title
        title_data = props.get(title_prop, {})
        title = ""
        if title_data.get("title"):
            title = title_data["title"][0]["plain_text"]
        
        # Extract status
        status_data = props.get(status_prop, {})
        status = status_data.get("status", {}).get("name", "Unknown")
        
        return {
            "id": page["id"],
            "title": title,
            "status": status,
            "url": page["url"],
            "created_time": page["created_time"],
            "last_edited_time": page["last_edited_time"]
        }
    
    def _display_tasks_table(self, tasks: List[Dict]) -> None:
        """Display tasks in a formatted table."""
        table = Table(title="Ready Tasks")
        
        table.add_column("Title", style="cyan", no_wrap=False)
        table.add_column("Status", style="green")
        table.add_column("Last Edited", style="yellow")
        
        for task in tasks:
            last_edited = task["last_edited_time"][:10]  # Just the date
            table.add_row(task["title"], task["status"], last_edited)
        
        console.print(table)


def main():
    """CLI entry point for DOCOPS operations."""
    if len(sys.argv) < 2:
        console.print("[bold red]Usage:[/bold red] python antay_docops.py [command]")
        console.print("\nAvailable commands:")
        console.print("  preflight  - Run Gate 0 preflight checks")
        console.print("  status     - Query tasks in 'Ready' status")
        console.print("  sync       - Sync with Notion database")
        return
    
    command = sys.argv[1]
    docops = AntayDOCOPS()
    
    if command == "preflight":
        results = docops.preflight_check()
        sys.exit(0 if results["overall_status"] == "PASS" else 1)
    
    elif command == "status":
        docops.query_ready()
    
    elif command == "sync":
        console.print("[bold cyan]Syncing with Notion...[/bold cyan]")
        tasks = docops.query_ready()
        console.print(f"[bold green]Sync complete. Found {len(tasks)} ready tasks.[/bold green]")
    
    else:
        console.print(f"[bold red]Unknown command:[/bold red] {command}")
        sys.exit(1)


if __name__ == "__main__":
    main()
