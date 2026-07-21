#!/usr/bin/env python3
"""Warn when changed production code has no matching test file."""

from __future__ import annotations

import json
import sys
from pathlib import Path


PRODUCTION_EXTENSIONS = {".py", ".js", ".ts", ".jsx", ".tsx", ".c", ".cpp", ".h"}


def main() -> int:
    try:
        payload = json.load(sys.stdin)
    except json.JSONDecodeError:
        return 0
    value = payload.get("tool_input", {}).get("file_path") or payload.get("tool_input", {}).get("path")
    if not value:
        return 0
    path = Path(value).expanduser().resolve()
    if path.suffix.lower() not in PRODUCTION_EXTENSIONS or path.name.startswith("test_"):
        return 0
    project = Path.cwd().resolve()
    config_path = project / ".agent-harness" / "harness.config.json"
    config = json.loads(config_path.read_text(encoding="utf-8")) if config_path.is_file() else {}
    expected = {f"test_{path.stem}{path.suffix}", f"{path.stem}_test{path.suffix}"}
    roots = [project / item for item in config.get("paths", {}).get("tests", [])] or [project]
    if any(candidate.name in expected for root in roots if root.exists() for candidate in root.rglob("*")):
        return 0
    message = f'[TDD warning] "{path.name}" has no matching test file.'
    print(json.dumps({"hookSpecificOutput": {"hookEventName": "PostToolUse", "additionalContext": message}}))
    return 2 if config.get("policy", {}).get("tdd_guard") == "strict" else 0


if __name__ == "__main__":
    raise SystemExit(main())
