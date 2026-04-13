const quizData = {
    fr: {
        start: {
            question: "Quel est ton objectif d'analyse ?",
            options: [
                { text: "Décrire mes données", next: "q2", recap: "Description" },
                { text: "Comparer des groupes", next: "q5", recap: "Comparaison de groupes" },
                { text: "Étudier une relation entre deux variables", next: "q10", recap: "Relation" },
                { text: "Prédire une variable à partir d'autres", next: "q15", recap: "Prédiction" },
                { text: "Vérifier un postulat statistique", next: "q19", recap: "Vérification postulat" }
            ],
            help: {
                title: "Bien choisir son objectif",
                optionA: { title: "Décrire", desc: "Tu veux résumer tes données (moyenne, fréquences) sans chercher de lien complexe.", ex: "Quel est l'âge moyen de mon groupe ?" },
                optionB: { title: "Comparer", desc: "Tu veux savoir si deux groupes (ex: Hommes/Femmes) sont différents sur un critère.", ex: "Est-ce que les femmes dorment plus que les hommes ?" },
                optionC: { title: "Relation", desc: "Tu veux voir si deux variables évoluent ensemble (ex: Taille et Poids).", ex: "Plus on est grand, plus on est lourd ?" },
                optionD: { title: "Prédire", desc: "Tu veux modéliser une relation pour prédire un futur résultat (Régression).", ex: "Puis-je prédire le salaire à partir des années d'études ?" },
                optionE: { title: "Postulat", desc: "Tu veux t'assurer que tes données respectent les règles mathématiques (Normalité, Homogénéité).", ex: "Mes données suivent-elles une loi normale ?" }
            }
        },

        // Branch 1: Décrire mes données
        q2: {
            question: "Quel type de variable veux-tu décrire ?",
            options: [
                { text: "Variable quantitative (continue)", next: "q3", recap: "Quanti" },
                { text: "Variable qualitative (catégorielle)", next: "q4", recap: "Quali" }
            ],
            help: {
                title: "Types de Variables",
                optionA: { title: "Quantitative", desc: "Des chiffres mesurables ou comptables.", ex: "L'âge, la température, le score à un examen." },
                optionB: { title: "Qualitative", desc: "Des catégories ou des étiquettes.", ex: "Le sexe, le groupe sanguin, la couleur préférée." }
            }
        },
        q3: {
            question: "Que veux-tu calculer ?",
            options: [
                { text: "La tendance centrale", result: "res_tendance_centrale", recap: "Tendance centrale" },
                { text: "La dispersion", result: "res_dispersion", recap: "Dispersion" },
                { text: "Visualiser la distribution", result: "res_visu_quanti", recap: "Visualisation" },
                { text: "Estimer la valeur dans la population", result: "res_intervalle_confiance", recap: "Estimation" }
            ],
            help: {
                title: "Que mesurer ?",
                optionA: { title: "Tendance centrale", desc: "Le 'centre' de tes données.", ex: "La moyenne de la classe." },
                optionB: { title: "Dispersion", desc: "Si tes données sont serrées ou étalées.", ex: "L'écart-type des résultats." },
                optionC: { title: "Distribution", desc: "La 'forme' de tes données.", ex: "Histogramme ou Boxplot." },
                optionD: { title: "Population", desc: "Généraliser ton échantillon à tout le monde.", ex: "Intervalle de confiance." }
            }
        },
        q4: {
            question: "Que veux-tu faire ?",
            options: [
                { text: "Résumer les fréquences", result: "res_tri_plat", recap: "Fréquences" },
                { text: "Visualiser", result: "res_visu_quali", recap: "Visualisation" }
            ],
            help: {
                title: "Décrire des catégories",
                optionA: { title: "Fréquences", desc: "Compter combien il y en a par groupe.", ex: "30% de Femmes, 70% d'Hommes." },
                optionB: { title: "Visualiser", desc: "Faire un graphique simple.", ex: "Diagramme en barres ou camembert." }
            }
        },

        // Branch 2: Comparer des groupes (Quali x Quanti)
        q5: {
            question: "Combien de groupes compares-tu ?",
            options: [
                { text: "2 groupes", next: "q6", recap: "2 groupes" },
                { text: "3 groupes ou plus", next: "q9", recap: "3+ groupes" }
            ],
            help: {
                title: "Nombre de groupes",
                optionA: { title: "2 groupes", desc: "Comparaison simple entre deux entités.", ex: "Filles vs Garçons." },
                optionB: { title: "3+ groupes", desc: "Comparaison multiple entre plusieurs entités.", ex: "France vs Belgique vs Suisse." }
            }
        },
        q6: {
            question: "Tes mesures sont-elles appariées ? (ex : même individu mesuré deux fois)",
            options: [
                { text: "Oui", next: "q7", recap: "Appariées" },
                { text: "Non", next: "q8", recap: "Indépendantes" }
            ],
            help: {
                title: "Lien entre les mesures",
                optionA: { title: "Appariées", desc: "Les mêmes personnes sont testées plusieurs fois.", ex: "Poids avant régime vs Poids après régime." },
                optionB: { title: "Indépendantes", desc: "Deux groupes de personnes totalement différents.", ex: "Groupe A (médicament) vs Groupe B (placebo)." }
            }
        },
        q7: {
            question: "Tes données suivent-elles une loi normale ? (ou n > 30)",
            options: [
                { text: "Oui", result: "res_ttest_paired", recap: "Normalité OK" },
                { text: "Non", result: "res_wilcoxon", recap: "Non-normal" }
            ],
            help: {
                title: "Loi Normale",
                optionA: { title: "Normalité OK", desc: "Tes données forment une courbe en cloche.", ex: "Shapiro-Wilk p > .05" },
                optionB: { title: "Non-normal", desc: "Tes données sont asymétriques ou trop dispersées.", ex: "Shapiro-Wilk p < .05" }
            }
        },
        q8: {
            question: "Les variances des groupes sont-elles égales ?",
            options: [
                { text: "Oui (ou je ne sais pas)", result: "res_ttest_ind", recap: "Variances égales" },
                { text: "Non", result: "res_welch", recap: "Variances inégales" },
                { text: "Je ne sais pas si mes données sont normales", next: "q8b", recap: "Incertitude normalité" }
            ],
            help: {
                title: "L'égalité des variances",
                optionA: { title: "Égales", desc: "Les deux groupes ont un étalement similaire.", ex: "Test de Levene p > .05" },
                optionB: { title: "Inégales", desc: "Un groupe est beaucoup plus 'étalé' que l'autre.", ex: "Test de Levene p < .05" },
                optionC: { title: "Incertitude", desc: "Si tu n'as pas encore testé la normalité.", ex: "Aide-moi à vérifier la normalité d'abord." }
            }
        },
        q8b: {
            question: "Tes données suivent-elles une loi normale ?",
            options: [
                { text: "Oui", result: "res_ttest_ind_welch", recap: "Normalité OK" },
                { text: "Non", result: "res_mann_whitney", recap: "Non-normal" }
            ],
            help: {
                title: "Loi Normale",
                optionA: { title: "Normalité OK", desc: "Courbe en cloche symétrique.", ex: "Indispensable pour le Test t." },
                optionB: { title: "Non-normal", desc: "Distribution irrégulière ou échantillons < 30.", ex: "Utiliser Mann-Whitney (non-paramétrique)." }
            }
        },
        q9: {
            question: "Tes données suivent-elles une loi normale ?",
            options: [
                { text: "Oui", result: "res_anova", recap: "Normalité OK" },
                { text: "Non", result: "res_kruskal_wallis", recap: "Non-normal" }
            ],
            help: {
                title: "Loi Normale",
                optionA: { title: "Normalité OK", desc: "Tendance centrale symétrique.", ex: "Indispensable pour l'ANOVA." },
                optionB: { title: "Non-normal", desc: "Échantillons asymétriques.", ex: "Utiliser Kruskal-Wallis (non-paramétrique)." }
            }
        },

        // Branch 3: Comparer des proportions (Quali x Quali)
        q10: {
            question: "Tes deux variables sont-elles qualitatives ?",
            options: [
                { text: "Oui", next: "q11", recap: "Quali x Quali" },
                { text: "Non (une quanti et une quali)", next: "q5", recap: "Quanti x Quali" },
                { text: "Non (deux quanti)", next: "q13", recap: "Quanti x Quanti" }
            ],
            help: {
                title: "Type de lien",
                optionA: { title: "Quali x Quali", desc: "Deux catégories s'influencent-elles ?", ex: "Lien entre métier et satisfaction (Oui/Non)." },
                optionB: { title: "Quanti x Quali", desc: "Une moyenne change-t-elle selon un groupe ?", ex: "Salaire moyen par Diplôme." },
                optionC: { title: "Quanti x Quanti", desc: "Deux chiffres évoluent-ils ensemble ?", ex: "Lien entre consommation et prix." }
            }
        },
        q11: {
            question: "Quel est l'effectif de ton échantillon ?",
            options: [
                { text: "Grand (toutes les cases > 5)", next: "q12", recap: "Grand échantillon" },
                { text: "Petit (au moins une case ≤ 5)", result: "res_fisher", recap: "Petit échantillon" }
            ],
            help: {
                title: "Effectif des cases",
                optionA: { title: "Grand", desc: "Tes groupes sont assez grands pour le χ².", ex: "Toutes les cases du tableau > 5." },
                optionB: { title: "Petit", desc: "Échantillon trop faible pour le χ².", ex: "Une case vide ou < 5 individus." }
            }
        },
        q12: {
            question: "Que veux-tu mesurer ?",
            options: [
                { text: "S'il y a une association", result: "res_chi2", recap: "Association" },
                { text: "La force de l'association", result: "res_cramer_v", recap: "Force" },
                { text: "Les deux", result: "res_chi2_cramer", recap: "Les deux" }
            ],
            help: {
                title: "Significativité vs Force",
                optionA: { title: "Association", desc: "Y a-t-il un lien réel ou dû au hasard ?", ex: "Test du χ²." },
                optionB: { title: "Force", desc: "Le lien est-il faible ou puissant ?", ex: "V de Cramer (0 à 1)." },
                optionC: { title: "Les deux", desc: "Prouver le lien ET mesurer son importance.", ex: "χ² + V de Cramer." }
            }
        },

        // Branch 4: Étudier une relation (Quanti x Quanti)
        q13: {
            question: "Que veux-tu faire ?",
            options: [
                { text: "Mesurer la force du lien", next: "q14", recap: "Intensité" },
                { text: "Expliquer ou prédire une variable", next: "q15", recap: "Prédiction" }
            ],
            help: {
                title: "Corrélation vs Régression",
                optionA: { title: "Force du lien", desc: "Est-ce qu'ils bougent ensemble ?", ex: "Corrélation (Pearson)." },
                optionB: { title: "Prédire", desc: "Calculer la valeur de Y si je connais X.", ex: "Régression linéaire." }
            }
        },
        q14: {
            question: "Tes données sont-elles normales et sans valeurs aberrantes ?",
            options: [
                { text: "Oui", result: "res_pearson", recap: "Normalité OK" },
                { text: "Non", result: "res_spearman", recap: "Non-normal" }
            ],
            help: {
                title: "Loi Normale",
                optionA: { title: "Normalité OK", desc: "La relation forme une ligne droite.", ex: "Corrélation de Pearson." },
                optionB: { title: "Non-normal", desc: "La relation est courbe ou non-normale.", ex: "Corrélation de Spearman." }
            }
        },

        // Branch 5: Prédire / Expliquer
        q15: {
            question: "Ta variable à expliquer (dépendante) est-elle... ?",
            options: [
                { text: "Continue (ex : score, âge, revenu)", next: "q16", recap: "Y Continue" },
                { text: "Binaire (ex : succès/échec, oui/non)", result: "res_logistic_reg", recap: "Y Binaire" }
            ],
            help: {
                title: "Variable Dépendante (Y)",
                optionA: { title: "Continue", desc: "Ce que tu veux expliquer est un nombre.", ex: "Prédire les ventes (en €)." },
                optionB: { title: "Binaire", desc: "Ce que tu veux expliquer est un choix (0/1).", ex: "Prédire la réussite (Oui/Non)." }
            }
        },
        q16: {
            question: "Combien de variables explicatives as-tu ?",
            options: [
                { text: "Une seule", result: "res_linear_reg_simple", recap: "1 X" },
                { text: "Plusieurs", next: "q17", recap: "Plusieurs X" }
            ],
            help: {
                title: "Nombre de Prédicteurs",
                optionA: { title: "Un seul", desc: "Une variable X impacte Y.", ex: "Études -> Salaire." },
                optionB: { title: "Plusieurs", desc: "Un mélange de variables impacte Y.", ex: "Études + Expérience -> Salaire." }
            }
        },
        q17: {
            question: "As-tu des variables de contrôle à neutraliser ?",
            options: [
                { text: "Non", result: "res_linear_reg_multiple", recap: "Pas de contrôle" },
                { text: "Oui, dont une covariable continue", result: "res_ancova", recap: "Covariable" },
                { text: "Oui, et j'ai plusieurs variables dépendantes", result: "res_manova", recap: "Plusieurs Y" }
            ],
            help: {
                title: "Complexité du Modèle",
                optionA: { title: "Direct", desc: "Juste prédire Y à partir de plusieurs X.", ex: "Régression multiple." },
                optionB: { title: "Contrôlé", desc: "Neutraliser une variable pour voir le vrai effet.", ex: "ANCOVA." },
                optionC: { title: "Multivarié", desc: "Plusieurs résultats (Y) différents à la fois.", ex: "MANOVA." }
            }
        },

        // Branch 6: Vérifier un postulat
        q19: {
            question: "Quel postulat veux-tu vérifier ?",
            options: [
                { text: "La normalité de mes données", result: "res_shapiro", recap: "Normalité" },
                { text: "L'égalité des variances entre groupes", result: "res_levene", recap: "Homoscédasticité" },
                { text: "Je veux savoir quelle alternative non-paramétrique utiliser", next: "q20", recap: "Alternative non-param" }
            ],
            help: {
                title: "Choix du Postulat",
                optionA: { title: "Normalité", desc: "Est-ce que mes données suivent la loi normale ?", ex: "Test de Shapiro-Wilk." },
                optionB: { title: "Variances", desc: "Est-ce que l'étalement est le même partout ?", ex: "Test de Levene." },
                optionC: { title: "Secours", desc: "Vers quel test se tourner si les règles sont cassées ?", ex: "L'alternative Rank-based." }
            }
        },
        q20: {
            question: "Quel test paramétrique voulais-tu utiliser ?",
            options: [
                { text: "Test t indépendant", result: "res_mann_whitney", recap: "vs Test t indé" },
                { text: "Test t apparié", result: "res_wilcoxon", recap: "vs Test t apparié" },
                { text: "ANOVA", result: "res_kruskal_wallis", recap: "vs ANOVA" }
            ],
            help: {
                title: "Test d'origine",
                optionA: { title: "T Indépendant", desc: "Tu voulais comparer deux groupes distincts.", ex: "Secours : Mann-Whitney." },
                optionB: { title: "T Apparié", desc: "Tu voulais comparer avant/après.", ex: "Secours : Wilcoxon." },
                optionC: { title: "ANOVA", desc: "Tu voulais comparer 3+ groupes.", ex: "Secours : Kruskal-Wallis." }
            }
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
            expert: "loi-normale",
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
            expert: "stat_mode",
            targetId: "chapitre-3"
        },
        res_visu_quali: {
            isResult: true,
            testName: "Barres / Camembert",
            text: "Le <strong>Diagramme en barres</strong> est plus lisible pour comparer des fréquences. Le <strong>Camembert</strong> est utile pour visualiser des parts d'un tout.",
            expert: "stat_mode",
            targetId: "chapitre-3"
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
            expert: "test_ttest",
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
            expert: "test_manova",
            targetId: "test-manova"
        },
        res_linear_reg_simple: {
            isResult: true,
            testName: "Régression Linéaire Simple",
            text: "Modélise la relation entre une variable dépendante and une seule variable explicative.",
            expert: "test_pearson",
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
            question: "What is your analysis goal?",
            options: [
                { text: "Describe my data", next: "q2", recap: "Description" },
                { text: "Compare groups", next: "q5", recap: "Group comparison" },
                { text: "Study a relationship between two variables", next: "q10", recap: "Relationship" },
                { text: "Predict a variable from others", next: "q15", recap: "Prediction" },
                { text: "Verify a statistical assumption", next: "q19", recap: "Assumption check" }
            ],
            help: {
                title: "Choosing your goal",
                optionA: { title: "Describe", desc: "You want to summarize your data (mean, frequencies) without looking for complex links.", ex: "What is the average age of my group?" },
                optionB: { title: "Compare", desc: "You want to know if two groups (e.g., Men/Women) differ on a criterion.", ex: "Do women sleep more than men?" },
                optionC: { title: "Relationship", desc: "You want to see if two variables evolve together (e.g., Height and Weight).", ex: "The taller you are, the heavier you are?" },
                optionD: { title: "Predict", desc: "You want to model a relationship to predict a future outcome (Regression).", ex: "Can I predict salary from years of education?" },
                optionE: { title: "Assumption", desc: "You want to ensure your data follows mathematical rules (Normality, Homogeneity).", ex: "Does my data follow a normal distribution?" }
            }
        },

        // Branch 1: Describe my data
        q2: {
            question: "What type of variable do you want to describe?",
            options: [
                { text: "Quantitative variable (continuous)", next: "q3", recap: "Quanti" },
                { text: "Qualitative variable (categorical)", next: "q4", recap: "Quali" }
            ],
            help: {
                title: "Variable Types",
                optionA: { title: "Quantitative", desc: "Measurable or countable numbers.", ex: "Age, temperature, exam score." },
                optionB: { title: "Qualitative", desc: "Categories or labels.", ex: "Gender, blood type, favorite color." }
            }
        },
        q3: {
            question: "What do you want to calculate?",
            options: [
                { text: "Central tendency", result: "res_tendance_centrale", recap: "Central tendency" },
                { text: "Dispersion", result: "res_dispersion", recap: "Dispersion" },
                { text: "Visualize distribution", result: "res_visu_quanti", recap: "Visualization" },
                { text: "Estimate value in population", result: "res_intervalle_confiance", recap: "Estimation" }
            ],
            help: {
                title: "What to measure?",
                optionA: { title: "Central tendency", desc: "The 'center' of your data.", ex: "The class average." },
                optionB: { title: "Dispersion", desc: "Whether your data is tight or spread out.", ex: "The standard deviation of results." },
                optionC: { title: "Distribution", desc: "The 'shape' of your data.", ex: "Histogram or Boxplot." },
                optionD: { title: "Population", desc: "Generalize your sample to everyone.", ex: "Confidence interval." }
            }
        },
        q4: {
            question: "What do you want to do?",
            options: [
                { text: "Summarize frequencies", result: "res_tri_plat", recap: "Frequencies" },
                { text: "Visualize", result: "res_visu_quali", recap: "Visualization" }
            ],
            help: {
                title: "Describing categories",
                optionA: { title: "Frequencies", desc: "Count how many are in each group.", ex: "30% Women, 70% Men." },
                optionB: { title: "Visualize", desc: "Make a simple chart.", ex: "Bar chart or pie chart." }
            }
        },

        // Branch 2: Compare groups (Quali x Quanti)
        q5: {
            question: "How many groups are you comparing?",
            options: [
                { text: "2 groups", next: "q6", recap: "2 groups" },
                { text: "3 or more groups", next: "q9", recap: "3+ groups" }
            ],
            help: {
                title: "Number of groups",
                optionA: { title: "2 groups", desc: "Simple comparison between two entities.", ex: "Girls vs Boys." },
                optionB: { title: "3+ groups", desc: "Multiple comparison between several entities.", ex: "France vs UK vs USA." }
            }
        },
        q6: {
            question: "Are your measures paired? (e.g., same individual measured twice)",
            options: [
                { text: "Yes", next: "q7", recap: "Paired" },
                { text: "No", next: "q8", recap: "Independent" }
            ],
            help: {
                title: "Link between measures",
                optionA: { title: "Paired", desc: "The same people are tested multiple times.", ex: "Weight before diet vs Weight after diet." },
                optionB: { title: "Independent", desc: "Two totally different groups of people.", ex: "Group A (drug) vs Group B (placebo)." }
            }
        },
        q7: {
            question: "Does your data follow a normal distribution? (or n > 30)",
            options: [
                { text: "Yes", result: "res_ttest_paired", recap: "Normality OK" },
                { text: "No", result: "res_wilcoxon", recap: "Non-normal" }
            ],
            help: {
                title: "Normal Distribution",
                optionA: { title: "Normality OK", desc: "Your data forms a bell curve.", ex: "Shapiro-Wilk p > .05" },
                optionB: { title: "Non-normal", desc: "Your data is skewed or very dispersed.", ex: "Shapiro-Wilk p < .05" }
            }
        },
        q8: {
            question: "Are the variances of the groups equal?",
            options: [
                { text: "Yes (or I don't know)", result: "res_ttest_ind", recap: "Equal variances" },
                { text: "No", result: "res_welch", recap: "Unequal variances" },
                { text: "I don't know if my data is normal", next: "q8b", recap: "Normality uncertainty" }
            ],
            help: {
                title: "Equality of Variances",
                optionA: { title: "Equal", desc: "Both groups have similar spread.", ex: "Levene's test p > .05" },
                optionB: { title: "Unequal", desc: "One group is much more 'spread out' than the other.", ex: "Levene's test p < .05" },
                optionC: { title: "Uncertainty", desc: "If you haven't tested normality yet.", ex: "Help me check normality first." }
            }
        },
        q8b: {
            question: "Does your data follow a normal distribution?",
            options: [
                { text: "Yes", result: "res_ttest_ind_welch", recap: "Normality OK" },
                { text: "No", result: "res_mann_whitney", recap: "Non-normal" }
            ],
            help: {
                title: "Normal Distribution",
                optionA: { title: "Normality OK", desc: "Symmetrical bell curve.", ex: "Required for t-test." },
                optionB: { title: "Non-normal", desc: "Irregular distribution or sample < 30.", ex: "Use Mann-Whitney (non-parametric)." }
            }
        },
        q9: {
            question: "Does your data follow a normal distribution?",
            options: [
                { text: "Yes", result: "res_anova", recap: "Normality OK" },
                { text: "No", result: "res_kruskal_wallis", recap: "Non-normal" }
            ],
            help: {
                title: "Normal Distribution",
                optionA: { title: "Normality OK", desc: "Symmetrical central tendency.", ex: "Required for ANOVA." },
                optionB: { title: "Non-normal", desc: "Asymmetrical samples.", ex: "Use Kruskal-Wallis (non-parametric)." }
            }
        },

        // Branch 3: Compare proportions (Quali x Quali)
        q10: {
            question: "Are both your variables qualitative?",
            options: [
                { text: "Yes", next: "q11", recap: "Quali x Quali" },
                { text: "No (one quanti and one quali)", next: "q5", recap: "Quanti x Quali" },
                { text: "No (two quanti)", next: "q13", recap: "Quanti x Quanti" }
            ],
            help: {
                title: "Link Type",
                optionA: { title: "Quali x Quali", desc: "Do two categories influence each other?", ex: "Link between job and satisfaction (Yes/No)." },
                optionB: { title: "Quanti x Quali", desc: "Does a mean change according to a category?", ex: "Average salary by Degree." },
                optionC: { title: "Quanti x Quanti", desc: "Do two numbers evolve together?", ex: "Link between consumption and price." }
            }
        },
        q11: {
            question: "What is your sample size?",
            options: [
                { text: "Large (all cells > 5)", next: "q12", recap: "Large sample" },
                { text: "Small (at least one cell ≤ 5)", result: "res_fisher", recap: "Small sample" }
            ],
            help: {
                title: "Cell Count",
                optionA: { title: "Large", desc: "Your groups are large enough for χ².", ex: "All table cells > 5." },
                optionB: { title: "Small", desc: "Sample too small for χ².", ex: "One empty cell or < 5 individuals." }
            }
        },
        q12: {
            question: "What do you want to measure?",
            options: [
                { text: "Whether there is an association", result: "res_chi2", recap: "Association" },
                { text: "The strength of the association", result: "res_cramer_v", recap: "Strength" },
                { text: "Both", result: "res_chi2_cramer", recap: "Both" }
            ],
            help: {
                title: "Significance vs Strength",
                optionA: { title: "Association", desc: "Is there a real link or is it due to chance?", ex: "χ² test." },
                optionB: { title: "Strength", desc: "Is the link weak or powerful?", ex: "Cramer's V (0 to 1)." },
                optionC: { title: "Both", desc: "Prove the link AND measure its importance.", ex: "χ² + Cramer's V." }
            }
        },

        // Branch 4: Study a relationship (Quanti x Quanti)
        q13: {
            question: "What do you want to do?",
            options: [
                { text: "Measure the strength of the link", next: "q14", recap: "Intensity" },
                { text: "Explain or predict a variable", next: "q15", recap: "Prediction" }
            ],
            help: {
                title: "Correlation vs Regression",
                optionA: { title: "Link Strength", desc: "Do they move together?", ex: "Correlation (Pearson)." },
                optionB: { title: "Predict", desc: "Calculate Y value if I know X.", ex: "Linear regression." }
            }
        },
        q14: {
            question: "Is your data normal and without outliers?",
            options: [
                { text: "Yes", result: "res_pearson", recap: "Normality OK" },
                { text: "No", result: "res_spearman", recap: "Non-normal" }
            ],
            help: {
                title: "Normal Distribution",
                optionA: { title: "Normality OK", desc: "The relationship forms a straight line.", ex: "Pearson correlation." },
                optionB: { title: "Non-normal", desc: "The relationship is curved or non-normal.", ex: "Spearman correlation." }
            }
        },

        // Branch 5: Predict / Explain
        q15: {
            question: "Is your variable to explain (dependent) ...?",
            options: [
                { text: "Continuous (e.g., score, age, income)", next: "q16", recap: "Y Continuous" },
                { text: "Binary (e.g., success/failure, yes/no)", result: "res_logistic_reg", recap: "Y Binary" }
            ],
            help: {
                title: "Dependent Variable (Y)",
                optionA: { title: "Continuous", desc: "What you want to explain is a number.", ex: "Predict sales (in $)." },
                optionB: { title: "Binary", desc: "What you want to explain is a choice (0/1).", ex: "Predict success (Yes/No)." }
            }
        },
        q16: {
            question: "How many explanatory variables do you have?",
            options: [
                { text: "Only one", result: "res_linear_reg_simple", recap: "1 X" },
                { text: "Several", next: "q17", recap: "Several X" }
            ],
            help: {
                title: "Number of Predictors",
                optionA: { title: "Only one", desc: "One variable X impacts Y.", ex: "Education -> Salary." },
                optionB: { title: "Several", desc: "A mix of variables impacts Y.", ex: "Education + Experience -> Salary." }
            }
        },
        q17: {
            question: "Do you have control variables to neutralize?",
            options: [
                { text: "No", result: "res_linear_reg_multiple", recap: "No control" },
                { text: "Yes, including a continuous covariate", result: "res_ancova", recap: "Covariate" },
                { text: "Yes, and I have several dependent variables", result: "res_manova", recap: "Several Y" }
            ],
            help: {
                title: "Model Complexity",
                optionA: { title: "Direct", desc: "Just predict Y from several X.", ex: "Multiple regression." },
                optionB: { title: "Controlled", desc: "Neutralize a variable to see the real effect.", ex: "ANCOVA." },
                optionC: { title: "Multivariate", desc: "Several different results (Y) at once.", ex: "MANOVA." }
            }
        },

        // Branch 6: Verify an assumption
        q19: {
            question: "Which assumption do you want to verify?",
            options: [
                { text: "Normality of my data", result: "res_shapiro", recap: "Normality" },
                { text: "Equality of variances between groups", result: "res_levene", recap: "Homoscedasticity" },
                { text: "I want to know which non-parametric alternative to use", next: "q20", recap: "Non-param alternative" }
            ],
            help: {
                title: "Assumption Choice",
                optionA: { title: "Normality", desc: "Does my data follow a normal distribution?", ex: "Shapiro-Wilk test." },
                optionB: { title: "Variances", desc: "Is the spread the same everywhere?", ex: "Levene's test." },
                optionC: { title: "Safety test", desc: "Which test to use if rules are broken?", ex: "Rank-based alternative." }
            }
        },
        q20: {
            question: "Which parametric test did you want to use?",
            options: [
                { text: "Independent t-test", result: "res_mann_whitney", recap: "vs Indep t-test" },
                { text: "Paired t-test", result: "res_wilcoxon", recap: "vs Paired t-test" },
                { text: "ANOVA", result: "res_kruskal_wallis", recap: "vs ANOVA" }
            ],
            help: {
                title: "Original Test",
                optionA: { title: "T Indep", desc: "You wanted to compare two distinct groups.", ex: "Safety: Mann-Whitney." },
                optionB: { title: "T Paired", desc: "You wanted to compare before/after.", ex: "Safety: Wilcoxon." },
                optionC: { title: "ANOVA", desc: "You wanted to compare 3+ groups.", ex: "Safety: Kruskal-Wallis." }
            }
        },

        // --- RESULTS ---
        res_tendance_centrale: {
            isResult: true,
            testName: "Mean / Median / Mode",
            text: "Use <strong>Mean</strong> for normal data, <strong>Median</strong> for skewed or ordinal data, and <strong>Mode</strong> for categories.",
            expert: "loi-normale",
            targetId: "stat-moyenne"
        },
        res_dispersion: {
            isResult: true,
            testName: "Variance / Standard Deviation / Quantiles",
            text: "<strong>Standard Deviation</strong> is the standard for dispersion. Use <strong>Quantiles</strong> (quartiles) for non-normal distributions.",
            expert: "loi-normale",
            targetId: "stat-ecart-type"
        },
        res_visu_quanti: {
            isResult: true,
            testName: "Histogram / Boxplot",
            text: "The <strong>Histogram</strong> shows the distribution's shape. The <strong>Boxplot</strong> is ideal for spotting outliers.",
            expert: "loi-normale",
            targetId: "chapitre-3"
        },
        res_intervalle_confiance: {
            isResult: true,
            testName: "Confidence Interval",
            text: "Allows estimating the area where the true population mean lies with a given probability (often 95%).",
            expert: "loi-normale",
            targetId: "stat-moyenne"
        },
        res_tri_plat: {
            isResult: true,
            testName: "Frequencies / Crosstabs",
            text: "Summarizes counts and percentages for each category of your variable.",
            expert: "stat_mode",
            targetId: "chapitre-3"
        },
        res_visu_quali: {
            isResult: true,
            testName: "Bar charts / Pie charts",
            text: "<strong>Bar charts</strong> are clearer for comparing frequencies. <strong>Pie charts</strong> are useful for visualizing parts of a whole.",
            expert: "stat_mode",
            targetId: "chapitre-3"
        },
        res_ttest_paired: {
            isResult: true,
            testName: "Paired t-test (Student)",
            text: "Used to compare two means on the same individuals (e.g., Before/After).",
            expert: "test_ttest_paired",
            targetId: "test-ttest"
        },
        res_wilcoxon: {
            isResult: true,
            testName: "Wilcoxon Test",
            text: "The non-parametric alternative to the paired t-test, for non-normal data.",
            expert: "test_wilcoxon",
            targetId: "test-mann"
        },
        res_ttest_ind: {
            isResult: true,
            testName: "Independent t-test (Student)",
            text: "Compares means of two distinct groups (e.g., Men vs Women) when variances are equal.",
            expert: "test_ttest",
            targetId: "test-ttest"
        },
        res_welch: {
            isResult: true,
            testName: "Welch's Test",
            text: "A variant of Student's t-test to use when group variances are unequal.",
            expert: "test_ttest",
            targetId: "test-ttest"
        },
        res_ttest_ind_welch: {
            isResult: true,
            testName: "Indep t-test / Welch",
            text: "Your data is normal. Use the classic t-test (Student) if variances are equal, otherwise Welch's test.",
            expert: "test_ttest",
            targetId: "test-ttest"
        },
        res_mann_whitney: {
            isResult: true,
            testName: "Mann-Whitney U Test",
            text: "The non-parametric alternative to the independent t-test for non-normal data or small samples.",
            expert: "test_mann",
            targetId: "test-mann"
        },
        res_anova: {
            isResult: true,
            testName: "One-way ANOVA",
            text: "Compares the means of 3 or more groups.",
            expert: "test_anova",
            targetId: "test-anova"
        },
        res_kruskal_wallis: {
            isResult: true,
            testName: "Kruskal-Wallis",
            text: "The non-parametric alternative to ANOVA when data is not normal.",
            expert: "test_kruskal",
            targetId: "test-kruskal"
        },
        res_fisher: {
            isResult: true,
            testName: "Fisher's Exact Test",
            text: "Use to cross two qualitative variables when sample sizes are small (at least one cell ≤ 5).",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_chi2: {
            isResult: true,
            testName: "Chi-Square Test (χ²)",
            text: "Tests independence between two qualitative variables on large samples.",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_cramer_v: {
            isResult: true,
            testName: "Cramer's V",
            text: "Indicates the strength of association between two qualitative variables after a Chi-Square test.",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_chi2_cramer: {
            isResult: true,
            testName: "Chi-Square + Cramer's V",
            text: "Cross the data, calculate Chi-Square for significance and Cramer's V for strength.",
            expert: "test_chi2",
            targetId: "test-chi2"
        },
        res_pearson: {
            isResult: true,
            testName: "Pearson Correlation (r)",
            text: "Measures the strength of the linear link between two normal quantitative variables.",
            expert: "test_pearson",
            targetId: "test-cor"
        },
        res_spearman: {
            isResult: true,
            testName: "Spearman Correlation (ρ)",
            text: "Measures the link between two quantitative (or ordinal) variables without assuming normality.",
            expert: "test_spearman",
            targetId: "test-spearman"
        },
        res_logistic_reg: {
            isResult: true,
            testName: "Logistic Regression",
            text: "Used to predict a binary variable (Yes/No) from one or more predictors.",
            expert: "test_manova",
            targetId: "test-manova"
        },
        res_linear_reg_simple: {
            isResult: true,
            testName: "Simple Linear Regression",
            text: "Models the relationship between a dependent variable and a single explanatory variable.",
            expert: "test_pearson",
            targetId: "test-cor"
        },
        res_linear_reg_multiple: {
            isResult: true,
            testName: "Multiple Linear Regression",
            text: "Models the relationship between a dependent variable and several explanatory variables.",
            expert: "test_manova"
        },
        res_ancova: {
            isResult: true,
            testName: "ANCOVA",
            text: "Compares groups while neutralizing the effect of a continuous parasitic variable.",
            expert: "test_ancova",
            targetId: "test-ancova"
        },
        res_manova: {
            isResult: true,
            testName: "MANOVA",
            text: "Analyzes the effect of independent variables on several dependent variables simultaneously.",
            expert: "test_manova",
            targetId: "test-manova"
        },
        res_shapiro: {
            isResult: true,
            testName: "Shapiro-Wilk Test",
            text: "The standard test to check if a sample follows a normal distribution.",
            expert: "loi-normale"
        },
        res_levene: {
            isResult: true,
            testName: "Levene's Test",
            text: "Checks for equality of variances (homoscedasticity) between different groups.",
            expert: "test_anova"
        }
    }
};
