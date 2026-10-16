/**
 * Significant — Python WebAssembly Bridge (Pyodide Runtime)
 * Permet l'exécution native de quiz_engine.py et gpower_engine.py
 * directement dans le navigateur sans aucun serveur backend.
 */

window.SignificantPython = {
    isReady: false,
    pyodide: null,

    init: async function() {
        console.log("%c[Significant] Initialisation de l'environnement Python (Pyodide WebAssembly)...", "color: #ff8c00; font-weight: bold;");

        // Si Pyodide n'est pas déjà inclus dans la page, on charge le runtime
        if (typeof loadPyodide === 'undefined') {
            await this._loadScript("https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js");
        }

        try {
            this.pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
            });

            // Chargement des scripts Python du projet
            const [modelsCode, quizCode, gpowerCode] = await Promise.all([
                fetch('models.py').then(r => r.text()),
                fetch('quiz_engine.py').then(r => r.text()),
                fetch('gpower_engine.py').then(r => r.text())
            ]);

            // Exécution dans le runtime Python
            this.pyodide.runPython(modelsCode);
            this.pyodide.runPython(quizCode);
            this.pyodide.runPython(gpowerCode);

            this.isReady = true;
            console.log("%c[Significant] Moteur Python prêt !", "color: #22c55e; font-weight: bold;");
            console.log("  → models.py chargé");
            console.log("  → quiz_engine.py (StatisticalDecisionTree) prêt");
            console.log("  → gpower_engine.py (GPowerEngine) prêt");

            // Déclencher un événement personnalisé pour informer l'interface
            window.dispatchEvent(new CustomEvent('pythonEngineReady'));

            // Mise à jour visuelle du badge Python si présent
            const badge = document.getElementById('python-status-badge');
            if (badge) {
                badge.classList.add('ready');
                badge.innerHTML = `<span class="py-dot"></span> Moteur Python 3 (Wasm) actif`;
            }

        } catch (err) {
            console.warn("[Significant] Note : Chargement différé du runtime Python.", err);
        }
    },

    /**
     * Navigation dans le quiz exécutée en Python
     */
    quizNavigate: function(currentNodeId, optionIndex, lang = "fr") {
        if (!this.isReady || !this.pyodide) {
            // Fallback JS si le runtime Python finit de charger
            return null;
        }

        try {
            const pyCall = `
import json
res = decision_tree.navigate("${currentNodeId}", ${optionIndex}, "${lang}")
json.dumps(res)
            `;
            const jsonStr = this.pyodide.runPython(pyCall);
            return JSON.parse(jsonStr);
        } catch (e) {
            console.error("Erreur Python quizNavigate:", e);
            return null;
        }
    },

    /**
     * Calcul de taille d'échantillon exécuté en Python
     */
    calcTTest: function(d, alpha, power, tails = 2) {
        if (!this.isReady || !this.pyodide) return null;
        try {
            const pyCall = `
import json
res = gpower_engine.calc_ttest_ind(d=${d}, alpha=${alpha}, power=${power}, tails=${tails})
json.dumps(res.to_dict())
            `;
            const jsonStr = this.pyodide.runPython(pyCall);
            return JSON.parse(jsonStr);
        } catch (e) {
            console.error("Erreur Python calcTTest:", e);
            return null;
        }
    },

    _loadScript: function(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }
};

// Démarrage discret en tâche de fond dès que la page est interactive
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.SignificantPython.init());
} else {
    window.SignificantPython.init();
}
