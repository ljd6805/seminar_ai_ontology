import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "slides" / "v2" / "content"
PAGE_ROW = re.compile(r"^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|", re.MULTILINE)


class LifecycleContentTest(unittest.TestCase):
    def test_lifecycle_module_contains_slides_38_through_59(self):
        source = (CONTENT / "slides-38-59.js").read_text(encoding="utf-8")
        numbers = [int(value) for value in re.findall(r'\bid:\s*"slide-(\d{2})"', source)]
        self.assertEqual(numbers, list(range(38, 60)))
        self.assertEqual(source.count("sources: ["), 22)
        self.assertEqual(source.count("note:"), 22)

    def test_titles_match_the_approved_course_map(self):
        page_map = (ROOT / "docs" / "seminar-page-list.md").read_text(encoding="utf-8")
        expected = [title.strip().replace("`", "") for number, title in PAGE_ROW.findall(page_map) if 38 <= int(number) <= 59]
        source = (CONTENT / "slides-38-59.js").read_text(encoding="utf-8")
        actual = re.findall(r'\bplainTitle:\s*"([^"]+)"', source)
        self.assertEqual(actual, expected)

    def test_shell_loads_modules_in_numeric_order(self):
        html = (ROOT / "slides" / "v2" / "index.html").read_text(encoding="utf-8")
        first = html.index('content/slides-01-37.js')
        second = html.index('content/slides-38-59.js')
        engine = html.index('src="deck.js')
        self.assertLess(first, second)
        self.assertLess(second, engine)


if __name__ == "__main__":
    unittest.main()
