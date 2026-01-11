#!/usr/bin/env python3
"""
Gate 3: Verification Script
Validates changes before commit following Antay Software Factory methodology.

Checks:
- Linting passed
- Build successful
- No secrets in code
- Notion sync successful
"""

import sys
import os
import subprocess
import re
from pathlib import Path
from typing import Dict, Any

# Add docops to path
sys.path.insert(0, str(Path(__file__).parent.parent / "docops"))

try:
    from antay_docops import AntayDOCOPS
    from rich.console import Console
except ImportError as e:
    print(f"❌ Error importing dependencies: {e}")
    sys.exit(1)

console = Console()


def run_command(cmd: list, description: str) -> tuple[bool, str]:
    """Run a shell command and return success status and output."""
    try:
        console.print(f"[cyan]Running:[/cyan] {description}...")
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            check=False,
            cwd=Path(__file__).parent.parent
        )
        
        success = result.returncode == 0
        output = result.stdout + result.stderr
        
        if success:
            console.print(f"[green]✅ {description} - PASSED[/green]")
        else:
            console.print(f"[red]❌ {description} - FAILED[/red]")
            if output:
                console.print(f"[dim]{output[:500]}[/dim]")
        
        return success, output
    except Exception as e:
        console.print(f"[red]❌ {description} - ERROR: {e}[/red]")
        return False, str(e)


def check_for_secrets() -> bool:
    """Check for potential secrets in staged files."""
    console.print("[cyan]Checking for secrets in staged files...[/cyan]")
    
    # Get list of staged files
    result = subprocess.run(
        ["git", "diff", "--cached", "--name-only"],
        capture_output=True,
        text=True,
        check=False
    )
    
    if result.returncode != 0:
        console.print("[yellow]⚠️ Could not get staged files[/yellow]")
        return True  # Allow to proceed
    
    staged_files = result.stdout.strip().split('\n')
    if not staged_files or staged_files == ['']:
        console.print("[yellow]⚠️ No staged files to check[/yellow]")
        return True
    
    # Patterns that might indicate secrets
    secret_patterns = [
        r'NOTION_API_TOKEN\s*=\s*["\']?secret_\w+',
        r'NOTION_DATABASE_ID\s*=\s*["\']?\w{32}',
        r'password\s*=\s*["\'].+["\']',
        r'api[_-]?key\s*=\s*["\'].+["\']',
        r'secret\s*=\s*["\'].+["\']',
    ]
    
    found_secrets = False
    
    for file_path in staged_files:
        if not Path(file_path).exists():
            continue
        
        # Skip binary files and node_modules
        if 'node_modules' in file_path or file_path.endswith(('.jpg', '.png', '.gif', '.ico')):
            continue
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            for pattern in secret_patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                if matches:
                    console.print(f"[red]❌ Potential secret found in {file_path}:[/red]")
                    console.print(f"[dim]{matches[0][:50]}...[/dim]")
                    found_secrets = True
        except Exception:
            continue
    
    if not found_secrets:
        console.print("[green]✅ No secrets detected[/green]")
    
    return not found_secrets


def main():
    """Run Gate 3 verification checks."""
    console.print("\n" + "=" * 60)
    console.print("[bold cyan]ANTAY SOFTWARE FACTORY - GATE 3: VERIFICATION[/bold cyan]")
    console.print("=" * 60 + "\n")
    
    results: Dict[str, Any] = {
        "linting": False,
        "build": False,
        "secrets_check": False,
        "notion_sync": False
    }
    
    # Check 1: Linting
    lint_success, _ = run_command(
        ["npm", "run", "lint"],
        "ESLint check"
    )
    results["linting"] = lint_success
    
    # Check 2: Build
    build_success, _ = run_command(
        ["npm", "run", "build"],
        "Production build"
    )
    results["build"] = build_success
    
    # Check 3: Secrets check
    secrets_ok = check_for_secrets()
    results["secrets_check"] = secrets_ok
    
    # Check 4: Notion sync (optional - only if configured)
    try:
        if Path(".env").exists():
            docops = AntayDOCOPS()
            console.print("[cyan]Syncing with Notion...[/cyan]")
            tasks = docops.query_ready()
            results["notion_sync"] = True
            console.print(f"[green]✅ Notion sync successful ({len(tasks)} ready tasks)[/green]")
        else:
            console.print("[yellow]⚠️ Notion sync skipped (.env not configured)[/yellow]")
            results["notion_sync"] = True  # Don't fail if not configured
    except Exception as e:
        console.print(f"[yellow]⚠️ Notion sync failed: {e}[/yellow]")
        results["notion_sync"] = True  # Don't fail on Notion issues
    
    # Overall result
    console.print("\n" + "=" * 60)
    
    critical_checks = ["linting", "build", "secrets_check"]
    all_passed = all(results[check] for check in critical_checks)
    
    if all_passed:
        console.print("[bold green]✅ Gate 3 PASSED - Ready to commit![/bold green]")
        console.print("=" * 60 + "\n")
        sys.exit(0)
    else:
        console.print("[bold red]❌ Gate 3 FAILED - Please fix issues before committing.[/bold red]")
        console.print("\nFailed checks:")
        for check, passed in results.items():
            if not passed and check in critical_checks:
                console.print(f"  - {check}")
        console.print("=" * 60 + "\n")
        sys.exit(1)


if __name__ == "__main__":
    main()
