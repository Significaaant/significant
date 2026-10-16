"""
Significant — Modèles de Données Statistiques (Python 3.10+)
Définit les structures fondamentales pour le moteur d'orientation et de calculs.
"""

from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional, Dict, Any


class VariableType(str, Enum):
    """Types de variables statistiques."""
    CONTINUOUS = "continue"
    ORDINAL = "ordinale"
    NOMINAL = "nominale"
    BINARY = "binaire"


class StudyDesign(str, Enum):
    """Plans d'expérience."""
    INDEPENDENT = "independants"
    PAIRED = "apparies"
    MIXED = "mixte"


class TestNature(str, Enum):
    """Nature du test statistique."""
    PARAMETRIC = "parametrique"
    NON_PARAMETRIC = "non_parametrique"
    SEMI_PARAMETRIC = "semi_parametrique"


@dataclass
class OptionHelp:
    """Aide pédagogique pour une option de choix."""
    title: str
    desc: str
    example: str = ""

    def to_dict(self) -> Dict[str, str]:
        return {
            "title": self.title,
            "desc": self.desc,
            "example": self.example
        }


@dataclass
class DecisionOption:
    """Une branche possible dans l'arbre de décision."""
    text: str
    recap: str
    next_node: Optional[str] = None
    result_key: Optional[str] = None
    tag: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        data = {
            "text": self.text,
            "recap": self.recap,
        }
        if self.next_node:
            data["next"] = self.next_node
        if self.result_key:
            data["result"] = self.result_key
        if self.tag:
            data["tag"] = self.tag
        return data


@dataclass
class DecisionNode:
    """Un nœud de question dans l'arbre d'orientation."""
    id: str
    question: str
    options: List[DecisionOption]
    help_title: Optional[str] = None
    help_options: Dict[str, OptionHelp] = field(default_factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        res = {
            "question": self.question,
            "options": [opt.to_dict() for opt in self.options]
        }
        if self.help_title or self.help_options:
            help_dict = {}
            if self.help_title:
                help_dict["title"] = self.help_title
            for k, v in self.help_options.items():
                help_dict[k] = v.to_dict()
            res["help"] = help_dict
        return res


@dataclass
class StatisticalTest:
    """Fiche technique complète d'un test statistique."""
    id: str
    name_fr: str
    name_en: str
    category: str
    nature: TestNature
    objective_fr: str
    objective_en: str
    assumptions_fr: List[str] = field(default_factory=list)
    assumptions_en: List[str] = field(default_factory=list)
    non_parametric_alternative: Optional[str] = None
    effect_size_metric: str = ""
    gpower_family: str = ""
    code_python: str = ""
    code_r: str = ""

    def to_dict(self, lang: str = "fr") -> Dict[str, Any]:
        is_fr = lang.lower().startswith("fr")
        return {
            "id": self.id,
            "name": self.name_fr if is_fr else self.name_en,
            "category": self.category,
            "nature": self.nature.value,
            "objective": self.objective_fr if is_fr else self.objective_en,
            "assumptions": self.assumptions_fr if is_fr else self.assumptions_en,
            "alternative": self.non_parametric_alternative,
            "effect_size": self.effect_size_metric,
            "gpower_family": self.gpower_family,
            "code_python": self.code_python,
            "code_r": self.code_r
        }


@dataclass
class PowerAnalysisResult:
    """Résultat d'une analyse de puissance a priori."""
    test_name: str
    effect_size: float
    effect_size_name: str
    alpha: float
    power: float
    sample_size_total: int
    sample_size_per_group: Optional[int] = None
    notes: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "test_name": self.test_name,
            "effect_size": self.effect_size,
            "effect_size_name": self.effect_size_name,
            "alpha": self.alpha,
            "power": self.power,
            "sample_size_total": self.sample_size_total,
            "sample_size_per_group": self.sample_size_per_group,
            "notes": self.notes
        }
