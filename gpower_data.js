const gpowerGlossary = {
    fr: {
        "cohen-d": {
            term: "d de Cohen",
            def: "L'indicateur standard de la taille d'effet pour comparer deux moyennes. Il exprime la distance entre les groupes en unités d'écart-type. <br>• 0.2 : Petit<br>• 0.5 : Moyen<br>• 0.8 : Grand"
        },
        "alpha-error": {
            term: "Erreur Alpha (α)",
            def: "Le risque de 'Faux Positif'. C'est la probabilité de conclure qu'un effet existe alors qu'il n'est dû qu'au hasard. On le fixe généralement à 0.05 (5%)."
        },
        "power-beta": {
            term: "Puissance (1-β)",
            def: "La probabilité de détecter un effet réel s'il existe dans la population. Plus la puissance est haute, moins vous risquez de passer à côté d'une découverte (Faux Négatif)."
        },
        "effect-size": {
            term: "Taille d'effet",
            def: "La force brute du lien ou de la différence que vous étudiez, indépendamment de la taille de l'échantillon. C'est le 'signal' que vous essayez de capter."
        },
        "n-total": {
            term: "Taille d'échantillon (N)",
            def: "Le nombre total d'unités statistiques (individus, objets) nécessaires pour que votre test soit capable de voir le signal (l'effet) avec la certitude voulue."
        },
        "p-value": {
            term: "p-value",
            def: "La probabilité d'obtenir un résultat au moins aussi extrême que celui observé, en supposant que l'hypothèse nulle (pas d'effet) est vraie. Si p < 0.05, on rejette H0."
        }
    },
    en: {
        "cohen-d": {
            term: "Cohen's d",
            def: "The standard indicator of effect size for comparing two means. It expresses the distance between groups in standard deviation units. <br>• 0.2: Small<br>• 0.5: Medium<br>• 0.8: Large"
        },
        "alpha-error": {
            term: "Alpha Error (α)",
            def: "The risk of a 'False Positive'. The probability of concluding an effect exists when it is only due to chance. Usually fixed at 0.05 (5%)."
        },
        "power-beta": {
            term: "Power (1-β)",
            def: "The probability of detecting a real effect if it exists in the population. Higher power means less risk of missing a discovery (False Negative)."
        },
        "effect-size": {
            term: "Effect Size",
            def: "The raw strength of the link or difference you are studying, independent of sample size. It is the 'signal' you are trying to capture."
        },
        "n-total": {
            term: "Sample Size (N)",
            def: "The total number of statistical units (individuals, objects) needed for your test to be able to see the signal (the effect) with the desired certainty."
        },
        "p-value": {
            term: "p-value",
            def: "The probability of obtaining a result at least as extreme as the one observed, assuming the null hypothesis (no effect) is true. If p < 0.05, we reject H0."
        }
    }
};

const gpowerMindMap = {
    root: {
        id: "root",
        title: { fr: "Type d'Analyse", en: "Analysis Type" },
        desc: { fr: "Commencez par choisir si vous planifiez une étude ou si vous analysez une étude déjà faite.", en: "Start by choosing if you are planning a study or analyzing a completed one." },
        children: ["ana-apriori", "ana-posthoc"]
    },
    // LEVEL 1: ANALYSIS TYPES (The NEW Level 1)
    "ana-apriori": {
        id: "ana-apriori",
        title: { fr: "A priori", en: "A priori" },
        hoverDesc: { 
            fr: "<b>Je planifie mon étude.</b><br>Calculer le nombre de sujets (N) nécessaire AVANT de commencer pour garantir la réussite statistique.", 
            en: "<b>I am planning my study.</b><br>Calculate the required sample size (N) BEFORE starting to ensure statistical success." 
        },
        children: ["family-t", "family-f", "family-chi2", "family-exact"]
    },
    "ana-posthoc": {
        id: "ana-posthoc",
        title: { fr: "Post-hoc", en: "Post-hoc" },
        hoverDesc: { 
            fr: "<b>L'étude est terminée.</b><br>Calculer la puissance réelle (1-β) une fois les données récoltées (ex: pour comprendre pourquoi p > 0.05).", 
            en: "<b>The study is finished.</b><br>Calculate the actual power (1-β) once data is collected (e.g., to understand why p > 0.05)." 
        },
        children: ["family-t", "family-f", "family-chi2", "family-exact"]
    },
    // LEVEL 2: FAMILIES
    "family-t": {
        id: "family-t",
        title: { fr: "t-tests", en: "t-tests" },
        hoverDesc: {
            fr: "<b>Comparer des moyennes.</b><br>Utilisé pour comparer les scores de deux groupes (ex: Hommes vs Femmes) ou deux mesures.",
            en: "<b>Comparing means.</b><br>Used to compare scores between two groups (e.g., Men vs Women) or two measurements."
        },
        color: "--primary-color",
        children: ["t-indep", "t-paired"]
    },
    "family-f": {
        id: "family-f",
        title: { fr: "F-tests", en: "F-tests" },
        hoverDesc: {
            fr: "<b>Comparaisons multiples / Régression.</b><br>Utilisé pour les ANOVA (3+ groupes) ou pour évaluer la qualité d'un modèle de régression.",
            en: "<b>Multiple comparisons / Regression.</b><br>Used for ANOVA (3+ groups) or to evaluate regression model quality."
        },
        color: "--accent-color",
        children: ["f-anova", "f-regression"]
    },
    "family-chi2": {
        id: "family-chi2",
        title: { fr: "χ² tests", en: "χ² tests" },
        hoverDesc: {
            fr: "<b>Lien entre catégories.</b><br>Utilisé pour voir si deux variables qualitatives sont liées (ex: Diplôme et Vote).",
            en: "<b>Link between categories.</b><br>Used to see if two qualitative variables are linked (e.g., Degree and Vote)."
        },
        color: "--secondary-color",
        children: ["chi2-gof"]
    },
    "family-exact": {
        id: "family-exact",
        title: { fr: "Exact", en: "Exact" },
        hoverDesc: {
            fr: "<b>Corrélations et Proportions.</b><br>Utilisé pour les liens linéaires directs (Pearson) ou les différences de proportions exactes.",
            en: "<b>Correlations and Proportions.</b><br>Used for direct linear links (Pearson) or exact proportion differences."
        },
        color: "--text-dim",
        children: ["exact-corr"]
    },
    // LEVEL 3: SPECIFIC TESTS
    "t-indep": {
        id: "t-indep",
        title: { fr: "Moyennes : 2 Groupes Indépendants", en: "Means: 2 Independent Groups" },
        hoverDesc: {
            fr: "Compare deux groupes distincts (ex: Groupe Test vs Groupe Contrôle).",
            en: "Compares two distinct groups (e.g., Test Group vs Control Group)."
        },
        type: "leaf",
        params: ["cohen-d", "alpha-error", "power-beta", "n-total"]
    },
    "t-paired": {
        id: "t-paired",
        title: { fr: "Moyennes : 2 Mesures Appariées", en: "Means: 2 Dependent Measures" },
        hoverDesc: {
            fr: "Compare le même groupe à deux moments (ex: Avant/Après traitement).",
            en: "Compares the same group at two moments (e.g., Before/After treatment)."
        },
        type: "leaf",
        params: ["cohen-d", "alpha-error", "power-beta", "n-total"]
    },
    "f-anova": {
        id: "f-anova",
        title: { fr: "ANOVA : Un seul facteur", en: "ANOVA: One-way" },
        hoverDesc: {
            fr: "Compare 3 groupes ou plus sur une seule variable numérique.",
            en: "Compares 3 or more groups on a single numerical variable."
        },
        type: "leaf",
        params: ["effect-size", "alpha-error", "power-beta", "n-total"]
    },
    "f-regression": {
        id: "f-regression",
        title: { fr: "Régression : Modèle Global (R²)", en: "Regression: Global Model (R²)" },
        hoverDesc: {
            fr: "Prédire une variable à partir de plusieurs autres. Évalue le R² (part de variance expliquée).",
            en: "Predict one variable from several others. Evaluates R² (proportion of explained variance)."
        },
        type: "leaf",
        params: ["effect-size", "alpha-error", "power-beta", "n-total"]
    },
    "chi2-gof": {
        id: "chi2-gof",
        title: { fr: "Chi-deux : Tableau Croisé", en: "Chi-Square: Contingency Tables" },
        hoverDesc: {
            fr: "Analyse si les fréquences observées s'écartent des fréquences théoriques.",
            en: "Analyzes if observed frequencies deviate from theoretical frequencies."
        },
        type: "leaf",
        params: ["effect-size", "alpha-error", "power-beta", "n-total"]
    },
    "exact-corr": {
        id: "exact-corr",
        title: { fr: "Corrélation : Lien Linéaire", en: "Correlation: Linear Link" },
        hoverDesc: {
            fr: "Mesure la force d'un lien 'en ligne droite' entre deux scores numériques.",
            en: "Measures the strength of a 'straight line' link between two numerical scores."
        },
        type: "leaf",
        params: ["effect-size", "alpha-error", "power-beta", "n-total"]
    }
};

window.GPowerData = { glossary: gpowerGlossary, mindmap: gpowerMindMap };
