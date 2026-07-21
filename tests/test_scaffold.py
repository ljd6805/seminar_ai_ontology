import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ScaffoldTest(unittest.TestCase):
    def test_universal_agent_harness_is_installed(self):
        required = (
            "AGENTS.md",
            "CLAUDE.md",
            "opencode.json",
            ".claude/settings.json",
            ".agent-harness/harness.config.json",
            ".agent-harness/rules/AGENT_GUIDE.md",
            ".agent-harness/rules/ACTIVE_RULES.ko.md",
            ".agent-harness/rules/PROJECT_GUIDE.md",
            ".agent-harness/hooks/format_changed_file.py",
            ".agent-harness/hooks/run_tests.py",
            ".agent-harness/hooks/tdd_guard.py",
        )
        for relative_path in required:
            with self.subTest(path=relative_path):
                self.assertTrue((ROOT / relative_path).is_file())

        config = json.loads(
            (ROOT / ".agent-harness/harness.config.json").read_text(encoding="utf-8")
        )
        self.assertEqual(config["project"]["name"], "seminar_ai_ontology")
        self.assertEqual(config["project"]["type"], "static-html-educational-deck")
        self.assertEqual(
            config["commands"]["test"],
            "py -3 -m unittest discover -s tests -v",
        )

        open_code = json.loads((ROOT / "opencode.json").read_text(encoding="utf-8"))
        claude = json.loads(
            (ROOT / ".claude/settings.json").read_text(encoding="utf-8")
        )
        self.assertIn(".agent-harness/rules/AGENT_GUIDE.md", open_code["instructions"])
        hook_commands = [
            hook["command"]
            for group in claude["hooks"]["PostToolUse"]
            for hook in group["hooks"]
        ]
        self.assertTrue(all(command.startswith("py -3 ") for command in hook_commands))

    def test_dual_license_files_are_present(self):
        license_index = (ROOT / "LICENSE.md").read_text(encoding="utf-8")
        content_license = (ROOT / "LICENSE-CONTENT.md").read_text(encoding="utf-8")
        code_license = (ROOT / "LICENSE-CODE.md").read_text(encoding="utf-8")
        self.assertIn("CC BY 4.0", license_index)
        self.assertIn("MIT", license_index)
        self.assertIn("Attribution 4.0 International", content_license)
        self.assertIn("Permission is hereby granted", code_license)

    def test_pages_workflow_deploys_the_static_site(self):
        workflow = (ROOT / ".github/workflows/pages.yml").read_text(encoding="utf-8")
        self.assertIn("actions/configure-pages@", workflow)
        self.assertIn("actions/upload-pages-artifact@", workflow)
        self.assertIn("actions/deploy-pages@", workflow)
        self.assertTrue((ROOT / ".nojekyll").is_file())
        root_index = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("url=slides/", root_index)

    def test_slide_manifest_only_lists_available_chunks(self):
        manifest = json.loads(
            (ROOT / "slides/chunks/manifest.json").read_text(encoding="utf-8")
        )
        self.assertFalse(manifest["complete"])
        self.assertEqual(manifest["plannedParts"], 13)
        self.assertGreater(len(manifest["parts"]), 0)
        for part in manifest["parts"]:
            with self.subTest(part=part):
                self.assertTrue((ROOT / "slides/chunks" / part).is_file())

        loader = (ROOT / "slides/index.html").read_text(encoding="utf-8")
        self.assertIn("chunks/manifest.json", loader)
        self.assertNotIn("Array.from({length: 13}", loader)

    def test_readme_local_links_resolve(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        destinations = re.findall(r"\[[^\]]+\]\(([^)]+)\)", readme)
        for destination in destinations:
            if re.match(r"^(?:https?:|mailto:|#)", destination):
                continue
            path = destination.split("?", 1)[0].split("#", 1)[0]
            if not path:
                continue
            with self.subTest(destination=destination):
                self.assertTrue((ROOT / path).exists())


if __name__ == "__main__":
    unittest.main()
