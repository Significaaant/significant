// ==========================================================================
// Significant — Base de métadonnées des tests pour les Cartes Booster
// Rareté, fiches de cours associées, utilisation et codes (Python, R, Jamovi)
// ==========================================================================

const quizTestMeta = {
    // ----------------------------------------------------------------------
    // 1. TESTS T (STUDENT & WELCH)
    // ----------------------------------------------------------------------
    res_ttest_ind: {
        rarity: "commune",
        courseId: "test-ttest",
        displayTitle: {
            fr: "Test de Student",
            en: "Student's t-Test"
        },
        description: {
            fr: "Compare les moyennes de deux groupes distincts (ex: Hommes vs Femmes) quand les variances sont égales.",
            en: "Compares the means of two distinct groups (e.g. Men vs Women) when variances are equal."
        },
        howToUse: {
            fr: "Permet d'évaluer si l'écart observé entre deux moyennes d'échantillons indépendants est statistiquement significatif (H₀ : μ₁ = μ₂). Prérequis : normalité des distributions et homogénéité des variances (Levene p > .05).",
            en: "Evaluates whether the difference between two independent group means is statistically significant (H₀: μ₁ = μ₂). Assumes normality and equal variances."
        },
        codePython: `from scipy import stats

# Test t de Student pour deux échantillons indépendants
# H0: les deux moyennes sont égales
t_stat, p_val = stats.ttest_ind(groupe_A, groupe_B, equal_var=True)
print(f"t = {t_stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Test t de Student indépendant (variances égales)
t.test(score ~ groupe, data = df, var.equal = TRUE)`,
        jamoviPath: {
            fr: "Analyses › T-Tests › Independent Samples T-Test › Déposer le score dans 'Dependent Variables' et le groupe dans 'Grouping Variable' › Sélectionner 'Student's t'",
            en: "Analyses › T-Tests › Independent Samples T-Test › Move score to 'Dependent Variables' and group to 'Grouping Variable' › Select 'Student\'s t'"
        }
    },

    res_ttest_paired: {
        rarity: "commune",
        courseId: "test-ttest",
        displayTitle: {
            fr: "Test t Apparié (Student)",
            en: "Paired Samples t-Test"
        },
        description: {
            fr: "Compare deux moyennes mesurées sur les mêmes individus à deux moments distincts (ex: Avant vs Après traitement).",
            en: "Compares two means measured on the same individuals across two timepoints (e.g. Before vs After treatment)."
        },
        howToUse: {
            fr: "Utilisé pour des mesures répétées ou des paires appariées. Il teste si la moyenne des différences individuelles est significativement différente de zéro (H₀ : μ_diff = 0).",
            en: "Used for repeated measures or matched pairs. Tests whether the mean of differences significantly differs from zero."
        },
        codePython: `from scipy import stats

# Test t pour mesures répétées (apparié)
t_stat, p_val = stats.ttest_rel(score_avant, score_apres)
print(f"t apparié = {t_stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Test t pour mesures répétées (avant / après)
t.test(df$score_apres, df$score_avant, paired = TRUE)`,
        jamoviPath: {
            fr: "Analyses › T-Tests › Paired Samples T-Test › Glisser les deux colonnes (Avant / Après) dans 'Paired Variables'",
            en: "Analyses › T-Tests › Paired Samples T-Test › Drag both columns (Before / After) into 'Paired Variables'"
        }
    },

    res_welch: {
        rarity: "peu_commune",
        courseId: "test-ttest",
        displayTitle: {
            fr: "Test t de Welch",
            en: "Welch's t-Test"
        },
        description: {
            fr: "Variante robuste du test t à utiliser quand les variances des deux groupes sont inégales (hétéroscédasticité).",
            en: "Robust t-test variant to use when group variances are unequal (heteroscedasticity)."
        },
        howToUse: {
            fr: "Ajuste les degrés de liberté selon la formule de Welch-Satterthwaite pour tolérer des variances inégales (Levene p < .05). C'est le test recommandé par défaut dans la plupart des revues modernes.",
            en: "Adjusts degrees of freedom to account for unequal variances (Levene p < .05). Recommended as default in modern literature."
        },
        codePython: `from scipy import stats

# Test t de Welch (variances inégales : equal_var=False)
t_stat, p_val = stats.ttest_ind(groupe_A, groupe_B, equal_var=False)
print(f"t Welch = {t_stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Test t de Welch (option par défaut en R)
t.test(score ~ groupe, data = df, var.equal = FALSE)`,
        jamoviPath: {
            fr: "Analyses › T-Tests › Independent Samples T-Test › Dans Tests, cocher 'Welch's t'",
            en: "Analyses › T-Tests › Independent Samples T-Test › Under Tests, check 'Welch\'s t'"
        }
    },

    res_ttest_ind_welch: {
        rarity: "peu_commune",
        courseId: "test-ttest",
        displayTitle: {
            fr: "Test t Indépendant / Welch",
            en: "Independent / Welch t-Test"
        },
        description: {
            fr: "Tes données sont normales : utilise Student si les variances sont égales, ou Welch si elles diffèrent.",
            en: "Your data is normal: use Student if variances are equal, or Welch if they differ."
        },
        howToUse: {
            fr: "Vérifier d'abord le test de Levene. Si p > .05 -> Student. Si p < .05 -> Welch.",
            en: "Check Levene's test first. If p > .05 -> Student. If p < .05 -> Welch."
        },
        codePython: `from scipy import stats

# 1. Vérification des variances (Levene)
stat_lev, p_lev = stats.levene(groupe_A, groupe_B)
use_equal = (p_lev > 0.05)

# 2. Test t adapté
t_stat, p_val = stats.ttest_ind(groupe_A, groupe_B, equal_var=use_equal)
print(f"Test ({'Student' if use_equal else 'Welch'}): t={t_stat:.3f}, p={p_val:.4f}")`,
        codeR: `# Test de Levene puis Test t
car::leveneTest(score ~ groupe, data = df)
t.test(score ~ groupe, data = df, var.equal = FALSE)`,
        jamoviPath: {
            fr: "Analyses › T-Tests › Independent Samples T-Test › Cocher 'Homogeneity test' pour arbitrer entre Student et Welch",
            en: "Analyses › T-Tests › Independent Samples T-Test › Check 'Homogeneity test' to arbitrate between Student and Welch"
        }
    },

    // ----------------------------------------------------------------------
    // 2. ALTERNATIVES NON-PARAMÉTRIQUES (MANN-WHITNEY, WILCOXON)
    // ----------------------------------------------------------------------
    res_mann_whitney: {
        rarity: "peu_commune",
        courseId: "test-ttest",
        displayTitle: {
            fr: "Test U de Mann-Whitney",
            en: "Mann-Whitney U Test"
        },
        description: {
            fr: "Alternative non-paramétrique au test t indépendant pour des données ordinales ou non-normales.",
            en: "Non-parametric alternative to independent t-test for ordinal or non-normal data."
        },
        howToUse: {
            fr: "Compare les rangs cumulés de deux groupes indépendants plutôt que leurs moyennes. Insensible aux valeurs extrêmes et applicable sur de petits effectifs.",
            en: "Compares cumulative ranks of two independent groups rather than means. Robust to outliers and small samples."
        },
        codePython: `from scipy import stats

# Test U de Mann-Whitney (rangs)
u_stat, p_val = stats.mannwhitneyu(groupe_A, groupe_B, alternative='two-sided')
print(f"U = {u_stat:.2f}, p-value = {p_val:.4f}")`,
        codeR: `# Test U de Mann-Whitney (Wilcoxon rank-sum)
wilcox.test(score ~ groupe, data = df)`,
        jamoviPath: {
            fr: "Analyses › T-Tests › Independent Samples T-Test › Dans Tests, cocher 'Mann-Whitney U'",
            en: "Analyses › T-Tests › Independent Samples T-Test › Under Tests, check 'Mann-Whitney U'"
        }
    },

    res_wilcoxon: {
        rarity: "peu_commune",
        courseId: "test-ttest",
        displayTitle: {
            fr: "Test de Wilcoxon",
            en: "Wilcoxon Signed-Rank Test"
        },
        description: {
            fr: "L'alternative non-paramétrique au test t apparié, pour des mesures répétées non-normales.",
            en: "Non-parametric alternative to paired t-test for non-normal repeated measures."
        },
        howToUse: {
            fr: "Calcule les différences individuelles entre deux conditions, puis teste si la médiane des rangs signés diffère de 0.",
            en: "Calculates differences between paired conditions and tests whether median of signed ranks differs from 0."
        },
        codePython: `from scipy import stats

# Test des rangs signés de Wilcoxon
res = stats.wilcoxon(score_avant, score_apres)
print(f"Statistique W = {res.statistic:.2f}, p-value = {res.pvalue:.4f}")`,
        codeR: `# Test apparié non-paramétrique de Wilcoxon
wilcox.test(df$score_apres, df$score_avant, paired = TRUE)`,
        jamoviPath: {
            fr: "Analyses › T-Tests › Paired Samples T-Test › Dans Tests, cocher 'Wilcoxon rank'",
            en: "Analyses › T-Tests › Paired Samples T-Test › Under Tests, check 'Wilcoxon rank'"
        }
    },

    // ----------------------------------------------------------------------
    // 3. COMPARAISON DE 3 GROUPES ET PLUS (ANOVA & KRUSKAL-WALLIS)
    // ----------------------------------------------------------------------
    res_anova: {
        rarity: "peu_commune",
        courseId: "test-anova",
        displayTitle: {
            fr: "ANOVA à un facteur",
            en: "One-Way ANOVA"
        },
        description: {
            fr: "Compare simultanément les moyennes de 3 groupes ou plus pour déterminer si au moins l'un diffère.",
            en: "Compares means across 3 or more groups simultaneously to test if at least one differs."
        },
        howToUse: {
            fr: "Décompose la variance globale en variance inter-groupes (signal) et intra-groupes (bruit). Si le test F est significatif (p < .05), réaliser des tests post-hoc (Tukey HSD) pour repérer quelles paires diffèrent.",
            en: "Decomposes total variance into between-group and within-group variance. If F is significant, run post-hoc tests (Tukey HSD)."
        },
        codePython: `import statsmodels.api as sm
from statsmodels.formula.api import ols

# Modèle ANOVA univarié
model = ols('score ~ C(groupe)', data=df).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print(anova_table)`,
        codeR: `# ANOVA univariée & Post-hoc de Tukey
modele <- aov(score ~ groupe, data = df)
summary(modele)
TukeyHSD(modele)`,
        jamoviPath: {
            fr: "Analyses › ANOVA › One-Way ANOVA › Déposer 'groupe' dans Grouping Variable et 'score' dans Dependent Variables › Cocher Post-Hoc 'Tukey'",
            en: "Analyses › ANOVA › One-Way ANOVA › Set 'groupe' as Grouping Variable and 'score' as Dependent Variables › Check Post-Hoc 'Tukey'"
        }
    },

    res_kruskal_wallis: {
        rarity: "rare",
        courseId: "test-anova",
        displayTitle: {
            fr: "Test de Kruskal-Wallis",
            en: "Kruskal-Wallis Test"
        },
        description: {
            fr: "L'alternative non-paramétrique à l'ANOVA quand les distributions sont asymétriques ou ordinales.",
            en: "Non-parametric alternative to ANOVA when distributions are skewed or ordinal."
        },
        howToUse: {
            fr: "Généralisation du test de Mann-Whitney à 3 groupes ou plus. Classe toutes les observations en rangs uniques et compare les sommes de rangs.",
            en: "Generalization of Mann-Whitney to 3+ groups. Ranks all scores and tests if rank sums differ across groups."
        },
        codePython: `from scipy import stats

# Test de Kruskal-Wallis (H)
h_stat, p_val = stats.kruskal(groupe1, groupe2, groupe3)
print(f"H = {h_stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Kruskal-Wallis non-paramétrique
kruskal.test(score ~ groupe, data = df)`,
        jamoviPath: {
            fr: "Analyses › ANOVA › One-Way ANOVA › Dans Non-Parametric, cocher 'Kruskal-Wallis'",
            en: "Analyses › ANOVA › One-Way ANOVA › Under Non-Parametric, check 'Kruskal-Wallis'"
        }
    },

    // ----------------------------------------------------------------------
    // 4. ANALYSE DU TABLEAU CROISÉ (CHI-DEUX & FISHER)
    // ----------------------------------------------------------------------
    res_chi2: {
        rarity: "commune",
        courseId: "test-chi2",
        displayTitle: {
            fr: "Test du Chi-carré (χ²)",
            en: "Chi-Square Test (χ²)"
        },
        description: {
            fr: "Teste l'indépendance statistique entre deux variables qualitatives sur des effectifs suffisants.",
            en: "Tests statistical independence between two categorical variables with adequate sample sizes."
        },
        howToUse: {
            fr: "Compare les effectifs observés (O) aux effectifs théoriques d'indépendance (E). Condition : au moins 80 % des cases avec un effectif théorique ≥ 5.",
            en: "Compares observed counts to theoretical counts expected under independence. Condition: at least 80% cells with expected count ≥ 5."
        },
        codePython: `import pandas as pd
from scipy import stats

# Tableau de contingence et Chi-deux
table = pd.crosstab(df['var_A'], df['var_B'])
chi2, p, dof, expected = stats.chi2_contingency(table)
print(f"χ²({dof}) = {chi2:.2f}, p-value = {p:.4f}")`,
        codeR: `# Test d'indépendance du Chi-deux
table_croisee <- table(df$var_A, df$var_B)
chisq.test(table_croisee)`,
        jamoviPath: {
            fr: "Analyses › Frequencies › Contingency Tables › Glisser les variables en Rows et Columns › Cocher 'χ²'",
            en: "Analyses › Frequencies › Contingency Tables › Drag variables into Rows and Columns › Check 'χ²'"
        }
    },

    res_chi2_cramer: {
        rarity: "commune",
        courseId: "test-chi2",
        displayTitle: {
            fr: "Chi-carré & V de Cramer",
            en: "Chi-Square & Cramer's V"
        },
        description: {
            fr: "Tableau croisé : Chi-carré pour tester la significativité et V de Cramer pour mesurer la force du lien.",
            en: "Crosstab: Chi-Square tests significance and Cramer's V measures association strength."
        },
        howToUse: {
            fr: "La p-value du χ² indique si le lien est réel ; le V de Cramer quantifie sa force (V < 0.10 faible, 0.30 modéré, > 0.50 fort).",
            en: "Chi-square p-value tests if link exists; Cramer's V evaluates magnitude (0.10 weak, 0.30 moderate, 0.50 strong)."
        },
        codePython: `import pandas as pd
import numpy as np
from scipy import stats

table = pd.crosstab(df['var_A'], df['var_B'])
chi2, p, dof, ex = stats.chi2_contingency(table)
n = table.sum().sum()
min_dim = min(table.shape) - 1
cramer_v = np.sqrt(chi2 / (n * min_dim))
print(f"χ² = {chi2:.2f} (p={p:.4f}), V de Cramer = {cramer_v:.3f}")`,
        codeR: `tab <- table(df$var_A, df$var_B)
chisq.test(tab)
# Package vcd pour Cramer
# vcd::assocstats(tab)`,
        jamoviPath: {
            fr: "Analyses › Frequencies › Contingency Tables › Cocher 'χ²' et 'Cramer's V' dans Comparative measures",
            en: "Analyses › Frequencies › Contingency Tables › Check 'χ²' and 'Cramer\'s V' under Comparative measures"
        }
    },

    res_cramer_v: {
        rarity: "commune",
        courseId: "test-chi2",
        displayTitle: {
            fr: "V de Cramer",
            en: "Cramer's V"
        },
        description: {
            fr: "Indique la force de l'association entre deux variables qualitatives après un test du Chi-carré.",
            en: "Quantifies the strength of association between two categorical variables following a Chi-square test."
        },
        howToUse: {
            fr: "Normalise le Chi-deux par la taille de l'échantillon et les dimensions de la table. Équivalent d'un coefficient de corrélation pour données catégorielles.",
            en: "Normalizes Chi-square by sample size and table dimensions. Analogous to a correlation coefficient for categorical data."
        },
        codePython: `import numpy as np
# Calcul de Cramer's V à partir de chi2, n et dimensions
cramer_v = np.sqrt(chi2_stat / (n * min(r - 1, c - 1)))`,
        codeR: `vcd::assocstats(table(df$var1, df$var2))$cramer`,
        jamoviPath: {
            fr: "Analyses › Frequencies › Contingency Tables › Cocher 'Cramer's V'",
            en: "Analyses › Frequencies › Contingency Tables › Check 'Cramer\'s V'"
        }
    },

    res_fisher: {
        rarity: "rare",
        courseId: "test-chi2",
        displayTitle: {
            fr: "Test Exact de Fisher",
            en: "Fisher's Exact Test"
        },
        description: {
            fr: "À utiliser pour croiser deux variables qualitatives quand les effectifs sont petits (au moins une case < 5).",
            en: "Used to cross-tabulate two categorical variables when sample sizes are small (any cell < 5)."
        },
        howToUse: {
            fr: "Calcule la probabilité exacte d'observer la table de contingence sous l'hypothèse d'indépendance, sans approximation asymptotique.",
            en: "Calculates the exact hyper-geometric probability of the contingency table under H₀ without asymptotic approximations."
        },
        codePython: `from scipy import stats

# Test exact de Fisher (table 2x2)
odds_ratio, p_val = stats.fisher_exact(table_2x2)
print(f"Odds Ratio = {odds_ratio:.2f}, p-value = {p_val:.4f}")`,
        codeR: `# Test exact de Fisher
fisher.test(table(df$var_A, df$var_B))`,
        jamoviPath: {
            fr: "Analyses › Frequencies › Contingency Tables › Dans Tests, cocher 'Fisher's exact test'",
            en: "Analyses › Frequencies › Contingency Tables › Under Tests, check 'Fisher\'s exact test'"
        }
    },

    // ----------------------------------------------------------------------
    // 5. CORRÉLATIONS (PEARSON & SPEARMAN)
    // ----------------------------------------------------------------------
    res_pearson: {
        rarity: "commune",
        courseId: "test-cor",
        displayTitle: {
            fr: "Corrélation de Pearson (r)",
            en: "Pearson Correlation (r)"
        },
        description: {
            fr: "Mesure la force et la direction du lien linéaire entre deux variables continues normales.",
            en: "Measures strength and direction of linear association between two normal continuous variables."
        },
        howToUse: {
            fr: "Le coefficient r varie de -1 à +1. Le coefficient de détermination r² indique la part de variance partagée entre les deux variables.",
            en: "Coefficient r ranges from -1 to +1. r² indicates the proportion of shared variance."
        },
        codePython: `from scipy import stats

# Corrélation linéaire de Pearson
r, p_val = stats.pearsonr(df['x'], df['y'])
print(f"r = {r:.3f}, p-value = {p_val:.4f}, r² = {r**2:.2%}")`,
        codeR: `# Corrélation linéaire de Pearson
cor.test(df$x, df$y, method = "pearson")`,
        jamoviPath: {
            fr: "Analyses › Regression › Correlation Matrix › Glisser les variables continues › Cocher 'Pearson'",
            en: "Analyses › Regression › Correlation Matrix › Drag continuous variables › Check 'Pearson'"
        }
    },

    res_spearman: {
        rarity: "peu_commune",
        courseId: "test-spearman",
        displayTitle: {
            fr: "Corrélation de Spearman (ρ)",
            en: "Spearman Correlation (ρ)"
        },
        description: {
            fr: "Mesure le lien monotone entre deux variables quantitatives ou ordinales sans supposer de normalité.",
            en: "Measures monotonic association between quantitative or ordinal variables without assuming normality."
        },
        howToUse: {
            fr: "Calculé sur les rangs des données. Robuste aux valeurs aberrantes et parfaitement adapté aux échelles ordinales de type Likert.",
            en: "Computed on ranked data. Robust to extreme outliers and suitable for ordinal Likert scales."
        },
        codePython: `from scipy import stats

# Corrélation de rangs de Spearman
rho, p_val = stats.spearmanr(df['x'], df['y'])
print(f"ρ = {rho:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Corrélation de rangs de Spearman
cor.test(df$x, df$y, method = "spearman")`,
        jamoviPath: {
            fr: "Analyses › Regression › Correlation Matrix › Cocher 'Spearman'",
            en: "Analyses › Regression › Correlation Matrix › Check 'Spearman'"
        }
    },

    // ----------------------------------------------------------------------
    // 6. RÉGRESSIONS (LINÉAIRE SIMPLE, MULTIPLE, LOGISTIQUE)
    // ----------------------------------------------------------------------
    res_linear_reg_simple: {
        rarity: "commune",
        courseId: "droite-regression",
        displayTitle: {
            fr: "Régression Linéaire Simple",
            en: "Simple Linear Regression"
        },
        description: {
            fr: "Modélise l'équation prédictive (Y = β₀ + β₁X) entre une variable expliquée et un unique prédicteur continu.",
            en: "Models predictive equation (Y = β₀ + β₁X) between outcome Y and single continuous predictor X."
        },
        howToUse: {
            fr: "Estime la pente β₁ (effet de X sur Y) et le coefficient de détermination R² (qualité d'ajustement du modèle).",
            en: "Estimates slope β₁ (effect of X on Y) and R² coefficient of determination (goodness-of-fit)."
        },
        codePython: `import statsmodels.api as sm

# Régression linéaire univariée OLS
X = sm.add_constant(df['x'])
modele = sm.OLS(df['y'], X).fit()
print(modele.summary())`,
        codeR: `# Régression linéaire simple OLS
modele <- lm(y ~ x, data = df)
summary(modele)`,
        jamoviPath: {
            fr: "Analyses › Regression › Linear Regression › Y dans Dependent Variable et X dans Covariates",
            en: "Analyses › Regression › Linear Regression › Put Y in Dependent Variable and X in Covariates"
        }
    },

    res_linear_reg_multiple: {
        rarity: "peu_commune",
        courseId: "droite-regression",
        displayTitle: {
            fr: "Régression Linéaire Multiple",
            en: "Multiple Linear Regression"
        },
        description: {
            fr: "Modélise l'effet net de plusieurs variables explicatives sur une variable continue, 'toutes choses égales par ailleurs'.",
            en: "Models net effect of multiple predictors on continuous outcome, controlling for confounders."
        },
        howToUse: {
            fr: "Isole l'influence propre de chaque prédicteur (β) en contrôlant les autres variables. Toujours rapporter le R² ajusté et vérifier le VIF.",
            en: "Isolates net effect of each predictor while controlling for others. Always report adjusted R² and check VIF."
        },
        codePython: `import statsmodels.api as sm

# Régression multiple avec contrôle statistique
X = sm.add_constant(df[['x1', 'x2', 'x3']])
modele = sm.OLS(df['y'], X).fit()
print(modele.summary())`,
        codeR: `# Régression linéaire multiple
modele <- lm(y ~ x1 + x2 + x3, data = df)
summary(modele)`,
        jamoviPath: {
            fr: "Analyses › Regression › Linear Regression › Déposer tous les prédicteurs dans Covariates › Model Fit (R² ajusté)",
            en: "Analyses › Regression › Linear Regression › Place all predictors in Covariates › Model Fit (Adj. R²)"
        }
    },

    res_logistic_reg: {
        rarity: "rare",
        courseId: "reg-logistique",
        displayTitle: {
            fr: "Régression Logistique",
            en: "Binary Logistic Regression"
        },
        description: {
            fr: "Modélise la probabilité d'un événement binaire (Oui/Non, 0/1) à partir d'un ou plusieurs prédicteurs.",
            en: "Models probability of binary event (Yes/No, 0/1) from one or more predictor variables."
        },
        howToUse: {
            fr: "Estime les log-cotes (logits) puis les Odds Ratios (OR = e^β). Un OR > 1 indique une augmentation des chances de survenue de l'événement.",
            en: "Estimates logits and exponentiates to Odds Ratios (OR = e^β). OR > 1 indicates increased odds."
        },
        codePython: `import statsmodels.api as sm

# Régression logistique binomiale
X = sm.add_constant(df[['x1', 'x2']])
logit_mod = sm.Logit(df['y_binaire'], X).fit()
print(logit_mod.summary())`,
        codeR: `# Régression logistique binaire
modele <- glm(y_binaire ~ x1 + x2, data = df, family = binomial)
summary(modele)
exp(coef(modele)) # Odds Ratios (OR)`,
        jamoviPath: {
            fr: "Analyses › Regression › 2 Outcomes (Binomial Logistic Regression) › Cocher Odds Ratios (OR)",
            en: "Analyses › Regression › 2 Outcomes (Binomial Logistic Regression) › Check Odds Ratios (OR)"
        }
    },

    // ----------------------------------------------------------------------
    // 7. MODÈLES AVANCÉS (ANCOVA & MANOVA)
    // ----------------------------------------------------------------------
    res_ancova: {
        rarity: "super_rare",
        courseId: "test-anova",
        displayTitle: {
            fr: "ANCOVA",
            en: "ANCOVA"
        },
        description: {
            fr: "Compare des groupes en neutralisant l'effet d'une variable parasite continue (covariable).",
            en: "Compares group means while adjusting for a continuous confounding covariate."
        },
        howToUse: {
            fr: "Permet d'éliminer la part de variance attribuable à la covariable, augmentant ainsi la puissance statistique de détection de l'effet du groupe.",
            en: "Removes variance attributable to covariate, thereby increasing statistical power to detect group differences."
        },
        codePython: `from statsmodels.formula.api import ols
import statsmodels.api as sm

modele = ols('score ~ C(groupe) + covariable', data=df).fit()
print(sm.stats.anova_lm(modele, typ=2))`,
        codeR: `# Analyse de covariance (ANCOVA)
modele <- aov(score ~ covariable + groupe, data = df)
summary(modele)`,
        jamoviPath: {
            fr: "Analyses › ANOVA › ANCOVA › Placer le groupe dans Fixed Factors et la covariable dans Covariates",
            en: "Analyses › ANOVA › ANCOVA › Set group as Fixed Factors and covariate in Covariates"
        }
    },

    res_manova: {
        rarity: "mythique",
        courseId: "test-anova",
        displayTitle: {
            fr: "MANOVA",
            en: "MANOVA"
        },
        description: {
            fr: "Analyse simultanément l'effet de facteurs catégoriels sur plusieurs variables dépendantes corrélées.",
            en: "Analyzes effect of categorical factors across multiple correlated dependent variables simultaneously."
        },
        howToUse: {
            fr: "Protège contre l'inflation de l'erreur de type I (alpha) encourue lorsqu'on réalise plusieurs ANOVA univariées séparées.",
            en: "Protects against Type I error inflation incurred when running multiple separate univariate ANOVAs."
        },
        codePython: `from statsmodels.multivariate.manova import MANOVA

# MANOVA avec plusieurs variables dépendantes
fit = MANOVA.from_formula('VD1 + VD2 ~ C(groupe)', data=df)
print(fit.mv_test())`,
        codeR: `# MANOVA multivariée (test de Wilks)
res <- manova(cbind(VD1, VD2) ~ groupe, data = df)
summary(res, test = "Wilks")`,
        jamoviPath: {
            fr: "Analyses › ANOVA › MANOVA › Glisser les différentes VD et le facteur de groupe",
            en: "Analyses › ANOVA › MANOVA › Drag multiple DVs and group factor"
        }
    },

    // ----------------------------------------------------------------------
    // 8. TESTS DIAGNOSTIQUES DES POSTULATS (SHAPIRO & LEVENE)
    // ----------------------------------------------------------------------
    res_shapiro: {
        rarity: "commune",
        courseId: "test-shapiro",
        displayTitle: {
            fr: "Test de Shapiro-Wilk",
            en: "Shapiro-Wilk Test"
        },
        description: {
            fr: "Le test standard pour vérifier si un échantillon provient d'une distribution normale.",
            en: "The gold-standard test to verify whether a sample follows a normal distribution."
        },
        howToUse: {
            fr: "H₀ : la distribution est normale. Si p > .05, on ne rejette pas la normalité. Si p < .05, envisager un test non-paramétrique.",
            en: "H₀: distribution is normal. If p > .05, normality is retained. If p < .05, consider a non-parametric test."
        },
        codePython: `from scipy import stats

# Test de Shapiro-Wilk
w_stat, p_val = stats.shapiro(donnees)
print(f"W = {w_stat:.4f}, p-value = {p_val:.4f}")`,
        codeR: `# Test de normalité de Shapiro-Wilk
shapiro.test(donnees)`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Statistics › Cocher 'Shapiro-Wilk'",
            en: "Analyses › Exploration › Descriptives › Statistics › Check 'Shapiro-Wilk'"
        }
    },

    res_levene: {
        rarity: "commune",
        courseId: "test-levene",
        displayTitle: {
            fr: "Test de Levene",
            en: "Levene's Test"
        },
        description: {
            fr: "Vérifie l'égalité des variances (homoscédasticité) entre différents groupes avant un test t ou une ANOVA.",
            en: "Verifies equality of variances (homoscedasticity) across groups before a t-test or ANOVA."
        },
        howToUse: {
            fr: "H₀ : variances égales. Si p < .05, l'hypothèse d'homogénéité est violée : appliquer une correction de type Welch.",
            en: "H₀: variances are equal. If p < .05, equal variance assumption is violated: use Welch's correction."
        },
        codePython: `from scipy import stats

# Test d'homogénéité des variances de Levene
w_stat, p_val = stats.levene(groupe_A, groupe_B)
print(f"Statistique = {w_stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Test de Levene (package car)
car::leveneTest(score ~ groupe, data = df)`,
        jamoviPath: {
            fr: "Analyses › T-Tests / ANOVA › Assumption Checks › Cocher 'Homogeneity test (Levene's)'",
            en: "Analyses › T-Tests / ANOVA › Assumption Checks › Check 'Homogeneity test (Levene\'s)'"
        }
    },

    // ----------------------------------------------------------------------
    // 9. STATISTIQUE DESCRIPTIVE & EXPLORATOIRE
    // ----------------------------------------------------------------------
    res_tendance_centrale: {
        rarity: "commune",
        courseId: "stat-moyenne",
        displayTitle: {
            fr: "Moyenne / Médiane / Mode",
            en: "Mean / Median / Mode"
        },
        description: {
            fr: "Indices de tendance centrale : Moyenne pour données normales, Médiane pour données tordues, Mode pour catégories.",
            en: "Central tendency indices: Mean for normal data, Median for skewed data, Mode for categories."
        },
        howToUse: {
            fr: "La moyenne est sensible aux valeurs extrêmes ; la médiane est l'indice robuste par excellence pour décrire le centre d'une distribution.",
            en: "Mean is sensitive to outliers; median is the robust choice for skewed distributions."
        },
        codePython: `import numpy as np
from scipy import stats

print("Moyenne :", np.mean(data))
print("Médiane :", np.median(data))
print("Mode :", stats.mode(data, keepdims=False)[0])`,
        codeR: `mean(x, na.rm = TRUE)
median(x, na.rm = TRUE)`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Cocher Mean, Median, Mode",
            en: "Analyses › Exploration › Descriptives › Check Mean, Median, Mode"
        }
    },

    res_dispersion: {
        rarity: "commune",
        courseId: "stat-ecart-type",
        displayTitle: {
            fr: "Variance & Écart-type",
            en: "Variance & Standard Deviation"
        },
        description: {
            fr: "L'Écart-type est le standard pour mesurer la dispersion autour de la moyenne. Utiliser l'IQR si la distribution est asymétrique.",
            en: "Standard deviation measures spread around the mean. Use IQR for skewed distributions."
        },
        howToUse: {
            fr: "L'écart-type exprime la dispersion dans la même unité que la variable. L'intervalle interquartile (IQR = Q3 - Q1) accompagne la médiane.",
            en: "Standard deviation expresses dispersion in the original unit. IQR (Q3 - Q1) accompanies the median."
        },
        codePython: `import numpy as np

print("Écart-type :", np.std(data, ddof=1))
print("Variance :", np.var(data, ddof=1))
print("IQR :", np.percentile(data, 75) - np.percentile(data, 25))`,
        codeR: `sd(x, na.rm = TRUE)
var(x, na.rm = TRUE)
IQR(x, na.rm = TRUE)`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Cocher Std. deviation, Variance, IQR",
            en: "Analyses › Exploration › Descriptives › Check Std. deviation, Variance, IQR"
        }
    },

    res_visu_quanti: {
        rarity: "commune",
        courseId: "stat-boxplot",
        displayTitle: {
            fr: "Histogramme & Boxplot",
            en: "Histogram & Boxplot"
        },
        description: {
            fr: "L'Histogramme révèle la forme de la distribution. Le Boxplot (boîte à moustaches) repère immédiatement les valeurs aberrantes.",
            en: "Histogram reveals distribution shape. Boxplot immediately identifies extreme outliers."
        },
        howToUse: {
            fr: "Permet de vérifier visuellement la symétrie, l'unimodalité et la présence d'outliers au-delà de 1.5 × IQR.",
            en: "Visually checks symmetry, modality, and presence of outliers beyond 1.5 × IQR."
        },
        codePython: `import matplotlib.pyplot as plt
import seaborn as sns

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
sns.histplot(data, kde=True, ax=axes[0])
sns.boxplot(y=data, ax=axes[1])
plt.show()`,
        codeR: `par(mfrow=c(1,2))
hist(x, col="peachpuff", main="Histogramme")
boxplot(x, col="lightblue", main="Boxplot")`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Plots › Cocher Histogram et Box plot",
            en: "Analyses › Exploration › Descriptives › Plots › Check Histogram and Box plot"
        }
    },

    res_intervalle_confiance: {
        rarity: "commune",
        courseId: "concept-ic",
        displayTitle: {
            fr: "Intervalle de Confiance (95 %)",
            en: "Confidence Interval (95%)"
        },
        description: {
            fr: "Permet d'estimer la zone plausible où se trouve la vraie moyenne de la population avec 95 % de certitude.",
            en: "Estimates the plausible range containing the true population mean with 95% confidence."
        },
        howToUse: {
            fr: "IC = Moyenne ± 1.96 × (Écart-type / √n). Donne une estimation de la précision de votre échantillon.",
            en: "CI = Mean ± 1.96 × (SD / √n). Quantifies the precision of your sample estimate."
        },
        codePython: `import numpy as np
from scipy import stats

mean = np.mean(data)
sem = stats.sem(data)
ci = stats.t.interval(0.95, len(data)-1, loc=mean, scale=sem)
print(f"IC 95% : [{ci[0]:.2f}, {ci[1]:.2f}]")`,
        codeR: `t.test(data)$conf.int`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Statistics › Cocher 'Mean 95% CI'",
            en: "Analyses › Exploration › Descriptives › Statistics › Check 'Mean 95% CI'"
        }
    },

    res_tri_plat: {
        rarity: "commune",
        courseId: "tri-plat",
        displayTitle: {
            fr: "Tri à plat",
            en: "Frequency Table"
        },
        description: {
            fr: "Le tri à plat résume les effectifs et pourcentages pour chaque modalité d'une variable qualitative.",
            en: "Summarizes counts and percentages across each category of a qualitative variable."
        },
        howToUse: {
            fr: "Première étape obligatoire de description d'une variable nominale ou ordinale avant tout croisement.",
            en: "Essential first step to inspect categorical variables prior to cross-tabulation."
        },
        codePython: `import pandas as pd

freq = df['categorie'].value_counts()
pct = df['categorie'].value_counts(normalize=True) * 100
tableau = pd.DataFrame({'Effectif': freq, 'Pourcentage (%)': pct})
print(tableau)`,
        codeR: `tab <- table(df$categorie)
prop <- prop.table(tab) * 100
cbind(Effectif = tab, Pct = round(prop, 1))`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Cocher 'Frequency tables'",
            en: "Analyses › Exploration › Descriptives › Check 'Frequency tables'"
        }
    },

    res_visu_quali: {
        rarity: "commune",
        courseId: "tri-plat",
        displayTitle: {
            fr: "Barres / Camembert",
            en: "Bar Chart / Pie Chart"
        },
        description: {
            fr: "Le diagramme en barres est le format recommandé pour comparer des fréquences catégorielles avec rigueur.",
            en: "Bar charts are recommended for rigorous comparison of categorical frequencies."
        },
        howToUse: {
            fr: "Préférer systématiquement le diagramme en barres au camembert : l'œil humain compare beaucoup plus précisément des longueurs que des angles.",
            en: "Always prefer bar charts over pie charts: the human eye compares lengths far better than angles."
        },
        codePython: `import matplotlib.pyplot as plt

df['categorie'].value_counts().plot(kind='bar', color='#6B2D3E')
plt.ylabel('Effectif')
plt.show()`,
        codeR: `barplot(table(df$categorie), col = "#6B2D3E", ylab = "Effectif")`,
        jamoviPath: {
            fr: "Analyses › Exploration › Descriptives › Plots › Cocher 'Bar plot'",
            en: "Analyses › Exploration › Descriptives › Plots › Check 'Bar plot'"
        }
    },

    // ----------------------------------------------------------------------
    // 8. TESTS COMPLÉMENTAIRES (MESURES RÉPÉTÉES, AJUSTEMENT & MULTINOMIALE)
    // ----------------------------------------------------------------------
    res_anova_repeated: {
        rarity: "rare",
        courseId: "test-anova",
        displayTitle: {
            fr: "ANOVA à Mesures Répétées",
            en: "Repeated Measures ANOVA"
        },
        description: {
            fr: "Compare les moyennes de 3 conditions ou plus mesurées sur les mêmes individus au fil du temps ou sous différents stimuli.",
            en: "Compares means across 3 or more conditions measured on the same individuals over time or treatments."
        },
        howToUse: {
            fr: "Extension du test t apparié à plus de deux mesures. Nécessite la normalité des résidus et la sphéricité (test de Mauchly, correction Greenhouse-Geisser si violée).",
            en: "Extension of paired t-test to 3+ repeated measurements. Assumes normality and sphericity (Mauchly's test)."
        },
        codePython: `from statsmodels.stats.anova import AnovaRM

# Modèle ANOVA à mesures répétées
res = AnovaRM(data=df, depvar='score', subject='sujet_id', within=['condition']).fit()
print(res.summary())`,
        codeR: `# ANOVA à mesures répétées
aov_res <- aov(score ~ condition + Error(sujet_id / condition), data = df)
summary(aov_res)`,
        jamoviPath: {
            fr: "Analyses › ANOVA › Repeated Measures ANOVA › Définir les facteurs intra-sujets et glisser les colonnes correspondantes",
            en: "Analyses › ANOVA › Repeated Measures ANOVA › Define repeated measures factors and drag measure columns"
        }
    },

    res_friedman: {
        rarity: "rare",
        courseId: "test-kruskal-wallis",
        displayTitle: {
            fr: "Test de Friedman",
            en: "Friedman Test"
        },
        description: {
            fr: "Alternative non-paramétrique à l'ANOVA à mesures répétées pour comparer 3 conditions ou plus sur les mêmes sujets à partir de rangs.",
            en: "Non-parametric alternative to repeated measures ANOVA for comparing 3+ conditions on same subjects using ranks."
        },
        howToUse: {
            fr: "À utiliser lorsque les postulats de normalité ou de sphéricité de l'ANOVA répétée sont violés ou avec des scores ordinaux.",
            en: "Use when normality or sphericity assumptions of repeated ANOVA are violated, or with ordinal scores."
        },
        codePython: `from scipy import stats

# Test de Friedman pour k échantillons appariés
stat, p_val = stats.friedmanchisquare(cond_1, cond_2, cond_3)
print(f"Friedman Q = {stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Test de Friedman
friedman.test(as.matrix(df[, c("cond1", "cond2", "cond3")]))`,
        jamoviPath: {
            fr: "Analyses › ANOVA › Non-Parametric › Repeated Measures ANOVA (Friedman) › Glisser les conditions dans 'Measures'",
            en: "Analyses › ANOVA › Non-Parametric › Repeated Measures ANOVA (Friedman) › Drag conditions into 'Measures'"
        }
    },

    res_chi2_fit: {
        rarity: "commune",
        courseId: "test-chi2",
        displayTitle: {
            fr: "Chi-Deux d'Adéquation",
            en: "Chi-Square Goodness of Fit"
        },
        description: {
            fr: "Vérifie si la répartition observée des effectifs d'une variable catégorielle est conforme à une répartition théorique attendue.",
            en: "Tests whether the observed distribution of a single categorical variable matches an expected theoretical distribution."
        },
        howToUse: {
            fr: "Teste l'hypothèse H₀ selon laquelle la population suit une proportion attendue (ex: équiprobabilité ou ratios génétiques 9:3:3:1).",
            en: "Tests H₀ that population follows hypothesized proportions (e.g. equiprobability or theoretical ratios)."
        },
        codePython: `from scipy import stats

# Chi-deux d'adéquation (Goodness of fit)
stat, p_val = stats.chisquare(f_obs=observes, f_exp=attendus)
print(f"Chi2 = {stat:.3f}, p-value = {p_val:.4f}")`,
        codeR: `# Chi-deux d'adéquation (probabilités théoriques p)
chisq.test(x = effectifs_observes, p = c(0.25, 0.25, 0.25, 0.25))`,
        jamoviPath: {
            fr: "Analyses › Frequencies › One Sample Proportion Test › Cocher 'χ² goodness of fit'",
            en: "Analyses › Frequencies › One Sample Proportion Test › Check 'χ² goodness of fit'"
        }
    },

    res_multinomial_reg: {
        rarity: "super_rare",
        courseId: "test-regression",
        displayTitle: {
            fr: "Régression Logistique Multinomiale",
            en: "Multinomial Logistic Regression"
        },
        description: {
            fr: "Modélise et prédit la probabilité d'appartenance à l'une de 3 catégories ou plus d'une variable dépendante nominale sans ordre hiérarchique.",
            en: "Models and predicts the probability of membership across 3 or more nominal unordered categories."
        },
        howToUse: {
            fr: "Utilisée lorsque la variable à prédire a 3 modalités ou plus (ex: Choix de transport : Train / Voiture / Vélo) par rapport à une modalité de référence.",
            en: "Used when the outcome variable has 3+ unordered categories (e.g. Choice: Train / Car / Bike) against a reference category."
        },
        codePython: `import statsmodels.api as sm

# Régression multinomiale (MNLogit)
modele = sm.MNLogit(y, sm.add_constant(X)).fit()
print(modele.summary())`,
        codeR: `library(nnet)
# Régression logistique multinomiale
modele_multinom <- multinom(choix ~ x1 + x2, data = df)
summary(modele_multinom)`,
        jamoviPath: {
            fr: "Analyses › Regression › Multinomial Logistic Regression › Déposer la VD dans 'Dependent Variable'",
            en: "Analyses › Regression › Multinomial Logistic Regression › Place DV in 'Dependent Variable'"
        }
    }
};

// ==========================================================================
// Significant — Arbre de décision & Chemins du Quiz pour chaque test
// Permet d'afficher la trajectoire décisionnelle menant à chaque test
// ==========================================================================
const quizTestPaths = {
    res_ttest_ind: {
        fr: ["Comparer des groupes", "VD Numérique / Échelle", "2 groupes", "Indépendants", "Paramétrique (Normalité OK)"],
        en: ["Compare groups", "Numeric / Scale DV", "2 groups", "Independent", "Parametric (Normality OK)"]
    },
    res_ttest_paired: {
        fr: ["Comparer des groupes", "VD Numérique", "2 mesures", "Appariées (Mêmes sujets)", "Normalité des différences"],
        en: ["Compare groups", "Numeric DV", "2 measures", "Paired (Same subjects)", "Normal differences"]
    },
    res_welch: {
        fr: ["Comparer des groupes", "VD Numérique", "2 groupes", "Indépendants", "Correction de Welch (Variances inégales)"],
        en: ["Compare groups", "Numeric DV", "2 groups", "Independent", "Welch Correction (Unequal variances)"]
    },
    res_ttest_ind_welch: {
        fr: ["Comparer des groupes", "VD Numérique", "2 groupes", "Indépendants", "Student / Welch"],
        en: ["Compare groups", "Numeric DV", "2 groups", "Independent", "Student / Welch"]
    },
    res_mann_whitney: {
        fr: ["Comparer des groupes", "VD Numérique ou Ordinale", "2 groupes", "Indépendants", "Alternative non-paramétrique (Rangs)"],
        en: ["Compare groups", "Numeric or Ordinal DV", "2 groups", "Independent", "Non-parametric alternative (Ranks)"]
    },
    res_wilcoxon: {
        fr: ["Comparer des groupes", "VD Numérique ou Ordinale", "2 mesures", "Appariées", "Non-paramétrique (Rangs signés)"],
        en: ["Compare groups", "Numeric or Ordinal DV", "2 measures", "Paired", "Non-parametric (Signed ranks)"]
    },
    res_anova: {
        fr: ["Comparer des groupes", "VD Numérique", "3 groupes ou plus", "Indépendants", "ANOVA classique à 1 facteur"],
        en: ["Compare groups", "Numeric DV", "3+ groups", "Independent", "One-Way ANOVA"]
    },
    res_kruskal_wallis: {
        fr: ["Comparer des groupes", "VD Numérique ou Ordinale", "3 groupes ou plus", "Indépendants", "Non-paramétrique (Kruskal-Wallis)"],
        en: ["Compare groups", "Numeric or Ordinal DV", "3+ groups", "Independent", "Non-parametric (Kruskal-Wallis)"]
    },
    res_anova_repeated: {
        fr: ["Comparer des groupes", "VD Numérique", "3 conditions ou plus", "Mesures répétées (Appariées)", "ANOVA répétée (Sphéricité)"],
        en: ["Compare groups", "Numeric DV", "3+ conditions", "Repeated measures (Paired)", "Repeated ANOVA (Sphericity)"]
    },
    res_friedman: {
        fr: ["Comparer des groupes", "VD Numérique ou Ordinale", "3 conditions ou plus", "Mesures répétées", "Non-paramétrique (Friedman)"],
        en: ["Compare groups", "Numeric or Ordinal DV", "3+ conditions", "Repeated measures", "Non-parametric (Friedman)"]
    },
    res_chi2: {
        fr: ["Étudier une relation", "2 Variables Catégorielles", "Tableau de contingence", "Test d'Indépendance du Chi-Deux"],
        en: ["Study relationship", "2 Categorical Variables", "Contingency Table", "Chi-Square Test of Independence"]
    },
    res_chi2_fit: {
        fr: ["Comparer une distribution", "1 Variable Catégorielle", "Distribution théorique", "Chi-Deux d'Adéquation"],
        en: ["Compare distribution", "1 Categorical Variable", "Theoretical distribution", "Chi-Square Goodness of Fit"]
    },
    res_chi2_cramer: {
        fr: ["Étudier une relation", "2 Variables Catégorielles", "Association & Taille d'effet", "Chi-Deux + V de Cramér"],
        en: ["Study relationship", "2 Categorical Variables", "Association & Effect Size", "Chi-Square + Cramér's V"]
    },
    res_cramer_v: {
        fr: ["Étudier une relation", "2 Variables Catégorielles", "Intensité du lien", "V de Cramér (Taille d'effet)"],
        en: ["Study relationship", "2 Categorical Variables", "Strength of association", "Cramér's V (Effect size)"]
    },
    res_fisher: {
        fr: ["Étudier une relation", "2 Variables Catégorielles", "Effectifs attendus réduits (< 5)", "Test Exact de Fisher"],
        en: ["Study relationship", "2 Categorical Variables", "Small expected counts (< 5)", "Fisher's Exact Test"]
    },
    res_pearson: {
        fr: ["Étudier une relation", "2 Variables Numériques", "Relation linéaire & Distribution normale", "Corrélation de Pearson (r)"],
        en: ["Study relationship", "2 Numeric Variables", "Linear relation & Normal distribution", "Pearson Correlation (r)"]
    },
    res_spearman: {
        fr: ["Étudier une relation", "2 Variables Numériques ou Ordinales", "Relation monotone (Non-linéaire)", "Corrélation de Spearman (ρ)"],
        en: ["Study relationship", "2 Numeric or Ordinal Variables", "Monotonic relationship", "Spearman Correlation (ρ)"]
    },
    res_linear_reg_simple: {
        fr: ["Prédire un résultat", "Variable réponse Y Numérique", "1 Prédicteur X Numérique", "Régression Linéaire Simple"],
        en: ["Predict outcome", "Numeric Response Y", "1 Numeric Predictor X", "Simple Linear Regression"]
    },
    res_linear_reg_multiple: {
        fr: ["Prédire un résultat", "Variable réponse Y Numérique", "Plusieurs Prédicteurs (X₁, X₂...)", "Régression Linéaire Multiple"],
        en: ["Predict outcome", "Numeric Response Y", "Multiple Predictors (X₁, X₂...)", "Multiple Linear Regression"]
    },
    res_logistic_reg: {
        fr: ["Prédire un résultat", "Variable réponse Y Binaire (0/1)", "Prédicteurs continus ou catégoriels", "Régression Logistique Binaire"],
        en: ["Predict outcome", "Binary Response Y (0/1)", "Continuous/Categorical predictors", "Binary Logistic Regression"]
    },
    res_multinomial_reg: {
        fr: ["Prédire un résultat", "Variable réponse Y Catégorielle (3+ modalités)", "Prédicteurs multiples", "Régression Logistique Multinomiale"],
        en: ["Predict outcome", "Categorical Response Y (3+ categories)", "Multiple predictors", "Multinomial Logistic Regression"]
    },
    res_ancova: {
        fr: ["Comparer & Prédire", "VD Numérique", "Facteur groupe + Covariable continue", "ANCOVA (Contrôle de covariable)"],
        en: ["Compare & Predict", "Numeric DV", "Group factor + Continuous covariate", "ANCOVA (Covariate control)"]
    },
    res_manova: {
        fr: ["Comparer des groupes", "Plusieurs VD Numériques simultanées", "Groupes indépendants", "MANOVA"],
        en: ["Compare groups", "Multiple Numeric DVs simultaneously", "Independent groups", "MANOVA"]
    },
    res_shapiro: {
        fr: ["Vérifier un postulat", "Variable Continue", "Test de Distribution Normale", "Shapiro-Wilk (W)"],
        en: ["Check assumption", "Continuous Variable", "Normal Distribution Test", "Shapiro-Wilk (W)"]
    },
    res_levene: {
        fr: ["Vérifier un postulat", "Variable Continue par groupe", "Égalité des Variances", "Test de Levene (Homocédasticité)"],
        en: ["Check assumption", "Continuous Variable across groups", "Equal Variances", "Levene's Test (Homoscedasticity)"]
    },
    res_tendance_centrale: {
        fr: ["Décrire des données", "Variable Numérique", "Position centrale", "Moyenne, Médiane, Mode"],
        en: ["Describe data", "Numeric Variable", "Central position", "Mean, Median, Mode"]
    },
    res_dispersion: {
        fr: ["Décrire des données", "Variable Numérique", "Étalement des valeurs", "Écart-type, Variance, IQR"],
        en: ["Describe data", "Numeric Variable", "Spread of values", "Standard Deviation, Variance, IQR"]
    },
    res_visu_quanti: {
        fr: ["Décrire des données", "Variable Numérique", "Exploration graphique", "Histogramme, Boîte à moustaches"],
        en: ["Describe data", "Numeric Variable", "Graphical exploration", "Histogram, Boxplot"]
    },
    res_intervalle_confiance: {
        fr: ["Inférence statistique", "Paramètre échantillon", "Précision d'estimation", "Intervalle de Confiance à 95%"],
        en: ["Statistical inference", "Sample parameter", "Estimation precision", "95% Confidence Interval"]
    },
    res_tri_plat: {
        fr: ["Décrire des données", "Variable Catégorielle", "Comptage par modalité", "Tri à plat (Effectifs & %)"],
        en: ["Describe data", "Categorical Variable", "Count by modality", "One-way frequency table (% & counts)"]
    },
    res_visu_quali: {
        fr: ["Décrire des données", "Variable Catégorielle", "Représentation visuelle", "Diagramme en barres / secteurs"],
        en: ["Describe data", "Categorical Variable", "Visual representation", "Bar chart / Pie chart"]
    }
};

// ==========================================================================
// Fallback & Helper : Récupère la métadonnée d'un test avec slug & quizPath
// ==========================================================================
function getQuizTestMeta(key) {
    const slug = (key || 'test').replace(/^res_/, '');
    const meta = quizTestMeta[key] || {
        rarity: "commune",
        courseId: "types-variables",
        displayTitle: { fr: "Test statistique", en: "Statistical test" },
        description: { fr: "Consultez la fiche de cours pour approfondir ce test.", en: "Refer to the theory guide for this test." },
        howToUse: { fr: "Utilisé pour valider votre démarche empirique.", en: "Used to validate your empirical methodology." },
        codePython: "# Code disponible dans les fiches",
        codeR: "# Code disponible dans les fiches",
        jamoviPath: { fr: "Analyses › Consulter le manuel Jamovi", en: "Analyses › Consult Jamovi manual" }
    };

    // Attach slug & quiz path
    meta.imageSlug = slug;
    meta.quizPath = quizTestPaths[key] || {
        fr: ["Arbre de décision", "Test statistique adapté"],
        en: ["Decision tree", "Suitable statistical test"]
    };

    return meta;
}

