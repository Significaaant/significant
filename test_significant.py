"""
Suite de tests unitaires pour le moteur Significant (Python 3.10+)
Exécution : py -m unittest test_significant.py
"""

import unittest
from quiz_engine import decision_tree
from gpower_engine import gpower_engine


class TestQuizEngine(unittest.TestCase):
    """Vérification de l'intégrité de l'arbre de décision statistique."""

    def test_start_node_exists(self):
        node = decision_tree.get_node("start")
        self.assertIsNotNone(node)
        self.assertEqual(len(node["options"]), 5)

    def test_navigation_to_student_ttest(self):
        # 1. Comparer
        s1 = decision_tree.navigate("start", 0)
        self.assertFalse(s1["completed"])
        self.assertEqual(s1["next_node_id"], "compare_goal")

        # 2. VD continue
        s2 = decision_tree.navigate(s1["next_node_id"], 0)
        self.assertEqual(s2["next_node_id"], "compare_quanti_groups")

        # 3. 2 groupes
        s3 = decision_tree.navigate(s2["next_node_id"], 0)
        self.assertEqual(s3["next_node_id"], "compare_quanti_2_link")

        # 4. Indépendants
        s4 = decision_tree.navigate(s3["next_node_id"], 0)
        self.assertEqual(s4["next_node_id"], "compare_quanti_2_ind_norm")

        # 5. Normalité respectée -> Test t
        s5 = decision_tree.navigate(s4["next_node_id"], 0)
        self.assertTrue(s5["completed"])
        self.assertEqual(s5["result_key"], "res_ttest_ind")
        self.assertIn("Student", s5["recommendation"]["name"])

    def test_navigation_to_mann_whitney(self):
        # Normalité non respectée -> Mann-Whitney
        s = decision_tree.navigate("compare_quanti_2_ind_norm", 1)
        self.assertTrue(s["completed"])
        self.assertEqual(s["result_key"], "res_mann_whitney")

    def test_recommendation_catalog_details(self):
        rec = decision_tree.get_recommendation("res_anova_one_way")
        self.assertIsNotNone(rec)
        self.assertEqual(rec["nature"], "parametrique")
        self.assertIn("ANOVA", rec["name"])
        self.assertTrue(len(rec["assumptions"]) >= 3)
        self.assertTrue(len(rec["code_python"]) > 0)


class TestGPowerEngine(unittest.TestCase):
    """Vérification des calculs de puissance statistique."""

    def test_norm_inv_standard_quantiles(self):
        # z(0.975) ≈ 1.96 pour test bilatéral à alpha=5%
        z_975 = gpower_engine._norm_inv(0.975)
        self.assertAlmostEqual(z_975, 1.95996, places=3)

        # z(0.5) = 0
        z_50 = gpower_engine._norm_inv(0.50)
        self.assertAlmostEqual(z_50, 0.0, places=3)

    def test_calc_ttest_ind(self):
        res = gpower_engine.calc_ttest_ind(d=0.5, alpha=0.05, power=0.80)
        self.assertEqual(res.sample_size_per_group, 63)
        self.assertEqual(res.sample_size_total, 126)

    def test_calc_correlation(self):
        res = gpower_engine.calc_correlation(r=0.30, alpha=0.05, power=0.80)
        self.assertEqual(res.sample_size_total, 85)

    def test_calc_anova(self):
        res = gpower_engine.calc_anova_one_way(f=0.25, alpha=0.05, power=0.80, groups_k=3)
        self.assertEqual(res.sample_size_total, 195)


if __name__ == "__main__":
    unittest.main()
