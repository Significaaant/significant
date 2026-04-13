/**
 * G*Power Calculator Engine (Mini-Express)
 * Providing approximations for sample size calculations.
 */

const GPowerCalc = {
    /**
     * Normal Inverse Cumulative Distribution Function
     * Approximation for p in [0, 1]
     */
    pnormInv: function (p) {
        const a1 = -39.6968302866538, a2 = 220.946098402483, a3 = -275.928510446969;
        const a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
        const b1 = -54.4760987942269, b2 = 161.585836858041, b3 = -155.698979859887;
        const b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -0.00778489400243029;
        const c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
        const c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 0.00778469570904146;
        const d2 = 0.32246712907004, d3 = 2.44513413714299, d4 = 3.75440866190742;
        const p_low = 0.02425, p_high = 1 - p_low;
        let q, r;

        if (p < p_low) {
            q = Math.sqrt(-2 * Math.log(p));
            return (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
                ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
        } else if (p <= p_high) {
            q = p - 0.5;
            r = q * q;
            return (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
                (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
        } else {
            q = Math.sqrt(-2 * Math.log(1 - p));
            return -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
                ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
        }
    },

    /**
     * T-Test (Independent Means)
     * Approximation for N total using normal approximation to t-distribution
     */
    calcTTest: function (d, alpha, power, tails, allocationRatio = 1) {
        if (d <= 0) return 0;
        const zAlpha = this.pnormInv(1 - alpha / tails);
        const zBeta = this.pnormInv(power);

        // Base formula for normal distribution
        let n1 = (1 + 1 / allocationRatio) * Math.pow((zAlpha + zBeta) / d, 2);

        // Small sample correction (Law of Small Numbers)
        // Adding a factor to account for the heavier tails of t-distribution
        if (n1 < 30) {
            n1 *= (1 + 1.2 / n1);
        }

        const n2 = n1 * allocationRatio;
        return Math.ceil(n1 + n2);
    },

    /**
     * ANOVA One-Way (Fixed effects)
     * Improved approximation for F-test
     */
    calcAnova: function (f, alpha, power, groups) {
        if (f <= 0) return 0;
        const zAlpha = this.pnormInv(1 - alpha);
        const zBeta = this.pnormInv(power);

        // Effective Degrees of Freedom adjustment
        // Lambda = N * f^2. We use a more refined version of the power function
        const df1 = groups - 1;
        const nTotalBase = Math.pow((zAlpha + zBeta) / f, 2);

        // Empirical correction for k groups and small N
        const kFactor = Math.sqrt(df1) * 0.5;
        const nTotal = nTotalBase + kFactor;

        return Math.ceil(nTotal);
    },

    /**
     * Correlation
     * Bivariate normal model approximation
     */
    calcCorrelation: function (r, alpha, power, tails) {
        if (Math.abs(r) <= 0 || Math.abs(r) >= 1) return 0;
        const zAlpha = this.pnormInv(1 - alpha / tails);
        const zBeta = this.pnormInv(power);

        // Fisher's z transformation (most accurate for correlations)
        const zr = 0.5 * Math.log((1 + r) / (1 - r));
        const n = Math.pow((zAlpha + zBeta) / zr, 2) + 3;

        return Math.ceil(n);
    },

    /**
     * Compute N for Means: Difference between two dependent means (matched pairs)
     */
    calcTTestPaired: function (dz, alpha, power, tails = 2) {
        const zAlpha = this.pnormInv(1 - alpha / tails);
        const zBeta = this.pnormInv(power);
        // N = ((zAlpha + zBeta) / dz)^2
        const n = Math.pow((zAlpha + zBeta) / dz, 2);
        return Math.ceil(n);
    },

    /**
     * Compute N for Linear multiple regression: Fixed model, R² deviation from zero
     */
    calcRegression: function (f2, alpha, power, predictors) {
        const zAlpha = this.pnormInv(1 - alpha);
        const zBeta = this.pnormInv(power);
        // Lambda = (zAlpha + zBeta)^2
        // N = Lambda / f2
        const lambda = Math.pow(zAlpha + zBeta, 2);
        const n = lambda / f2 + predictors; // Simplified approximation
        return Math.ceil(n);
    },

    /**
     * Compute N for Proportions: Difference between two independent proportions
     */
    calcProportions: function (p1, p2, alpha, power, tails = 2, allocationRatio = 1) {
        const zAlpha = this.pnormInv(1 - alpha / tails);
        const zBeta = this.pnormInv(power);
        const pAvg = (p1 + p2 * allocationRatio) / (1 + allocationRatio);
        // N1 = (zAlpha * sqrt(pAvg*qAvg*(1+1/k)) + zBeta * sqrt(p1*q1 + p2*q2/k))^2 / (p1-p2)^2
        const qAvg = 1 - pAvg;
        const q1 = 1 - p1;
        const q2 = 1 - p2;
        const k = allocationRatio;

        const term1 = zAlpha * Math.sqrt(pAvg * qAvg * (1 + 1 / k));
        const term2 = zBeta * Math.sqrt(p1 * q1 + (p2 * q2) / k);
        const n1 = Math.pow(term1 + term2, 2) / Math.pow(p1 - p2, 2);

        return Math.ceil(n1 * (1 + k));
    },

    /**
     * Compute N for χ² tests: Goodness-of-fit tests: Contingency tables
     */
    calcChiSquare: function (w, alpha, power, df) {
        const zAlpha = this.pnormInv(1 - alpha);
        const zBeta = this.pnormInv(power);
        // Lambda = (zAlpha + zBeta)^2
        // N = Lambda / w^2
        const lambda = Math.pow(zAlpha + zBeta, 2);
        const n = lambda / Math.pow(w, 2);
        return Math.ceil(n);
    },

    /**
     * Compute Noncentrality Parameter (delta or lambda)
     */
    calcNoncentrality: function (type, effect, n, tails = 2, allocationRatio = 1, groups = 3, predictors = 1) {
        if (type === 'ttest' || type === 'ttest-paired') {
            if (type === 'ttest-paired') return effect * Math.sqrt(n);
            const n1 = n / (1 + allocationRatio);
            const n2 = n1 * allocationRatio;
            return effect * Math.sqrt((n1 * n2) / (n1 + n2));
        } else if (type === 'anova' || type === 'regression') {
            return n * (type === 'regression' ? effect : Math.pow(effect, 2));
        } else if (type === 'corr') {
            const zr = 0.5 * Math.log((1 + effect) / (1 - effect));
            return zr * Math.sqrt(n - 3);
        } else if (type === 'proportions' || type === 'chi2') {
            // Simplified delta for proportions and chi2
            return effect * Math.sqrt(n);
        }
        return 0;
    },

    /**
     * Compute Actual Power
     */
    calcActualPower: function (type, effect, n, alpha, tails = 2, allocationRatio = 1, groups = 3, predictors = 1) {
        const noncentrality = this.calcNoncentrality(type, effect, n, tails, allocationRatio, groups, predictors);
        let criticalValue = 0;

        if (type === 'ttest' || type === 'ttest-paired' || type === 'corr' || type === 'proportions') {
            criticalValue = this.pnormInv(1 - alpha / tails);
            const zBeta = noncentrality - criticalValue;
            const t = 1 / (1 + 0.2316419 * Math.abs(zBeta / Math.sqrt(2)));
            const d = 0.3989423 * Math.exp(-Math.pow(zBeta / Math.sqrt(2), 2) / 2);
            const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + 1.330274 * t))));
            return zBeta >= 0 ? 1 - prob : prob;
        } else if (type === 'anova' || type === 'regression' || type === 'chi2') {
            criticalValue = this.pnormInv(1 - alpha);
            const zBeta = Math.sqrt(Math.abs(noncentrality)) - criticalValue;
            const t = 1 / (1 + 0.2316419 * Math.abs(zBeta / Math.sqrt(2)));
            const d = 0.3989423 * Math.exp(-Math.pow(zBeta / Math.sqrt(2), 2) / 2);
            const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + 1.330274 * t))));
            return zBeta >= 0 ? 1 - prob : prob;
        }
        return 0;
    }
};

window.GPowerCalc = GPowerCalc;
