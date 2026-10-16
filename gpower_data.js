/**
 * G*Power Guide Data
 * Glossaire interactif et arbre de décision pour G*Power
 */

const gpowerGlossary = {
    fr: {
        "alpha-error": {
            term: "Seuil de signification (α)",
            def: "Le risque d'erreur de Type I (faux positif) : c'est la probabilité de conclure qu'un effet existe alors qu'il n'est dû qu'au hasard. En sciences humaines et sociales, on le fixe quasi systématiquement à <strong>0.05</strong> (soit 5% de risque accepté)."
        },
        "power-beta": {
            term: "Puissance statistique (1 - β)",
            def: "La probabilité de détecter un effet s'il existe réellement dans la population. Une étude qui manque de puissance passe à côté de vraies découvertes (faux négatif). Le standard recommandé est d'au moins <strong>0.80</strong> (80% de chances), voire <strong>0.95</strong> pour une sécurité maximale."
        },
        "effect-size": {
            term: "Taille d'effet attendue (Effect Size)",
            def: "L'ampleur ou la force du phénomène que vous cherchez à observer (indépendamment du nombre de sujets). Plus l'effet attendu est discret ou modeste, plus il vous faudra un grand nombre de participants pour le détecter avec certitude."
        },
        "cohen-d": {
            term: "d de Cohen (T-Test)",
            def: "L'indicateur standard de taille d'effet pour comparer deux moyennes : il mesure l'écart entre deux groupes en unités d'écart-type.<br><br>• <strong>0.20</strong> : Petit effet (difficile à percevoir à l'œil nu)<br>• <strong>0.50</strong> : Effet moyen (valeur standard recommandée si vous n'avez pas d'étude préalable)<br>• <strong>0.80</strong> : Grand effet (très marqué)"
        },
        "cohen-f": {
            term: "f de Cohen (ANOVA)",
            def: "L'indicateur de taille d'effet pour comparer 3 groupes ou plus (ANOVA).<br><br>• <strong>0.10</strong> : Petit effet<br>• <strong>0.25</strong> : Effet moyen (valeur par défaut recommandée)<br>• <strong>0.40</strong> : Grand effet"
        },
        "cohen-w": {
            term: "w de Cohen (Chi-deux)",
            def: "L'indicateur de taille d'effet pour un tableau croisé ou test d'indépendance du Chi-deux (variables qualitatives).<br><br>• <strong>0.10</strong> : Petit lien<br>• <strong>0.30</strong> : Lien moyen (valeur par défaut recommandée)<br>• <strong>0.50</strong> : Lien fort"
        },
        "n-total": {
            term: "Taille d'échantillon totale (Total Sample Size N)",
            def: "Le nombre total d'individus ou d'observations indispensables à recruter dans votre étude pour que votre test statistique soit fiable et capable de détecter l'effet avec la puissance souhaitée."
        },
        "p-value": {
            term: "p-value (Valeur p)",
            def: "La probabilité d'obtenir un résultat au moins aussi marqué que le vôtre en supposant qu'il n'y a aucun effet réel dans la population (hypothèse nulle H₀). Si <strong>p &lt; 0.05</strong>, on rejette l'hypothèse nulle et le résultat est dit statistiquement significatif."
        },
        "apriori": {
            term: "Analyse A priori",
            def: "Le calcul indispensable à réaliser <strong>avant</strong> de lancer sa collecte de données. Vous fixez la puissance désirée (ex: 80%) et la taille d'effet attendue, et G*Power vous indique exactement combien de personnes recruter."
        },
        "posthoc": {
            term: "Analyse Post-hoc",
            def: "Le calcul réalisé <strong>après</strong> avoir collecté les données. Vous indiquez à G*Power la taille de votre échantillon réel et la taille d'effet observée, et il vous calcule la puissance réelle atteinte (très utile pour expliquer pourquoi un test a donné p &gt; 0.05)."
        },
        "tails": {
            term: "Nombre de côtés du test (Tails)",
            def: "• <strong>Two (Bilatéral)</strong> : Vous testez si les deux groupes sont différents, sans préjuger à l'avance du sens de la différence. Recommandé dans 99% des cas.<br><br>• <strong>One (Unilatéral)</strong> : Vous affirmez formellement que l'effet ne peut aller que dans un sens prédéterminé (ex: le nouveau traitement est obligatoirement supérieur)."
        },
        "allocation-ratio": {
            term: "Ratio d'allocation (N2 / N1)",
            def: "La proportion entre les effectifs de vos deux groupes. Un ratio de <strong>1</strong> signifie deux groupes égaux (ex: 50 participants dans le groupe A et 50 dans le groupe B)."
        }
    },
    en: {
        "alpha-error": {
            term: "Significance Level (α)",
            def: "The Type I error risk (false positive): the probability of concluding an effect exists when it is only due to random chance. Standard convention in social sciences fixes it at <strong>0.05</strong> (5% risk)."
        },
        "power-beta": {
            term: "Statistical Power (1 - β)",
            def: "The probability of detecting a true effect if it exists in the population. A study lacking statistical power misses real effects (Type II error). The academic gold standard is at least <strong>0.80</strong> (80%), or <strong>0.95</strong> for maximum assurance."
        },
        "effect-size": {
            term: "Expected Effect Size",
            def: "The magnitude or strength of the phenomenon under study, independent of sample size. The smaller the expected effect, the more participants you must recruit to detect it reliably."
        },
        "cohen-d": {
            term: "Cohen's d (T-Test)",
            def: "The standard effect size indicator for comparing two means, measured in pooled standard deviation units.<br><br>• <strong>0.20</strong>: Small effect<br>• <strong>0.50</strong>: Medium effect (standard default when unknown)<br>• <strong>0.80</strong>: Large effect"
        },
        "cohen-f": {
            term: "Cohen's f (ANOVA)",
            def: "The effect size indicator for comparing 3 or more group means in ANOVA.<br><br>• <strong>0.10</strong>: Small effect<br>• <strong>0.25</strong>: Medium effect (standard default)<br>• <strong>0.40</strong>: Large effect"
        },
        "cohen-w": {
            term: "Cohen's w (Chi-Square)",
            def: "The effect size indicator for contingency tables and Chi-Square independence tests.<br><br>• <strong>0.10</strong>: Small effect<br>• <strong>0.30</strong>: Medium effect (standard default)<br>• <strong>0.50</strong>: Large effect"
        },
        "n-total": {
            term: "Total Sample Size (N)",
            def: "The total number of participants or data points needed in your study to achieve reliable findings with the target statistical power."
        },
        "p-value": {
            term: "p-value",
            def: "The probability of observing data at least as extreme as the sample data under the null hypothesis (no effect). If <strong>p &lt; 0.05</strong>, we reject H₀ and consider the outcome statistically significant."
        },
        "apriori": {
            term: "A priori Power Analysis",
            def: "The calculation performed <strong>before</strong> collecting data. Given target power (e.g. 0.80) and expected effect size, G*Power outputs the required sample size."
        },
        "posthoc": {
            term: "Post-hoc Power Analysis",
            def: "The calculation performed <strong>after</strong> data collection. Using your observed sample size and effect size, G*Power computes the achieved power (helps understand non-significant findings)."
        },
        "tails": {
            term: "Number of tails (Tails)",
            def: "• <strong>Two (Two-tailed)</strong>: Tests for a difference in either direction. Recommended in 99% of cases.<br><br>• <strong>One (One-tailed)</strong>: Directional hypothesis where an effect can only happen in one direction."
        },
        "allocation-ratio": {
            term: "Allocation Ratio (N2 / N1)",
            def: "The ratio of sample size in group 2 relative to group 1. A ratio of <strong>1</strong> means equal group sizes (e.g. 50 participants per group)."
        }
    }
};

const gpowerMindMap = {
    // NIVEAU 1 : SITUATION
    root: {
        id: "root",
        step: 1,
        stepTitle: { fr: "Étape 1 : Votre situation d'enquête", en: "Step 1: Your study situation" },
        stepDesc: { 
            fr: "Commencez par choisir si vous préparez votre enquête avant la collecte ou si vous analysez une étude déjà terminée.", 
            en: "Start by choosing whether you are planning an upcoming study or evaluating a completed one." 
        },
        children: ["ana-apriori", "ana-posthoc"]
    },

    "ana-apriori": {
        id: "ana-apriori",
        step: 2,
        badge: { fr: "Avant la collecte • Le plus fréquent (90%)", en: "Before data collection • 90% of cases" },
        title: { fr: "A priori — Je prépare mon enquête", en: "A priori — I am planning my study" },
        themeClass: "theme-emerald",
        hoverDesc: { 
            fr: "Calculer le nombre total de personnes (<button type='button' class='glossary-term-link' onclick=\"openGlossary('n-total'); event.stopPropagation();\">taille d'échantillon N</button>) à recruter avant de commencer votre étude pour garantir sa réussite.", 
            en: "Calculate the exact number of participants required before launching data collection." 
        },
        children: ["family-t", "family-f", "family-chi2", "family-exact"]
    },

    "ana-posthoc": {
        id: "ana-posthoc",
        step: 2,
        badge: { fr: "Après la collecte • Bilan rétrospectif", en: "After data collection • Retrospective check" },
        title: { fr: "Post-hoc — Mon enquête est terminée", en: "Post-hoc — My study is completed" },
        themeClass: "theme-navy",
        hoverDesc: { 
            fr: "Calculer la <button type='button' class='glossary-term-link' onclick=\"openGlossary('power-beta'); event.stopPropagation();\">puissance réelle (1 - β)</button> atteinte avec vos données déjà récoltées (par exemple pour comprendre pourquoi un test a donné p &gt; 0.05).", 
            en: "Calculate the actual power achieved using collected data to explain why a test was not significant." 
        },
        children: ["family-t", "family-f", "family-chi2", "family-exact"]
    },

    // NIVEAU 2 : FAMILLES DE TESTS STATISTIQUES
    "family-t": {
        id: "family-t",
        step: 3,
        badge: { fr: "Moyennes", en: "Means" },
        title: { fr: "Tests t (Student)", en: "t-tests (Student)" },
        themeClass: "theme-bordeaux",
        hoverDesc: {
            fr: "Comparer deux moyennes (ex : deux groupes distincts comme Hommes vs Femmes, ou un même groupe mesuré Avant vs Après).",
            en: "Compare two group means (e.g. independent groups or before/after repeated measures)."
        },
        children: ["t-indep", "t-paired"]
    },

    "family-f": {
        id: "family-f",
        step: 3,
        badge: { fr: "3+ groupes ou Régression", en: "3+ groups or Regression" },
        title: { fr: "Tests F (ANOVA & Régression)", en: "F-tests (ANOVA & Regression)" },
        themeClass: "theme-amber",
        hoverDesc: {
            fr: "Comparer 3 groupes ou plus sur une variable numérique (ANOVA), ou évaluer la qualité prédictive d'une régression multiple.",
            en: "Compare 3 or more groups (ANOVA) or evaluate multi-predictor regression models."
        },
        children: ["f-anova", "f-regression"]
    },

    "family-chi2": {
        id: "family-chi2",
        step: 3,
        badge: { fr: "Catégories", en: "Categories" },
        title: { fr: "Tests χ² (Chi-deux)", en: "χ² tests (Chi-Square)" },
        themeClass: "theme-terracotta",
        hoverDesc: {
            fr: "Analyser si deux variables qualitatives sont liées dans un tableau croisé (ex : Niveau de diplôme et Vote).",
            en: "Analyze contingency tables and association between categorical variables."
        },
        children: ["chi2-gof"]
    },

    "family-exact": {
        id: "family-exact",
        step: 3,
        badge: { fr: "Corrélations & Proportions", en: "Correlations & Proportions" },
        title: { fr: "Tests exacts & Corrélations", en: "Exact Tests & Correlations" },
        themeClass: "theme-slate",
        hoverDesc: {
            fr: "Mesurer la force d'un lien linéaire entre deux variables numériques (Pearson) ou comparer des proportions exactes.",
            en: "Evaluate linear relationships (Pearson r) or compare exact binomial proportions."
        },
        children: ["exact-corr", "exact-prop"]
    },

    // NIVEAU 4 : CAS CONCRETS / FICHES DE RÉGLAGE G*POWER
    "t-indep": {
        id: "t-indep",
        type: "leaf",
        title: { fr: "Comparer 2 groupes indépendants (ex: Groupe Test vs Témoin)", en: "Compare 2 independent groups (e.g. Test vs Control)" },
        situationDesc: {
            fr: "Vous mesurez un score numérique sur deux groupes d'individus totalement séparés (ex: Hommes vs Femmes, ou Traitement vs Placebo).",
            en: "Comparing a continuous score between two separate groups."
        },
        gpowerFamily: "t tests",
        gpowerTest: "Means: Difference between two independent means (two groups)",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Tail(s)", value: "Two", termId: "tails", note: "Test bilatéral (recommandé dans 99% des cas)" },
            { label: "Effect size d", value: "0.50", termId: "cohen-d", note: "Effet moyen standard si vous ignorez la taille d'effet préalable" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil de signification classique (5% de faux positif toléré)" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de chance minimale de détecter l'effet (viser 0.95 pour un confort maximal)" },
            { label: "Allocation ratio N2/N1", value: "1", termId: "allocation-ratio", note: "Groupes égaux (même nombre de participants dans chaque groupe)" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : elle indique le nombre total de participants requis pour les deux groupes réunis.",
            en: "Check <strong>Total sample size</strong>: it gives the total number of subjects needed across both groups."
        },
        benchmarkValue: "N = 128 (soit 64 participants par groupe)",
        reportJustification: {
            fr: "« Une analyse de puissance a priori réalisée sur G*Power 3.1 (d = 0.50, α = 0.05, puissance = 0.80) indique qu'un échantillon minimal de N = 128 participants (soit 64 par groupe) est nécessaire pour détecter un effet moyen avec une probabilité de 80%. »",
            en: "“An a priori power analysis conducted with G*Power 3.1 (d = 0.50, α = 0.05, power = 0.80) shows that a total sample size of N = 128 participants (64 per group) is required to detect a medium effect size.”"
        }
    },

    "t-paired": {
        id: "t-paired",
        type: "leaf",
        title: { fr: "Comparer 2 mesures sur les mêmes personnes (ex: Avant / Après)", en: "Compare 2 repeated measures on same subjects (Before / After)" },
        situationDesc: {
            fr: "Les mêmes individus sont évalués à deux moments distincts (ex : score avant traitement vs score après traitement).",
            en: "The exact same individuals are measured at two points in time."
        },
        gpowerFamily: "t tests",
        gpowerTest: "Means: Difference between two dependent means (matched pairs)",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Tail(s)", value: "Two", termId: "tails", note: "Test bilatéral" },
            { label: "Effect size dz", value: "0.50", termId: "cohen-d", note: "Effet moyen standard pour mesures répétées" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil à 5%" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de chance de détection" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : chaque sujet étant son propre témoin, l'effectif nécessaire est souvent beaucoup plus réduit qu'entre deux groupes indépendants.",
            en: "Check <strong>Total sample size</strong>: because subjects serve as their own controls, sample size is often significantly lower."
        },
        benchmarkValue: "N = 34 participants mesurés deux fois",
        reportJustification: {
            fr: "« Une analyse de puissance a priori sur G*Power 3.1 pour mesures appariées (dz = 0.50, α = 0.05, puissance = 0.80) indique qu'un effectif de N = 34 participants suffit pour mettre en évidence une évolution moyenne significative. »",
            en: "“An a priori power analysis using G*Power 3.1 for paired means (dz = 0.50, α = 0.05, power = 0.80) shows that N = 34 participants are required.”"
        }
    },

    "f-anova": {
        id: "f-anova",
        type: "leaf",
        title: { fr: "Comparer 3 groupes ou plus (ANOVA à 1 facteur)", en: "Compare 3 or more groups (One-way ANOVA)" },
        situationDesc: {
            fr: "Vous comparez les moyennes d'une même variable continue entre 3 groupes ou plus (ex: Jeunes / Actifs / Retraités).",
            en: "Comparing means across three or more distinct groups on a numeric variable."
        },
        gpowerFamily: "F tests",
        gpowerTest: "ANOVA: Fixed effects, one-way",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Effect size f", value: "0.25", termId: "cohen-f", note: "Taille d'effet moyenne conventionnelle pour l'ANOVA" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil à 5%" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de puissance visée" },
            { label: "Number of groups", value: "3", termId: "n-total", note: "Nombre de groupes à comparer (adaptez selon votre protocole)" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : divisez par le nombre de groupes pour connaître le nombre de personnes par groupe.",
            en: "Check <strong>Total sample size</strong>: divide by number of groups to determine sample size per cell."
        },
        benchmarkValue: "N = 159 (soit 53 personnes par groupe pour 3 groupes)",
        reportJustification: {
            fr: "« Pour une ANOVA à 3 groupes, une analyse de puissance a priori (f = 0.25, α = 0.05, 1-β = 0.80) démontre qu'un total de N = 159 participants (environ 53 par groupe) est requis pour observer une différence significative. »",
            en: "“For a one-way ANOVA across 3 groups, an a priori power calculation (f = 0.25, α = 0.05, power = 0.80) indicates N = 159 total participants are needed.”"
        }
    },

    "f-regression": {
        id: "f-regression",
        type: "leaf",
        title: { fr: "Régression linéaire multiple (Prédire un score par plusieurs variables)", en: "Multiple linear regression (Predict a score with multiple variables)" },
        situationDesc: {
            fr: "Vous cherchez à prédire une variable numérique à partir de plusieurs prédicteurs (ex : Prédire le salaire selon l'âge, l'expérience et le diplôme).",
            en: "Predicting a continuous target variable from multiple predictors."
        },
        gpowerFamily: "F tests",
        gpowerTest: "Linear multiple regression: Fixed model, R² deviation from zero",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Effect size f²", value: "0.15", termId: "effect-size", note: "f² moyen = 0.15 (correspond à un R² d'environ 13% de variance expliquée)" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil à 5%" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de puissance" },
            { label: "Number of predictors", value: "3", termId: "n-total", note: "Nombre de variables explicatives dans votre modèle" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : c'est le nombre de questionnaires complets nécessaires pour valider votre modèle.",
            en: "Check <strong>Total sample size</strong>: required number of completed observations."
        },
        benchmarkValue: "N = 77 participants (avec 3 prédicteurs)",
        reportJustification: {
            fr: "« Pour un modèle de régression linéaire à 3 prédicteurs, une analyse de puissance a priori (f² = 0.15, α = 0.05, 1-β = 0.80) établit qu'un échantillon de N = 77 observations est nécessaire pour tester la validité du modèle global. »",
            en: "“For a linear multiple regression with 3 predictors, a priori power analysis (f² = 0.15, α = 0.05, power = 0.80) establishes that N = 77 observations are needed.”"
        }
    },

    "chi2-gof": {
        id: "chi2-gof",
        type: "leaf",
        title: { fr: "Lien entre 2 variables qualitatives (Tableau croisé du Chi-deux)", en: "Contingency table (Chi-Square test of independence)" },
        situationDesc: {
            fr: "Vous observez si la répartition des catégories d'une variable varie selon une autre (ex : Préférence de marque selon la tranche d'âge).",
            en: "Assessing association between two categorical variables in a cross-tabulation."
        },
        gpowerFamily: "χ² tests",
        gpowerTest: "Goodness-of-fit tests: Contingency tables",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Effect size w", value: "0.30", termId: "cohen-w", note: "Taille d'effet moyenne standard pour un Chi-deux" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil à 5%" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de puissance" },
            { label: "Df", value: "2", termId: "effect-size", note: "Degrés de liberté = (Lignes - 1) × (Colonnes - 1). Pour un tableau 2x3, Df = 1 × 2 = 2" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : veillez à ce que vos effectifs théoriques dans chaque case soient au moins de 5.",
            en: "Check <strong>Total sample size</strong>: ensure expected cell frequencies are at least 5."
        },
        benchmarkValue: "N = 108 répondants (pour Df = 2)",
        reportJustification: {
            fr: "« Pour un tableau croisé à 2 degrés de liberté, l'analyse a priori sur G*Power 3.1 (w = 0.30, α = 0.05, puissance = 0.80) préconise un recrutement minimal de N = 108 répondants. »",
            en: "“For a contingency table with df = 2, an a priori G*Power calculation (w = 0.30, α = 0.05, power = 0.80) prescribes N = 108 respondents.”"
        }
    },

    "exact-corr": {
        id: "exact-corr",
        type: "leaf",
        title: { fr: "Lien linéaire entre 2 scores numériques (Corrélation de Pearson)", en: "Linear relationship between 2 continuous scores (Pearson Correlation)" },
        situationDesc: {
            fr: "Vous évaluez si deux variables continues varient ensemble (ex : Lien entre le temps d'écran quotidien et le niveau d'anxiété).",
            en: "Evaluating linear association between two continuous scores."
        },
        gpowerFamily: "Exact",
        gpowerTest: "Correlation: Bivariate normal model",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Tail(s)", value: "Two", termId: "tails", note: "Test bilatéral" },
            { label: "Correlation ρ H1", value: "0.30", termId: "effect-size", note: "Corrélation attendue r = 0.30 (corrélation modérée standard)" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil à 5%" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de puissance" },
            { label: "Correlation ρ H0", value: "0", termId: "effect-size", note: "Hypothèse nulle d'absence de corrélation" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : pour observer une corrélation modérée, moins d'une centaine de personnes suffisent.",
            en: "Check <strong>Total sample size</strong>: to detect moderate linear correlation, around 84 observations suffice."
        },
        benchmarkValue: "N = 84 participants",
        reportJustification: {
            fr: "« L'analyse de puissance a priori pour une corrélation bivariée (r attendu = 0.30, α = 0.05, 1-β = 0.80) indique qu'un échantillon de N = 84 individus est requis. »",
            en: "“A priori power analysis for bivariate correlation (expected r = 0.30, α = 0.05, power = 0.80) indicates N = 84 participants are needed.”"
        }
    },

    "exact-prop": {
        id: "exact-prop",
        type: "leaf",
        title: { fr: "Comparer deux pourcentages ou proportions (ex: Taux de conversion A vs B)", en: "Compare two proportions (Conversion rate A vs B)" },
        situationDesc: {
            fr: "Vous comparez le taux de réussite ou de conversion entre deux groupes indépendants (ex : 30% vs 50%).",
            en: "Comparing success or conversion proportions between two separate groups."
        },
        gpowerFamily: "Exact",
        gpowerTest: "Proportions: Difference between two independent proportions",
        gpowerType: "A priori: Compute required sample size — given α, power, and effect size",
        gpowerTypePosthoc: "Post hoc: Compute achieved power — given α, sample size, and effect size",
        inputs: [
            { label: "Tail(s)", value: "Two", termId: "tails", note: "Test bilatéral" },
            { label: "Proportion p1", value: "0.30", termId: "effect-size", note: "Taux attendu dans le premier groupe (30%)" },
            { label: "Proportion p2", value: "0.50", termId: "effect-size", note: "Taux attendu dans le second groupe (50%)" },
            { label: "α err prob", value: "0.05", termId: "alpha-error", note: "Seuil à 5%" },
            { label: "Power (1-β err prob)", value: "0.80", termId: "power-beta", note: "80% de puissance" },
            { label: "Allocation ratio N2/N1", value: "1", termId: "allocation-ratio", note: "Groupes de même taille" }
        ],
        outputNotice: {
            fr: "Regardez la case <strong>Total sample size</strong> : les tests de proportions exigent généralement plus de participants que les tests de moyennes.",
            en: "Check <strong>Total sample size</strong>: proportion tests generally require larger sample sizes."
        },
        benchmarkValue: "N = 186 (soit 93 par groupe)",
        reportJustification: {
            fr: "« Pour détecter un écart de 20 points de proportion (30% vs 50%) avec α = 0.05 et une puissance de 80%, l'analyse a priori sur G*Power 3.1 requiert N = 186 participants au total. »",
            en: "“To detect a 20 percentage point difference (30% vs 50%) with α = 0.05 and power = 0.80, G*Power 3.1 mandates N = 186 total participants.”"
        }
    }
};

window.GPowerData = {
    glossary: gpowerGlossary,
    mindmap: gpowerMindMap
};
