# Significant — Statistical Decision & Power Analysis Suite 📊🐍

> **The intelligent statistical companion that makes methodology, test selection, and power analysis human, rigorous, and accessible.**  
> *Developed by [Chaïma Moghrani](https://significaaant.github.io/significant/)*.

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python&logoColor=white)](https://www.python.org/)
[![Architecture](https://img.shields.io/badge/Architecture-WebAssembly%20%2F%20Pyodide-success.svg)](https://pyodide.org/)
[![Tests](https://img.shields.io/badge/Tests-Passing%20(unittest)-brightgreen.svg)](test_significant.py)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)
[![Live App](https://img.shields.io/badge/Live-GitHub%20Pages-orange.svg)](https://significaaant.github.io/significant/)

---

## 🌟 Overview & Architecture

**Significant** is an academic-grade statistical decision engine designed to bridge the gap between complex inferential methodology and actionable research workflows.

Rather than relying purely on client-side scripts, the core decision-making algorithms and power calculations are built as **modular Python packages**, executed directly in the browser via **WebAssembly (Pyodide)** with zero server latency.

```
                           ┌───────────────────────────────┐
                           │      User Interface           │
                           │  (HTML5 / CSS3 / Vanilla JS)  │
                           └───────────────▲───────────────┘
                                           │
                                  [python_bridge.js]
                               (Pyodide WebAssembly Wasm)
                                           │
       ┌───────────────────────────────────┴───────────────────────────────────┐
       │                                                                       │
┌──────┴──────────────┐             ┌─────────────────────┐             ┌──────┴──────────────┐
│   quiz_engine.py    │             │      models.py      │             │  gpower_engine.py   │
│  Statistical        │◄───────────►│ Dataclasses, Enums  │◄───────────►│ A priori sample     │
│  Decision Tree      │             │ & Test Catalog      │             │ size & power math   │
└─────────────────────┘             └─────────────────────┘             └─────────────────────┘
```

---

## 🐍 Python Core Modules

1. **`quiz_engine.py` (`StatisticalDecisionTree`)**
   - Finite state machine encoding inferential statistics heuristics (sample dependency, distribution normality, measurement scales, number of factors).
   - Automated path backtracking and breadcrumb reconstruction.
   - Recommends parametric and non-parametric alternatives (Student's t, Mann-Whitney, ANOVA, Kruskal-Wallis, Pearson, Spearman, Chi-square, Multiple Regression).

2. **`gpower_engine.py` (`GPowerEngine`)**
   - A priori power calculations and sample size determination ($N$).
   - Beasley-Springer-Moro rational approximation for the inverse cumulative distribution function ($\Phi^{-1}$).
   - Supports t-tests, ANOVA ($F$-test), Pearson correlation ($z$-transform), Chi-square ($\chi^2$), and Linear Multiple Regression ($f^2$).

3. **`models.py`**
   - Strongly-typed Python dataclasses (`StatisticalTest`, `DecisionNode`, `DecisionOption`, `PowerAnalysisResult`).
   - Clean separation of business logic and view representations.

4. **`test_significant.py`**
   - Comprehensive test suite running via Python's standard `unittest` library.

---

## 🚀 Running the Python Engine Locally

### Requirements
- Python 3.10 or higher

```bash
# Clone the repository
git clone https://github.com/Significaaant/significant.git
cd significant

# Run unit tests
python -m unittest test_significant.py

# Test the quiz decision engine in CLI
python quiz_engine.py

# Test the G*Power power analysis engine in CLI
python gpower_engine.py
```

---

## 🌐 Live Web Deployment

The application is deployed on **GitHub Pages**:  
🔗 **[https://significaaant.github.io/significant/](https://significaaant.github.io/significant/)**

Thanks to Pyodide, the Python codebase executes natively on client browsers without requiring a dedicated server or subscription, preserving maximum privacy and offline readiness.

---

## 👩‍💻 Author & Contact

**Chaïma Moghrani**  
- Portfolio / CV : [Consulter en ligne](cv.html)  
- GitHub : [@Significaaant](https://github.com/Significaaant)