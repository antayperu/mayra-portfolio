#!/usr/bin/env python3
"""
Gate 0: Preflight Check Script
Validates configuration and environment before starting work.

Part of Antay Software Factory Methodology
"""

import sys
import os
from pathlib import Path

# Add docops to path
sys.path.insert(0, str(Path(__file__).parent.parent / "docops"))

try:
    from antay_docops import AntayDOCOPS
except ImportError as e:
    print(f"❌ Error importing DOCOPS library: {e}")
    print("Please ensure docops/antay_docops.py exists and dependencies are installed.")
    sys.exit(1)


def main():
    """Run Gate 0 preflight checks."""
    print("=" * 60)
    print("ANTAY SOFTWARE FACTORY - GATE 0: PREFLIGHT CHECK")
    print("=" * 60)
    
    try:
        docops = AntayDOCOPS()
        results = docops.preflight_check()
        
        # Log the preflight check
        docops.append_log(
            f"Gate 0 completed with status: {results['overall_status']}",
            level="INFO" if results["overall_status"] == "PASS" else "WARNING"
        )
        
        # Exit with appropriate code
        if results["overall_status"] == "PASS":
            print("\n✅ Gate 0 PASSED - Ready to proceed!")
            sys.exit(0)
        else:
            print("\n❌ Gate 0 FAILED - Please fix issues before proceeding.")
            sys.exit(1)
            
    except Exception as e:
        print(f"\n❌ Gate 0 ERROR: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
