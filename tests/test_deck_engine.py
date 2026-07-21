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
        self.assertIn("slide.plainTitle", script)

    def test_mobile_layout_keeps_content_scrollable_and_clear_of_controls(self):
        styles = (V2 / "deck.css").read_text(encoding="utf-8")
        self.assertIn("overflow-x: hidden", styles)
        self.assertIn("overflow-y: auto", styles)
        self.assertIn("justify-content: flex-start", styles)
        self.assertIn("padding: 28px 25px 112px", styles)

    def test_deck_uses_height_aware_layout_and_developer_font_stack(self):
        styles = (V2 / "deck.css").read_text(encoding="utf-8")
        for token in (
            '--font-ui: "Pretendard Variable"',
            '--font-code: "JetBrains Mono"',
            "font-family: var(--font-code)",
            "justify-content: safe center",
            "@media (max-height: 900px)",
            "min(4.4vw, 7vh)",
        ):
            with self.subTest(token=token):
                self.assertIn(token, styles)

    def test_engine_loads_a_registered_dataset(self):
        html = (V2 / "index.html").read_text(encoding="utf-8")
        modules = re.findall(r'<script defer src="(content/[^"]+\.js)">', html)
        self.assertTrue(modules)
        for module in modules:
            with self.subTest(module=module):
                content = (V2 / module).read_text(encoding="utf-8")
                self.assertIn("window.OntologyDeck.register", content)

    def test_design_system_documents_reference_deck_traits(self):
        design = (ROOT / "docs" / "design-system.md").read_text(encoding="utf-8")
        for trait in ("16:10", "시스템 폰트 대체 체계", "자동 스태거", "오버뷰", "발표 모드"):
            with self.subTest(trait=trait):
                self.assertIn(trait, design)


if __name__ == "__main__":
    unittest.main()
