import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
V2 = ROOT / "slides" / "v2"


class DeckEngineTest(unittest.TestCase):
    def test_preview_shell_has_accessible_controls(self):
        html = (V2 / "index.html").read_text(encoding="utf-8")
        self.assertIn('lang="ko"', html)
        self.assertIn('class="skip-link"', html)
        self.assertIn('aria-live="polite"', html)
        self.assertIn('id="overview-dialog"', html)
        self.assertIn('id="replay-button"', html)
        self.assertIn('id="presenter-notes"', html)
        self.assertRegex(html, r'<meta\s+name="viewport"')

    def test_engine_supports_navigation_modes_and_reduced_motion(self):
        script = (V2 / "deck.js").read_text(encoding="utf-8")
        styles = (V2 / "deck.css").read_text(encoding="utf-8")
        for token in (
            "ArrowRight",
            "ArrowLeft",
            "PageDown",
            "PageUp",
            "Home",
            "End",
            "sessionStorage",
            "prefers-reduced-motion",
            "mode=presentation",
            "print=1",
        ):
            with self.subTest(token=token):
                self.assertIn(token, script + styles)
        self.assertIn("@media print", styles)
        self.assertIn("@media (prefers-reduced-motion: reduce)", styles)

    def test_engine_has_a_small_preview_dataset(self):
        content = (V2 / "content" / "preview.js").read_text(encoding="utf-8")
        self.assertEqual(len(re.findall(r"\bid:\s*\"preview-", content)), 3)
        self.assertIn("window.OntologyDeck.register", content)

    def test_design_system_documents_reference_deck_traits(self):
        design = (ROOT / "docs" / "design-system.md").read_text(encoding="utf-8")
        for trait in ("16:10", "외부 의존 0", "자동 스태거", "오버뷰", "발표 모드"):
            with self.subTest(trait=trait):
                self.assertIn(trait, design)


if __name__ == "__main__":
    unittest.main()
