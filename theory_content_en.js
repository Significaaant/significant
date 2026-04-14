const theoryData = {
    // ==========================================
    // BLOCK 1: Introduction and Critical Thinking
    // ==========================================
    "intro-stats": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Descriptive Statistics",
        subtitle: "Descriptive Statistics",
        character: { shape: "nexus", color: "#6366f1", eyes: "happy" },
        sections: [
            {
                title: "Fundamental Definitions",
                content: "Descriptive statistics serves as a **reduction tool**: it simplifies complexity by summarizing raw data into intelligible indicators without losing essential information.",
                layout: "standard"
            },
            {
                title: "Statistics and Probabilities",
                content: "The analytical objective is to synthesize complex data points into a meaningful description:\n*   **Essential extraction**: Reduction of large datasets to key indicators (mean, standard deviation).\n*   **Interpretation**: Transformation of raw numerical values into intelligible scientific findings.",
                layout: "highlight"
            },
            {
                title: "Information Reduction and Generalization",
                content: "There is no 'perfect' summary. Choosing a mean over a median is a **political and scientific act**. Statistics are a tool to frame reality according to the question you're asking.",
                layout: "standard"
            }
        ],
        footer: "Statistics is a process of information reduction and generalization, subject to explicit assumptions."
    },
    "reflexivite": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Reflexivity and Data Construction",
        subtitle: "Data Construction",
        character: { shape: "mirror", color: "#8b5cf6", eyes: "calm" },
        tags: ["reflexivity", "bias", "data construction", "questionnaire", "epistemology", "objectivity"],
        sections: [
            {
                title: "Construction of Data",
                content: "Data are not pre-existing entities but result from a specific collection and measurement process. They are the outcome of technical, methodological, and theoretical frameworks.",
                layout: "standard"
            },
            {
                title: "Analysis of Collection Mechanisms",
                content: "Before analyzing a figure, ask yourself how it was born:\n*   **The Questionnaire**: What question was asked? One word can change everything.\n*   **The Context**: Did the survey take place by phone or face-to-face?\n*   **The Invisibles**: Who was forgotten in the survey?",
                layout: "highlight"
            },
            {
                title: "Limitations and Blind Spots",
                content: "All data is a **projected shadow**. It shows part of reality but hides another. Reflexivity is about admitting these blind spots.",
                layout: "alert"
            }
        ],
        footer: "The critical analysis of data collection procedures is a prerequisite for any substantive interpretation."
    },
    "biais-enquete": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Survey Biases",
        subtitle: "Spotting Bias",
        character: { shape: "ambulance", color: "#ef4444", eyes: "surprised" },
        tags: ["bias", "social desirability", "non-response", "framing effect", "questionnaire", "error"],
        sections: [
            {
                title: "Social Desirability",
                content: "This is one of the most formidable: people lie unconsciously to **appear better**. \n\n*Example*: In a survey, everyone washes their hands after using the toilet. In reality, direct observation shows a much lower figure.",
                layout: "alert"
            },
            {
                title: "Non-Response Bias",
                content: "People who don't answer are not 'neutral'. If you survey restaurant customers, the most dissatisfied may have already left without answering: your sample is **biased upward**.",
                layout: "highlight"
            },
            {
                title: "Framing Effects",
                content: "The form of the question suggests the answer. 'Do you think this product is useful?' vs 'What is the main flaw of this product?'.",
                layout: "standard"
            }
        ],
        footer: "Each bias represents a systematic threat to the internal or external validity of the study."
    },
    "echantillon-pop": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Population vs Sample",
        subtitle: "The Logic of Inference",
        character: { shape: "marmite", color: "#4b5563", eyes: "calm" },
        tags: ["population", "sample", "parameter", "statistic", "inference", "sampling rate", "sampling frame"],
        sections: [
            {
                title: "1. Population (N)",
                content: "In statistics, the **Population** (denoted **N**) is the exhaustive set of statistical units. \n\n*   **Parameter**: A value calculated from N (e.g., the true mean μ or true proportion π).\n*   **Sampling Frame**: The physical list of all units (directory, client file). Without a frame, no probabilistic sampling is possible.",
                layout: "highlight"
            },
            {
                title: "2. Sample (n)",
                content: "The **Sample** (denoted **n**) is the subset drawn from the population. \n\n*   **Statistic**: A value calculated from n (e.g., mean x̄ or proportion p).\n*   **Sampling Rate (f)**: The ratio n/N. The higher it is, the more 'powerful' the sample is.",
                layout: "highlight"
            },
            {
                title: "3. Theory of Inference",
                content: "Inference is the calculation of the error made during estimation:\n**Real Value (μ) = Estimate (x̄) ± Sampling Error**\n\nIf the draw is random, this error is mathematically calculable. If not, the error is unknown.",
                layout: "standard"
            }
        ],
        footer: "A sample produces point estimates accompanied by a probabilistic margin of error."
    },
    "representativite": {
        bloc: 1,
        type: "TYPE_FLEXIBLE",
        title: "Representativeness",
        subtitle: "The Power of Probability",
        character: { shape: "star", color: "#fbbf24", eyes: "happy" },
        tags: ["representativeness", "random sampling", "selection bias", "margin of error", "sample size", "law of large numbers"],
        sections: [
            {
                title: "Random Sampling Theory",
                content: "Representativeness is not about visual 'resemblance' but about probability. \n*   **Simple Random Sampling**: Every unit has an equal probability (1/N) of being chosen.\n*   **Selection Bias**: If the probability of inclusion depends on the studied variable, the sample is no longer representative.",
                layout: "standard"
            },
            {
                title: "Sample Size and Precision",
                content: "Common myth: 'You need 10% of the population'.\nFalse! Precision depends on absolute size (n), not the n/N ratio. A sample of 1000 people gives the same precision for a city of 50,000 or a country of 60 million.",
                layout: "highlight"
            },
            {
                title: "Margin of Error Calculation",
                content: "The margin of error (e) is inversely proportional to the square root of n:\n**e ≈ 1 / √n**\nTo halve the error, you must quadruple the sample size.",
                layout: "standard"
            }
        ],
        footer: "Representativeness is a probabilistic property guaranteed by random sampling, not by perceived resemblance."
    },

    // ==========================================
    // BLOCK 2: Variables and Univariate Description
    // ==========================================
    "types-variables": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "The 3 Types of Variables",
        subtitle: "Levels of Measurement and Scales",
        character: { shape: "bins", color: "#f97316", eyes: "happy" },
        tags: ["variables", "nominal", "ordinal", "continuous", "qualitative", "quantitative", "level of measurement", "Jamovi"],
        sections: [
            {
                title: "Levels of Measurement",
                content: "Before selecting a statistical method, the nature of the data must be identified. Misclassifying a variable leads to the application of illegitimate statistical operations (mean, tests, or graphical representations).",
                layout: "standard"
            },
            {
                title: "1. Nominal Scale",
                content: "Here, we don't measure anything, we **name**. Numbers are just code names.\n*   **Examples**: Gender (0=F, 1=M), Department, Type of housing.\n*   **Golden Rule**: You cannot add them up. Does 'Paris' + 'London' = 'Berlin'? No.\n*   **Main Tool**: The **Mode** (which label appears most often?).",
                layout: "highlight"
            },
            {
                title: "2. Ordinal Scale",
                content: "Here, there is a **logical order**, a progression, but the gap between the steps is not fixed.\n*   **Examples**: Education level (Bachelor < Master), Agreement (Disagree < Agree < Strongly Agree).\n*   **Golden Rule**: We know who is 'above', but not exactly by how much.\n*   **Main Tool**: The **Median** (which is the middle step?).",
                layout: "highlight"
            },
            {
                title: "3. Interval / Ratio Scale",
                content: "Here, we are in **pure measurement**. Numbers have full mathematical meaning.\n*   **Examples**: Age, Salary, Weight, Reaction time.\n*   **Golden Rule**: The gaps are identical (10 years - 5 years = 5 years).\n*   **Main Tool**: The **Mean** and **Standard Deviation**.",
                layout: "highlight"
            },
            {
                title: "Methodological Recommendation",
                content: "In software like **Jamovi** or **SPSS**, you can sometimes 'cheat': an ordinal variable with many levels (e.g., a scale from 1 to 10) is often treated as a continuous variable to gain more statistical power. This is a researcher's choice, not an absolute truth!",
                layout: "alert"
            }
        ],
        footer: "The level of measurement of a variable determines the full set of legitimate statistical operations."
    },
    "stat-moyenne": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "The Mean",
        subtitle: "Arithmetic Mean and Central Tendency",
        character: { shape: "ball", color: "#6366f1", eyes: "happy" },
        tags: ["mean", "central tendency", "arithmetic", "symmetry", "outlier", "standard deviation", "continuous"],
        sections: [
            {
                title: "Arithmetic Mean",
                content: "The arithmetic mean (x̄) is the sum of all values divided by the total count:\n\n**x̄ = Σ(xᵢ) / n**\n\n*Where Σ (Sigma) is the summation operator and n is the sample size.*",
                layout: "standard"
            },
            {
                title: "Mathematical Properties",
                content: "*   **Sum of Deviations**: The sum of deviations from the mean is always zero (Σ(xᵢ - x̄) = 0). This is why it's the perfect balance point.\n*   **Linearity**: If you add 10 to everyone, the mean increases by 10.",
                layout: "highlight"
            },
            {
                title: "Assumptions and Outliers",
                content: "The mean should only be used for **symmetric distributions** without outliers. \n\n*Golden Rule*: If the standard deviation is greater than the mean, be careful; the mean may no longer represent anything real.",
                layout: "alert"
            }
        ],
        footer: "The mean minimizes the sum of squared deviations (Σ(xᵢ − x̄)² = min) — the founding property of OLS."
    },
    "stat-mediane": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "The Median",
        subtitle: "Position and Partitioning",
        character: { shape: "divider", color: "#6366f1", eyes: "focused" },
        tags: ["median", "central tendency", "position", "robustness", "outlier", "ordinal", "skewness", "IQR"],
        sections: [
            {
                title: "Definition of the Median",
                content: "Unlike the mean, the median is a position value. To find it:\n1.  **Order** the data from smallest to largest.\n2.  If n is **odd**: Position = (n+1)/2.\n3.  If n is **even**: The median is the average of the two middle values (n/2 and (n/2)+1).",
                layout: "standard"
            },
            {
                title: "Resilience and Outliers",
                content: "The median minimizes the sum of absolute deviations (Σ|xᵢ - Med|). It is not affected by outliers because it only looks at the rank, not the value mass.",
                layout: "highlight"
            },
            {
                title: "Decision Rules",
                content: "Prefer the median for stock variables (wealth, real estate prices) or Likert scales where intervals are not regular.",
                layout: "standard"
            }
        ],
        footer: "The median is insensitive to extreme observations — unlike the arithmetic mean."
    },
    "stat-ecart-type": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Standard Deviation",
        subtitle: "Variability and Scaling",
        character: { shape: "ruler", color: "#10b981", eyes: "focused" },
        tags: ["standard deviation", "s", "dispersion", "variance", "standard error", "SE", "normal distribution", "68-95-99", "standardization"],
        sections: [
            {
                title: "Standard Deviation and Dispersion",
                content: "It is the square root of the variance. The formula for a sample (corrected standard deviation) is:\n\n**s = √[ Σ(xᵢ - x̄)² / (n - 1) ]**\n\n*Note: We divide by (n-1) instead of n to compensate for sampling bias (degrees of freedom).* ",
                layout: "standard"
            },
            {
                title: "Standard Error of the Mean",
                content: "Do not confuse it with Standard Deviation! The Standard Error (SE) measures the precision of the mean:\n**SE = s / √n**\nThe larger n is, the smaller SE becomes, and the more reliable our mean is.",
                layout: "highlight"
            },
            {
                title: "Empirical Intervals",
                content: "If your data follows a Normal Distribution:\n*   68% are within ± 1 s of the mean.\n*   95% are within ± 2 s.\n*   99.7% are within ± 3 s.",
                layout: "standard"
            }
        ],
        footer: "Square root of the variance, the standard deviation is expressed in the original unit of the variable — making it directly interpretable."
    },
    "stat-mode": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "The Mode",
        subtitle: "Frequency and Modal Value",
        character: { shape: "podium", color: "#fbbf24", eyes: "happy" },
        tags: ["mode", "central tendency", "frequency", "nominal", "qualitative", "most frequent value"],
        sections: [
            {
                title: "Definition of the Mode",
                content: "The mode is the most **frequent** value. In a crowd of blue sweaters, 'blue' is the mode.\n\nIt is the simplest indicator to summarize a nominal variable (categories).",
                layout: "standard"
            },
            {
                title: "Robustness and Limitations",
                content: "The mode is insensitive to extremes. Whether there's a billionaire in the room changes nothing for the mode: if the majority earns minimum wage, the mode remains minimum wage.",
                layout: "highlight"
            },
            {
                title: "Decision Rules",
                content: "It is the **only** indicator usable for qualitative variables (colors, genders, brands). You can't average 'BMW' and 'Audi', but you can say which one is sold most.",
                layout: "standard"
            }
        ],
        footer: "The mode is the only measure of central tendency applicable to nominal variables."
    },
    "stat-variance": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "The Variance",
        subtitle: "Statistical Variability Measurement",
        character: { shape: "spark", color: "#f43f5e", eyes: "surprised" },
        tags: ["variance", "dispersion", "s²", "deviation", "squares", "degrees of freedom", "ANOVA"],
        sections: [
            {
                title: "Concept of Variance",
                content: "Variance is the average of the squared deviations from the mean. For a sample, we use the corrected variance:\n\n**s² = Σ(xᵢ - x̄)² / (n - 1)**\n\n*We use the square so that positive and negative deviations don't cancel each other out.*",
                layout: "standard"
            },
            {
                title: "Interpretation",
                content: "Variance expresses the **inertia** of a cloud of points. The higher it is, the more dispersed the information is. It is the basis for ANOVA (Analysis of Variance) calculations.",
                layout: "highlight"
            }
        ],
        footer: "Variance is the canonical input of decomposition methods (ANOVA, PCA, regression)."
    },
    "stat-dist-comp": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "The Gini Index",
        subtitle: "Gini Coefficient and Resource Concentration",
        character: { shape: "nexus", color: "#f97316", eyes: "focused" },
        tags: ["gini", "inequality", "concentration", "lorenz", "distribution", "wealth", "sociology"],
        figure: { src: "images/figure_lorenz.png", caption: "Fig. 3 — Lorenz Curve: The gap between the line of equality and the curve measures the Gini Index." },
        sections: [
            {
                title: "Inequality Measurement",
                content: "The Gini index measures the concentration of a resource (wealth, land, degrees). \n*   **Gini = 0**: Perfect equality (everyone has the same share).\n*   **Gini = 1**: Maximum inequality (a single person owns everything).",
                layout: "standard"
            },
            {
                title: "Gini Coefficient",
                content: "In sociology and international economics, a Gini index **above 0.40** is generally considered a sign of high, potentially unstable inequality.",
                layout: "highlight"
            },
            {
                title: "Comparison of Concentration Measures",
                content: "While Standard Deviation measures the average distance to the mean, the Gini Index measures the global sharing. It is calculated via the area under the **Lorenz Curve**.",
                layout: "standard"
            }
        ],
        footer: "The Gini index is a normalized [0,1] measure of the concentration of a distribution."
    },
    "stat-quantiles": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Quantiles",
        subtitle: "Quantile Distribution Boundaries",
        character: { shape: "grid", color: "#10b981", eyes: "calm" },
        tags: ["quantiles", "quartiles", "deciles", "percentiles", "Q1", "Q3", "IQR", "position"],
        sections: [
            {
                title: "Partitioning Logic",
                content: "Just as the median cuts your data in two, quantiles cut it into equal slices.\n*   **Quartiles**: 4 slices (25% each).\n*   **Deciles**: 10 slices (10% each).\n*   **Percentiles**: 100 slices.",
                layout: "standard"
            },
            {
                title: "Interpretation of Quartiles",
                content: "The ultimate tool for individual comparison. 'I'm in the top 1% of earners' means you're above the 99th percentile.",
                layout: "highlight"
            }
        ],
        footer: "Quantiles characterize a distribution by rank-based position statistics that are insensitive to extreme values."
    },
    "stat-boxplot": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Boxplot",
        subtitle: "Distribution Visualization and Bounds",
        character: { shape: "vacuum", color: "#ec4899", eyes: "surprised" },
        tags: ["boxplot", "Q1", "Q3", "median", "IQR", "outlier", "skewness", "non-parametric"],
        figure: { src: "images/figure_boxplot.png", caption: "Fig. 1 — Anatomy of a boxplot: min, Q1, median, Q3, max, IQR, and outlier." },
        sections: [
            {
                title: "Anatomy of the Boxplot",
                content: "A boxplot visualizes the 5 key metrics: Min, Q1, Median, Q3, and Max. The central box represents the **Interquartile Range (IQR)**, where the middle 50% of your data lives.",
                layout: "standard"
            },
            {
                title: "Outlier Identification",
                content: "Any point beyond 1.5 times the IQR is considered an **Outlier**. These observations are considered statistically atypical.",
                layout: "highlight"
            },
            {
                title: "Assessment of Skewness",
                content: "If the median line is not centered in the box, your distribution is **Skewed**. A crucial indicator that the mean alone cannot reveal.",
                layout: "standard"
            }
        ],
        footer: "The boxplot summarizes in one graph the five-number summary (min, Q1, median, Q3, max) and identifies outliers via the 1.5×IQR rule."
    },
    "tri-plat": {
        bloc: 2,
        type: "TYPE_FLEXIBLE",
        title: "Frequency Table",
        subtitle: "Univariate Frequency Analysis",
        character: { shape: "grid", color: "#64748b", eyes: "happy" },
        tags: ["frequency table", "counts", "percentages", "frequencies", "description", "univariate", "qualitative"],
        figure: { src: "images/figure_histogram.png", caption: "Fig. 2 — Frequency Distribution: Histograms allow for the visualization of data density across categories." },
        sections: [
            {
                title: "Univariate Description",
                content: "The frequency table is the first step of any qualitative analysis. It simply counts how many times each category appears.",
                layout: "standard"
            },
            {
                title: "Relative Frequencies",
                content: "*   **Counts**: How many people?\n*   **Percentages**: What share of the total? Percentages are crucial for comparing groups of different sizes.",
                layout: "highlight"
            }
        ],
        footer: "The frequency table is the standard univariate description for categorical variables."
    },
    // ==========================================
    // BLOCK 3: Bivariate (Relationships)
    // ==========================================
    "principe-inference": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Principle of Inference",
        subtitle: "Dynamics of Statistical Inference",
        character: { shape: "telescope", color: "#6366f1", eyes: "focused" },
        tags: ["inference", "generalization", "population", "sample", "uncertainty", "probability", "margin of error"],
        sections: [
            {
                title: "Inference Logic",
                content: "Inference is the probabilistic 'leap' that allows us to state things about an entire population based on a simple sample.\n\nIt's a journey from the **Particular** (the 1000 people surveyed) to the **General** (the nation).",
                layout: "standard"
            },
            {
                title: "Quantification of Uncertainty",
                content: "Misconception: 'We can never be sure'.\nExactly! Inference doesn't seek absolute certainty, but rather to **precisely measure** our margin of error and our risk of being wrong.",
                layout: "highlight"
            }
        ],
        footer: "Inference transforms a point estimate into a probabilistic decision accompanied by a quantified error risk."
    },
    "dist-echantillonnage": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Sampling Distribution",
        subtitle: "Variable Aléatoire and Sampling Theory",
        character: { shape: "cloud", color: "#94a3b8", eyes: "surprised" },
        tags: ["sampling distribution", "p-value", "normal distribution", "CLT", "standard error", "SE", "simulation"],
        sections: [
            {
                title: "Conceptual Framework",
                content: "Imagine drawing 10,000 samples of 100 people. Each sample will have a different mean. The histogram of these 10,000 means is the **sampling distribution**.",
                layout: "standard"
            },
            {
                title: "Probabilistic Modeling",
                content: "Even though your sample is unique, the law of probabilities tells us exactly where it is most likely to be relative to the true population mean.",
                layout: "highlight"
            }
        ],
        footer: "The sampling distribution is the probabilistic model underlying the calculation of the p-value."
    },
    "theoreme-central-limite": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Central Limit Theorem",
        subtitle: "Convergence to Normality",
        character: { shape: "cloud", color: "#10b981", eyes: "happy" },
        tags: ["CLT", "central limit theorem", "normal distribution", "n ≥ 30", "mean", "distribution", "parametric"],
        sections: [
            {
                title: "Convergence to Normality",
                content: "The CLT guarantees that the distribution of sample means will **ALWAYS** follow a Normal Distribution if n is sufficient (n ≥ 30), regardless of the original population's shape.",
                layout: "standard"
            },
            {
                title: "Foundations of Parametric Inference",
                content: "This is why we can apply parametric tests (Z-test, T-test) to almost any data as long as our sample is large enough.",
                layout: "highlight"
            }
        ],
        footer: "The CLT guarantees convergence of the sample mean to N(μ, σ²/n) regardless of the original distribution."
    },
    "hypothese-nulle": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Null Hypothesis (H0)",
        subtitle: "Principle of Falsifiability",
        character: { shape: "shield", color: "#64748b", eyes: "focused" },
        tags: ["H0", "null hypothesis", "H1", "test", "significance", "false positive", "type I error"],
        sections: [
            {
                title: "Null Hypothesis (H0)",
                content: "H0 is the baseline hypothesis: we assume that **nothing** is happening. No difference, no effect, no link. \n\n*Example*: 'This drug is no more effective than a glass of water'.",
                layout: "standard"
            },
            {
                title: "Hypothesis Testing",
                content: "You, the researcher, carry the alternative hypothesis (H1). To win, you must accumulate enough evidence to reject H0. If H0 is not rejected, we say we 'fail to reject it'.",
                layout: "highlight"
            }
        ],
        footer: "Statistical tests do not establish H1; they assess to what extent the data are incompatible with H0."
    },
    "loi-normale": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Normal Distribution",
        subtitle: "Geometric Interpretation",
        character: { shape: "bell", color: "#6366f1", eyes: "happy" },
        tags: ["normal distribution", "Gauss", "bell curve", "μ", "σ", "Z-score", "standardization", "68-95-99", "parametric"],
        figure: { src: "images/figure_loi_normale.png", caption: "Fig. 4 — Normal Distribution N(μ, σ²): Empirical intervals ±1σ (68%), ±2σ (95.4%), ±3σ (99.7%)." },
        sections: [
            {
                title: "Parameters of the Normal Distribution",
                content: "Defined by mean (**μ**) and standard deviation (**σ**). It is perfectly symmetrical. Mean = Median = Mode.",
                layout: "standard"
            },
            {
                title: "Standardization (Z-score)",
                content: "Standardizing data allows for universal comparison:\n\n**z = (x - μ) / σ**\n\n*A z-score of +1.96 marks the beginning of the top 2.5% of the curve.*",
                layout: "highlight"
            },
            {
                title: "Confidence Intervals",
                content: "Predictable probabilities:\n*   **68%** within ± 1 σ.\n*   **95%** within ± 1.96 σ.\n*   **99.7%** within ± 3 σ.",
                layout: "standard"
            }
        ],
        footer: "N(μ, σ²): the most ubiquitous distribution in inferential statistics, justified by the CLT."
    },
    "p-value": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "P-Value",
        subtitle: "Significance and Decision Rules",
        character: { shape: "star", color: "#fbbf24", eyes: "surprised" },
        tags: ["p-value", "alpha threshold", "α", "significance", "H0", "false positive", "type I error", "decision"],
        sections: [
            {
                title: "Significance Threshold",
                content: "Probability of obtaining the observed results if the Null Hypothesis (H₀) were true. We compare it to the **α threshold**, usually **0.05**.",
                layout: "standard"
            },
            {
                title: "Statistical Decision",
                content: "*   **p < 0.05**: Significant. Reject H₀.\n*   **p > 0.05**: Not Significant. Fail to reject H₀.",
                layout: "highlight"
            },
            {
                title: "Type I Error Risk",
                content: "A p-value of 0.04 means there is still a 4% chance of a **False Positive** (rejecting H₀ when it is true).",
                layout: "alert"
            }
        ],
        footer: "The p-value quantifies the compatibility of the data with H0 — it is neither an absolute error probability nor a measure of effect size."
    },
    "seuil-significativite": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Significance Threshold (α)",
        subtitle: "Risk-Power Optimization",
        character: { shape: "divider", color: "#ef4444", eyes: "focused" },
        tags: ["alpha", "threshold", "risk", "significance", "type I error", "power", "trade-off"],
        sections: [
            {
                title: "Setting the Alpha Threshold",
                content: "We decide BEFORE the analysis which level of proof is necessary. If my risk of error (p-value) is smaller than my threshold (alpha), then I declare the result significant.",
                layout: "standard"
            },
            {
                title: "Power/Risk Trade-off",
                content: "Common misconception: '0.05 is a divine law'.\nNo, it's a convention proposed by Ronald Fisher in 1925. In some fields (physics), much stricter thresholds are used.",
                layout: "highlight"
            }
        ],
        footer: "α controls the Type I error rate; reducing it requires increasing sample size to maintain statistical power."
    },
    "concept-ic": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Confidence Interval (CI)",
        subtitle: "Estimation Intervals",
        character: { shape: "bubble", color: "#10b981", eyes: "calm" },
        tags: ["confidence interval", "CI", "95%", "z", "standard error", "estimation", "precision"],
        sections: [
            {
                title: "Interval Estimation",
                content: "A Confidence Interval (CI) estimates the range where the population parameter (μ) is likely to lie:\n\n**CI = x̄ ± z * (s / √n)**\n\n*Where z = 1.96 for a 95% Confidence Level.*",
                layout: "standard"
            },
            {
                title: "Precision and Sample Size",
                content: "The width of the interval depends on:\n1.  **Sample Size (n)**: Larger n results in a narrower, more precise interval.\n2.  **Variability (s)**: Higher standard deviation leads to a wider interval.",
                layout: "highlight"
            }
        ],
        footer: "A 95% CI means the procedure produces an interval containing the true parameter in 95% of possible samples."
    },
    "degre-liberte": {
        bloc: 3,
        type: "TYPE_FLEXIBLE",
        title: "Degrees of Freedom (df)",
        subtitle: "Degrees of Freedom",
        character: { shape: "puzzle", color: "#334155", eyes: "focused" },
        tags: ["df", "degrees of freedom", "n-1", "Student", "chi-square", "Fisher", "distribution table"],
        sections: [
            {
                title: "Degrees of Freedom Concept",
                content: "The number of values in the final calculation that are free to vary. \n*   **Example**: For a mean estimation, df = **n - 1**. Once the mean and n-1 values are known, the last value is fixed.",
                layout: "standard"
            },
            {
                title: "Distribution and df",
                content: "Degrees of freedom are essential for looking up critical values in T, F, or Chi-Square tables. They refine the precision of our p-value.",
                layout: "highlight"
            }
        ],
        footer: "Degrees of freedom parameterize the test's distribution law and determine the critical value to compare against the observed statistic."
    },

    // ==========================================
    // BLOCK 4: Bivariate Relationships
    // ==========================================
    "cor-causalite": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Correlation vs Causality",
        subtitle: "Structural Relationships",
        character: { shape: "puzzle", color: "#f97316", eyes: "focused" },
        tags: ["causality", "correlation", "hidden variable", "confounder", "spurious", "causal inference"],
        sections: [
            {
                title: "Confounding Factors",
                content: "Two variables can be perfectly synchronized without there being any cause-and-effect link between them. Often, a **hidden variable** explains both.\n\n*Classic Example*: Ice cream sales and drownings increase at the same time. Ice cream doesn't cause drowning; it's the sun that causes both.",
                layout: "standard"
            },
            {
                title: "Spurious Correlations",
                content: "Common misconception: 'If the correlation is 0.9, it's necessarily a cause'.\nFalse! This is a **spurious correlation**. In statistics, the link is only a clue, not a proof of guilt.",
                layout: "highlight"
            }
        ],
        footer: "A correlation is a necessary but not sufficient condition to establish a causal relationship."
    },
    "test-chi2": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Chi-Square Test (χ²)",
        subtitle: "Frequency Independence Test",
        character: { shape: "grid", color: "#f97316", eyes: "happy" },
        tags: ["chi-square", "chi2", "independence", "cross-table", "cramer", "nominal", "categorical", "frequencies", "reporting"],
        figure: { src: "images/figure_chi2.png", caption: "Fig. 5 — Chi-Square (χ²) Distribution: The shaded area represents the rejection region for p < .05." },
        sections: [
            {
                title: "Test Logic",
                content: "The Chi-Square compares **Observed** frequencies (O) to **Expected** frequencies (E) under the null hypothesis of independence:\n\n**χ² = Σ [ (O - E)² / E ]**\n\n*Expected counts: E = (Row Total × Column Total) / Grand Total*",
                layout: "standard"
            },
            {
                title: "Application Prerequisites",
                content: "*   **Independence** of observations.\n*   Expected counts must be ≥ 5 in at least 80% of the cells.\n\n*If violated → merge categories or use **Fisher's Exact Test**.*",
                layout: "alert"
            },
            {
                title: "Association Strength (Cramer's V)",
                content: "The χ² only says 'yes or no'. To know *how strong*, we compute **Cramer's V**:\n\n**V = √( χ² / (n × min(L−1, C−1)) )**\n\n*   **V < 0.10**: Weak association\n*   **V ≈ 0.30**: Moderate association\n*   **V > 0.50**: Strong association",
                layout: "highlight"
            },
            {
                title: "Results Reporting",
                content: "*\"A chi-square test revealed a [significant/non-significant] association between [VarA] and [VarB], χ²([df]) = [value], p [< or >] .05. The strength of the association was [weak/moderate/strong] (Cramer's V = [value]).\"*",
                layout: "standard"
            }
        ],
        footer: "The χ² is a goodness-of-fit statistic comparing the observed distribution to the theoretical distribution under independence."
    },
    "test-ttest": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Student's T-Test",
        subtitle: "Comparison of Group Means",
        character: { shape: "twins", color: "#6366f1", eyes: "happy" },
        tags: ["t-test", "student", "two groups", "means", "cohen", "levene", "independent", "paired", "welch", "reporting"],
        figure: { src: "images/figure_ttest.png", caption: "Fig. 6 — Comparison of Means: The t-test evaluates whether the difference between distributions is statistically significant." },
        sections: [
            {
                title: "Student's t-statistic",
                content: "Quantifies how large the difference between means is relative to variability:\n\n**t = (x̄₁ − x̄₂) / SE_diff**\n\nIf |t| > critical value (≈ 1.96 for n > 30), we reject H₀.",
                layout: "standard"
            },
            {
                title: "Methodological Prerequisites",
                content: "1.  **Normality** in each group (Shapiro-Wilk or n ≥ 30 via CLT).\n2.  **Homogeneity of Variances**: Levene's Test.\n\n*   Levene p > .05 → equal variances → **classic t-test**\n*   Levene p < .05 → unequal variances → **Welch's t-test** (Jamovi applies this automatically)",
                layout: "alert"
            },
            {
                title: "Effect Size (Cohen's d)",
                content: "A significant p-value doesn't tell you if the effect is *important*. **Cohen's d** measures the standardized gap:\n\n**d = (x̄₁ − x̄₂) / s_pooled**\n\n*   **d ≈ 0.20**: Small effect\n*   **d ≈ 0.50**: Medium effect\n*   **d ≈ 0.80**: Large effect",
                layout: "highlight"
            },
            {
                title: "Results Reporting",
                content: "*\"An independent samples t-test revealed a [significant/non-significant] difference between the two groups, t([df]) = [value], p [< or >] .05, Cohen's d = [value].\"*",
                layout: "standard"
            }
        ],
        footer: "Statistical significance (p < .05) and practical significance (Cohen's d) are complementary pieces of information."
    },
    "test-anova": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "ANOVA",
        subtitle: "Omnibus Variance Analysis",
        character: { shape: "podiums", color: "#fbbf24", eyes: "happy" },
        tags: ["anova", "F statistic", "groups", "variance", "eta-squared", "post-hoc", "tukey", "SSB", "SSW", "reporting"],
        figure: { src: "images/figure_anova.png", caption: "Fig. 7 — Analysis of Variance (ANOVA): Simultaneous comparison of multiple group means." },
        sections: [
            {
                title: "Multiple Comparisons",
                content: "ANOVA extends the t-test to **3 or more groups**.\n\n*   **H0**: μ₁ = μ₂ = μ₃ (all group means are equal)\n*   **H1**: At least one mean differs from the others.",
                layout: "standard"
            },
            {
                title: "Decomposition of Variance (F)",
                content: "ANOVA decomposes total variance into two parts:\n\n**F = (SSB / k−1) / (SSW / N−k)**\n\n*   **SSB**: Between-groups variance (signal)\n*   **SSW**: Within-groups variance (noise)\n\nA large F means groups differ more than chance would predict.",
                layout: "highlight"
            },
            {
                title: "Explained Variance (Eta-squared)",
                content: "After a significant F, measure the *proportion of variance explained*:\n\n**η² = SSB / SS_total**\n\n*   **η² ≈ 0.01**: Small effect\n*   **η² ≈ 0.06**: Medium effect\n*   **η² ≈ 0.14**: Large effect",
                layout: "standard"
            },
            {
                title: "Post-hoc Comparisons",
                content: "ANOVA says 'someone is different'. **Post-Hoc tests** (Tukey HSD, Bonferroni) compare every pair of groups while controlling cumulative error rate.\n\n*In practice: Tukey HSD is the standard when groups have similar sizes.*",
                layout: "alert"
            },
            {
                title: "Results Reporting",
                content: "*\"A one-way ANOVA revealed a [significant/non-significant] effect of [factor] on [DV], F([k−1], [N−k]) = [value], p [< or >] .05, η² = [value]. Tukey post-hoc tests indicated that [Group A] differed significantly from [Group B] (p = [value]).\"*",
                layout: "standard"
            }
        ],
        footer: "ANOVA is an omnibus test: a significant F authorizes post-hoc comparisons, but does not itself identify which groups differ."
    },
    "test-cor": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Pearson Correlation (r)",
        subtitle: "Linear Relationship Magnitude",
        character: { shape: "line", color: "#6366f1", eyes: "happy" },
        tags: ["Pearson", "r", "correlation", "linear", "r²", "covariance", "continuous", "significance"],
        sections: [
            {
                title: "Pearson's Correlation",
                content: "Measures the linear association between two continuous variables:\n\n**r = Cov(X,Y) / (σₓ σᵧ)**",
                layout: "standard"
            },
            {
                title: "Interpretation",
                content: "*   **r = 1**: Perfect positive link.\n*   **r = 0**: No linear link.\n*   **r = -1**: Perfect negative link.",
                layout: "highlight"
            },
            {
                title: "Coefficient of Determination",
                content: "The square of r tells us how much of the variance in Y is shared with X. If r = 0.50, X explains **25%** of Y's variance.",
                layout: "alert"
            }
        ],
        footer: "The r coefficient is sensitive to linearity and outliers; always inspect the scatterplot before interpreting."
    },
    "test-spearman": {
        bloc: 4,
        type: "TYPE_FLEXIBLE",
        title: "Spearman Correlation (ρ)",
        subtitle: "Monotonous Relationship Test",
        character: { shape: "snake", color: "#ec4899", eyes: "focused" },
        tags: ["Spearman", "ρ", "rho", "ranks", "non-parametric", "monotone", "ordinal", "outlier"],
        sections: [
            {
                title: "Rank Correlation",
                content: "Unlike Pearson, Spearman does not require a straight line. It works on **ranks** (rankings).\n\nIt's the perfect tool if your data is skewed or if you work with scales (e.g., from 1 to 10).",
                layout: "standard"
            },
            {
                title: "Robustness to Outliers",
                content: "Spearman is much more robust against outliers. An 'extreme' individual will not break your calculation.",
                layout: "highlight"
            }
        ],
        footer: "ρ is the non-parametric equivalent of r: it measures the monotonicity of the relationship rather than its linearity."
    },

    // ==========================================
    // BLOCK 5: Linear Regression and Multivariate Analysis
    // ==========================================
    "raisonnement-cepa": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "All Other Things Being Equal",
        subtitle: "Ceteris Paribus Control",
        character: { shape: "vacuum", color: "#3b82f6", eyes: "focused" },
        tags: ["ceteris paribus", "statistical control", "multiple regression", "confounder", "net effect"],
        sections: [
            {
                title: "Statistical Control Principle",
                content: "In the real world, everything moves at the same time. To know if education *really* influences salary, you have to compare people of the same age, the same sex, and same seniority.\n\nMultiple regression allows you to 'block' other factors mathematically.",
                layout: "standard"
            },
            {
                title: "Isolation of Net Effects",
                content: "This is the basis of scientific reasoning: to prove the effect of A, we must ensure that B, C, and D do not disturb the analysis. This is the sovereign power of statistical control.",
                layout: "highlight"
            }
        ],
        footer: "Statistical control is the operation that isolates the net effect of a predictor by neutralizing the influence of covariates."
    },
    "var-dep-indep": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "Dependent / Independent Variable",
        subtitle: "Variable Role Identification",
        character: { shape: "nexus", color: "#6366f1", eyes: "happy" },
        tags: ["dependent variable", "independent variable", "Y", "X", "predictor", "criterion", "modeling"],
        sections: [
            {
                title: "Independent Variable (IV)",
                content: "The **Independent** variable (X) is the one you manipulate or observe as a cause. It's the lever you pull.",
                layout: "standard"
            },
            {
                title: "Dependent Variable (DV)",
                content: "The **Dependent** variable (Y) is the result. It 'depends' on the value of X. It's the score you're trying to explain or predict.",
                layout: "highlight"
            }
        ],
        footer: "The IV/DV distinction structures the causal logic of the model and determines the direction of coefficient interpretation."
    },
    "droite-regression": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "The Regression Line",
        subtitle: "Least Squares Optimization",
        character: { shape: "line", color: "#f97316", eyes: "happy" },
        tags: ["regression", "beta", "coefficient", "slope", "linear", "residual", "prediction", "OLS", "t-value", "reporting"],
        figure: { src: "images/figure_regression.png", caption: "Fig. 8 — Scatterplot with OLS regression line. Vertical segments show residuals (ε = Y − Ŷ)." },
        sections: [
            {
                title: "Linear Regression Model",
                content: "We model Y as a weighted combination of predictors:\n\n**Ŷ = β₀ + β₁X₁ + β₂X₂ + ... + ε**\n\n*   **β₀**: Intercept (Y when all X = 0)\n*   **βᵢ**: Net effect of Xᵢ on Y (controlling all other predictors)\n*   **ε**: Residual (unexplained part)",
                layout: "standard"
            },
            {
                title: "Analysis of Coefficients",
                content: "Each predictor X produces a row in the Jamovi/R output:\n*   **Estimate (β)**: Net effect of X on Y — 'all else being equal'\n*   **Std. Error (SE)**: Precision of this estimate\n*   **t value**: Ratio β/SE — the larger |t|, the more powerful X\n*   **p-value**: If p < .05, X's effect is significant\n*   **95% CI**: Plausible range for β",
                layout: "highlight"
            },
            {
                title: "Interpretation of β Coefficients",
                content: "If **β₁ = 3.2** with Y = Salary (€) and X = Years of education:\n\n> *'Each additional year of education is associated with a €3.2 increase in salary, all other things being equal.'*\n\n*For a binary (0/1) variable: β is the difference in Y between category 1 and the reference category.*",
                layout: "standard"
            },
            {
                title: "Results Reporting",
                content: "*\"A multiple linear regression revealed that the model explained R²adj = [x]% of the variance in [DV], F([k], [N−k−1]) = [value], p < .001. [Variable X] significantly predicted [DV] (β = [value], SE = [value], t = [value], p [< or >] .05).\"*",
                layout: "alert"
            }
        ],
        footer: "Determining which β is statistically and substantively significant is the central challenge of regression analysis."
    },
    "coeff-determination": {
        bloc: 5,
        type: "TYPE_FLEXIBLE",
        title: "The R-Squared (R²)",
        subtitle: "Model Explanatory Power",
        character: { shape: "target", color: "#10b981", eyes: "happy" },
        tags: ["R-squared", "R2", "explained variance", "model quality", "F global", "adjusted", "SS_res", "SS_tot", "regression", "Nagelkerke"],
        sections: [
            {
                title: "Coefficient of Determination (R²)",
                content: "R² measures what fraction of Y's variance is explained by the model:\n\n**R² = 1 − (SS_res / SS_tot) = SS_reg / SS_tot**\n\n*   SS_res = Sum of **Res**idual Squares\n*   SS_tot = **Tot**al Sum of Squares\n*   SS_reg = **Reg**ression Sum of Squares",
                layout: "standard"
            },
            {
                title: "Benchmarks in Social Sciences",
                content: "Typical thresholds in sociology/psychology:\n*   **R² ≈ 0.10**: Weak but realistic\n*   **R² ≈ 0.30**: Moderate\n*   **R² ≈ 0.50+**: Strong\n\n*Warning: High R² does not prove causality!*",
                layout: "highlight"
            },
            {
                title: "Adjusted R²",
                content: "R² inflates mechanically as you add predictors. The **Adjusted R²** penalizes this complexity:\n\n**R²adj = 1 − [ (1−R²) × (n−1) / (n−k−1) ]**\n\n*Where k = number of predictors.* → Always report **Adjusted R²** in multiple regression.",
                layout: "alert"
            },
            {
                title: "Global Model Significance",
                content: "The **F statistic** tests whether the entire model is significant (H0: all β = 0):\n\n**F = (SS_reg / k) / (SS_res / (n−k−1))**\n\n                content: "The ** F statistic ** tests whether the entire model is significant(H0: all β = 0): \n\n ** F = (SS_reg / k) / (SS_res / (n−k−1))**\n\nThis is the ** first thing to check ** in a regression output.If p > .05 → the whole model is useless.",
                layout: "standard"
            },
            {
    title: "Adjustment Diagnosis",
        content: "*   **R**: Multiple correlation (= √R²)\n*   **R²**: Raw explained variance\n*   **Adj. R²**: What to report in your paper\n*   **F([k], [n−k−1])**: Global model test\n*   **p**: Significance of the entire model",
            layout: "highlight"
}
        ],
footer: "Adjusted R² is the standard criterion for assessing goodness-of-fit in multiple regression."
    },
"cor-spurieuse": {
    bloc: 5,
        type: "TYPE_FLEXIBLE",
            title: "Suppression Effect",
                subtitle: "Multivariate Mediation Patterns",
                    character: { shape: "nexus", color: "#ec4899", eyes: "surprised" },
    tags: ["spurious", "suppression", "confounding", "control variable", "multivariate", "bias", "causal inference"],
        sections: [
            {
                title: "Multivariate Control Logic",
                content: "This is the opposite of spurious correlation. Here, a real link exists but is 'suffocated' by another variable.\n\nIt only appears when 'cleaning' data through statistical control.",
                layout: "standard"
            },
            {
                title: "Interpretation",
                content: "In multivariate analysis, a variable that seemed useless can become vital once separated from other influences. This is the magic of regression.",
                layout: "highlight"
            }
        ],
            footer: "Any bivariate correlation must be subjected to multivariate control before any causal interpretation."
},

// ==========================================
// NEW SHEETS: Verification & Diagnostics
// ==========================================

"test-shapiro": {
    bloc: 3,
        type: "TYPE_FLEXIBLE",
            title: "Shapiro-Wilk Test",
                subtitle: "Normality Prerequisite",
                    character: { shape: "bell", color: "#8b5cf6", eyes: "focused" },
    tags: ["shapiro", "wilk", "normality", "distribution", "parametric", "assumption", "Q-Q plot", "prerequisite"],
        sections: [
            {
                title: "Test Objective",
                content: "The Shapiro-Wilk test checks whether a distribution is compatible with a **Normal Distribution**. It is a mandatory prerequisite for the t-test, ANOVA, and Pearson correlation.\n\n*   **H0**: The distribution is normal.\n*   **H1**: The distribution significantly deviates from normality.",
                layout: "standard"
            },
            {
                title: "Decision Procedure",
                content: "*   **p > 0.05**: No evidence against normality → parametric tests allowed.\n*   **p < 0.05**: Non-normal distribution → consider a non-parametric test (Mann-Whitney, Kruskal-Wallis).",
                layout: "highlight"
            },
            {
                title: "Sensitivity and Limitations",
                content: "*   **Large n (> 200)**: The test becomes hypersensitive. Trivial deviations reject H0. Use the **Q-Q Plot** instead (if points follow the diagonal → normality is sufficient).\n\n*   **Small n (< 30)**: The test lacks power and may miss a true non-normality.",
                layout: "alert"
            },
            {
                title: "Syntax and Integration",
                content: "**R**: `shapiro.test(residuals(my_model))`\n\n**Jamovi**: Analyses → Exploration → Shapiro-Wilk (check the box)",
                layout: "standard"
            }
        ],
            footer: "Shapiro-Wilk: the gatekeeper of the parametric world."
},

"test-levene": {
    bloc: 4,
        type: "TYPE_FLEXIBLE",
            title: "Levene's Test",
                subtitle: "Homoscedasticity Prerequisite",
                    character: { shape: "twins", color: "#f97316", eyes: "focused" },
    tags: ["levene", "homogeneity", "variances", "homoscedasticity", "assumption", "t-test", "anova", "welch", "check"],
        sections: [
            {
                title: "Homogeneity of Variances",
                content: "Levene's test checks whether **variances are equal** across the groups being compared. It is a prerequisite for the classic t-test and ANOVA.\n\n*   **H0**: Variances are equal across all groups.\n*   **H1**: At least one variance differs.",
                layout: "standard"
            },
            {
                title: "Action according to Result",
                content: "*   **Levene p > .05**: Homogeneous variances → use classic t-test or standard ANOVA.\n*   **Levene p < .05**: Heteroscedasticity → use **Welch's t-test** (2 groups) or **Welch's ANOVA** (k groups).\n\n*Good news: Jamovi applies the Welch correction automatically.*",
                layout: "highlight"
            },
            {
                title: "Robustness",
                content: "The t-test and ANOVA are fairly **robust** to violations of homogeneity when group sizes are **balanced**. When in doubt, always prefer Welch's version.",
                layout: "alert"
            },
            {
                title: "Syntax and Integration",
                content: "**R**: `leveneTest(y ~ group, data = df)` *(car package)*\n\n**Jamovi**: T-Test → Homogeneity of variances (Levene's)",
                layout: "standard"
            }
        ],
            footer: "Unequal variances? Welch's test is there for that."
},

"residus-regression": {
    bloc: 5,
        type: "TYPE_FLEXIBLE",
            title: "Residuals & Model Diagnostics",
                subtitle: "Checking Regression Assumptions",
                    character: { shape: "target", color: "#ef4444", eyes: "focused" },
    tags: ["residuals", "diagnostics", "normality", "homoscedasticity", "Q-Q plot", "Cook", "VIF", "Durbin-Watson", "outlier", "influence"],
        figure: { src: "images/figure_qqplot.png", caption: "Fig. 9 — Q-Q Plot of residuals: Points on the diagonal indicate compatibility with normality." },
    sections: [
        {
            title: "Definition of Residuals",
            content: "A **residual** is the difference between the *observed* value and the *predicted* value from the model:\n\n**ε = Y_observed − Ŷ_predicted**\n\nAnalyzing residuals checks whether the OLS regression assumptions hold.",
            layout: "standard"
        },
        {
            title: "Basic Assumptions (Gauss-Markov)",
            content: "1.  **Linearity**: Check via Residuals vs Fitted plot (no visible curve).\n2.  **Normality of residuals**: Q-Q Plot or Shapiro-Wilk on residuals.\n3.  **Homoscedasticity**: Residual variance is constant (no funnel shape).\n4.  **Independence**: Residuals are not autocorrelated (Durbin-Watson test).",
            layout: "highlight"
        },
        {
            title: "Graphical Normality Analysis",
            content: "The Q-Q Plot compares standardized residuals to the theoretical quantiles of a normal distribution:\n\n*   **Points on the diagonal**: Normality holds.\n*   **Points deviating at the extremes**: Heavy tails or skewness → normality problem.",
            layout: "standard"
        },
        {
            title: "Influence Points (Cook's Distance)",
            content: "**Cook's Distance** measures how much each observation influences the entire model:\n\n**A point is suspect if Cook's D > 4/n**\n\nThese points are not necessarily to be deleted, but must be examined individually.",
            layout: "alert"
        },
        {
            title: "Syntax and Integration",
            content: "**R**: `plot(my_model)` → 4 diagnostic plots automatically\n\n**Jamovi**: Linear Regression → Plots → Residuals vs Fitted + Q-Q Normal",
            layout: "standard"
        }
    ],
        footer: "An undiagnosed model is an unvalidated model."
},

"reg-logistique": {
    bloc: 5,
        type: "TYPE_FLEXIBLE",
            title: "Logistic Regression",
                subtitle: "Probabilistic Binary Modeling",
                    character: { shape: "nexus", color: "#6366f1", eyes: "happy" },
    tags: ["logistic", "odds ratio", "OR", "probability", "binary", "logit", "pseudo R2", "AIC", "Nagelkerke", "0/1"],
        sections: [
            {
                title: "Indications",
                content: "Use logistic regression when the **dependent variable is binary** (0/1, Yes/No, Success/Failure). It models the *probability* of belonging to category '1'.\n\n*Example: Predicting whether a student passes (1) or fails (0) based on study time.*",
                layout: "standard"
            },
            {
                title: "Logit Function",
                content: "We don't predict Y directly, but the **log of the odds (logit)**:\n\n**logit(P) = log(P / (1−P)) = β₀ + β₁X₁ + ...**\n\nThe predicted probability is then obtained via the logistic function:\n**P = 1 / (1 + e⁻ˡᵒᵍⁱᵗ)**",
                layout: "highlight"
            },
            {
                title: "Interpretation of Odds Ratios",
                content: "Raw β coefficients are hard to interpret. We exponentiate them to get **Odds Ratios**:\n\n**OR = e^β**\n\n*   **OR > 1**: The variable increases the odds of Y = 1.\n*   **OR < 1**: The variable decreases the odds.\n*   **OR = 1**: No effect on the odds.",
                layout: "standard"
            },
            {
                title: "Adjustment Indices (Pseudo-R²)",
                content: "There is no exact R² in logistic regression. We use **Pseudo-R²**:\n\n*   **Nagelkerke R²**: Most interpretable (0 to 1).\n*   **Omnibus χ² test**: If p < .05, the model predicts better than chance.\n*   **AIC**: Information criterion to compare models (lower = better).",
                layout: "alert"
            },
            {
                title: "Syntax and Integration",
                content: "**R**: `glm(y ~ x1 + x2, data = df, family = binomial)`\n\n**Jamovi**: Analyses → Regression → Binomial Logistic Regression",
                layout: "standard"
            }
        ],
            footer: "The Odds Ratio: the exchange currency of logistic regression."
},

"multicolinearite": {
    bloc: 5,
        type: "TYPE_FLEXIBLE",
            title: "Multicollinearity",
                subtitle: "Collinearity Diagnostics",
                    character: { shape: "puzzle", color: "#f43f5e", eyes: "surprised" },
    tags: ["VIF", "multicollinearity", "correlation", "predictors", "instability", "tolerance", "multiple regression"],
        sections: [
            {
                title: "Multicollinearity Concept",
                content: "Multicollinearity arises when two or more independent variables are **very highly correlated with each other**. Result: β estimates become unstable and standard errors explode.",
                layout: "alert"
            },
            {
                title: "Detection (VIF)",
                content: "The **Variance Inflation Factor (VIF)** measures how much a β estimate is 'inflated' by collinearity:\n\n*   **VIF < 5**: Acceptable\n*   **VIF 5–10**: Concerning\n*   **VIF > 10**: Serious problem → action required",
                layout: "highlight"
            },
            {
                title: "Remediation Strategies",
                content: "*   **Remove** one of the redundant predictors.\n*   **Combine** correlated variables into a single composite score.\n*   **Center** continuous variables before creating interaction terms.\n*   **Ridge Regression**: Advanced technique that tolerates collinearity better.",
                layout: "standard"
            },
            {
                title: "Syntax and Integration",
                content: "**R**: `vif(my_model)` *(car package)*\n\n**Jamovi**: Regression → Statistics → Collinearity statistics (VIF)",
                layout: "standard"
            }
        ],
            footer: "Predictors too correlated? Your model doesn't know who to believe."
}
};
