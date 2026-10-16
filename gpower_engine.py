"""
Significant — Moteur de Calcul Statistique G*Power (Power & Sample Size Engine)
Auteur : Chaïma Moghrani (Significant)
Langage : Python 3.10+
Description : Calcul précis de puissance statistique a priori (a priori power analysis)
              et estimation de la taille d'échantillon requise (N).
"""

import math
from typing import Dict, Any, Optional
from models import PowerAnalysisResult


class GPowerEngine:
    """Moteur de calcul a priori de taille d'échantillon et de puissance statistique."""

    @staticmethod
    def _norm_inv(p: float) -> float:
        """
        Approximation rationnelle de Beasley-Springer-Moro pour la fonction quantile
        de la distribution normale centrée réduite (Inverse CDF).
        Précision de l'ordre de 10^-5 sur [0.0001, 0.9999].
        """
        if p <= 0.0 or p >= 1.0:
            raise ValueError("La probabilité p doit être strictement comprise entre 0 et 1.")

        a = [
            -3.969683028665376e+01, 2.209460984245205e+02,
            -2.759285104469687e+02, 1.383577518672690e+02,
            -3.066479806614716e+01, 2.506628277459239e+00
        ]
        b = [
            -5.447609879822406e+01, 1.615858368580409e+02,
            -1.556989798598866e+02, 6.680131188771972e+01,
            -1.328068155288572e+01
        ]
        c = [
            -7.784894002430293e-03, -3.223964580411365e-01,
            -2.400758277161838e+00, -2.549732539343734e+00,
            4.374664141464968e+00, 2.938163982698783e+00
        ]
        d = [
            7.784695709041462e-03, 3.224671290700398e-01,
            2.445134137142996e+00, 3.754408661907416e+00
        ]

        p_low = 0.02425
        p_high = 1.0 - p_low

        if p < p_low:
            q = math.sqrt(-2.0 * math.log(p))
            num = (((((c[0]*q + c[1])*q + c[2])*q + c[3])*q + c[4])*q + c[5])
            den = ((((d[0]*q + d[1])*q + d[2])*q + d[3])*q + 1.0)
            return num / den
        elif p <= p_high:
            q = p - 0.5
            r = q * q
            num = (((((a[0]*r + a[1])*r + a[2])*r + a[3])*r + a[4])*r + a[5]) * q
            den = (((((b[0]*r + b[1])*r + b[2])*r + b[3])*r + b[4])*r + 1.0)
            return num / den
        else:
            q = math.sqrt(-2.0 * math.log(1.0 - p))
            num = (((((c[0]*q + c[1])*q + c[2])*q + c[3])*q + c[4])*q + c[5])
            den = ((((d[0]*q + d[1])*q + d[2])*q + d[3])*q + 1.0)
            return -num / den

    def calc_ttest_ind(
        self,
        d: float = 0.5,
        alpha: float = 0.05,
        power: float = 0.80,
        tails: int = 2,
        allocation_ratio: float = 1.0
    ) -> PowerAnalysisResult:
        """
        Calcul de taille d'échantillon pour un Test t de Student indépendant.
        Formule : N1 = (1 + 1/k) * ((z_alpha + z_beta) / d)^2
        """
        if d <= 0:
            raise ValueError("La taille d'effet d de Cohen doit être strictement positive.")

        z_alpha = self._norm_inv(1.0 - (alpha / tails))
        z_beta = self._norm_inv(power)

        # Taille du groupe 1
        n1 = (1.0 + (1.0 / allocation_ratio)) * ((z_alpha + z_beta) / d) ** 2

        # Correction pour degrés de liberté réduits (loi de Student)
        if n1 < 30:
            n1 *= (1.0 + (1.2 / n1))

        n1 = math.ceil(n1)
        n2 = math.ceil(n1 * allocation_ratio)
        total_n = n1 + n2

        return PowerAnalysisResult(
            test_name="Test t pour échantillons indépendants",
            effect_size=d,
            effect_size_name="d de Cohen",
            alpha=alpha,
            power=power,
            sample_size_total=total_n,
            sample_size_per_group=n1,
            notes=f"Répartition prévue : N1 = {n1}, N2 = {n2} (Ratio k = {allocation_ratio})"
        )

    def calc_ttest_paired(
        self,
        dz: float = 0.5,
        alpha: float = 0.05,
        power: float = 0.80,
        tails: int = 2
    ) -> PowerAnalysisResult:
        """
        Calcul pour un Test t pour échantillons appariés / mesures répétées.
        Formule : N = ((z_alpha + z_beta) / dz)^2
        """
        if dz <= 0:
            raise ValueError("L'effet dz doit être strictement positif.")

        z_alpha = self._norm_inv(1.0 - (alpha / tails))
        z_beta = self._norm_inv(power)

        n = ((z_alpha + z_beta) / dz) ** 2
        if n < 30:
            n *= (1.0 + (1.0 / n))

        total_pairs = math.ceil(n)
        return PowerAnalysisResult(
            test_name="Test t pour échantillons appariés",
            effect_size=dz,
            effect_size_name="dz de Cohen (différences)",
            alpha=alpha,
            power=power,
            sample_size_total=total_pairs,
            sample_size_per_group=total_pairs,
            notes=f"Nombre total de paires / sujets mesurés deux fois : {total_pairs}"
        )

    def calc_anova_one_way(
        self,
        f: float = 0.25,
        alpha: float = 0.05,
        power: float = 0.80,
        groups_k: int = 3
    ) -> PowerAnalysisResult:
        """
        Calcul pour ANOVA unidirectionnelle inter-sujets (Omnibus F-test).
        Formule basée sur le paramètre de non-centralité lambda = N * f^2
        """
        if f <= 0 or groups_k < 2:
            raise ValueError("Paramètres invalides pour l'ANOVA (f > 0, k >= 2).")

        # Approximation normale du F-omnibus
        u = groups_k - 1
        z_alpha = self._norm_inv(1.0 - alpha)
        z_beta = self._norm_inv(power)

        n_per_group = ((z_alpha * math.sqrt(2 * u) + z_beta * math.sqrt(2 * u + 4)) / (2 * f * math.sqrt(u))) ** 2
        n_per_group = max(math.ceil(n_per_group), 4)
        total_n = n_per_group * groups_k

        return PowerAnalysisResult(
            test_name=f"ANOVA à 1 facteur ({groups_k} groupes)",
            effect_size=f,
            effect_size_name="f de Cohen",
            alpha=alpha,
            power=power,
            sample_size_total=total_n,
            sample_size_per_group=n_per_group,
            notes=f"Prévoir {n_per_group} observations par groupe ({groups_k} groupes)"
        )

    def calc_correlation(
        self,
        r: float = 0.30,
        alpha: float = 0.05,
        power: float = 0.80,
        tails: int = 2
    ) -> PowerAnalysisResult:
        """
        Calcul pour Corrélation de Pearson (Transformation Z de Fisher).
        """
        if abs(r) >= 1.0 or r == 0:
            raise ValueError("Le coefficient r doit être entre -1 et 1 (excluant 0).")

        z_alpha = self._norm_inv(1.0 - (alpha / tails))
        z_beta = self._norm_inv(power)
        c = 0.5 * math.log((1.0 + abs(r)) / (1.0 - abs(r)))

        n = ((z_alpha + z_beta) / c) ** 2 + 3
        total_n = math.ceil(n)

        return PowerAnalysisResult(
            test_name="Corrélation bivariée linéaire (Pearson)",
            effect_size=r,
            effect_size_name="r de Pearson",
            alpha=alpha,
            power=power,
            sample_size_total=total_n,
            notes="Nombre de paires d'observations complètes requises."
        )

    def calc_chi2(
        self,
        w: float = 0.30,
        alpha: float = 0.05,
        power: float = 0.80,
        df: int = 1
    ) -> PowerAnalysisResult:
        """
        Calcul pour Test du Chi-deux d'indépendance (Goodness of fit & Contingency).
        """
        if w <= 0 or df < 1:
            raise ValueError("Paramètres invalides pour Chi2 (w > 0, df >= 1).")

        z_alpha = self._norm_inv(1.0 - alpha)
        z_beta = self._norm_inv(power)

        lambda_val = (z_alpha * math.sqrt(2 * df) + z_beta * math.sqrt(2 * df + 4)) ** 2 / (2 * df)
        total_n = math.ceil(lambda_val / (w ** 2))

        return PowerAnalysisResult(
            test_name=f"Chi-deux d'indépendance (ddl = {df})",
            effect_size=w,
            effect_size_name="w de Cohen",
            alpha=alpha,
            power=power,
            sample_size_total=total_n,
            notes=f"Effectif total requis pour une table à {df} degrés de liberté."
        )

    def calc_multiple_regression(
        self,
        f2: float = 0.15,
        alpha: float = 0.05,
        power: float = 0.80,
        num_predictors: int = 2
    ) -> PowerAnalysisResult:
        """
        Calcul pour Régression Linéaire Multiple.
        f^2 = R^2 / (1 - R^2)
        """
        if f2 <= 0 or num_predictors < 1:
            raise ValueError("f2 > 0 et num_predictors >= 1 requis.")

        u = num_predictors
        z_alpha = self._norm_inv(1.0 - alpha)
        z_beta = self._norm_inv(power)

        lambda_val = (z_alpha * math.sqrt(2 * u) + z_beta * math.sqrt(2 * u + 4)) ** 2 / (2 * u)
        n = (lambda_val / f2) + u + 1
        total_n = math.ceil(n)

        return PowerAnalysisResult(
            test_name=f"Régression linéaire ({num_predictors} prédicteurs)",
            effect_size=f2,
            effect_size_name="f² de Cohen",
            alpha=alpha,
            power=power,
            sample_size_total=total_n,
            notes=f"Taille totale d'échantillon pour détecter R² significatif avec {num_predictors} variables."
        )


# Instance singleton
gpower_engine = GPowerEngine()

if __name__ == "__main__":
    print("=== Significant G*Power Python Engine ===")
    res_t = gpower_engine.calc_ttest_ind(d=0.5, alpha=0.05, power=0.80)
    print(f"Test t (d=0.5, power=80%) : Total N = {res_t.sample_size_total} (N/groupe = {res_t.sample_size_per_group})")

    res_anova = gpower_engine.calc_anova_one_way(f=0.25, alpha=0.05, power=0.80, groups_k=3)
    print(f"ANOVA 3 groupes (f=0.25) : Total N = {res_anova.sample_size_total}")

    res_corr = gpower_engine.calc_correlation(r=0.30, alpha=0.05, power=0.80)
    print(f"Corrélation Pearson (r=0.30) : Total N = {res_corr.sample_size_total}")
