/**
 * Data for the Glossary
 * Order indexes:
 * - az: Alphabetical order
 * - chrono: Chronological order from Statistical Rethinking
 * - diff: Difficulty level
 * - theoryId: ID of the corresponding theoretical sheet in theoryData (optional)
 */
const glossaryData = [
  {
    "id": "algorithme-de-metropolis",
    "title": "Algorithme de Metropolis",
    "definition": "C'est un algorithme d'échantillonnage de Monte-Carlo par chaînes de Markov qui explore une distribution cible en proposant des sauts aléatoires symétriques et en les acceptant ou les rejetant selon leurs probabilités relatives.",
    "order_chrono": 25,
    "order_diff": 33,
    "theoryId": "mcmc-logic"
  },
  {
    "id": "amnesie-anterograde",
    "title": "Amnésie antérograde",
    "definition": "Il s'agit d'un phénomène métaphorique par lequel un modèle statistique classique oublie les informations apprises d'une catégorie lorsqu'il passe à l'estimation d'une autre, un problème qui est résolu par les modèles multiniveaux.",
    "order_chrono": 36,
    "order_diff": 37,
    "theoryId": null
  },
  {
    "id": "analyse-de-donnees-bayesienne",
    "title": "Analyse de données bayésienne",
    "definition": "C'est une procédure logique qui utilise la théorie des probabilités pour compter toutes les façons dont les données auraient pu se produire selon nos hypothèses afin de classer la plausibilité relative de chaque valeur de paramètre.",
    "order_chrono": 0,
    "order_diff": 7,
    "theoryId": "analyse-bayesienne"
  },
  {
    "id": "anova",
    "title": "ANOVA (Analyse de Variance)",
    "definition": "Test de comparaison de moyennes permettant d'évaluer simultanément si au moins un groupe parmi trois ou plus diffère significativement des autres en décomposant la variance totale.",
    "order_chrono": -1,
    "order_diff": 15,
    "theoryId": "test-anova"
  },
  {
    "id": "backdoor-path",
    "title": "Chemin détourné (Backdoor path)",
    "definition": "Dans un graphe causal, c'est un chemin non causal entrant par l'arrière d'une variable prédictive qui peut fausser l'inférence en créant une corrélation fallacieuse avec la variable de résultat.",
    "order_chrono": 15,
    "order_diff": 17,
    "theoryId": null
  },
  {
    "id": "biais",
    "title": "Biais",
    "definition": "Erreur systématique qui menace la validité d'une étude (désirabilité sociale, non-réponse, cadrage). Diffère de l'erreur aléatoire par son caractère directionnel.",
    "order_chrono": -1,
    "order_diff": 3,
    "theoryId": "biais-enquete"
  },
  {
    "id": "biais-post-traitement",
    "title": "Biais post-traitement",
    "definition": "C'est une erreur d'inférence qui survient lorsque l'on inclut dans un modèle des variables prédictives qui sont en réalité des conséquences d'autres variables de l'étude.",
    "order_chrono": 12,
    "order_diff": 15,
    "theoryId": null
  },
  {
    "id": "bloc-de-donnees",
    "title": "Bloc de données (Data frame)",
    "definition": "Type d'objet spécifique dans le langage R, constitué d'un tableau où les colonnes représentent des variables et les lignes correspondent à des cas individuels.",
    "order_chrono": 8,
    "order_diff": 1,
    "theoryId": null
  },
  {
    "id": "boite-a-moustaches",
    "title": "Boîte à Moustaches (Boxplot)",
    "definition": "Représentation graphique synthétisant la distribution d'une variable (médiane, quartiles) et permettant d'identifier visuellement les valeurs atypiques (outliers).",
    "order_chrono": -1,
    "order_diff": 5,
    "theoryId": "stat-boxplot"
  },
  {
    "id": "cepa",
    "title": "Ceteris Paribus (CEPA)",
    "definition": "Raisonnement 'toutes choses égales par ailleurs' consistant à isoler l'effet propre d'une variable en neutralisant mathématiquement l'influence des autres facteurs.",
    "order_chrono": -1,
    "order_diff": 12,
    "theoryId": "raisonnement-cepa"
  },
  {
    "id": "chi-deux",
    "title": "Chi-Deux (χ²)",
    "definition": "Test d'indépendance utilisé pour déterminer s'il existe un lien significatif entre deux variables qualitatives (nominales).",
    "order_chrono": -1,
    "order_diff": 14,
    "theoryId": "test-chi2"
  },
  {
    "id": "collider",
    "title": "Collisionneur (Collider)",
    "definition": "Variable dans un graphe causal vers laquelle convergent deux flèches. Conditionner sur un collisionneur crée une association trompeuse entre ses causes.",
    "order_chrono": 14,
    "order_diff": 16,
    "theoryId": null
  },
  {
    "id": "coefficient-determination",
    "title": "Coefficient de Détermination (R²)",
    "definition": "Mesure la part de la variance de la variable dépendante expliquée par le modèle de régression. Varie de 0 à 1.",
    "order_chrono": -1,
    "order_diff": 11,
    "theoryId": "coeff-determination"
  },
  {
    "id": "correlation-pearson",
    "title": "Corrélation de Pearson (r)",
    "definition": "Indice mesurant l'intensité et la direction d'une relation linéaire entre deux variables quantitatives continues.",
    "order_chrono": -1,
    "order_diff": 8,
    "theoryId": "test-cor"
  },
  {
    "id": "correlation-spearman",
    "title": "Corrélation de Spearman (ρ)",
    "definition": "Alternative non-paramétrique à Pearson basée sur les rangs des données, sensible aux relations monotones même non-linéaires.",
    "order_chrono": -1,
    "order_diff": 9,
    "theoryId": "test-spearman"
  },
  {
    "id": "critere-akaike",
    "title": "Critère AIC",
    "definition": "Mesure de la qualité d'ajustement d'un modèle qui pénalise la complexité pour éviter le surajustement. Un AIC plus faible indique un meilleur compromis.",
    "order_chrono": 22,
    "order_diff": 25,
    "theoryId": "overfitting-underfitting"
  },
  {
    "id": "critere-waic",
    "title": "Critère WAIC",
    "definition": "Extension bayésienne de l'AIC estimant l'exactitude prédictive hors échantillon en utilisant la distribution a posteriori entière.",
    "order_chrono": 23,
    "order_diff": 26,
    "theoryId": "overfitting-underfitting"
  },
  {
    "id": "degres-liberte",
    "title": "Degrés de Liberté (ddl)",
    "definition": "Nombre de dimensions indépendantes dans un calcul statistique, essentiel pour identifier la loi de distribution théorique d'un test.",
    "order_chrono": -1,
    "order_diff": 10,
    "theoryId": "degre-liberte"
  },
  {
    "id": "deviance",
    "title": "Déviance",
    "definition": "Mesure de l'ajustement d'un modèle basée sur la log-vraisemblance. Sert de base aux calculs des critères d'information (AIC, WAIC).",
    "order_chrono": 20,
    "order_diff": 23,
    "theoryId": null
  },
  {
    "id": "dist-dirichlet",
    "title": "Distribution de Dirichlet",
    "definition": "Généralisation de la loi bêta pour plusieurs variables dont la somme doit égaler 1. Utilisée comme prior pour des probabilités catégorielles.",
    "order_chrono": 35,
    "order_diff": 31,
    "theoryId": null
  },
  {
    "id": "dist-echantillonnage",
    "title": "Distribution d'Échantillonnage",
    "definition": "Loi de probabilité formée par l'ensemble des valeurs qu'une statistique (ex: moyenne) peut prendre sur tous les échantillons possibles de taille n.",
    "order_chrono": -1,
    "order_diff": 13,
    "theoryId": "dist-echantillonnage"
  },
  {
    "id": "divergence-kl",
    "title": "Divergence de Kullback-Leibler",
    "definition": "Mesure d'asymétrie de l'incertitude entre deux distributions de probabilités, souvent utilisée pour quantifier la perte d'information d'un modèle.",
    "order_chrono": 19,
    "order_diff": 22,
    "theoryId": null
  },
  {
    "id": "ecart-type",
    "title": "Écart-Type (Standard Deviation)",
    "definition": "Mesure de la dispersion des données autour de leur moyenne, exprimée dans l'unité d'origine de la variable (racine carrée de la variance).",
    "order_chrono": -1,
    "order_diff": 4,
    "theoryId": "stat-ecart-type"
  },
  {
    "id": "echantillon",
    "title": "Échantillon",
    "definition": "Sous-ensemble d'unités tirées d'une population parente, utilisé comme base pour l'inférence statistique.",
    "order_chrono": -1,
    "order_diff": 2,
    "theoryId": "echantillon-pop"
  },
  {
    "id": "echantillonnage-gibbs",
    "title": "Échantillonnage de Gibbs",
    "definition": "Variante efficace de MCMC qui échantillonne séquentiellement chaque paramètre à partir de sa distribution conditionnelle sachant les autres.",
    "order_chrono": 27,
    "order_diff": 34,
    "theoryId": "mcmc-logic"
  },
  {
    "id": "effet-suppression",
    "title": "Effet de Suppression",
    "definition": "Phénomène où l'introduction d'un contrôle statistique fait apparaître une relation entre deux variables qui semblait inexistante au niveau bivarié.",
    "order_chrono": -1,
    "order_diff": 18,
    "theoryId": "cor-spurieuse"
  },
  {
    "id": "entropie",
    "title": "Entropie de l'information",
    "definition": "Mesure de l'incertitude ou du désordre dans une distribution de probabilités. Maximiser l'entropie revient à choisir la distribution la plus conservatrice.",
    "order_chrono": 18,
    "order_diff": 21,
    "theoryId": null
  },
  {
    "id": "front-door",
    "title": "Front-door criterion",
    "definition": "Méthode d'inférence causale utilisant un médiateur pour isoler l'effet d'une cause malgré la présence de facteurs de confusion inobservés.",
    "order_chrono": 39,
    "order_diff": 20,
    "theoryId": null
  },
  {
    "id": "hmc",
    "title": "Monte-Carlo Hamiltonien (HMC)",
    "definition": "Algorithme MCMC utilisant la simulation physique (dynamique hamiltonienne) pour explorer efficacement les distributions a posteriori complexes.",
    "order_chrono": 28,
    "order_diff": 35,
    "theoryId": "mcmc-logic"
  },
  {
    "id": "hypothese-nulle",
    "title": "Hypothèse Nulle (H0)",
    "definition": "Hypothèse de base stipulant l'absence de lien ou d'effet. Le test statistique vise à évaluer si les données permettent de la rejeter.",
    "order_chrono": -1,
    "order_diff": 6,
    "theoryId": "hypothese-nulle"
  },
  {
    "id": "ic",
    "title": "Intervalle de Confiance (IC)",
    "definition": "Estimation par intervalle indiquant la plage de valeurs plausibles pour un paramètre de population avec un certain niveau de confiance (ex: 95%).",
    "order_chrono": -1,
    "order_diff": 7,
    "theoryId": "concept-ic"
  },
  {
    "id": "indice-gini",
    "title": "Indice de Gini",
    "definition": "Coefficient mesurant la concentration d'une ressource (souvent les revenus) au sein d'une population. Varie entre 0 (égalité) et 1 (concentration totale).",
    "order_chrono": -1,
    "order_diff": 12,
    "theoryId": "stat-dist-comp"
  },
  {
    "id": "inference",
    "title": "Inférence Statistique",
    "definition": "Démarche logique consistant à généraliser à une population entière les caractéristiques observées sur un échantillon aléatoire.",
    "order_chrono": -1,
    "order_diff": 5,
    "theoryId": "principe-inference"
  },
  {
    "id": "interaction-term",
    "title": "Interaction",
    "definition": "Situation où l'effet d'une variable indépendante sur la variable dépendante varie selon le niveau d'une autre variable indépendante.",
    "order_chrono": 24,
    "order_diff": 11,
    "theoryId": null
  },
  {
    "id": "levene",
    "title": "Test de Levene",
    "definition": "Procédure vérifiant l'homogénéité des variances entre plusieurs groupes, une condition préalable majeure pour le test t et l'ANOVA.",
    "order_chrono": -1,
    "order_diff": 14,
    "theoryId": "test-levene"
  },
  {
    "id": "loi-normale",
    "title": "Loi Normale (Gaussienne)",
    "definition": "La célèbre courbe en cloche symétrique définie par sa moyenne et son écart-type, occupant une place centrale grâce au Théorème Central Limite.",
    "order_chrono": -1,
    "order_diff": 4,
    "theoryId": "loi-normale"
  },
  {
    "id": "mcmc",
    "title": "Monte-Carlo par Chaînes de Markov (MCMC)",
    "definition": "Famille d'algorithmes permettant d'échantillonner des distributions a posteriori complexes par simulation de parcours aléatoires guidés.",
    "order_chrono": 26,
    "order_diff": 32,
    "theoryId": "mcmc-logic"
  },
  {
    "id": "mediane",
    "title": "Médiane",
    "definition": "Valeur de position séparant une série ordonnée en deux moitiés égales. Elle est plus robuste que la moyenne face aux valeurs extrêmes.",
    "order_chrono": -1,
    "order_diff": 3,
    "theoryId": "stat-mediane"
  },
  {
    "id": "mode",
    "title": "Mode",
    "definition": "Valeur ou catégorie la plus fréquente dans un jeu de données. Seul indicateur de tendance centrale applicable aux variables nominales.",
    "order_chrono": -1,
    "order_diff": 1,
    "theoryId": "stat-mode"
  },
  {
    "id": "modele-multiniveau",
    "title": "Modèle Multiniveau (Mixte)",
    "definition": "Modèle capable de gérer des données hiérarchisées en estimant des effets à la fois au niveau individuel et au niveau des groupes (clusters).",
    "order_chrono": 1,
    "order_diff": 38,
    "theoryId": null
  },
  {
    "id": "modele-zero-inflated",
    "title": "Modèle à Inflation de Zéros",
    "definition": "Modèle statistique hybride conçu pour les données de comptage présentant un excès de zéros inexpliqué par une loi de Poisson classique.",
    "order_chrono": 34,
    "order_diff": 30,
    "theoryId": null
  },
  {
    "id": "moyenne",
    "title": "Moyenne Arithmétique",
    "definition": "Point d'équilibre d'une distribution quantitative obtenu par la somme des valeurs divisée par leur nombre total.",
    "order_chrono": -1,
    "order_diff": 2,
    "theoryId": "stat-moyenne"
  },
  {
    "id": "multicolinearite",
    "title": "Multicolinéarité",
    "definition": "Problème en régression multiple où des prédicteurs très corrélés entre eux rendent les estimations instables et peu fiables.",
    "order_chrono": 11,
    "order_diff": 12,
    "theoryId": "multicolinearite"
  },
  {
    "id": "overfitting",
    "title": "Surajustement (Overfitting)",
    "definition": "Erreur consistant à créer un modèle trop complexe qui apprend le 'bruit' des données au lieu de la tendance, dégradant ainsi sa capacité prédictive.",
    "order_chrono": 16,
    "order_diff": 9,
    "theoryId": "overfitting-underfitting"
  },
  {
    "id": "p-value",
    "title": "P-Value",
    "definition": "Probabilité de voir un résultat si l'hypothèse nulle était vraie. On rejette H0 si p est inférieur au seuil alpha (souvent 0.05).",
    "order_chrono": -1,
    "order_diff": 8,
    "theoryId": "p-value"
  },
  {
    "id": "parametre",
    "title": "Paramètre",
    "definition": "Valeur numérique fixe caractérisant une population (ex: la vraie moyenne μ) que le chercheur tente d'estimer via des statistiques d'échantillon.",
    "order_chrono": 3,
    "order_diff": 3,
    "theoryId": "echantillon-pop"
  },
  {
    "id": "partial-pooling",
    "title": "Regroupement Partiel (Partial pooling)",
    "definition": "Technique des modèles multiniveaux permettant d'estimer les paramètres des groupes en s'appuyant à la fois sur leurs données propres et sur la moyenne globale.",
    "order_chrono": 2,
    "order_diff": 39,
    "theoryId": null
  },
  {
    "id": "population-target",
    "title": "Population",
    "definition": "Ensemble complet des unités (individus, objets, événements) sur lequel portent les conclusions d'une étude.",
    "order_chrono": -1,
    "order_diff": 1,
    "theoryId": "echantillon-pop"
  },
  {
    "id": "posteriori-dist",
    "title": "Probabilité a posteriori",
    "definition": "Distribution des connaissances sur un paramètre mise à jour après avoir combiné les probabilités a priori avec les données observées.",
    "order_chrono": 6,
    "order_diff": 6,
    "theoryId": "priors-posteriors"
  },
  {
    "id": "prior-dist",
    "title": "Probabilité a priori (Prior)",
    "definition": "État des connaissances ou des hypothèses sur un paramètre avant toute observation de données dans un cadre bayésien.",
    "order_chrono": 5,
    "order_diff": 5,
    "theoryId": "priors-posteriors"
  },
  {
    "id": "quantiles",
    "title": "Quantiles (Quartiles/Déciles)",
    "definition": "Valeurs de position découpant une distribution en parts égales (ex: 25% pour les quartiles, 10% pour les déciles).",
    "order_chrono": -1,
    "order_diff": 4,
    "theoryId": "stat-quantiles"
  },
  {
    "id": "reflexivite",
    "title": "Réflexivité",
    "definition": "Capacité critique du chercheur à analyser ses propres choix méthodologiques et à reconnaître que les données sont 'construites'.",
    "order_chrono": -1,
    "order_diff": 2,
    "theoryId": "reflexivite"
  },
  {
    "id": "regression-lineaire",
    "title": "Régression Linéaire",
    "definition": "Modèle prédisant la valeur d'une variable dépendante continue par une combinaison linéaire de un ou plusieurs prédicteurs.",
    "order_chrono": -1,
    "order_diff": 10,
    "theoryId": "droite-regression"
  },
  {
    "id": "residus",
    "title": "Résidus",
    "definition": "Écart entre la valeur réelle observée et la valeur prédite par le modèle pour chaque individu. Leur étude permet de diagnostiquer la qualité du modèle.",
    "order_chrono": -1,
    "order_diff": 11,
    "theoryId": "residus-regression"
  },
  {
    "id": "seuil-alpha",
    "title": "Seuil Alpha (α)",
    "definition": "Risque maximum d'erreur de type I (faux positif) toléré pour rejeter l'hypothèse nulle. Le standard académique est fixé à 0.05.",
    "order_chrono": -1,
    "order_diff": 7,
    "theoryId": "seuil-significativite"
  },
  {
    "id": "shapiro-wilk",
    "title": "Test de Shapiro-Wilk",
    "definition": "Test diagnostique vérifiant si un échantillon provient d'une distribution normale, condition d'application de nombreux tests paramétriques.",
    "order_chrono": -1,
    "order_diff": 13,
    "theoryId": "test-shapiro"
  },
  {
    "id": "simpson-paradox",
    "title": "Paradoxe de Simpson",
    "definition": "Phénomène où une tendance observée dans plusieurs groupes disparaît ou s'inverse lorsque les groupes sont combinés au niveau global.",
    "order_chrono": 31,
    "order_diff": 14,
    "theoryId": null
  },
  {
    "id": "tcl",
    "title": "Théorème Central Limite (TCL)",
    "definition": "Principe fondamental garantissant que les moyennes d'échantillons convergent vers une loi normale dès que la taille n est suffisante.",
    "order_chrono": -1,
    "order_diff": 12,
    "theoryId": "theoreme-central-limite"
  },
  {
    "id": "test-student",
    "title": "Test T de Student",
    "definition": "Procédure statistique comparant les moyennes de deux groupes indépendants ou appariés.",
    "order_chrono": -1,
    "order_diff": 14,
    "theoryId": "test-ttest"
  },
  {
    "id": "tri-à-plat",
    "title": "Tri à Plat",
    "definition": "Description simple de la distribution d'une seule variable catégorielle par décompte des effectifs de chaque modalité.",
    "order_chrono": -1,
    "order_diff": 1,
    "theoryId": "tri-plat"
  },
  {
    "id": "underfitting",
    "title": "Sous-ajustement (Underfitting)",
    "definition": "Erreur survenant lorsqu'un modèle est trop simple pour capturer la structure réelle des données, produisant de mauvaises prédictions.",
    "order_chrono": 17,
    "order_diff": 8,
    "theoryId": "overfitting-underfitting"
  },
  {
    "id": "validation-croisee",
    "title": "Validation Croisée (Cross-validation)",
    "definition": "Technique d'évaluation de la performance prédictive consistant à diviser les données en plusieurs sous-ensembles d'entraînement et de test.",
    "order_chrono": 21,
    "order_diff": 10,
    "theoryId": null
  },
  {
    "id": "variable-dependante",
    "title": "Variable Dépendante (VD)",
    "definition": "La variable de résultat (souvent notée Y) que l'on souhaite expliquer ou prédire à partir d'autres facteurs.",
    "order_chrono": -1,
    "order_diff": 6,
    "theoryId": "var-dep-indep"
  },
  {
    "id": "variable-independante",
    "title": "Variable Indépendante (VI)",
    "definition": "Variable manipulée ou observée (souvent notée X) supposée influencer la variable dépendante. Aussi appelée prédicteur.",
    "order_chrono": -1,
    "order_diff": 6,
    "theoryId": "var-dep-indep"
  },
  {
    "id": "variable-instrumentale",
    "title": "Variable Instrumentale",
    "definition": "Variable utilisée en inférence causale pour contourner l'influence de facteurs de confusion inobservés en ciblant un segment spécifique de variation.",
    "order_chrono": 38,
    "order_diff": 19,
    "theoryId": null
  },
  {
    "id": "variance-stat",
    "title": "Variance",
    "definition": "Moyenne des carrés des écarts à la moyenne, quantifiant la dispersion de la distribution (exprimée en unités au carré).",
    "order_chrono": -1,
    "order_diff": 5,
    "theoryId": "stat-variance"
  },
  {
    "id": "vraisemblance",
    "title": "Vraisemblance (Likelihood)",
    "definition": "Fonction mesurant la probabilité d'observer les données actuelles en supposant une valeur spécifique pour les paramètres du modèle.",
    "order_chrono": 4,
    "order_diff": 4,
    "theoryId": null
  }
];
