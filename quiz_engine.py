"""
Significant — Moteur d'Orientation Statistique (Quiz Engine)
Auteur : Chaïma Moghrani (Significant)
Langage : Python 3.10+
Description : Arbre de décision statistique modulaire pour identifier le test adéquat.
"""

from typing import Dict, Any, List, Optional
import json
from models import DecisionNode, DecisionOption, OptionHelp, StatisticalTest, TestNature


class StatisticalDecisionTree:
    """Moteur algorithmique d'orientation pour le choix de tests statistiques."""

    def __init__(self):
        self.nodes_fr: Dict[str, DecisionNode] = {}
        self.nodes_en: Dict[str, DecisionNode] = {}
        self.tests_catalog: Dict[str, StatisticalTest] = {}
        self._build_tree()
        self._build_catalog()

    def _build_catalog(self):
        """Initialise le catalogue des fiches de tests statistiques."""
        self.tests_catalog["res_ttest_ind"] = StatisticalTest(
            id="res_ttest_ind",
            name_fr="Test t de Student pour échantillons indépendants",
            name_en="Independent Samples Student's t-test",
            category="Comparaison de 2 moyennes",
            nature=TestNature.PARAMETRIC,
            objective_fr="Comparer les moyennes d'une variable quantitative continue entre 2 groupes indépendants.",
            objective_en="Compare the means of a continuous quantitative variable between 2 independent groups.",
            assumptions_fr=["Normalité de la distribution dans chaque groupe", "Homocédasticité (égalité des variances - test de Levene)", "Indépendance stricte des observations"],
            assumptions_en=["Normality of distribution within each group", "Homoscedasticity (Levene's test)", "Independence of observations"],
            non_parametric_alternative="res_mann_whitney",
            effect_size_metric="d de Cohen (0.2: faible, 0.5: moyen, 0.8: fort)",
            gpower_family="t tests -> Means: Difference between two independent means (two groups)",
            code_python="from scipy import stats\nt_stat, p_val = stats.ttest_ind(groupe_a, groupe_b, equal_var=True)",
            code_r="t.test(variable ~ groupe, data = df, var.equal = TRUE)"
        )

        self.tests_catalog["res_mann_whitney"] = StatisticalTest(
            id="res_mann_whitney",
            name_fr="Test U de Mann-Whitney (Wilcoxon rank-sum)",
            name_en="Mann-Whitney U Test",
            category="Comparaison non paramétrique (2 groupes)",
            nature=TestNature.NON_PARAMETRIC,
            objective_fr="Comparer les rangs ou médianes entre 2 groupes indépendants lorsque la normalité n'est pas respectée.",
            objective_en="Compare ranks or medians between 2 independent groups when normality is violated.",
            assumptions_fr=["Variable ordinale ou continue", "Indépendance des observations", "Formes de distribution similaires (si comparaison des médianes)"],
            assumptions_en=["Ordinal or continuous dependent variable", "Independent observations", "Similar distribution shapes for medians"],
            effect_size_metric="r de Rosenthal (Z / sqrt(N)) ou Rank-Biserial",
            code_python="from scipy import stats\nu_stat, p_val = stats.mannwhitneyu(groupe_a, groupe_b, alternative='two-sided')",
            code_r="wilcox.test(variable ~ groupe, data = df)"
        )

        self.tests_catalog["res_ttest_paired"] = StatisticalTest(
            id="res_ttest_paired",
            name_fr="Test t de Student pour échantillons appariés",
            name_en="Paired Samples Student's t-test",
            category="Mesures répétées (2 temps)",
            nature=TestNature.PARAMETRIC,
            objective_fr="Comparer les moyennes d'une même cohorte mesurée à 2 temps différents (ex: pré/post).",
            objective_en="Compare means of a single cohort measured at 2 time points (e.g. pre/post).",
            assumptions_fr=["Normalité de la variable des différences (Post - Pré)", "Échelle quantitative continue", "Paires appariées valides"],
            assumptions_en=["Normality of difference scores", "Continuous scale", "Paired matching"],
            non_parametric_alternative="res_wilcoxon_signed",
            effect_size_metric="d de Cohen pour mesures répétées (dz)",
            code_python="from scipy import stats\nt_stat, p_val = stats.ttest_rel(mesure_pre, mesure_post)",
            code_r="t.test(df$post, df$pre, paired = TRUE)"
        )

        self.tests_catalog["res_anova_one_way"] = StatisticalTest(
            id="res_anova_one_way",
            name_fr="ANOVA à 1 facteur (unidirectionnelle inter-sujets)",
            name_en="One-Way Between-Subjects ANOVA",
            category="Comparaison de 3+ groupes",
            nature=TestNature.PARAMETRIC,
            objective_fr="Comparer les moyennes d'une variable quantitative entre 3 groupes indépendants ou plus.",
            objective_en="Compare means of a quantitative variable across 3 or more independent groups.",
            assumptions_fr=["Normalité des résidus dans chaque niveau", "Homogénéité des variances (Levene)", "Indépendance des observations"],
            assumptions_en=["Normality of residuals", "Homogeneity of variance (Levene)", "Independent observations"],
            non_parametric_alternative="res_kruskal_wallis",
            effect_size_metric="Éta-carré (η²) ou Éta-carré partiel (η²p)",
            gpower_family="F tests -> ANOVA: Fixed effects, omnibus, one-way",
            code_python="from scipy import stats\nf_val, p_val = stats.f_oneway(groupe_1, groupe_2, groupe_3)",
            code_r="modele <- aov(score ~ groupe, data = df)\nsummary(modele)"
        )

        self.tests_catalog["res_kruskal_wallis"] = StatisticalTest(
            id="res_kruskal_wallis",
            name_fr="Test de Kruskal-Wallis (H)",
            name_en="Kruskal-Wallis H Test",
            category="Comparaison non paramétrique (3+ groupes)",
            nature=TestNature.NON_PARAMETRIC,
            objective_fr="Alternative non paramétrique à l'ANOVA inter-sujets pour 3 groupes ou plus.",
            objective_en="Non-parametric alternative to one-way ANOVA for 3 or more groups.",
            assumptions_fr=["Variable dépendante ordinale ou continue", "Groupes mutuellement exclusifs"],
            assumptions_en=["Ordinal or continuous DV", "Independent groups"],
            effect_size_metric="Epsilon-carré (ε²) ou Éta-carré basé sur H",
            code_python="from scipy import stats\nh_stat, p_val = stats.kruskal(groupe_1, groupe_2, groupe_3)",
            code_r="kruskal.test(score ~ groupe, data = df)"
        )

        self.tests_catalog["res_pearson"] = StatisticalTest(
            id="res_pearson",
            name_fr="Corrélation linéaire de Pearson (r)",
            name_en="Pearson Linear Correlation",
            category="Association bivariée",
            nature=TestNature.PARAMETRIC,
            objective_fr="Mesurer la force et le sens d'une association linéaire entre 2 variables quantitatives continues.",
            objective_en="Measure the strength and direction of a linear association between two continuous variables.",
            assumptions_fr=["Normalité bivariée", "Linéarité de la relation (vérifiée par nuage de points)", "Absence de valeurs aberrantes majeures"],
            assumptions_en=["Bivariate normality", "Linear relationship", "Absence of extreme outliers"],
            non_parametric_alternative="res_spearman",
            effect_size_metric="Coefficient de corrélation r (0.10: faible, 0.30: moyen, 0.50: fort)",
            gpower_family="Exact -> Correlation: Bivariate normal model",
            code_python="from scipy import stats\nr, p_val = stats.pearsonr(var_x, var_y)",
            code_r="cor.test(df$var_x, df$var_y, method = 'pearson')"
        )

        self.tests_catalog["res_spearman"] = StatisticalTest(
            id="res_spearman",
            name_fr="Corrélation des rangs de Spearman (rho)",
            name_en="Spearman Rank Correlation",
            category="Association non paramétrique",
            nature=TestNature.NON_PARAMETRIC,
            objective_fr="Mesurer une relation monotone entre deux variables ordinales ou non normales.",
            objective_en="Measure a monotonic relationship between two ordinal or non-normal variables.",
            assumptions_fr=["Variables ordinales, discrètes ou continues", "Relation monotone"],
            assumptions_en=["Ordinal or continuous variables", "Monotonic relationship"],
            effect_size_metric="Coefficient rho de Spearman",
            code_python="from scipy import stats\nrho, p_val = stats.spearmanr(var_x, var_y)",
            code_r="cor.test(df$var_x, df$var_y, method = 'spearman')"
        )

        self.tests_catalog["res_chi2_ind"] = StatisticalTest(
            id="res_chi2_ind",
            name_fr="Test du Chi-deux d'indépendance (χ²)",
            name_en="Chi-Square Test of Independence",
            category="Association de variables qualitatives",
            nature=TestNature.NON_PARAMETRIC,
            objective_fr="Tester l'indépendance statistique entre deux variables catégorielles ou qualitatives.",
            objective_en="Test independence between two categorical variables.",
            assumptions_fr=["Effectifs théoriques >= 5 dans au moins 80% des cases", "Aucun effectif théorique nul (< 1)", "Observations indépendantes"],
            assumptions_en=["Expected cell counts >= 5 in 80% of cells", "No zero expected cell counts", "Independent observations"],
            effect_size_metric="V de Cramer (pour tables > 2x2) ou coefficient Phi (2x2)",
            gpower_family="χ² tests -> Goodness-of-fit / Contingency tables",
            code_python="from scipy import stats\nchi2, p_val, dof, expected = stats.chi2_contingency(table_croisee)",
            code_r="chisq.test(table(df$var1, df$var2))"
        )

        self.tests_catalog["res_linear_reg"] = StatisticalTest(
            id="res_linear_reg",
            name_fr="Régression linéaire multiple",
            name_en="Multiple Linear Regression",
            category="Modélisation & Prédiction",
            nature=TestNature.PARAMETRIC,
            objective_fr="Prédire une variable continue à partir d'un ensemble de plusieurs prédicteurs quantitatifs ou binaires.",
            objective_en="Predict a continuous variable from a set of predictors.",
            assumptions_fr=["Linéarité des relations", "Normalité des résidus", "Homocédasticité des résidus", "Absence de multicolinéarité excessive (VIF < 5)"],
            assumptions_en=["Linearity", "Normality of residuals", "Homoscedasticity", "No multicollinearity (VIF < 5)"],
            effect_size_metric="R² (variance expliquée) et f² de Cohen",
            gpower_family="F tests -> Linear multiple regression: Fixed model, R² deviation from zero",
            code_python="import statsmodels.api as sm\nX = sm.add_constant(df[['x1', 'x2']])\nmodel = sm.OLS(df['y'], X).fit()\nprint(model.summary())",
            code_r="modele <- lm(y ~ x1 + x2, data = df)\nsummary(modele)"
        )

    def _build_tree(self):
        """Construit l'arbre d'orientation complet."""
        # --- Nœud de départ ---
        self.nodes_fr["start"] = DecisionNode(
            id="start",
            question="Quel est votre objectif principal d'analyse ?",
            help_title="Déterminer votre objectif",
            help_options={
                "optionA": OptionHelp("Comparer", "Tester si un facteur (ex: traitement, groupe) induit une différence mesurable.", "Le médicament A est-il plus efficace que le B ?"),
                "optionB": OptionHelp("Relation", "Observer si deux variables covarient sans forcément impliquer une causalité directe.", "Le niveau d'études est-il lié au revenu ?"),
                "optionC": OptionHelp("Prédire", "Construire une équation prédictive pour estimer un score futur.", "Prédire la performance au concours selon le temps de révision.")
            },
            options=[
                DecisionOption("Comparer des groupes ou conditions", "Comparaison", next_node="compare_goal"),
                DecisionOption("Étudier une relation ou association", "Association", next_node="link_goal"),
                DecisionOption("Prédire un résultat ou score", "Modélisation", next_node="predict_goal"),
                DecisionOption("Décrire et explorer des données", "Description", next_node="desc_goal"),
                DecisionOption("Vérifier un postulat statistique (normalité, variance)", "Vérification", next_node="check_goal")
            ]
        )

        # --- Branche Comparaison ---
        self.nodes_fr["compare_goal"] = DecisionNode(
            id="compare_goal",
            question="Quelle est la nature de votre variable dépendante (le résultat mesuré) ?",
            options=[
                DecisionOption("Numérique / Continue (ex: Temps, note, taille)", "VD Continue", next_node="compare_quanti_groups"),
                DecisionOption("Catégorielle / Nominale (ex: Réussite/Échec, Choix A/B/C)", "VD Catégorielle", next_node="compare_quali_groups")
            ]
        )

        self.nodes_fr["compare_quanti_groups"] = DecisionNode(
            id="compare_quanti_groups",
            question="Combien d'échantillons ou conditions comparez-vous ?",
            options=[
                DecisionOption("2 groupes ou 2 mesures répétées", "2 groupes", next_node="compare_quanti_2_link"),
                DecisionOption("3 groupes ou plus", "3+ groupes", next_node="compare_quanti_3_link")
            ]
        )

        self.nodes_fr["compare_quanti_2_link"] = DecisionNode(
            id="compare_quanti_2_link",
            question="Vos échantillons sont-ils indépendants ou appariés ?",
            help_title="Structure des groupes",
            help_options={
                "optionA": OptionHelp("Indépendants", "Deux groupes formés de personnes différentes (ex: Groupe Témoin vs Groupe Traité)."),
                "optionB": OptionHelp("Appariés", "Les mêmes sujets mesurés deux fois (ex: Avant vs Après traitement).")
            },
            options=[
                DecisionOption("Indépendants (sujets différents)", "Indépendants", next_node="compare_quanti_2_ind_norm"),
                DecisionOption("Appariés / Mesures répétées (mêmes sujets)", "Appariés", next_node="compare_quanti_2_paired_norm")
            ]
        )

        self.nodes_fr["compare_quanti_2_ind_norm"] = DecisionNode(
            id="compare_quanti_2_ind_norm",
            question="Les postulats de normalité et d'homogénéité des variances sont-ils validés ?",
            options=[
                DecisionOption("Oui (Test Paramétrique)", "Paramétrique", result_key="res_ttest_ind"),
                DecisionOption("Non / Échantillon trop petit (Test Non Paramétrique)", "Non Paramétrique", result_key="res_mann_whitney")
            ]
        )

        self.nodes_fr["compare_quanti_2_paired_norm"] = DecisionNode(
            id="compare_quanti_2_paired_norm",
            question="La distribution des différences (Post - Pré) suit-elle une loi normale ?",
            options=[
                DecisionOption("Oui (Différences normales)", "Paramétrique", result_key="res_ttest_paired"),
                DecisionOption("Non / Distribution asymétrique", "Non Paramétrique", result_key="res_wilcoxon_signed")
            ]
        )

        self.nodes_fr["compare_quanti_3_link"] = DecisionNode(
            id="compare_quanti_3_link",
            question="Comment les 3 groupes (ou plus) sont-ils organisés ?",
            options=[
                DecisionOption("Groupes indépendants distincts", "Indépendants", next_node="compare_quanti_3_ind_norm"),
                DecisionOption("Mesures répétées sur les mêmes sujets (ex: T0, T1, T2)", "Répétées", next_node="compare_quanti_3_rm_norm")
            ]
        )

        self.nodes_fr["compare_quanti_3_ind_norm"] = DecisionNode(
            id="compare_quanti_3_ind_norm",
            question="Les conditions d'application de l'ANOVA (normalité, Levene) sont-elles réunies ?",
            options=[
                DecisionOption("Oui (ANOVA à 1 facteur)", "Paramétrique", result_key="res_anova_one_way"),
                DecisionOption("Non (Test de Kruskal-Wallis)", "Non Paramétrique", result_key="res_kruskal_wallis")
            ]
        )

        # --- Branche Association ---
        self.nodes_fr["link_goal"] = DecisionNode(
            id="link_goal",
            question="Quelles sont les échelles de mesure des deux variables à associer ?",
            options=[
                DecisionOption("Deux variables quantitatives continues (ex: Âge & Salaire)", "2 Continues", next_node="link_2quanti_norm"),
                DecisionOption("Deux variables qualitatives / catégorielles (ex: Genre & Vote)", "2 Qualitatives", next_node="link_2quali_size"),
                DecisionOption("Une quantitative et une ordinale / rangs", "Ordinale / Rangs", result_key="res_spearman")
            ]
        )

        self.nodes_fr["link_2quanti_norm"] = DecisionNode(
            id="link_2quanti_norm",
            question="La relation est-elle linéaire et les données suivent-elles une loi normale bivariée ?",
            options=[
                DecisionOption("Oui (Linéaire et normal)", "Pearson", result_key="res_pearson"),
                DecisionOption("Non / Présence d'outliers (Relation monotone)", "Spearman", result_key="res_spearman")
            ]
        )

        self.nodes_fr["link_2quali_size"] = DecisionNode(
            id="link_2quali_size",
            question="Les effectifs théoriques calculés sont-ils suffisants (>= 5 dans 80% des cases) ?",
            options=[
                DecisionOption("Oui (Effectifs suffisants)", "Chi-deux", result_key="res_chi2_ind"),
                DecisionOption("Non (Table 2x2 avec petits effectifs)", "Fisher", result_key="res_fisher_exact")
            ]
        )

        # --- Branche Prédiction ---
        self.nodes_fr["predict_goal"] = DecisionNode(
            id="predict_goal",
            question="Quelle est la nature de la variable cible que vous cherchez à prédire ?",
            options=[
                DecisionOption("Une variable continue (ex: Montant, Température)", "Cible continue", result_key="res_linear_reg"),
                DecisionOption("Une variable binaire bivariée (ex: Oui/Non, Vivant/Décédé)", "Cible binaire", result_key="res_logistic_reg")
            ]
        )

    def get_node(self, node_id: str = "start", lang: str = "fr") -> Optional[Dict[str, Any]]:
        """Renvoie les données complètes d'un nœud pour l'interface."""
        node = self.nodes_fr.get(node_id)
        if not node:
            return None
        return node.to_dict()

    def get_recommendation(self, result_key: str, lang: str = "fr") -> Optional[Dict[str, Any]]:
        """Renvoie la fiche de recommandation du test statistique trouvé."""
        test = self.tests_catalog.get(result_key)
        if not test:
            return None
        return test.to_dict(lang=lang)

    def navigate(self, current_node_id: str, selected_option_index: int, lang: str = "fr") -> Dict[str, Any]:
        """Exécute une étape dans l'arbre décisionnel et renvoie le prochain état."""
        node = self.nodes_fr.get(current_node_id)
        if not node or selected_option_index >= len(node.options):
            return {"error": "Nœud ou option invalide", "completed": False}

        choice = node.options[selected_option_index]

        if choice.result_key:
            rec = self.get_recommendation(choice.result_key, lang=lang)
            return {
                "completed": True,
                "result_key": choice.result_key,
                "recommendation": rec,
                "recap": choice.recap
            }

        next_id = choice.next_node
        next_node_data = self.get_node(next_id, lang=lang)
        return {
            "completed": False,
            "next_node_id": next_id,
            "node_data": next_node_data,
            "recap": choice.recap
        }


# Instance singleton globale
decision_tree = StatisticalDecisionTree()

if __name__ == "__main__":
    print("=== Significant Statistical Decision Tree Engine ===")
    step1 = decision_tree.navigate("start", 0)
    print("Choix 1 (Comparer) ->", step1["next_node_id"])
    step2 = decision_tree.navigate(step1["next_node_id"], 0)
    print("Choix 2 (VD Continue) ->", step2["next_node_id"])
    step3 = decision_tree.navigate(step2["next_node_id"], 0)
    print("Choix 3 (2 groupes) ->", step3["next_node_id"])
    step4 = decision_tree.navigate(step3["next_node_id"], 0)
    print("Choix 4 (Indépendants) ->", step4["next_node_id"])
    step5 = decision_tree.navigate(step4["next_node_id"], 0)
    print("Résultat final:", step5["recommendation"]["name"])
