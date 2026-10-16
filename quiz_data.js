const quizData = {
    fr: {
        start: {
            question: "Quel est votre objectif principal ?",
            options: [
                { text: "Comparer des groupes", next: "compare_goal", recap: "Comparaison" },
                { text: "Étudier une relation", next: "link_goal", recap: "Relation" },
                { text: "Prédire un résultat", next: "predict_goal", recap: "Prédiction" },
                { text: "Décrire des données", next: "desc_goal", recap: "Description" },
                { text: "Vérifier un postulat", next: "check_goal", recap: "Vérification" }
            ],
            help: {
                title: "Déterminer l'objectif",
                optionA: { title: "Comparer", desc: "Vérifier si un facteur (ex: traitement) crée une différence entre des groupes.", ex: "Le médicament A est-il plus efficace que le B ?" },
                optionB: { title: "Relation", desc: "Voir si deux variables varient ensemble sans forcément qu'une cause l'autre.", ex: "La taille est-elle liée au poids ?" },
                optionC: { title: "Prédire", desc: "Utiliser une ou plusieurs variables pour estimer la valeur d'une autre.", ex: "Prédire le succès à l'examen selon le temps d'étude." }
            }
        },

        // --- BRANCH: COMPARER ---
        compare_goal: {
            question: "Quelle est la nature de votre variable de résultat (VD) ?",
            options: [
                { text: "Numérique / Échelle (ex: Score, temps)", next: "compare_quanti_groups", recap: "VD Numérique" },
                { text: "Catégorielle / Nominale (ex: Oui/Non, Type)", next: "compare_quali_groups", recap: "VD Catégorielle" }
            ],
            help: {
                title: "Nature de la VD",
                optionA: { title: "Numérique", desc: "Votre résultat est une mesure continue ou un score.", ex: "Score d'anxiété, Temps de réaction." },
                optionB: { title: "Catégorielle", desc: "Votre résultat est un état ou une catégorie.", ex: "Réussite/Échec, Choix A/B/C." }
            }
        },

        // Compare Quanti
        compare_quanti_groups: {
            question: "Combien de groupes ou conditions comparez-vous ?",
            options: [
                { text: "2 groupes / mesures", next: "compare_quanti_2_link", recap: "2 groupes" },
                { text: "3 groupes ou plus", next: "compare_quanti_3_link", recap: "3+ groupes" }
            ]
        },

        compare_quanti_2_link: {
            question: "Les groupes sont-ils indépendants ou appariés ?",
            options: [
                { text: "Indépendants (individus différents)", next: "compare_quanti_2_ind_norm", recap: "Indépendants" },
                { text: "Appariés (mêmes individus / paires)", next: "compare_quanti_2_paired_norm", recap: "Appariés" }
            ],
            help: {
                title: "Dépendance des groupes",
                optionA: { title: "Indépendants", desc: "Deux personnes différentes dans chaque groupe.", ex: "Hommes vs Femmes." },
                optionB: { title: "Appariés", desc: "Les mêmes personnes mesurées deux fois.", ex: "Avant Traitement vs Après Traitement." }
            }
        },

        compare_quanti_2_ind_norm: {
            question: "Les conditions de normalité et d'homocédasticité sont-elles remplies ?",
            options: [
                { text: "Oui (Test Paramétrique)", result: "res_ttest_ind", recap: "Paramétrique" },
                { text: "Non / Je ne sais pas", next: "compare_quanti_2_ind_nonparam", recap: "Incertitude" }
            ],
            help: {
                title: "Conditions d'application",
                optionA: { title: "Normalité", desc: "Distribution en cloche et variances similaires.", ex: "Shapiro > .05 et Levene > .05" }
            }
        },

        compare_quanti_2_ind_nonparam: {
            question: "Voulez-vous une alternative robuste (non-paramétrique) ?",
            options: [
                { text: "Oui, utiliser les rangs", result: "res_mann_whitney", recap: "Non-paramétrique" },
                { text: "Non, tester avec correction (Welch)", result: "res_welch", recap: "Correction Welch" }
            ]
        },

        compare_quanti_2_paired_norm: {
            question: "Vos données suivent-elles une loi normale ?",
            options: [
                { text: "Oui", result: "res_ttest_paired", recap: "Normal" },
                { text: "Non / Petit échantillon", result: "res_wilcoxon", recap: "Non-normal" }
            ]
        },

        compare_quanti_3_link: {
            question: "Les groupes sont-ils indépendants ?",
            options: [
                { text: "Indépendants", next: "compare_quanti_3_ind_norm", recap: "Indépendants" },
                { text: "Mesures répétées (Appariés)", next: "compare_quanti_3_paired_norm", recap: "Répétés" }
            ]
        },

        compare_quanti_3_ind_norm: {
            question: "Les conditions de l'ANOVA sont-elles remplies ?",
            options: [
                { text: "Oui", result: "res_anova", recap: "ANOVA classique" },
                { text: "Non", result: "res_kruskal_wallis", recap: "Kruskal-Wallis" }
            ]
        },

        compare_quanti_3_paired_norm: {
            question: "Les conditions de l'ANOVA répétée sont-elles remplies ?",
            options: [
                { text: "Oui", result: "res_anova_repeated", recap: "ANOVA répétée" },
                { text: "Non", result: "res_friedman", recap: "Friedman" }
            ]
        },

        // Compare Quali
        compare_quali_groups: {
            question: "Voulez-vous vérifier l'adéquation à une théorie ou l'indépendance entre deux variables ?",
            options: [
                { text: "Adéquation (1 variable vs théorie)", result: "res_chi2_fit", recap: "Adéquation" },
                { text: "Indépendance (Lien entre 2 variables)", next: "compare_quali_ind_size", recap: "Indépendance" }
            ]
        },

        compare_quali_ind_size: {
            question: "Vos effectifs théoriques sont-ils suffisants ?",
            options: [
                { text: "Oui (Toutes les cases > 5)", result: "res_chi2", recap: "Chi-deux" },
                { text: "Non (Cases < 5)", result: "res_fisher", recap: "Fisher" }
            ]
        },

        // --- BRANCH: RELATION ---
        link_goal: {
            question: "De quel type sont vos deux variables ?",
            options: [
                { text: "Deux Quantitatives (Numériques)", next: "link_quanti_norm", recap: "2 Quanti" },
                { text: "Deux Qualitatives (Catégories)", next: "compare_quali_ind_size", recap: "2 Quali" },
                { text: "Une Quanti + Une Quali", next: "compare_quanti_groups", recap: "Quanti x Quali" }
            ]
        },

        link_quanti_norm: {
            question: "La relation est-elle linéaire et les données normales ?",
            options: [
                { text: "Oui", result: "res_pearson", recap: "Pearson" },
                { text: "Non / Rangs", result: "res_spearman", recap: "Spearman" }
            ]
        },

        // --- BRANCH: PREDIRE ---
        predict_goal: {
            question: "Que cherchez-vous à prédire (VD) ?",
            options: [
                { text: "Un nombre (ex: Revenu, temps)", next: "predict_quanti_count", recap: "Y Numérique" },
                { text: "Un état / binaire (ex: Succès/Échec)", next: "predict_quali_count", recap: "Y Binaire" }
            ]
        },

        predict_quanti_count: {
            question: "Combien de variables prédisent votre résultat ?",
            options: [
                { text: "Une seule", result: "res_linear_reg_simple", recap: "Unique predictor" },
                { text: "Plusieurs", next: "predict_quanti_mult_type", recap: "Multiple predictors" }
            ]
        },

        predict_quanti_mult_type: {
            question: "Voulez-vous contrôler une variable parasite ?",
            options: [
                { text: "Oui (Analyse de covariance)", result: "res_ancova", recap: "ANCOVA" },
                { text: "Non (Régression multiple standard)", result: "res_linear_reg_multiple", recap: "Régression multiple" },
                { text: "J'ai plusieurs variables de résultats (VD)", result: "res_manova", recap: "MANOVA" }
            ]
        },

        predict_quali_count: {
            question: "Combien de catégories possède votre VD ?",
            options: [
                { text: "2 (Binaire)", result: "res_logistic_reg", recap: "Logistique Binaire" },
                { text: "3 ou plus", result: "res_multinomial_reg", recap: "Logistique Multinomiale" }
            ]
        },

        // --- BRANCH: DESCRIRE (Preserved simple logic) ---
        desc_goal: {
            question: "Quel type de variable décrivez-vous ?",
            options: [
                { text: "Quantitative", next: "desc_quanti_detail", recap: "Quanti" },
                { text: "Qualitative", result: "res_tri_plat", recap: "Quali" }
            ]
        },
        desc_quanti_detail: {
            question: "Que voulez-vous résumer ?",
            options: [
                { text: "Centre et dispersion", result: "res_tendance_centrale", recap: "Stats" },
                { text: "La distribution (forme)", result: "res_visu_quanti", recap: "Visu" }
            ]
        },

        // --- BRANCH: POSTULATS ---
        check_goal: {
            question: "Que voulez-vous vérifier ?",
            options: [
                { text: "Normalité", result: "res_shapiro", recap: "Normalité" },
                { text: "Égalité des variances", result: "res_levene", recap: "Homoscédasticité" }
            ]
        },

        // --- RÉSULTATS ---
        res_tendance_centrale: {
            isResult: true,
            testName: "Moyenne / Médiane / Mode",
            text: "Utilise la <strong>Moyenne</strong> pour des données normales, la <strong>Médiane</strong> pour des données tordues ou ordinales, et le <strong>Mode</strong> pour des catégories.",
            expert: "loi-normale",
            targetId: "stat-moyenne"
        },
        res_dispersion: {
            isResult: true,
            testName: "Variance / Écart-type / Quantiles",
            text: "L'<strong>Écart-type</strong> est le standard pour la dispersion. Utilise les <strong>Quantiles</strong> (quartiles) pour des distributions non-normales.",
            expert: "stat-ecart-type",
            targetId: "stat-ecart-type"
        },
        res_visu_quanti: {
            isResult: true,
            testName: "Histogramme / Boxplot",
            text: "L'<strong>Histogramme</strong> montre la forme de la distribution. Le <strong>Boxplot</strong> (boîte à moustaches) est idéal pour repérer les valeurs aberrantes.",
            expert: "loi-normale",
            targetId: "chapitre-3"
        },
        res_intervalle_confiance: {
            isResult: true,
            testName: "Intervalle de confiance",
            text: "Permet d'estimer la zone où se trouve la vraie moyenne de la population avec une probabilité donnée (souvent 95%).",
            expert: "loi-normale",
            targetId: "stat-moyenne"
        },
        res_tri_plat: {
            isResult: true,
            testName: "Tri à plat",
            text: "Le tri à plat résume les effectifs et les pourcentages pour chaque catégorie de ta variable.",
            expert: "tri-plat",
            targetId: "tri-plat"
        },
        res_visu_quali: {
            isResult: true,
            testName: "Barres / Camembert",
            text: "Le <strong>Diagramme en barres</strong> est plus lisible pour comparer des fréquences. Le <strong>Camembert</strong> est utile pour visualiser des parts d'un tout.",
            expert: "tri-plat",
            targetId: "tri-plat"
        },
        res_ttest_paired: {
            isResult: true,
            testName: "Test t apparié (Student)",
            text: "Utilisé pour comparer deux moyennes sur les mêmes individus (ex: Avant/Après).",
            expert: "test_ttest_paired",
            targetId: "test-ttest"
        },
        res_wilcoxon: {
            isResult: true,
            testName: "Test de Wilcoxon",
            text: "L'alternative non-paramétrique au test t apparié, pour des données non-normales.",
            expert: "test_wilcoxon",
            targetId: "test-mann"
        },
        res_ttest_ind: {
            isResult: true,
            testName: "Test t indépendant (Student)",
            text: "Compare les moyennes de deux groupes distincts (ex: Hommes vs Femmes) quand les variances sont égales.",
            expert: "test-ttest",
            targetId: "test-ttest"
        },
        res_welch: {
            isResult: true,
            testName: "Test de Welch",
            text: "Une variante du test t de Student à utiliser quand les variances des deux groupes sont inégales.",
            expert: "test_ttest",
            targetId: "test-ttest"
        },
        res_ttest_ind_welch: {
            isResult: true,
            testName: "Test t indépendant / Welch",
            text: "Tes données sont normales. Utilise le test t classique (Student) si les variances sont égales, sinon le test de Welch.",
            expert: "test_ttest",
            targetId: "test-ttest"
        },
        res_mann_whitney: {
            isResult: true,
            testName: "Test de Mann-Whitney U",
            text: "L'alternative non-paramétrique au test t indépendant pour des données non-normales ou de petits effectifs.",
            expert: "test_mann",
            targetId: "test-mann"
        },
        res_anova: {
            isResult: true,
            testName: "ANOVA à un facteur",
            text: "Compare les moyennes de 3 groupes ou plus.",
            expert: "test_anova",
            targetId: "test-anova"
        },
        res_kruskal_wallis: {
            isResult: true,
            testName: "Kruskal-Wallis",
            text: "L'alternative non-paramétrique à l'ANOVA quand les données ne sont pas normales.",
            expert: "test_kruskal",
            targetId: "test-kruskal"
        },
        res_fisher: {
            isResult: true,
            testName: "Test Exact de Fisher",
            text: "À utiliser pour croiser deux variables qualitatives quand les effectifs sont petits (au moins une case ≤ 5).",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_chi2: {
            isResult: true,
            testName: "Test du Chi-carré (χ²)",
            text: "Teste l'indépendance entre deux variables qualitatives sur de grands échantillons.",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_cramer_v: {
            isResult: true,
            testName: "V de Cramer",
            text: "Indique la force de l'association entre deux variables qualitatives après un test du Chi-carré.",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_chi2_cramer: {
            isResult: true,
            testName: "Chi-carré + V de Cramer",
            text: "Fais un tableau croisé, calcule le Chi-carré pour la significativité et le V de Cramer pour la force du lien.",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_pearson: {
            isResult: true,
            testName: "Corrélation de Pearson (r)",
            text: "Mesure la force du lien linéaire entre deux variables quantitatives normales.",
            expert: "test_pearson",
            targetId: "test-cor"
        },
        res_spearman: {
            isResult: true,
            testName: "Corrélation de Spearman (ρ)",
            text: "Mesure le lien entre deux variables quantitatives (ou ordinales) sans supposer de normalité.",
            expert: "test_spearman",
            targetId: "test-spearman"
        },
        res_logistic_reg: {
            isResult: true,
            testName: "Régression Logistique",
            text: "Utilisée pour prédire une variable binaire (Oui/Non) à partir d'un ou plusieurs prédicteurs.",
            expert: "reg-logistique",
            targetId: "reg-logistique"
        },
        res_linear_reg_simple: {
            isResult: true,
            testName: "Régression Linéaire Simple",
            text: "Modélise la relation entre une variable dépendante and une seule variable explicative.",
            expert: "test-cor",
            targetId: "test-cor"
        },
        res_linear_reg_multiple: {
            isResult: true,
            testName: "Régression Linéaire Multiple",
            text: "Modélise la relation entre une variable dépendante and plusieurs variables explicatives.",
            expert: "test_manova"
        },
        res_ancova: {
            isResult: true,
            testName: "ANCOVA",
            text: "Compare des groupes en neutralisant l'effet d'une variable parasite continue.",
            expert: "test_ancova",
            targetId: "test-ancova"
        },
        res_manova: {
            isResult: true,
            testName: "MANOVA",
            text: "Analyse l'effet de variables indépendantes sur plusieurs variables dépendantes simultanément.",
            expert: "test_manova",
            targetId: "test-manova"
        },
        res_shapiro: {
            isResult: true,
            testName: "Test de Shapiro-Wilk",
            text: "Le test standard pour vérifier si un échantillon suit une loi normale.",
            expert: "loi-normale"
        },
        res_levene: {
            isResult: true,
            testName: "Test de Levene",
            text: "Vérifie l'égalité des variances (homoscédasticité) entre différents groupes.",
            expert: "test_anova"
        }
    },
    en: {
        start: {
            question: "What is your main goal?",
            options: [
                { text: "Compare groups", next: "compare_goal", recap: "Comparison" },
                { text: "Study a relationship", next: "link_goal", recap: "Relationship" },
                { text: "Predict an outcome", next: "predict_goal", recap: "Prediction" },
                { text: "Describe data", next: "desc_goal", recap: "Description" },
                { text: "Verify an assumption", next: "check_goal", recap: "Verification" }
            ],
            help: {
                title: "Determining the goal",
                optionA: { title: "Compare", desc: "Check if a factor (e.g., treatment) creates a difference between groups.", ex: "Is drug A more effective than drug B?" },
                optionB: { title: "Relationship", desc: "See if two variables vary together without necessarily implying causation.", ex: "Is height linked to weight?" },
                optionC: { title: "Predict", desc: "Use one or more variables to estimate the value of another.", ex: "Predict exam success based on study time." }
            }
        },

        // --- BRANCH: COMPARE ---
        compare_goal: {
            question: "What is the nature of your outcome variable (DV)?",
            options: [
                { text: "Numerical / Scale (e.g., Score, time)", next: "compare_quanti_groups", recap: "Numerical DV" },
                { text: "Categorical / Nominal (e.g., Yes/No, Type)", next: "compare_quali_groups", recap: "Categorical DV" }
            ],
            help: {
                title: "DV Nature",
                optionA: { title: "Numerical", desc: "Your result is a continuous measure or a score.", ex: "Anxiety score, Reaction time." },
                optionB: { title: "Categorical", desc: "Your result is a state or a category.", ex: "Success/Failure, Choice A/B/C." }
            }
        },

        // Compare Quanti
        compare_quanti_groups: {
            question: "How many groups or conditions are you comparing?",
            options: [
                { text: "2 groups / measures", next: "compare_quanti_2_link", recap: "2 groups" },
                { text: "3 or more groups", next: "compare_quanti_3_link", recap: "3+ groups" }
            ]
        },

        compare_quanti_2_link: {
            question: "Are the groups independent or paired?",
            options: [
                { text: "Independent (different individuals)", next: "compare_quanti_2_ind_norm", recap: "Independent" },
                { text: "Paired (same individuals / pairs)", next: "compare_quanti_2_paired_norm", recap: "Paired" }
            ],
            help: {
                title: "Group dependency",
                optionA: { title: "Independent", desc: "Different people in each group.", ex: "Men vs Women." },
                optionB: { title: "Paired", desc: "The same people measured twice.", ex: "Before Treatment vs After Treatment." }
            }
        },

        compare_quanti_2_ind_norm: {
            question: "Are the normality and homoscedasticity conditions met?",
            options: [
                { text: "Yes (Parametric Test)", result: "res_ttest_ind", recap: "Parametric" },
                { text: "No / I don't know", next: "compare_quanti_2_ind_nonparam", recap: "Uncertainty" }
            ],
            help: {
                title: "Application conditions",
                optionA: { title: "Normality", desc: "Bell-shaped distribution and similar variances.", ex: "Shapiro > .05 and Levene > .05" }
            }
        },

        compare_quanti_2_ind_nonparam: {
            question: "Do you want a robust (non-parametric) alternative?",
            options: [
                { text: "Yes, use ranks", result: "res_mann_whitney", recap: "Non-parametric" },
                { text: "No, test with correction (Welch)", result: "res_welch", recap: "Welch Correction" }
            ]
        },

        compare_quanti_2_paired_norm: {
            question: "Does your data follow a normal distribution?",
            options: [
                { text: "Yes", result: "res_ttest_paired", recap: "Normal" },
                { text: "No / Small sample", result: "res_wilcoxon", recap: "Non-normal" }
            ]
        },

        compare_quanti_3_link: {
            question: "Are the groups independent?",
            options: [
                { text: "Independent", next: "compare_quanti_3_ind_norm", recap: "Independent" },
                { text: "Repeated measures (Paired)", next: "compare_quanti_3_paired_norm", recap: "Repeated" }
            ]
        },

        compare_quanti_3_ind_norm: {
            question: "Are the ANOVA conditions met?",
            options: [
                { text: "Yes", result: "res_anova", recap: "Classic ANOVA" },
                { text: "No", result: "res_kruskal_wallis", recap: "Kruskal-Wallis" }
            ]
        },

        compare_quanti_3_paired_norm: {
            question: "Are the Repeated Measures ANOVA conditions met?",
            options: [
                { text: "Yes", result: "res_anova_repeated", recap: "Repeated ANOVA" },
                { text: "No", result: "res_friedman", recap: "Friedman" }
            ]
        },

        // Compare Quali
        compare_quali_groups: {
            question: "Do you want to check fit to a theory or independence between two variables?",
            options: [
                { text: "Fit (1 variable vs theory)", result: "res_chi2_fit", recap: "Goodness-of-fit" },
                { text: "Independence (Link between 2 variables)", next: "compare_quali_ind_size", recap: "Independence" }
            ]
        },

        compare_quali_ind_size: {
            question: "Are your theoretical counts sufficient?",
            options: [
                { text: "Yes (All cells > 5)", result: "res_chi2", recap: "Chi-Square" },
                { text: "No (Cells < 5)", result: "res_fisher", recap: "Fisher" }
            ]
        },

        // --- BRANCH: RELATION ---
        link_goal: {
            question: "What type are your two variables?",
            options: [
                { text: "Two Quantitative (Numerical)", next: "link_quanti_norm", recap: "2 Quanti" },
                { text: "Two Qualitative (Categories)", next: "compare_quali_ind_size", recap: "2 Quali" },
                { text: "One Quanti + One Quali", next: "compare_quanti_groups", recap: "Quanti x Quali" }
            ]
        },

        link_quanti_norm: {
            question: "Is the relationship linear and data normal?",
            options: [
                { text: "Yes", result: "res_pearson", recap: "Pearson" },
                { text: "No / Ranks", result: "res_spearman", recap: "Spearman" }
            ]
        },

        // --- BRANCH: PREDICT ---
        predict_goal: {
            question: "What are you trying to predict (DV)?",
            options: [
                { text: "A number (e.g., Income, time)", next: "predict_quanti_count", recap: "Numerical Y" },
                { text: "A state / binary (e.g., Success/Failure)", next: "predict_quali_count", recap: "Binary Y" }
            ]
        },

        predict_quanti_count: {
            question: "How many variables predict your outcome?",
            options: [
                { text: "Only one", result: "res_linear_reg_simple", recap: "Unique predictor" },
                { text: "Several", next: "predict_quanti_mult_type", recap: "Multiple predictors" }
            ]
        },

        predict_quanti_mult_type: {
            question: "Do you want to control a parasitic variable?",
            options: [
                { text: "Yes (Analysis of Covariance)", result: "res_ancova", recap: "ANCOVA" },
                { text: "No (Standard Multiple Regression)", result: "res_linear_reg_multiple", recap: "Multiple regression" },
                { text: "I have several outcome variables (DVs)", result: "res_manova", recap: "MANOVA" }
            ]
        },

        predict_quali_count: {
            question: "How many categories does your DV have?",
            options: [
                { text: "2 (Binary)", result: "res_logistic_reg", recap: "Binary Logistic" },
                { text: "3 or more", result: "res_multinomial_reg", recap: "Multinomial Logistic" }
            ]
        },

        // --- BRANCH: DESCRIRE ---
        desc_goal: {
            question: "What type of variable are you describing?",
            options: [
                { text: "Quantitative", next: "desc_quanti_detail", recap: "Quanti" },
                { text: "Qualitative", result: "res_tri_plat", recap: "Quali" }
            ]
        },
        desc_quanti_detail: {
            question: "What do you want to summarize?",
            options: [
                { text: "Center and dispersion", result: "res_tendance_centrale", recap: "Stats" },
                { text: "The distribution (shape)", result: "res_visu_quanti", recap: "Visu" }
            ]
        },

        // --- BRANCH: ASSUMPTIONS ---
        check_goal: {
            question: "What do you want to check?",
            options: [
                { text: "Normality", result: "res_shapiro", recap: "Normality" },
                { text: "Equality of variances", result: "res_levene", recap: "Homoscedasticity" }
            ]
        },

        // --- RESULTS ---
        res_tendance_centrale: {
            isResult: true,
            testName: "Central Tendency Measures",
            text: "Use Mean, Median, and Mode to summarize the center of your data.",
            expert: "indicateurs-position"
        },
        res_dispersion: {
            isResult: true,
            testName: "Dispersion Measures",
            text: "Standard Deviation, Variance, and Range show how spread out your data is.",
            expert: "stat-ecart-type",
            targetId: "stat-ecart-type"
        },
        res_visu_quanti: {
            isResult: true,
            testName: "Quantitative Visualization",
            text: "Use Histograms and Boxplots to see the distribution of your numbers.",
            expert: "organisation-donnees"
        },
        res_visu_quali: {
            isResult: true,
            testName: "Qualitative Visualization",
            text: "Use Bar Charts or Pie Charts to visualize categories.",
            expert: "organisation-donnees"
        },
        res_tri_plat: {
            isResult: true,
            testName: "Flat Sorting (Frequencies)",
            text: "Summarize categories by counting their occurrences (Counts and Percentages).",
            expert: "organisation-donnees"
        },
        res_ttest_ind: {
            isResult: true,
            testName: "Independent Samples T-Test",
            text: "Compares the means of two independent groups.",
            expert: "test-ttest",
            targetId: "test-ttest"
        },
        res_welch: {
            isResult: true,
            testName: "Welch's T-Test",
            text: "T-test variant for groups with unequal variances.",
            expert: "test-ttest",
            targetId: "test-ttest"
        },
        res_ttest_paired: {
            isResult: true,
            testName: "Paired Samples T-Test",
            text: "Compares means for the same group at two different times.",
            expert: "test-ttest",
            targetId: "test-ttest"
        },
        res_mann_whitney: {
            isResult: true,
            testName: "Mann-Whitney U Test",
            text: "Non-parametric alternative to the independent T-test (based on ranks).",
            expert: "test-mann",
            targetId: "test-mann"
        },
        res_wilcoxon: {
            isResult: true,
            testName: "Wilcoxon Signed-Rank Test",
            text: "Non-parametric alternative to the paired T-test.",
            expert: "test-mann",
            targetId: "test-mann"
        },
        res_anova: {
            isResult: true,
            testName: "One-Way ANOVA",
            text: "Compares the means of 3 or more independent groups.",
            expert: "test-anova",
            targetId: "test-anova"
        },
        res_anova_repeated: {
            isResult: true,
            testName: "Repeated Measures ANOVA",
            text: "Compares 3 or more means for the same subjects over time.",
            expert: "test-anova",
            targetId: "test-anova"
        },
        res_kruskal_wallis: {
            isResult: true,
            testName: "Kruskal-Wallis H Test",
            text: "Non-parametric alternative to ANOVA for 3 or more groups.",
            expert: "test-kruskal",
            targetId: "test-kruskal"
        },
        res_friedman: {
            isResult: true,
            testName: "Friedman Test",
            text: "Non-parametric alternative to Repeated Measures ANOVA.",
            expert: "test-kruskal",
            targetId: "test-kruskal"
        },
        res_chi2: {
            isResult: true,
            testName: "Chi-Square Independence Test",
            text: "Checks if there is a link between two categorical variables.",
            expert: "test-chi2",
            targetId: "test-chi2"
        },
        res_chi2_fit: {
            isResult: true,
            testName: "Chi-Square Goodness-of-Fit",
            text: "Checks if the distribution of a variable matches a theoretical distribution.",
            expert: "test-chi2",
            targetId: "test-chi2"
        },
        res_fisher: {
            isResult: true,
            testName: "Fisher's Exact Test",
            text: "Independence test for very small samples (cells < 5).",
            expert: "test-chi2",
            targetId: "test-chi2"
        },
        res_pearson: {
            isResult: true,
            testName: "Pearson Correlation (r)",
            text: "Measures the linear relationship between two normal quantitative variables.",
            expert: "test-pearson",
            targetId: "test-cor"
        },
        res_spearman: {
            isResult: true,
            testName: "Spearman Correlation (ρ)",
            text: "Measures the link based on ranks, without assuming normality.",
            expert: "test-spearman",
            targetId: "test-spearman"
        },
        res_logistic_reg: {
            isResult: true,
            testName: "Binary Logistic Regression",
            text: "Predicts a binary outcome (Yes/No) from one or more variables.",
            expert: "reg-logistique",
            targetId: "reg-logistique"
        },
        res_multinomial_reg: {
            isResult: true,
            testName: "Multinomial Logistic Regression",
            text: "Predicts an outcome with 3 or more categories.",
            expert: "test-manova",
            targetId: "test-manova"
        },
        res_linear_reg_simple: {
            isResult: true,
            testName: "Simple Linear Regression",
            text: "Models Y using a single predictor X.",
            expert: "test-pearson",
            targetId: "test-cor"
        },
        res_linear_reg_multiple: {
            isResult: true,
            testName: "Multiple Linear Regression",
            text: "Models Y using several predictors.",
            expert: "test-manova"
        },
        res_ancova: {
            isResult: true,
            testName: "ANCOVA",
            text: "Compares groups while controlling for a continuous covariate.",
            expert: "test-ancova",
            targetId: "test-ancova"
        },
        res_manova: {
            isResult: true,
            testName: "MANOVA",
            text: "Analyzes the effect on several outcome variables simultaneously.",
            expert: "test-manova",
            targetId: "test-manova"
        },
        res_shapiro: {
            isResult: true,
            testName: "Shapiro-Wilk Test",
            text: "Verifies if the data follows a normal distribution.",
            expert: "loi-normale"
        },
        res_levene: {
            isResult: true,
            testName: "Levene's Test",
            text: "Verifies if the variances are equal (homoscedasticity).",
            expert: "test-anova"
        }
    }
};
