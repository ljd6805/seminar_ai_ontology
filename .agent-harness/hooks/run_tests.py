#!/usr/bin/env python3
"""Run the project's configured test command after a file change."""

from __future__ import annotations

import json
import shlex
import subprocess
import sys
from pathlib import Path


def load_config(project: Path) -> dict:
    path = project / ".agent-harness" / "harness.config.json"
    try:
        return json.loads(path.read_text(encoding="utf-8")) if path.is_file() else {}
    except json.JSONDecodeError:
        return {}


def main() -> int:
    project = Path.cwd().resolve()
    config = load_config(project)
    command = config.get("commands", {}).get("test", "").strip()
    if not command:
        return 0
    try:
        result = subprocess.run(shlex.split(command), cwd=project, check=False)
    except FileNotFoundError:
        result_code = 127
    else:
        result_code = result.returncode
    strict = config.get("policy", {}).get("test_failure", "warning") == "strict"
    return 2 if result_code and strict else 0


if __name__ == "__main__":
    raise SystemExit(main())
