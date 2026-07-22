import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
V2 = ROOT / "slides" / "v2"
CONTENT = V2 / "content"


class DesignV3Test(unittest.TestCase):
    @staticmethod
    def contrast_ratio(foreground, background):
        def luminance(value):
            channels = [int(value[index:index + 2], 16) / 255 for index in (1, 3, 5)]
            linear = [
                channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4
                for channel in channels
            ]
            return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]

        lighter, darker = sorted((luminance(foreground), luminance(background)), reverse=True)
        return (lighter + 0.05) / (darker + 0.05)

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

    def test_mobile_layout_has_no_forced_horizontal_canvas(self):
        styles = (V2 / "deck.css").read_text(encoding="utf-8")
        mobile = styles.split("@media (max-width: 760px)", 1)[1]
        self.assertIn(".deck { width: 100%;", mobile)
        self.assertIn("min-width: 0; max-width: 100vw", mobile)
        self.assertIn(".slide-head, .slide-body, .visual { min-width: 0; max-width: 100%; }", mobile)
        self.assertIn(".visual-assembly { display: flex; flex-direction: column; height: auto; }", mobile)
        self.assertIn(".layer-band { grid-template-columns: 1fr 1fr; }", mobile)
        self.assertIn(".method-matrix { display: grid;", mobile)
        self.assertNotIn(".matrix-row { min-width: 760px;", mobile)

    def test_text_and_semantic_colors_meet_wcag_contrast(self):
        styles = (V2 / "deck.css").read_text(encoding="utf-8")
        colors = dict(re.findall(r"--([\w-]+):\s*(#[0-9a-fA-F]{6})", styles))
        for token in ("ink", "muted", "dim", "concept", "evidence", "constraint", "risk", "governance"):
            with self.subTest(token=token):
                self.assertGreaterEqual(self.contrast_ratio(colors[token], colors["surface"]), 4.5)

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

    def test_v3_assets_share_the_latest_cache_key(self):
        html = (V2 / "index.html").read_text(encoding="utf-8")
        versioned_assets = re.findall(r'(?:href|src)="(?:deck\.css|visuals\.js|content/slides-[^"]+\.js|deck\.js)\?v=(\d+)"', html)
        self.assertEqual(len(versioned_assets), 6)
        self.assertEqual(set(versioned_assets), {"6"})

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

    def test_visual_registry_covers_all_75_slides(self):
        visuals = (V2 / "visuals.js").read_text(encoding="utf-8")
        assigned = set()
        for group in re.findall(r"assignMeta\(\[([^\]]+)\]", visuals):
            assigned.update(int(value) for value in re.findall(r"\d+", group))
        self.assertEqual(assigned, set(range(1, 76)))

    def test_final_deck_limits_card_grids_and_removes_decorative_graphs(self):
        modules = [path.read_text(encoding="utf-8") for path in sorted(CONTENT.glob("slides-*.js"))]
        text = "\n".join(modules)
        self.assertLessEqual(len(re.findall(r'class="grid-[23]"', text)), 10)
        self.assertNotIn('class="graph"', text)
        self.assertNotIn('class="panel step"', text)

    def test_late_modules_use_case_specific_visuals(self):
        text = "\n".join(
            path.read_text(encoding="utf-8")
            for path in (CONTENT / "slides-38-59.js", CONTENT / "slides-60-75.js")
        )
        for token in (
            "moduleArchitecture",
            "craftSynthesisMap",
            "architectureBlueprint",
            "artifactConstellation",
            "testMatrix",
            "sourceInventory",
            "conceptModel",
            "taxonomyRelations",
            "turtleWalkthrough",
            "similarFailureQuery",
            "evidenceApprovalPath",
            "ontologyDecision",
            "geneOntologyLayers",
            "fiboIntegration",
        ):
            with self.subTest(token=token):
                self.assertIn(token, text)


if __name__ == "__main__":
    unittest.main()
