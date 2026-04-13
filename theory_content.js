const theoryData = {
    // ==========================================
    // BLOC 1 : Introduction et Esprit Critique
    // ==========================================
    "intro-stats": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Statistique Descriptive",
        subtitle: "La Statistique Descriptive",
        character: { shape: "nexus", color: "#6366f1", eyes: "happy" },
        sections: [
            {
                title: "Définitions fondamentales",
                content: "La statistique est la science de la collecte, de l'analyse et de l'interprétation des données. On distingue :\n*   **L'Unité Statistique** : L'entité de base (individu, ménage, entreprise).\n*   **La Variable** : La caractéristique mesurée (ex: âge, revenu).\n*   **La Modalité** : La valeur précise prise par une variable (ex: 25 ans, 'Marseille').",
                layout: "standard"
            },
            {
                title: "Statistique et Probabilités",
                content: "Alors que les **Probabilités** modélisent le futur (connaître la loi pour prédire le tirage), la **Statistique** analyse le passé (partir des données pour retrouver la loi). Passer du chiffre au récit :\n*   **Réduction de l'information** : Passer de N données à k paramètres clés.\n*   **Généralisation** : Estimer l'inconnu (Population) à partir du connu (Échantillon).",
                layout: "highlight"
            }
        ],
        footer: "La statistique est un processus de réduction et de généralisation de l'information, soumis à des hypothèses explicites."
    },
    "reflexivite": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Réflexivité et Construction des Données",
        subtitle: "La Construction des Données",
        character: { shape: "mirror", color: "#8b5cf6", eyes: "calm" },
        tags: ["réflexivité", "biais", "construction des données", "questionnaire", "épistémologie", "objectivité"],
        sections: [
            {
                title: "Construction des données",
                content: "Contrairement à ce que leur nom suggère, les données ne tombent pas du ciel. On ne les 'cueille' pas, on les **fabrique**.\n\nUne donnée est toujours le résultat d'un dispositif technique, humain et politique.",
                layout: "standard"
            },
            {
                title: "Analyse du dispositif de collecte",
                content: "Avant d'analyser un chiffre, demandez-vous comment il est né :\n*   **Le Questionnaire** : Quelle question a été posée ? Un mot peut tout changer.\n*   **Le Contexte** : L'enquête a-t-elle eu lieu par téléphone ou face-à-face ?\n*   **Les Invisibles** : Qui a-t-on oublié d'interroger ?",
                layout: "highlight"
            },
            {
                title: "Limites et angles morts",
                content: "Toute donnée est une **ombre projetée**. Elle montre une partie de la réalité mais en cache une autre. La réflexivité, c'est admettre ces angles morts.",
                layout: "alert"
            }
        ],
        footer: "L'analyse critique du dispositif de collecte est un préalable à toute interprétation substantielle."
    },
    "biais-enquete": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Biais de Collecte",
        subtitle: "Débusquer les Biais",
        character: { shape: "ambulance", color: "#ef4444", eyes: "surprised" },
        tags: ["biais", "désirabilité sociale", "non-réponse", "cadrage", "questionnaire", "erreur"],
        sections: [
            {
                title: "Biais de désirabilité sociale",
                content: "C'est l'un des plus redoutables : les gens mentent inconsciemment pour **paraître meilleurs**. \n\n*Exemple* : Dans un sondage, tout le monde se lave les mains après les toilettes. En réalité, une observation directe montre un chiffre bien plus bas.",
                layout: "alert"
            },
            {
                title: "Biais de non-réponse",
                content: "Les gens qui ne répondent pas ne sont pas 'neutres'. Si vous interrogez les clients d'un restaurant, les plus mécontents sont peut-être déjà partis sans répondre : votre échantillon est **biaisé vers le haut**.",
                layout: "highlight"
            },
            {
                title: "Effet de cadrage",
                content: "La forme de la question suggère la réponse. 'Pensez-vous que ce produit est utile ?' vs 'Quel est le principal défaut de ce produit ?'.",
                layout: "standard"
            }
        ],
        footer: "Chaque biais est une menace systématique à la validité interne ou externe de l'étude."
    },
    "echantillon-pop": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Population vs Échantillon",
        subtitle: "La Logique de l'Inférence",
        character: { shape: "marmite", color: "#4b5563", eyes: "calm" },
        tags: ["population", "échantillon", "paramètre", "statistique", "inférence", "taux de sondage", "cadre de sondage"],
        sections: [
            {
                title: "1. La Population (N)",
                content: "En statistique, la **Population** (notée **N**) est l'ensemble exhaustif des unités statistiques. \n\n*   **Paramètre** : Une valeur calculée sur N (ex: la vraie moyenne μ ou la vraie proportion π).\n*   **Cadre de sondage** : La liste physique de toutes les unités (annuaire, fichier client). Sans liste, pas de sondage probabiliste possible.",
                layout: "highlight"
            },
            {
                title: "2. L'Échantillon (n)",
                content: "L'**Échantillon** (noté **n**) est le sous-ensemble prélevé. \n\n*   **Statistique** : Une valeur calculée sur n (ex: moyenne x̄ ou proportion p).\n*   **Taux de sondage (f)** : Le rapport n/N. Plus il est élevé, plus l'échantillon est 'puissant'.",
                layout: "highlight"
            },
            {
                title: "3. Théorie de l'inférence",
                content: "L'inférence est le calcul de l'erreur commise lors de l'estimation :\n**Valeur Réelle (μ) = Estimation (x̄) ± Erreur d'échantillonnage**\n\nSi le tirage est aléatoire, cette erreur est calculable mathématiquement. S'il ne l'est pas, l'erreur est inconnue.",
                layout: "standard"
            }
        ],
        footer: "L'échantillon produit des estimations ponctuelles assorties d'une marge d'erreur probabiliste."
    },
    "representativite": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "La Représentativité",
        subtitle: "Propriétés du Tirage Aléatoire",
        character: { shape: "star", color: "#fbbf24", eyes: "happy" },
        tags: ["représentativité", "tirage aléatoire", "biais de sélection", "marge d'erreur", "taille d'échantillon", "loi des grands nombres"],
        sections: [
            {
                title: "Échantillonnage aléatoire",
                content: "La représentativité n'est pas une question de 'ressemblance' visuelle, mais une question de probabilités. \n*   **Le Tirage Aléatoire Simple** : Chaque unité a une probabilité égale (1/N) d'être choisie.\n*   **Le Biais de Sélection** : Si la probabilité d'inclusion dépend de la variable étudiée (ex: interroger des gens dans la rue sur leur mobilité), l'échantillon n'est plus représentatif.",
                layout: "standard"
            },
            {
                title: "Relativité de la taille d'échantillon",
                content: "Idée reçue : 'Il faut 10% de la population'.\nFaux ! La précision dépend de la taille absolue (n), pas du ratio n/N. Un échantillon de 1000 personnes donne la même précision pour une ville de 50 000 ou un pays de 60 millions d'habitants.",
                layout: "highlight"
            },
            {
                title: "Calcul de la marge d'erreur",
                content: "La marge d'erreur (e) est inversement proportionnelle à la racine carrée de n :\n**e ≈ 1 / √n**\nPour diviser l'erreur par 2, il faut multiplier la taille de l'échantillon par 4.",
                layout: "standard"
            }
        ],
        footer: "La représentativité est une propriété probabiliste garantie par le tirage aléatoire, non par la ressemblance perçue."
    },

    // ==========================================
    // BLOC 2 : Les Variables et la Description Univariée
    // ==========================================
    "types-variables": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Les 3 Types de Variables",
        subtitle: "Niveaux de Mesure et Échelles",
        character: { shape: "bins", color: "#f97316", eyes: "happy" },
        tags: ["variables", "nominal", "ordinal", "continu", "qualitatif", "quantitatif", "échelle de mesure", "Jamovi"],
        sections: [
            {
                title: "Niveaux de mesure",
                content: "Avant de lancer un calcul, vous devez identifier la nature de vos données. Imaginez que vous triez des objets dans trois bacs différents. Si vous vous trompez de bac, vos outils statistiques (moyenne, test, graphique) ne fonctionneront pas.",
                layout: "standard"
            },
            {
                title: "1. Échelle Nominale",
                content: "Ici, on ne mesure rien, on **nomme**. Les chiffres ne sont que des noms de code.\n*   **Exemples** : Genre (0=F, 1=H), Département, Type de logement.\n*   **Règle d'or** : On ne peut pas les additionner. Est-ce que 'Paris' + 'Lyon' = 'Marseille' ? Non.\n*   **Outil principal** : Le **Mode** (quelle étiquette revient le plus souvent ?).",
                layout: "highlight"
            },
            {
                title: "2. Le Bac 'Escalier' (Ordinal)",
                content: "Ici, il y a un **ordre logique**, une progression, mais l'écart entre les marches n'est pas fixe.\n*   **Exemples** : Niveau d'études (Bac < Master), Accord (Pas d'accord < D'accord < Très d'accord).\n*   **Règle d'or** : On sait qui est 'au-dessus', mais pas de combien exactement.\n*   **Outil principal** : La **Médiane** (quelle est la marche du milieu ?).",
                layout: "highlight"
            },
            {
                title: "3. Le Bac 'Mètre' (Continu / Ratio)",
                content: "Ici, on est dans la **mesure pure**. Les chiffres ont un sens mathématique complet.\n*   **Exemples** : Âge, Salaire, Poids, Temps de réaction.\n*   **Règle d'or** : Les écarts sont identiques (10 ans - 5 ans = 5 ans).\n*   **Outil principal** : La **Moyenne** et l'**Écart-Type**.",
                layout: "highlight"
            },
            {
                title: "Recommandation Méthodologique",
                content: "Dans les logiciels comme **Jamovi** ou **SPSS**, vous pouvez parfois 'tricher' : une variable ordinale avec beaucoup d'échelons (ex: une échelle de 1 à 10) est souvent traitée comme une variable continue pour avoir plus de puissance statistique. C'est un choix de chercheur, pas une vérité absolue !",
                layout: "alert"
            }
        ],
        footer: "Le niveau de mesure de la variable détermine l'ensemble des opérations statistiques légitimes."
    },
    "stat-mode": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Le Mode",
        subtitle: "Fréquence et Valeur Modale",
        character: { shape: "podium", color: "#fbbf24", eyes: "happy" },
        tags: ["mode", "tendance centrale", "fréquence", "nominal", "qualitatif", "valeur la plus fréquente"],
        sections: [
            {
                title: "Définition du Mode",
                content: "Le mode est la valeur la plus **fréquente**. Dans une foule de pulls bleus, le 'bleu' est le mode.\n\nC'est l'indicateur le plus simple pour résumer une variable nominale (catégories).",
                layout: "standard"
            },
            {
                title: "Propriété de Robustesse",
                content: "Le mode est insensible aux extrêmes. Qu'il y ait un millionnaire dans la pièce ne change rien au mode : si la majorité gagne le SMIC, le mode reste le SMIC.",
                layout: "highlight"
            },
            {
                title: "Conditions d'application",
                content: "C'est le **seul** indicateur utilisable pour les variables qualitatives (couleurs, genres, marques). On ne peut pas faire la moyenne de 'BMW' et 'Audi', mais on peut dire laquelle est la plus vendue.",
                layout: "standard"
            }
        ],
        footer: "Le mode est le seul indicateur de tendance centrale applicable aux variables nominales."
    },
    "stat-mediane": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "La Médiane",
        subtitle: "Position Centrale et Partition",
        character: { shape: "divider", color: "#6366f1", eyes: "focused" },
        tags: ["médiane", "tendance centrale", "position", "robustesse", "outlier", "ordinal", "asymétrie", "EIQ"],
        sections: [
            {
                title: "Calcul de la Position Centrale",
                content: "Contrairement à la moyenne, la médiane est une valeur de position. Pour la trouver :\n1.  **Ordonner** les données du plus petit au plus grand.\n2.  Si n est **impair** : Position = (n+1)/2.\n3.  Si n est **pair** : La médiane est la moyenne des deux valeurs centrales (n/2 et (n/2)+1).",
                layout: "standard"
            },
            {
                title: "Résistance aux Valeurs Extrêmes",
                content: "La médiane minimise la somme des valeurs absolues des écarts (Σ|xᵢ - Med|). Elle n'est pas affectée par les 'outliers' (valeurs aberrantes), car elle ne regarde que le rang, pas la masse.",
                layout: "highlight"
            },
            {
                title: "Application Sectorielle",
                content: "Préférer la médiane pour les variables de stock (patrimoine, prix immo) ou les échelles de Likert où les intervalles ne sont pas réguliers.",
                layout: "standard"
            }
        ],
        footer: "La médiane est insensible aux observations extrêmes — contrairement à la moyenne arithmétique."
    },
    "stat-moyenne": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "La Moyenne",
        subtitle: "Calcul de la Tendance Centrale",
        character: { shape: "ball", color: "#6366f1", eyes: "happy" },
        tags: ["moyenne", "tendance centrale", "arithmétique", "symétrie", "outlier", "écart-type", "continu"],
        sections: [
            {
                title: "Expression Mathématique",
                content: "La moyenne arithmétique (x̄) est la somme de toutes les valeurs divisée par l'effectif total :\n\n**x̄ = Σ(xᵢ) / n**\n\n*Où Σ (Sigma) est l'opérateur de sommation et n la taille de l'échantillon.*",
                layout: "standard"
            },
            {
                title: "Propriétés Statistiques",
                content: "*   **Somme des écarts** : La somme des écarts à la moyenne est toujours nulle (Σ(xᵢ - x̄) = 0). C'est pour cela qu'elle est l'équilibre parfait.\n*   **Linéarité** : Si vous ajoutez 10 à tout le monde, la moyenne augmente de 10.",
                layout: "highlight"
            },
            {
                title: "Contraintes d'Utilisation",
                content: "La moyenne ne doit être utilisée que pour des **distributions symétriques** sans valeurs aberrantes. \n\n*Règle d'or* : Si l'écart-type est supérieur à la moyenne, méfiez-vous, la moyenne ne représente peut-être plus rien.",
                layout: "alert"
            }
        ],
        footer: "La moyenne minimise la somme des carrés des écarts (Σ(xᵢ − x̄)² = min) — propriété fondatrice de l'OLS."
    },

    "stat-variance": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "La Variance",
        subtitle: "Mesure de la Variabilité Statistique",
        character: { shape: "spark", color: "#f43f5e", eyes: "surprised" },
        tags: ["variance", "dispersion", "s²", "écart", "carrés", "degrés de liberté", "ANOVA"],
        sections: [
            {
                title: "Calcul de la Variance",
                content: "La variance est la moyenne des carrés des écarts à la moyenne. Pour un échantillon, on utilise la variance corrigée :\n\n**s² = Σ(xᵢ - x̄)² / (n - 1)**\n\n*On utilise le carré pour que les écarts positifs et négatifs ne s'annulent pas.*",
                layout: "standard"
            },
            {
                title: "📐 Signification Physique",
                content: "La variance exprime l'**inertie** d'un nuage de points. Plus elle est élevée, plus l'information est dispersée. Elle est à la base du calcul de l'ANOVA (Analyse de la Variance).",
                layout: "highlight"
            }
        ],
        footer: "La variance est l'entrée canonique des méthodes de décomposition (ANOVA, ACP, régression)."
    },
    "stat-ecart-type": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "L'Écart-Type",
        subtitle: "Écart-Type et Standardisation",
        character: { shape: "ruler", color: "#10b981", eyes: "focused" },
        tags: ["écart-type", "s", "dispersion", "variance", "erreur type", "SE", "loi normale", "68-95-99", "standardisation"],
        sections: [
            {
                title: "Calcul de l'Écart-Type",
                content: "C'est la racine carrée de la variance. La formule pour un échantillon (écart-type corrigé) est :\n\n**s = √[ Σ(xᵢ - x̄)² / (n - 1) ]**\n\n*Note : On divise par (n-1) au lieu de n pour compenser le biais d'échantillonnage (degrés de liberté).* ",
                layout: "standard"
            },
            {
                title: "L'Erreur Type (Standard Error)",
                content: "Ne pas confondre avec l'Écart-type ! L'Erreur-type (SE) mesure la précision de la moyenne :\n**SE = s / √n**\nPlus n est grand, plus SE diminue, et plus notre moyenne est fiable.",
                layout: "highlight"
            },
            {
                title: "Propriétés de la Loi Normale (68-95-99)",
                content: "Si vos données suivent une Loi Normale :\n*   68% sont à ± 1 s de la moyenne.\n*   95% sont à ± 2 s.\n*   99.7% sont à ± 3 s.",
                layout: "standard"
            }
        ],
        footer: "Racine carrée de la variance, l'écart-type est exprimé dans l'unité de la variable — ce qui le rend directement interprétable."
    },
    "stat-dist-comp": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "L'Indice de Gini",
        subtitle: "Indice de Gini et Concentration",
        character: { shape: "nexus", color: "#f97316", eyes: "focused" },
        tags: ["gini", "inégalité", "concentration", "lorenz", "distribution", "richesse", "sociologie"],
        figure: { src: "images/figure_lorenz.png", caption: "Fig. 3 — Courbe de Lorenz : l'écart entre la droite d'égalité et la courbe mesure l'indice de Gini." },
        sections: [
            {
                title: "Distribution de la Ressource",
                content: "L'indice de Gini mesure la concentration d'une ressource (argent, terres, diplômes). \n*   **Gini = 0** : Égalité parfaite (tout le monde a la même part).\n*   **Gini = 1** : Inégalité maximale (une seule personne possède tout).",
                layout: "standard"
            },
            {
                title: "Applications en Sciences Sociales",
                content: "Très utilisé en sociologie et économie pour comparer la santé sociale de deux pays. Il permet de voir si la richesse d'un pays est captée par une élite ou distribuée à la masse.",
                layout: "highlight"
            },
            {
                title: "Comparaison Analytique",
                content: "Alors que l'écart-type mesure la distance moyenne à la moyenne, le Gini mesure le partage global. Il se calcule souvent à l'aide de la courbe de Lorenz.",
                layout: "standard"
            }
        ],
        footer: "L'indice de Gini est une mesure normalisée [0,1] de la concentration d'une distribution."
    },
    "stat-quantiles": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Les Quantiles",
        subtitle: "Quantiles et Écart Interquartile",
        character: { shape: "grid", color: "#10b981", eyes: "calm" },
        tags: ["quantiles", "quartiles", "déciles", "centiles", "Q1", "Q3", "EIQ", "IQR", "position", "percentile"],
        sections: [
            {
                title: "Segmentation de la Distribution",
                content: "Les quantiles sont les valeurs qui divisent une série ordonnée en k parties égales.\n*   **Quartiles (Q1, Q2, Q3)** : Divisent en 4 (25% chacun).\n*   **Déciles (D1...D9)** : Divisent en 10 (10% chacun).\n*   **Centiles (P1...P99)** : Divisent en 100.",
                layout: "standard"
            },
            {
                title: "L'Écart Interquartile (EIQ)",
                content: "C'est l'indicateur de dispersion lié à la médiane :\n**EIQ = Q3 - Q1**\nIl contient les 50% centraux de la population. Il est totalement insensible aux valeurs extrêmes.",
                layout: "highlight"
            }
        ],
        footer: "Les quantiles caractérisent la distribution par des valeurs de position insensibles aux extrêmes."
    },
    "tri-plat": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Le Tri à Plat",
        subtitle: "Description Univariée des Fréquences",
        character: { shape: "grid", color: "#64748b", eyes: "happy" },
        tags: ["tri à plat", "effectifs", "pourcentages", "fréquences", "description", "univarié", "qualitatif"],
        figure: { src: "images/figure_histogram.png", caption: "Fig. 2 — Distribution des fréquences : l'histogramme permet de visualiser la répartition des effectifs." },
        sections: [
            {
                title: "Analyse des Fréquences",
                content: "Le tri à plat est la première étape de toute analyse qualitative. Il compte simplement le nombre de fois où chaque catégorie apparaît.",
                layout: "standard"
            },
            {
                title: "Effectifs et Fréquences Relatives",
                content: "*   **Effectifs** : Combien de personnes ?\n*   **Pourcentages** : Quelle part du total ? Le pourcentage est crucial pour comparer des groupes de tailles différentes.",
                layout: "highlight"
            }
        ],
        footer: "Le tableau de fréquences est la description univariée de référence pour les variables catégorielles."
    },
    "stat-boxplot": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "La Boîte à Moustaches",
        subtitle: "Visualisation de la Distribution",
        character: { shape: "vacuum", color: "#ec4899", eyes: "surprised" },
        tags: ["boxplot", "Q1", "Q3", "médiane", "EIQ", "outlier", "valeur atypique", "asymétrie", "non-paramétrique"],
        figure: { src: "images/figure_boxplot.png", caption: "Fig. 1 — Anatomie d’une boîte à moustaches : min, Q1, médiane, Q3, max et valeur atypique." },
        sections: [
            {
                title: "Composantes du Boxplot",
                content: "La boîte représente l'Écart Interquartile (Q1 à Q3). La ligne centrale est la **Médiane** (Q2). Les 'moustaches' s'étendent généralement jusqu'à 1,5 fois l'EIQ.",
                layout: "standard"
            },
            {
                title: "Détection des Valeurs Atypiques",
                content: "Tout point au-delà des moustaches est considéré comme une **Valeur Atypique** (Outlier). \n*Règle technique* : Outlier si x > Q3 + 1,5×EIQ ou x < Q1 - 1,5×EIQ.",
                layout: "highlight"
            },
            {
                title: "Évaluation de l'Asymétrie",
                content: "Si la boîte n'est pas centrée sur la médiane, la distribution est asymétrique. C'est le signal qu'il faut peut-être utiliser des tests non-paramétriques.",
                layout: "standard"
            }
        ],
        footer: "Le boxplot résume en un graphique les cinq statistiques d'ordre (min, Q1, médiane, Q3, max) et détecte les valeurs atypiques."
    },

    // ==========================================
    // BLOC 3 : L'Inférence
    // ==========================================
    "principe-inference": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Le Principe de l'Inférence",
        subtitle: "Logique de la Généralisation",
        character: { shape: "telescope", color: "#6366f1", eyes: "focused" },
        tags: ["inférence", "généralisation", "population", "échantillon", "incertitude", "probabilité", "marge d'erreur"],
        sections: [
            {
                title: "Logique de l'inférence",
                content: "L'inférence est le 'saut' probabiliste qui permet d'affirmer des choses sur une population entière à partir d'un simple échantillon.\n\nC'est un voyage qui va du **Particulier** (les 1000 personnes sondées) vers le **Général** (la nation).",
                layout: "standard"
            },
            {
                title: "Quantification de l'incertitude",
                content: "Idée reçue : 'On ne peut jamais être sûr'.\nJustement ! L'inférence ne cherche pas la certitude absolue, mais à **mesurer précisément** notre marge d'erreur et notre risque de nous tromper.",
                layout: "highlight"
            }
        ],
        footer: "L'inférence transforme l'estimation ponctuelle en décision probabiliste assortie d'un risque d'erreur quantifié."
    },
    "dist-echantillonnage": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Distribution d'Échantillonnage",
        subtitle: "Variable Aléatoire et Échantillonnage",
        character: { shape: "cloud", color: "#94a3b8", eyes: "surprised" },
        tags: ["distribution d'échantillonnage", "p-value", "loi normale", "TCL", "erreur type", "SE", "simulation"],
        sections: [
            {
                title: "Distribution d'échantillonnage théorique",
                content: "Imaginez que vous tirez 10 000 échantillons de 100 personnes. Chaque échantillon aura une moyenne différente. L'histogramme de ces 10 000 moyennes est la **distribution d'échantillonnage**.",
                layout: "standard"
            },
            {
                title: "Modélisation probabiliste",
                content: "Même si votre échantillon est unique, la loi des probabilités nous dit exactement où il a le plus de chances de se situer par rapport à la vraie moyenne de la population.",
                layout: "highlight"
            }
        ],
        footer: "La distribution d'échantillonnage est le modèle probabiliste qui fonde le calcul de la p-value."
    },
    "theoreme-central-limite": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Théorème Central Limite",
        subtitle: "Convergence vers la Normalité",
        character: { shape: "cloud", color: "#10b981", eyes: "happy" },
        tags: ["TCL", "théorème central limite", "loi normale", "n > 30", "moyenne", "distribution", "paramétrique"],
        sections: [
            {
                title: "Convergence vers la normalité",
                content: "Le TCL garantit que la moyenne des échantillons suivra **TOUJOURS** une Loi Normale si la taille de l'échantillon est suffisante (n > 30).\n\nPeu importe si vos données de base sont bizarres, asymétriques ou décalées : dès qu'on travaille sur des moyennes de grands groupes, la 'cloche' apparaît.",
                layout: "standard"
            },
            {
                title: "Fondations de l'inférence paramétrique",
                content: "C'est grâce à lui qu'on peut utiliser les formules de la Loi Normale presque partout. C'est la fondation de toute la statistique moderne.",
                layout: "highlight"
            }
        ],
        footer: "Le TCL garantit la convergence en loi de la moyenne vers N(μ, σ²/n) indépendamment de la distribution d'origine."
    },
    "hypothese-nulle": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "L'Hypothèse Nulle (H0)",
        subtitle: "Principe de Réfutabilité",
        character: { shape: "shield", color: "#64748b", eyes: "focused" },
        tags: ["H0", "hypothèse nulle", "H1", "test", "significativité", "faux positif", "erreur de type I"],
        sections: [
            {
                title: "Hypothèse nulle (H0)",
                content: "H0 est l'hypothèse de base : on suppose qu'il ne se passe **rien**. Pas de différence, pas d'effet, pas de lien. \n\n*Exemple* : 'Ce médicament n'est pas plus efficace qu'un verre d'eau'.",
                layout: "standard"
            },
            {
                title: "Test d'hypothèses",
                content: "Vous, le chercheur, portez l'hypothèse alternative (H1). Pour gagner, vous devez accumuler assez de preuves pour rejeter H0. Si H0 n'est pas rejetée, on dit qu'on 'échoue à la rejeter'.",
                layout: "highlight"
            }
        ],
        footer: "Les tests statistiques n'établissent pas H1 ; ils évaluent dans quelle mesure les données sont incompatibles avec H0."
    },
    "p-value": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "La P-Value",
        subtitle: "Seuil de Significativité",
        character: { shape: "star", color: "#fbbf24", eyes: "surprised" },
        tags: ["p-value", "seuil alpha", "α", "significativité", "H0", "faux positif", "erreur de type I", "décision"],
        sections: [
            {
                title: "Seuil de risque significatif",
                content: "La P-Value est la probabilité d'obtenir notre résultat par pur hasard (si l'hypothèse nulle H₀ était vraie). On la compare au **seuil de risque α**, généralement fixé à **0,05 (5%)**.",
                layout: "standard"
            },
            {
                title: "Décision statistique",
                content: "*   **Si p < 0,05** : Le résultat est 'Statistiquement Significatif'. On rejette H₀.\n*   **Si p > 0,05** : Le résultat n'est pas significatif. On échoue à rejeter H₀ (mais on ne prouve pas pour autant que H₀ est vraie !).",
                layout: "highlight"
            },
            {
                title: "Risque de faux positif",
                content: "Un p-value de 0,04 signifie que l'on a 4% de chances de se tromper en affirmant qu'il existe un effet. C'est le **Faux Positif**.",
                layout: "alert"
            }
        ],
        footer: "La p-value quantifie la compatibilité des données avec H0 — elle n'est ni une probabilité d'erreur absolue ni une mesure d'effet."
    },
    "loi-normale": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "La Loi Normale",
        subtitle: "Distribution de Gauss",
        character: { shape: "bell", color: "#6366f1", eyes: "happy" },
        tags: ["loi normale", "Gauss", "cloche", "μ", "σ", "Z-score", "standardisation", "68-95-99", "paramétrique"],
        figure: { src: "images/figure_loi_normale.png", caption: "Fig. 4 — Distribution normale N(μ, σ²) : intervalles ±1σ (68%), ±2σ (95.4%), ±3σ (99.7%)." },
        sections: [
            {
                title: "Paramètres de la distribution normale",
                content: "La Loi Normale est définie par deux paramètres : la moyenne (**μ**) et l'écart-type (**σ**). Elle est parfaitement symétrique autour de μ.",
                layout: "standard"
            },
            {
                title: "Standardisation (Z-score)",
                content: "Pour comparer des échelles différentes, on standardise les données via le **Z-Score** :\n\n**z = (x - μ) / σ**\n\n*Indique à combien d'écarts-types l'individu se situe de la moyenne.*",
                layout: "highlight"
            },
            {
                title: "Intervalles de confiance",
                content: "Dans une distribution normale :\n*   **68%** sont à ± 1 σ.\n*   **95%** sont à ± 1,96 σ (Seuil de confiance habituel).\n*   **99.7%** sont à ± 3 σ.",
                layout: "standard"
            }
        ],
        footer: "N(μ, σ²) : la distribution la plus omniprésente en statistique inférentielle, justifiée par le TCL."
    },
    "seuil-significativite": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Le Seuil Alpha (α)",
        subtitle: "Arbitrage Risque et Puissance",
        character: { shape: "divider", color: "#ef4444", eyes: "focused" },
        tags: ["alpha", "seuil", "risque", "significativité", "erreur de type I", "puissance", "arbitrage"],
        sections: [
            {
                title: "Fixation du seuil alpha",
                content: "Le seuil alpha est le risque maximum de se tromper qu'on accepte. \n\n*   **α = 0,05** : J'accepte 5% de chances de déclarer un effet qui n'existe pas.\n*   **α = 0,01** : Je suis plus sévère (1% de risque).",
                layout: "standard"
            },
            {
                title: "Arbitrage puissance/risque",
                content: "Plus vous réduisez alpha, plus vous avez besoin d'un échantillon grand pour prouver quelque chose. C'est le prix de la certitude.",
                layout: "highlight"
            }
        ],
        footer: "α contrôle le taux d'erreur de type I ; sa réduction exige une augmentation de la taille d'échantillon pour maintenir la puissance."
    },
    "concept-ic": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Intervalle de Confiance (IC)",
        subtitle: "Estimation par Intervalle",
        character: { shape: "bubble", color: "#10b981", eyes: "calm" },
        tags: ["intervalle de confiance", "IC", "95%", "z", "erreur type", "estimation", "fourchette", "précision"],
        sections: [
            {
                title: "Estimation par intervalle",
                content: "L'IC évalue où se trouve la moyenne de la population (μ) à partir de celle de l'échantillon (x̄) :\n\n**IC = x̄ ± z × (s / √n)**\n\n*Où z = 1,96 pour un niveau de confiance de 95%.*",
                layout: "standard"
            },
            {
                title: "Précision de l'estimation",
                content: "Plus l'échantillon (n) augmente, plus l'intervalle se resserre. On gagne en précision sur l'estimation de la réalité.",
                layout: "highlight"
            }
        ],
        footer: "Un IC à 95% signifie que la procédure produit un intervalle contenant le vrai paramètre dans 95% des échantillons possibles."
    },
    "degre-liberte": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Degrés de Liberté (ddl)",
        subtitle: "Degrés de Liberté",
        character: { shape: "puzzle", color: "#334155", eyes: "focused" },
        tags: ["ddl", "degrés de liberté", "n-1", "Student", "chi-deux", "Fisher", "table de distribution"],
        sections: [
            {
                title: "Concept de degrés de liberté",
                content: "C'est le nombre de valeurs indépendantes dans un calcul statistique. \n*   **Exemple** : Pour une moyenne de n valeurs, on a **n-1** degrés de liberté (la dernière valeur est imposée par la moyenne).",
                layout: "standard"
            },
            {
                title: "Distribution et ddl",
                content: "Le ddl détermine la forme précise des lois de distribution (Student, Chi-deux, Fischer). Sans ddl, impossible de lire une table de probabilité.",
                layout: "highlight"
            }
        ],
        footer: "Les ddl paramétrisent la loi de distribution du test et déterminent la valeur critique à comparer à la statistique observée."
    },

    // ==========================================
    // BLOC 4 : Les Relations Bivariées
    // ==========================================
    "cor-causalite": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Corrélation vs Causalité",
        subtitle: "Distinction Conceptuelle",
        character: { shape: "puzzle", color: "#f97316", eyes: "focused" },
        tags: ["causalité", "corrélation", "variable cachée", "confondante", "spurieuse", "inférence causale"],
        sections: [
            {
                title: "Facteurs de confusion",
                content: "Deux variables peuvent être parfaitement synchronisées sans qu'il n'y ait aucun lien de cause à effet entre elles. Souvent, une **variable cachée** explique les deux.\n\n*Exemple classique* : Les ventes de glaces et les noyades augmentent en même temps. La glace ne cause pas la noyade ; c'est le soleil qui cause les deux.",
                layout: "standard"
            },
            {
                title: "Corrélations fallacieuses",
                content: "Idée reçue : 'Si la corrélation est de 0.9, c'est forcément une cause'.\nFaux ! C'est une **corrélation fallacieuse**. En statistique, le lien n'est qu'un indice, pas une preuve de culpabilité.",
                layout: "highlight"
            }
        ],
        footer: "Une corrélation est une condition nécessaire mais non suffisante pour établir une relation causale."
    },
    "test-chi2": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Test du Chi-Deux (χ²)",
        subtitle: "Test d'Indépendance",
        character: { shape: "grid", color: "#f97316", eyes: "happy" },
        tags: ["chi2", "chi-carré", "indépendance", "tableau croisé", "cramer", "nominal", "catégoriel", "effectifs", "reporting"],
        figure: { src: "images/figure_chi2.png", caption: "Fig. 5 — Distribution du Chi-deux (χ²) : la zone ombrée représente la région de rejet pour p < 0,05." },
        sections: [
            {
                title: "Logique du test",
                content: "Le χ² compare les effectifs **observés** (O) aux effectifs **théoriques** (E) attendus si H0 était vraie :\n\n**χ² = Σ [ (O - E)² / E ]**\n\n*Effectifs théoriques : E = (Total ligne × Total colonne) / N*",
                layout: "standard"
            },
            {
                title: "Conditions d'Application",
                content: "*   **Indépendance** des observations.\n*   **Effectifs théoriques** ≥ 5 dans au moins 80% des cases.\n\n*Si cette condition n'est pas respectée → regrouper des modalités ou utiliser le **Test exact de Fisher**.*",
                layout: "alert"
            },
            {
                title: "Force de l'association (V de Cramer)",
                content: "Le χ² dit seulement 'oui ou non'. Pour savoir *à quel point*, on calcule le **V de Cramer** :\n\n**V = √( χ² / (n × min(L−1, C−1)) )**\n\n*   **V < 0,10** : Lien faible\n*   **V ≈ 0,30** : Lien modéré\n*   **V > 0,50** : Lien fort",
                layout: "highlight"
            },
            {
                title: "Interprétation des résultats",
                content: "*\"Un test du χ² révèle une association [significative/non significative] entre [VarA] et [VarB], χ²([ddl]) = [valeur], p [< ou >] .05. La force de l'association est [faible/modérée/forte] (V de Cramer = [valeur]).\"*",
                layout: "standard"
            }
        ],
        footer: "Le χ² est une statistique de conformité entre distribution observée et distribution théorique d'indépendance."
    },
    "test-ttest": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Test de Student (t)",
        subtitle: "Comparaison de deux Moyennes",
        character: { shape: "twins", color: "#6366f1", eyes: "happy" },
        tags: ["t-test", "student", "deux groupes", "moyennes", "cohen", "levene", "indépendant", "pairé", "welch", "reporting"],
        figure: { src: "images/figure_ttest.png", caption: "Fig. 6 — Comparaison de moyennes : le test t évalue si l'écart entre les distributions est statistiquement significatif." },
        sections: [
            {
                title: "Statistique de Student",
                content: "Le test t quantifie à quel point la différence observée est 'grande' par rapport à la variabilité :\n\n**t = (x̄₁ − x̄₂) / SE_diff**\n\nSi |t| > valeur critique (≈ 1,96 pour n > 30), on rejette H0.",
                layout: "standard"
            },
            {
                title: "Vérifications Préalables",
                content: "1.  **Normalité** dans chaque groupe (Shapiro-Wilk ou n ≥ 30 grâce au TCL).\n2.  **Homogénéité des variances** : Test de **Levene**.\n\n*   Levene p > .05 → variances égales → **t classique**\n*   Levene p < .05 → variances inégales → **t de Welch** (Jamovi l'applique automatiquement)",
                layout: "alert"
            },
            {
                title: "Ampleur de l'effet (d de Cohen)",
                content: "La p-value seule ne dit pas si l'effet est *important*. Le **d de Cohen** mesure l'écart standardisé :\n\n**d = (x̄₁ − x̄₂) / s_poolé**\n\n*   **d ≈ 0,20** : Petit effet\n*   **d ≈ 0,50** : Effet moyen\n*   **d ≈ 0,80** : Grand effet",
                layout: "highlight"
            },
            {
                title: "Interprétation des résultats",
                content: "*\"Un test t de Student pour groupes indépendants révèle une différence [significative/non significative] entre les deux groupes, t([ddl]) = [valeur], p [< ou >] .05, d de Cohen = [valeur].\"*",
                layout: "standard"
            }
        ],
        footer: "La significativité statistique (p < .05) et la significativité pratique (d de Cohen) sont deux informations complémentaires."
    },
    "test-anova": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "L'ANOVA",
        subtitle: "Comparaisons de Groupes Multiples",
        character: { shape: "podiums", color: "#fbbf24", eyes: "happy" },
        tags: ["anova", "f de fisher", "groupes", "variance", "eta-carré", "post-hoc", "tukey", "SCE", "SCT", "reporting"],
        figure: { src: "images/figure_anova.png", caption: "Fig. 7 — Analyse de variance (ANOVA) : comparaison simultanée de plusieurs distributions." },
        sections: [
            {
                title: "Comparaisons multiples",
                content: "L'ANOVA est l'extension du Test t quand on a **3 groupes ou plus** à comparer.\n\n*   **H0** : μ₁ = μ₂ = μ₃ (toutes les moyennes sont égales)\n*   **H1** : au moins une moyenne diffère des autres.",
                layout: "standard"
            },
            {
                title: "Décomposition de la variance (F)",
                content: "L'ANOVA décompose la variance totale en deux composantes :\n\n**F = (SCE_inter / k−1) / (SCE_intra / N−k)**\n\n*   **SCE_inter** : variance *entre* les groupes (signal)\n*   **SCE_intra** : variance *au sein* des groupes (bruit)\n\nSi F est grand → les groupes diffèrent vraiment.",
                layout: "highlight"
            },
            {
                title: "Intensité de l'Effet : η² (Eta-carré)",
                content: "Après un F significatif, mesurer la *part de variance expliquée* :\n\n**η² = SCE_inter / SCE_totale**\n\n*   **η² ≈ 0,01** : Petit effet\n*   **η² ≈ 0,06** : Effet moyen\n*   **η² ≈ 0,14** : Grand effet",
                layout: "standard"
            },
            {
                title: "Comparaisons post-hoc",
                content: "L'ANOVA dit 'quelqu'un est différent'. Les tests **Post-Hoc** (Tukey HSD, Bonferroni) comparent chaque paire de groupes tout en contrôlant le risque d'erreur cumulé.\n\n*Pratique : Tukey HSD est le standard pour des groupes d'effectifs similaires.*",
                layout: "alert"
            },
            {
                title: "Interprétation des résultats",
                content: "*\"Une ANOVA à un facteur révèle un effet [significatif/non significatif] de [facteur] sur [VD], F([k−1], [N−k]) = [valeur], p [< ou >] .05, η² = [valeur]. Les tests post-hoc de Tukey indiquent que [groupe A] diffère de [groupe B] (p = [valeur]).\"*",
                layout: "standard"
            }
        ],
        footer: "L'ANOVA est un test omnibus : un F significatif autorise les comparaisons post-hoc, mais n'identifie pas en lui-même les groupes différents."
    },
    "test-cor": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Corrélation de Pearson (r)",
        subtitle: "Coefficient de Corrélation Linéaire",
        character: { shape: "line", color: "#6366f1", eyes: "happy" },
        tags: ["Pearson", "r", "corrélation", "linéaire", "r²", "covariance", "continu", "signification"],
        sections: [
            {
                title: "Coefficient de Pearson",
                content: "Le 'r' de Pearson mesure la force et la direction d'une relation rectiligne entre deux variables continues :\n\n**r = Cov(X,Y) / (σₓ σᵧ)**",
                layout: "standard"
            },
            {
                title: "Interprétation des Valeurs",
                content: "*   **r = 1** : Corrélation positive parfaite.\n*   **r = 0** : Absence de lien linéaire.\n*   **r = -1** : Corrélation négative parfaite.",
                layout: "highlight"
            },
            {
                title: "Coefficient de détermination",
                content: "Le **r²** (coefficient de détermination) est plus parlant : un r = 0,50 signifie que X explique seulement **25%** de la variance de Y.",
                layout: "alert"
            }
        ],
        footer: "Le coefficient r de Pearson est sensible à la linéarité et aux outliers ; vérifier le nuage de points avant toute interprétation."
    },
    "test-spearman": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Corrélation de Spearman (ρ)",
        subtitle: "Test Non-Paramétrique de Corrélation",
        character: { shape: "snake", color: "#ec4899", eyes: "focused" },
        tags: ["Spearman", "ρ", "rho", "rangs", "non-paramétrique", "monotone", "ordinal", "outlier"],
        sections: [
            {
                title: "Corrélation de rangs",
                content: "Contrairement à Pearson, Spearman ne demande pas une ligne droite. Il travaille sur les **rangs** (classements).\n\nC'est l'outil parfait si vos données sont asymétriques ou si vous travaillez avec des échelles (ex: de 1 à 10).",
                layout: "standard"
            },
            {
                title: "Robustesse aux outliers",
                content: "Spearman est beaucoup plus robuste face aux valeurs aberrantes. Un individu 'hors norme' ne cassera pas votre calcul.",
                layout: "highlight"
            }
        ],
        footer: "ρ est l'équivalent non-paramétrique de r : il mesure la monotonie de la relation plutôt que sa linéarité."
    },

    // ==========================================
    // BLOC 5 : La Régression Linéaire et le Multivarié
    // ==========================================
    "raisonnement-cepa": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Toutes Choses Égales par Ailleurs",
        subtitle: "Contrôle Statistique",
        character: { shape: "vacuum", color: "#3b82f6", eyes: "focused" },
        tags: ["ceteris paribus", "CEPA", "contrôle statistique", "régression multiple", "variable confondante", "effet net"],
        sections: [
            {
                title: "Principe du contrôle statistique",
                content: "Dans le monde réel, tout bouge en même temps. Pour savoir si le diplôme influence *vraiment* le salaire, il faut comparer des gens qui ont le même âge, le même sexe et la même ancienneté.\n\nLa régression multiple permet de 'bloquer' mathématiquement les autres facteurs.",
                layout: "standard"
            },
            {
                title: "Isolation des effets nets",
                content: "C'est la base du raisonnement scientifique : pour prouver l'effet de A, on doit s'assurer que B, C et D ne viennent pas perturber l'analyse. C'est le pouvoir souverain du contrôle statistique.",
                layout: "highlight"
            }
        ],
        footer: "Le contrôle statistique est l'opération qui isole l'effet net d'un prédicteur en neutralisant l'influence des variables covariantes."
    },
    "var-dep-indep": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Variable Dépendante / Indépendante",
        subtitle: "Identification des Rôles Variables",
        character: { shape: "nexus", color: "#6366f1", eyes: "happy" },
        tags: ["variable dépendante", "variable indépendante", "Y", "X", "prédicteur", "critère", "modélisation"],
        sections: [
            {
                title: "Variable indépendante (VI)",
                content: "La variable **Indépendante** (X) est celle que vous manipulez ou que vous observez comme cause. C'est le levier sur lequel vous appuyez.",
                layout: "standard"
            },
            {
                title: "Variable dépendante (VD)",
                content: "La variable **Dépendante** (Y) est le résultat. Elle 'dépend' de la valeur de X. C'est le score que vous essayez d'expliquer ou de prédire.",
                layout: "highlight"
            }
        ],
        footer: "La distinction VI/VD structure la logique causale du modèle et détermine le sens d'interprétation des coefficients."
    },
    "droite-regression": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Régression Linéaire",
        subtitle: "L'Équation Prédictive",
        character: { shape: "line", color: "#f97316", eyes: "happy" },
        tags: ["régression", "beta", "coefficient", "pente", "linéaire", "résidu", "prédiction", "OLS", "MCO", "t-value", "reporting"],
        figure: { src: "images/figure_regression.png", caption: "Fig. 8 — Nuage de points avec droite OLS. Les segments verticaux représentent les résidus (ε = Y − Ŷ)." },
        sections: [
            {
                title: "Modèle de régression linéaire",
                content: "On modélise la relation par une combinaison linéaire de prédicteurs :\n\n**Ŷ = β₀ + β₁X₁ + β₂X₂ + ... + ε**\n\n*   **β₀** : Constante (Y quand tous les X = 0)\n*   **βᵢ** : Effet *net* de Xᵢ sur Y (contrôlant les autres)\n*   **ε** : Résidu (partie inexpliquée)",
                layout: "standard"
            },
            {
                title: "Analyse des coefficients",
                content: "Dans Jamovi/R, chaque prédicteur X fournit :\n*   **Estimate (β)** : L'effet net de X sur Y 'toutes choses égales par ailleurs'\n*   **Std. Error (SE)** : La précision de cet estimé\n*   **t value** : Ratio β/SE — plus il est grand (|t| > 1,96), plus X est 'puissant'\n*   **p-value** : Si p < .05, l'effet de X est significatif\n*   **IC 95%** : Fourchette de valeurs plausibles pour β",
                layout: "highlight"
            },
            {
                title: "Interprétation des coefficients β",
                content: "Si **β₁ = 3,2** avec Y = Salaire (€) et X = Années d'études :\n\n> *'Chaque année d'étude supplémentaire est associée à une hausse de 3,2€ du salaire, toutes choses égales par ailleurs.'*\n\n*Pour une variable dichotomique (0/1) : β est la différence de Y entre la modalité 1 et la modalité référence.*",
                layout: "standard"
            },
            {
                title: "Interprétation des résultats",
                content: "*\"Une régression linéaire multiple révèle que le modèle explique R²adj = [x]% de la variance de [VD], F([k], [N−k−1]) = [valeur], p < .001. [Variable X] prédit significativement [VD] (β = [valeur], SE = [valeur], t = [valeur], p [< ou >] .05).\"*",
                layout: "alert"
            }
        ],
        footer: "Comprendre quel β est statistiquement et substantiellement significatif est l'enjeu central de l'analyse de régression."
    },
    "coeff-determination": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Le R-Carré (R²)",
        subtitle: "La Qualité du Modèle",
        character: { shape: "target", color: "#10b981", eyes: "happy" },
        tags: ["R2", "r carré", "variance expliquée", "qualité du modèle", "F global", "ajusté", "SS_res", "SS_tot", "régression", "Nagelkerke"],
        sections: [
            {
                title: "Coefficient de détermination (R²)",
                content: "Le R² mesure la proportion de la variance de Y expliquée par le modèle :\n\n**R² = 1 − (SS_res / SS_tot) = SS_reg / SS_tot**\n\n*   SS_res = Somme des carrés des **R**ésidus\n*   SS_tot = Somme des carrés **Tot**ale\n*   SS_reg = Somme des carrés de la **Rég**ression",
                layout: "standard"
            },
            {
                title: "Concentration des Seuils",
                content: "En sociologie/psychologie, les ordres de grandeur courants :\n*   **R² ≈ 0,10** : Modèle faible mais réaliste\n*   **R² ≈ 0,30** : Modèle modéré\n*   **R² ≈ 0,50+** : Modèle fort\n\n*Attention : Un R² élevé ne prouve pas la causalité !*",
                layout: "highlight"
            },
            {
                title: "R² ajusté",
                content: "Le R² brut gonfle mécaniquement quand on ajoute des variables. Le **R² ajusté** pénalise cette complexité :\n\n**R²adj = 1 − [ (1−R²) × (n−1) / (n−k−1) ]**\n\n*Où k = nombre de prédicteurs.* → C'est **toujours** le R² ajusté qu'on rapporte en régression multiple.",
                layout: "alert"
            },
            {
                content: "Le **test F de Fisher** vérifie si le modèle entier est significatif (H0 : tous les β = 0) :\n\n**F = (SS_reg / k) / (SS_res / (n−k−1))**\n\nC'est la **première statistique à vérifier** dans une sortie de régression. Si p > .05 → le modèle entier est statistiquement non significatif.",
                layout: "standard"
            },
            {
                title: "Diagnostic de l'ajustement",
                content: "*   **R** : Corrélation multiple (= racine de R²)\n*   **R²** : Variance brute expliquée\n*   **Adj. R²** : À rapporter dans les publications officielles\n*   **F([k], [n−k−1])** : Test global du modèle\n*   **p** : Significativité du modèle entier",
                layout: "highlight"
            }
        ],
        footer: "Le R² ajusté est le critère standard pour évaluer la qualité d'ajustement d'une régression multiple."
    },
    "cor-spurieuse": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Effet de Suppression",
        subtitle: "Les Liens Invisibles",
        character: { shape: "nexus", color: "#ec4899", eyes: "surprised" },
        sections: [
            {
                title: "Logique du contrôle multivarié",
                content: "C'est l'inverse de la corrélation fallacieuse. Ici, un lien réel existe mais il est 'étouffé' par une autre variable.\n\nIl n'apparaît que lorsqu'on 'nettoie' les données grâce au contrôle statistique.",
                layout: "standard"
            },
            {
                title: "Interprétation",
                content: "En multivarié, une variable qui semblait inutile peut devenir capitale une fois séparée des autres influences. C'est la magie de la régression.",
                layout: "highlight"
            }
        ],
        footer: "Toute corrélation bivariée doit être soumise au contrôle multivarié avant toute interprétation causale."
    },

    // ==========================================
    // NOUVELLES FICHES : Vérification & Diagnostic
    // ==========================================

    "test-shapiro": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Test de Shapiro-Wilk",
        subtitle: "Le Détecteur de Normalité",
        character: { shape: "bell", color: "#8b5cf6", eyes: "focused" },
        tags: ["shapiro", "wilk", "normalité", "distribution", "paramétrique", "condition", "Q-Q plot", "prérequis"],
        sections: [
            {
                title: "Objectif du test",
                content: "Le test de Shapiro-Wilk vérifie si une distribution est compatible avec une **Loi Normale**. C'est un prérequis obligatoire du Test t, de l'ANOVA et de Pearson.\n\n*   **H0** : La distribution est normale.\n*   **H1** : La distribution dévie significativement de la normale.",
                layout: "standard"
            },
            {
                title: "Procédure de décision",
                content: "*   **p > 0,05** : Absence de preuve contre la normalité → tests paramétriques appropriés.\n*   **p < 0,05** : Distribution non-normale → envisager un test non-paramétrique.",
                layout: "highlight"
            },
            {
                title: "Sensibilité et limites",
                content: "*   **Grand n (> 200)** : Le test devient hypersensible. Une déviation anodine rejette H0. Utiliser le **Q-Q Plot** (si les points suivent la diagonale → normalité suffisante).\n\n*   **Petit n (< 30)** : Le test manque de puissance et peut rater une vraie non-normalité.",
                layout: "alert"
            },
            {
                title: "💻 Code Rapide",
                content: "**R** : `shapiro.test(residuals(mon_modele))`\n\n**Jamovi** : Analyses → Exploration → Shapiro-Wilk (cocher la case)",
                layout: "standard"
            }
        ],
        footer: "La normalité des données est une hypothèse de la distribution d'échantillonnage, vérifiable empiriquement par le test de Shapiro-Wilk ou le Q-Q Plot."
    },

    "test-levene": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Test de Levene",
        subtitle: "L'Égalité des Variances",
        character: { shape: "twins", color: "#f97316", eyes: "focused" },
        tags: ["levene", "homogénéité", "variances", "homoscédasticité", "condition", "t-test", "anova", "welch", "vérification"],
        sections: [
            {
                title: "Homogénéité des variances",
                content: "Le test de Levene vérifie si les **variances sont égales** dans les groupes comparés. C'est un prérequis du Test t et de l'ANOVA.\n\n*   **H0** : Les variances sont égales dans tous les groupes.\n*   **H1** : Au moins une variance diffère.",
                layout: "standard"
            },
            {
                title: "Action selon le résultat",
                content: "*   **Levene p > .05** : Variances homogènes → Tests t classique ou ANOVA standard.\n*   **Levene p < .05** : Hétéroscédasticité → Utiliser une correction de type Welch.\n\n*Bonne nouvelle : Jamovi applique la correction de Welch automatiquement.*",
                layout: "highlight"
            },
            {
                title: "Analyse de Robustesse",
                content: "Le Test t et l'ANOVA sont assez **robustes** à la violation de l'homogénéité si les groupes ont des effectifs **équilibrés**. En cas de doute, préférer systématiquement le t de Welch.",
                layout: "alert"
            },
            {
                title: "💻 Code Rapide",
                content: "**R** : `leveneTest(y ~ group, data = df)` *(package car)*\n\n**Jamovi** : T-Test → Homogeneity of variances (Levene's)",
                layout: "standard"
            }
        ],
        footer: "L'hétéroscédasticité invalide les erreurs-types classiques ; le t de Welch y remédie en n'imposant pas l'homogénéité des variances."
    },

    "residus-regression": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Résidus & Diagnostic du Modèle",
        subtitle: "Vérifier les Hypothèses de la Régression",
        character: { shape: "target", color: "#ef4444", eyes: "focused" },
        tags: ["résidus", "diagnostic", "normalité", "homoscédasticité", "Q-Q plot", "Cook", "VIF", "Durbin-Watson", "outlier", "influence"],
        figure: { src: "images/figure_qqplot.png", caption: "Fig. 9 — Q-Q Plot des résidus : les points sur la diagonale indiquent la normalité." },
        sections: [
            {
                title: "Définition des résidus",
                content: "Un **résidu** est la différence entre la valeur *observée* et la valeur *prédite* par le modèle :\n\n**ε = Y_observé − Ŷ_prédit**\n\nAnalyser les résidus permet de vérifier si les hypothèses de la régression OLS sont respectées.",
                layout: "standard"
            },
            {
                title: "Hypothèses de base (Gauss-Markov)",
                content: "1.  **Linéarité** : Vérifier via le graphique Résidus vs Valeurs ajustées (pas de courbe).\n2.  **Normalité des résidus** : Q-Q Plot ou Shapiro-Wilk sur les résidus.\n3.  **Homoscédasticité** : La variance des résidus est constante (pas d'entonnoir dans le graphe).\n4.  **Indépendance** : Les résidus ne sont pas autocorrélés (Test de Durbin-Watson).",
                layout: "highlight"
            },
            {
                title: "Analyse graphique de la normalité",
                content: "Le Q-Q Plot compare les résidus standardisés aux quantiles d'une distribution normale théorique :\n\n*   **Points sur la diagonale** : Normalité respectée.\n*   **Points déviants** : Présence d'asymétrie ou de queues lourdes.",
                layout: "standard"
            },
            {
                title: "Points d'influence (Distance de Cook)",
                content: "La **Distance de Cook** mesure l'influence de chaque observation sur l'ensemble du modèle :\n\n**Un point est suspect si Cook's D > 4/n**\n\nCes points ne sont pas forcément à supprimer, mais à examiner individuellement.",
                layout: "alert"
            },
            {
                title: "Syntaxe de Programmation",
                content: "**R** : `plot(mon_modele)` → 4 graphiques diagnostics automatiques\n\n**Jamovi** : Régression Linéaire → Graphiques → Résidus vs Ajustées + Q-Q Normal",
                layout: "standard"
            }
        ],
        footer: "L'analyse des résidus est la procédure de validation des hypothèses du modèle OLS (linéarité, normalité, homoscédasticité, indépendance)."
    },

    "reg-logistique": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Régression Logistique",
        subtitle: "Prédire une Variable Binaire",
        character: { shape: "nexus", color: "#6366f1", eyes: "happy" },
        tags: ["logistique", "odds ratio", "OR", "probabilité", "binaire", "logit", "pseudo R2", "AIC", "Nagelkerke", "0/1"],
        sections: [
            {
                title: "Indications",
                content: "La régression logistique s'utilise quand la **variable dépendante est binaire** (0/1, Oui/Non, Succès/Échec). Elle modélise la *probabilité* d'appartenir à la catégorie '1'.\n\n*Exemple : Prédire si un étudiant réussit (1) ou échoue (0) en fonction de son temps de travail.*",
                layout: "standard"
            },
            {
                title: "Fonction Logit",
                content: "On ne prédit pas Y directement, mais le **log des cotes (logit)** :\n\n**logit(P) = log(P / (1−P)) = β₀ + β₁X₁ + ...**\n\nLa probabilité prédite est obtenue via la fonction logistique :\n**P = 1 / (1 + e⁻ˡᵒᵍⁱᵗ)**",
                layout: "highlight"
            },
            {
                title: "Interprétation des Odds Ratios",
                content: "Les β sont difficiles à interpréter directement. On les exponentie pour obtenir les **Odds Ratios** :\n\n**OR = e^β**\n\n*   **OR > 1** : La variable augmente les chances de Y = 1.\n*   **OR < 1** : La variable diminue les chances.\n*   **OR = 1** : Pas d'effet sur les cotes.",
                layout: "standard"
            },
            {
                title: "Indices d'ajustement (Pseudo-R²)",
                content: "Il n'existe pas de R² exact en régression logistique. On utilise des **Pseudo-R²** :\n\n*   **Nagelkerke R²** : Le plus interprétable (0 à 1).\n*   **Test du modèle global (Omnibus χ²)** : Si p < .05, le modèle prédit mieux que le hasard.\n*   **AIC** : Critère d'information pour comparer des modèles (plus petit = meilleur).",
                layout: "alert"
            },
            {
                title: "Syntaxe de Programmation",
                content: "**R** : `glm(y ~ x1 + x2, data = df, family = binomial)`\n\n**Jamovi** : Analyses → Régression → Logistique Binomiale",
                layout: "standard"
            }
        ],
        footer: "L'Odds Ratio est la mesure d'effet standard de la régression logistique ; OR = 1 correspond à l'absence d'effet."
    },

    "multicolinearite": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "La Multicolinéarité",
        subtitle: "Diagnostics de Colinéarité",
        character: { shape: "puzzle", color: "#f43f5e", eyes: "surprised" },
        tags: ["VIF", "multicolinéarité", "corrélation", "prédicteurs", "instabilité", "tolérance", "régression multiple"],
        sections: [
            {
                title: "Concept de multicolinéarité",
                content: "La multicolinéarité survient quand deux (ou plusieurs) variables indépendantes sont **très fortement corrélées entre elles**. Résultat : les estimations des β deviennent instables et les erreurs-types explosent.",
                layout: "alert"
            },
            {
                title: "Détection (VIF)",
                content: "Le **Variance Inflation Factor (VIF)** mesure à quel point l'estimation d'un β est 'gonflée' par la colinéarité :\n\n*   **VIF < 5** : Acceptable\n*   **VIF 5–10** : Concernant\n*   **VIF > 10** : Critique → remédiation nécessaire",
                layout: "highlight"
            },
            {
                title: "Stratégies de remédiation",
                content: "*   **Supprimer** un des prédicteurs redondants.\n*   **Combiner** les variables corrélées en un seul score composite.\n*   **Centrer** les variables continues avant de créer des termes d'interaction.\n*   **Régression Ridge** : technique avancée qui tolère mieux la colinéarité.",
                layout: "standard"
            },
            {
                title: "Syntaxe de Programmation",
                content: "**R** : `vif(mon_modele)` *(package car)*\n\n**Jamovi** : Régression → Statistiques → Collinearity statistics (VIF)",
                layout: "standard"
            }
        ],
        footer: "Un VIF > 10 signale une multicolinéarité sévère compromettant la stabilité et l'interprétabilité des estimateurs OLS."
    }
};
