import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "slides" / "v2" / "content"
PAGE_ROW = re.compile(r"^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|", re.MULTILINE)


class FinalContentTest(unittest.TestCase):
    def test_final_module_contains_slides_60_through_75(self):
        source = (CONTENT / "slides-60-75.js").read_text(encoding="utf-8")
        numbers = [int(value) for value in re.findall(r'\bid:\s*"slide-(\d{2})"', source)]
        self.assertEqual(numbers, list(range(60, 76)))
        self.assertEqual(source.count("sources: ["), 16)
        self.assertEqual(source.count("note:"), 16)

    def test_all_content_modules_form_one_75_slide_sequence(self):
        numbers = []
        titles = []
        for path in sorted(CONTENT.glob("slides-*.js")):
            text = path.read_text(encoding="utf-8")
            numbers.extend(int(value) for value in re.findall(r'\bid:\s*"slide-(\d{2})"', text))
            titles.extend(re.findall(r'\bplainTitle:\s*"([^"]+)"', text))
        page_map = (ROOT / "docs" / "seminar-page-list.md").read_text(encoding="utf-8")
        expected_titles = [title.strip().replace("`", "") for _, title in PAGE_ROW.findall(page_map)]
        self.assertEqual(numbers, list(range(1, 76)))
        self.assertEqual(titles, expected_titles)

    def test_public_slide_entry_redirects_to_complete_v2_deck(self):
        html = (ROOT / "slides" / "index.html").read_text(encoding="utf-8")
        self.assertIn("v2/", html)
        self.assertIn("location.search", html)
        self.assertIn("location.hash", html)
        manifest = json.loads((ROOT / "site-manifest.json").read_text(encoding="utf-8"))
        self.assertEqual(manifest["slides"], 75)
        self.assertEqual(manifest["planned_slides"], 75)

    def test_presentation_mode_marks_15_deep_dive_slides_as_appendix(self):
        content = "\n".join(path.read_text(encoding="utf-8") for path in sorted(CONTENT.glob("slides-*.js")))
        self.assertEqual(content.count('mode: "appendix"'), 15)

    def test_visible_copy_avoids_mixed_language_production_jargon(self):
        content = "\n".join(path.read_text(encoding="utf-8") for path in sorted(CONTENT.glob("slides-*.js")))
        for phrase in (
            "실무 loop",
            "feedback이 핵심",
            "owner와 변경 절차",
            "review 가능한 text",
            "inventory한다",
            "tend가 시작된다",
            "Failure Knowledge Hub",
            "CQ는 ontology",
            "subject–predicate–object",
            "같은 signature의 과거",
            "owner·version·test",
            "다음 버전의 backlog",
            "graph에 evidence triple",
        ):
            with self.subTest(phrase=phrase):
                self.assertNotIn(phrase, content)

    def test_running_example_includes_query_and_invalid_fixture(self):
        query = (ROOT / "examples" / "find-similar-failures.rq").read_text(encoding="utf-8")
        invalid = (ROOT / "examples" / "semiconductor-failure-invalid.ttl").read_text(encoding="utf-8")
        guide = (ROOT / "examples" / "README.md").read_text(encoding="utf-8")
        self.assertIn("SELECT", query)
        self.assertIn("hasSignature", query)
        self.assertIn("invalid_failure", invalid)
        self.assertIn("의도적으로", guide)


if __name__ == "__main__":
    unittest.main()
