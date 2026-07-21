import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "slides" / "v2" / "content"
PAGE_ROW = re.compile(r"^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|", re.MULTILINE)


class FoundationContentTest(unittest.TestCase):
    def test_foundation_module_contains_slides_1_through_37(self):
        source = (CONTENT / "slides-01-37.js").read_text(encoding="utf-8")
        numbers = [int(value) for value in re.findall(r'\bid:\s*"slide-(\d{2})"', source)]
        self.assertEqual(numbers, list(range(1, 38)))
        self.assertEqual(source.count("sources: ["), 37)
        self.assertEqual(source.count("note:"), 37)

    def test_visible_titles_match_the_approved_course_map(self):
        page_map = (ROOT / "docs" / "seminar-page-list.md").read_text(encoding="utf-8")
        expected = [title.strip().replace("`", "") for number, title in PAGE_ROW.findall(page_map) if int(number) <= 37]
        source = (CONTENT / "slides-01-37.js").read_text(encoding="utf-8")
        actual = re.findall(r'\bplainTitle:\s*"([^"]+)"', source)
        self.assertEqual(actual, expected)

    def test_preview_shell_loads_foundation_content(self):
        html = (ROOT / "slides" / "v2" / "index.html").read_text(encoding="utf-8")
        self.assertIn('content/slides-01-37.js', html)
        self.assertNotIn('content/preview.js', html)


if __name__ == "__main__":
    unittest.main()
