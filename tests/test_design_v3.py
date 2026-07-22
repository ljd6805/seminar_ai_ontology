import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
V2 = ROOT / "slides" / "v2"
CONTENT = V2 / "content"


class DesignV3Test(unittest.TestCase):
    def test_design_system_uses_widescreen_editorial_tokens(self):
        styles = (V2 / "deck.css").read_text(encoding="utf-8")
        for token in (
            "--canvas-ratio: 16 / 9",
            "--concept:",
            "--evidence:",
            "--constraint:",
            "--risk:",
            "--governance:",
            ".layout-hero",
            ".layout-architecture",
            ".layout-code",
            ".layout-workshop",
        ):
            with self.subTest(token=token):
                self.assertIn(token, styles)
        self.assertNotIn("backdrop-filter: blur(16px)", styles)

    def test_engine_supports_hybrid_build_navigation(self):
        script = (V2 / "deck.js").read_text(encoding="utf-8")
        for token in (
            'params.get("motion") === "off"',
            'event.code === "Space"',
            "advanceBuild",
            "rewindBuild",
            "data-build",
            "ariaSummary",
        ):
            with self.subTest(token=token):
                self.assertIn(token, script)

    def test_pilot_slides_declare_visual_metadata(self):
        text = "\n".join(
            path.read_text(encoding="utf-8")
            for path in sorted(CONTENT.glob("slides-*.js"))
        )
        for number in (1, 14, 27, 32, 48, 67, 75):
            block = re.search(
                rf'id: "slide-{number:02d}"(?P<body>.*?)(?=\n  \{{\n    id: "slide-|\n\]\);)',
                text,
                re.DOTALL,
            )
            self.assertIsNotNone(block, f"slide-{number:02d} block missing")
            slide = block.group("body")
            self.assertIn("visualType:", slide)
            self.assertIn("ariaSummary:", slide)
            self.assertIn("motion:", slide)

    def test_pilot_visuals_use_semantic_diagram_markup(self):
        html = (V2 / "index.html").read_text(encoding="utf-8")
        visuals = (V2 / "visuals.js").read_text(encoding="utf-8")
        self.assertRegex(html, r'src="visuals\.js(?:\?v=\d+)?"')
        for token in (
            "semanticMap",
            "methodMatrix",
            "identityGraph",
            "queryWalkthrough",
            "craftLoop",
            "validationPipeline",
            "workshopPrompt",
            'role="img"',
            "data-build",
        ):
            with self.subTest(token=token):
                self.assertIn(token, visuals)

    def test_foundation_module_uses_editorial_builds_and_unique_visuals(self):
        foundation = (CONTENT / "slides-01-37.js").read_text(encoding="utf-8")
        visuals = (V2 / "visuals.js").read_text(encoding="utf-8")
        self.assertIn('class="editorial-item" data-build=', foundation)
        self.assertIn('class="process-step" data-build=', foundation)
        self.assertNotIn('class="graph"', foundation)
        for token in (
            "systemHub",
            "sourceRibbonCraft",
            "ontologyElements",
            "labelConvergence",
            "expressiveCostMap",
            "ontologyOverGraph",
            "timeoutAssembly",
            "standardStack",
            "skosNetwork",
            "serializationCompare",
        ):
            with self.subTest(token=token):
                self.assertIn(token, foundation)
                self.assertIn(token, visuals)

    def test_engine_promotes_legacy_steps_to_manual_builds(self):
        script = (V2 / "deck.js").read_text(encoding="utf-8")
        self.assertIn('.step:not([data-build])', script)
        self.assertIn("item.dataset.build", script)


if __name__ == "__main__":
    unittest.main()
