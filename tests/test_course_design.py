import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE_ROW = re.compile(r"^\|\s*(\d+)\s*\|", re.MULTILINE)
SOURCE_ID = re.compile(r"\b(?:M|S|C|P)\d{2}\b")
SOURCE_HEADING = re.compile(r"^##\s+((?:M|S|C|P)\d{2})\b", re.MULTILINE)


class CourseDesignTest(unittest.TestCase):
    def test_page_map_has_exactly_75_sequential_slides(self):
        page_map = (ROOT / "docs/seminar-page-list.md").read_text(encoding="utf-8")
        numbers = [int(value) for value in PAGE_ROW.findall(page_map)]
        self.assertEqual(numbers, list(range(1, 76)))
        self.assertNotIn("<<<<<<<", page_map)
        self.assertNotIn(">>>>>>>", page_map)

    def test_every_slide_has_a_traceable_source_or_project_basis(self):
        page_map = (ROOT / "docs/seminar-page-list.md").read_text(encoding="utf-8")
        references = (ROOT / "docs/references.md").read_text(encoding="utf-8")
        defined = set(SOURCE_HEADING.findall(references))
        self.assertGreaterEqual(len(defined), 20)

        for line in page_map.splitlines():
            match = PAGE_ROW.match(line)
            if not match:
                continue
            used = set(SOURCE_ID.findall(line))
            with self.subTest(slide=int(match.group(1))):
                self.assertTrue(used)
                self.assertTrue(used.issubset(defined), used - defined)

    def test_claim_matrix_only_uses_defined_sources(self):
        matrix = (ROOT / "docs/source-matrix.md").read_text(encoding="utf-8")
        references = (ROOT / "docs/references.md").read_text(encoding="utf-8")
        defined = set(SOURCE_HEADING.findall(references))
        used = set(SOURCE_ID.findall(matrix))
        self.assertTrue(used)
        self.assertTrue(used.issubset(defined), used - defined)
        self.assertIn("검증됨", matrix)

    def test_craft_is_documented_as_a_five_phase_educational_synthesis(self):
        design = (ROOT / "docs/course-design.md").read_text(encoding="utf-8")
        phases = re.findall(r"^###\s+([CRAFT])\s+—", design, re.MULTILINE)
        self.assertEqual(phases, list("CRAFT"))
        self.assertIn("교육용 통합 프레임", design)
        self.assertIn("Ontology 101", design)
        self.assertIn("METHONTOLOGY", design)
        self.assertIn("NeOn", design)
        self.assertIn("OBO Foundry", design)

    def test_documentation_local_links_resolve(self):
        link_pattern = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
        for document in (ROOT / "docs").glob("*.md"):
            text = document.read_text(encoding="utf-8")
            for destination in link_pattern.findall(text):
                if re.match(r"^(?:https?:|mailto:|#)", destination):
                    continue
                relative = destination.split("?", 1)[0].split("#", 1)[0]
                if not relative:
                    continue
                with self.subTest(document=document.name, link=destination):
                    self.assertTrue((document.parent / relative).exists())

    def test_site_manifest_reports_current_and_planned_slide_counts(self):
        manifest = json.loads((ROOT / "site-manifest.json").read_text(encoding="utf-8"))
        references = (ROOT / "docs/references.md").read_text(encoding="utf-8")
        defined = set(SOURCE_HEADING.findall(references))
        self.assertEqual(manifest["slides"], 80)
        self.assertEqual(manifest["planned_slides"], 75)
        self.assertEqual(manifest["references"], len(defined))


if __name__ == "__main__":
    unittest.main()
