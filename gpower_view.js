/**
 * G*Power Interactive Guide View Logic
 * Wizard pas à pas pour dimensionner son échantillon et régler G*Power
 */

let gpowerHistory = ["root"];

document.addEventListener('DOMContentLoaded', () => {
    // Écouteur pour fermer la modale glossaire avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeGlossary();
    });

    // Rendu initial si présent
    if (document.getElementById('mindmap-container')) {
        renderGpowerStep("root");
    }
});

/**
 * Rendu d'une étape du wizard G*Power
 */
function renderGpowerStep(nodeId) {
    const container = document.getElementById('mindmap-container');
    const detailCard = document.getElementById('detail-card');
    const detailContent = document.getElementById('detail-content');
    const backBtn = document.getElementById('map-back-btn');
    const breadcrumbs = document.getElementById('gpower-breadcrumbs');

    if (!container || !window.GPowerData) return;

    const node = GPowerData.mindmap[nodeId];
    if (!node) return;

    const currentLang = (typeof currentLanguage !== 'undefined' && currentLanguage) || localStorage.getItem('site-lang') || 'fr';

    // Mise à jour de la barre de navigation
    if (backBtn) {
        backBtn.style.display = gpowerHistory.length > 1 ? "inline-flex" : "none";
    }

    // Mise à jour des miettes de pain (Breadcrumbs)
    if (breadcrumbs) {
        breadcrumbs.innerHTML = buildBreadcrumbs(currentLang);
    }

    // Animation de transition douce
    container.style.opacity = "0";
    container.style.transform = "translateY(6px)";

    setTimeout(() => {
        // Si c'est une FEUILLE (Fiche pratique finale)
        if (node.type === "leaf") {
            container.style.display = "none";
            if (detailCard && detailContent) {
                detailContent.innerHTML = buildLeafHtml(node, currentLang);
                detailCard.style.display = "block";
            }
        } else {
            // C'est une étape de choix intermédiaire
            if (detailCard) detailCard.style.display = "none";
            container.style.display = "grid";
            container.className = getNodeGridClass(node);
            container.innerHTML = '';

            const children = node.children || [];
            children.forEach(childId => {
                const childNode = GPowerData.mindmap[childId];
                if (childNode) {
                    container.appendChild(createChoiceCard(childNode, currentLang));
                }
            });
        }

        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    }, 180);
}

/**
 * Détermine la classe de grille selon le niveau
 */
function getNodeGridClass(node) {
    if (node.id === "root") {
        return "gpower-cards-container gpower-grid-2";
    } else if (node.id.startsWith("ana-")) {
        return "gpower-cards-container gpower-grid-4";
    }
    return "gpower-cards-container gpower-grid-2";
}

/**
 * Construit le fil d'Ariane
 */
function buildBreadcrumbs(lang) {
    if (gpowerHistory.length === 1) {
        return `<span class="breadcrumb-step active">${lang === 'fr' ? '1. Choix de la situation' : '1. Choose study situation'}</span>`;
    }

    let items = [];
    gpowerHistory.forEach((hId, index) => {
        const itemNode = GPowerData.mindmap[hId];
        if (!itemNode) return;

        let label = '';
        if (hId === 'root') {
            label = lang === 'fr' ? 'Accueil' : 'Start';
        } else if (itemNode.title) {
            label = itemNode.title[lang] || itemNode.title.fr;
            // Raccourcir si trop long
            if (label.length > 25) label = label.substring(0, 22) + '...';
        }

        const isLast = index === gpowerHistory.length - 1;
        if (isLast) {
            items.push(`<span class="breadcrumb-step active">${label}</span>`);
        } else {
            items.push(`<button type="button" class="breadcrumb-step linkable" onclick="goToGpowerHistoryIndex(${index})">${label}</button>`);
        }
    });

    return items.join('<span class="breadcrumb-sep">›</span>');
}

/**
 * Création d'une carte de choix interactive
 */
function createChoiceCard(node, lang) {
    const card = document.createElement('div');
    const themeClass = node.themeClass || 'theme-bordeaux';
    card.className = `gpower-choice-card ${themeClass}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const title = (node.title && (node.title[lang] || node.title.fr)) || node.id;
    const badge = (node.badge && (node.badge[lang] || node.badge.fr)) || '';
    const desc = (node.hoverDesc && (node.hoverDesc[lang] || node.hoverDesc.fr)) || '';

    card.innerHTML = `
        <div class="gpower-card-top">
            ${badge ? `<span class="gpower-card-badge">${badge}</span>` : ''}
            <span class="gpower-card-arrow">Choisir →</span>
        </div>
        <h3 class="gpower-card-title">${title}</h3>
        ${desc ? `<div class="gpower-card-desc">${desc}</div>` : ''}
    `;

    card.onclick = (e) => {
        // Ne pas déclencher la sélection si l'utilisateur clique sur un lien de glossaire dans la description
        if (e.target.closest('.glossary-term-link')) return;
        gpowerHistory.push(node.id);
        renderGpowerStep(node.id);
    };

    card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            gpowerHistory.push(node.id);
            renderGpowerStep(node.id);
        }
    };

    return card;
}

/**
 * Construction du HTML de la fiche finale G*Power (Step 4 / Leaf)
 */
function buildLeafHtml(node, lang) {
    const isPosthoc = gpowerHistory.includes("ana-posthoc");
    const testTitle = (node.title && (node.title[lang] || node.title.fr)) || '';
    const situation = (node.situationDesc && (node.situationDesc[lang] || node.situationDesc.fr)) || '';
    const typeOfAnalysis = isPosthoc 
        ? (node.gpowerTypePosthoc || "Post hoc: Compute achieved power") 
        : (node.gpowerType || "A priori: Compute required sample size");
    const outputText = (node.outputNotice && (node.outputNotice[lang] || node.outputNotice.fr)) || '';
    const justification = (node.reportJustification && (node.reportJustification[lang] || node.reportJustification.fr)) || '';

    let inputsHtml = '';
    if (node.inputs && Array.isArray(node.inputs)) {
        node.inputs.forEach(inp => {
            const termLink = inp.termId 
                ? `<button type="button" class="glossary-term-link" onclick="openGlossary('${inp.termId}')" title="${lang === 'fr' ? 'Voir la définition' : 'View definition'}">${inp.label}</button>` 
                : `<strong>${inp.label}</strong>`;
            
            inputsHtml += `
                <tr class="gpower-param-row">
                    <td class="param-name-cell">${termLink}</td>
                    <td class="param-val-cell"><span class="gpower-code-pill">${inp.value}</span></td>
                    <td class="param-note-cell">${inp.note || ''}</td>
                </tr>
            `;
        });
    }

    return `
        <div class="gpower-recipe-sheet">
            <!-- Header du résultat -->
            <div class="gpower-recipe-header">
                <div>
                    <span class="gpower-recipe-kicker">${isPosthoc ? 'Analyse Post-hoc • G*Power 3.1' : 'Dimensionnement A priori • G*Power 3.1'}</span>
                    <h2 class="gpower-recipe-title">${testTitle}</h2>
                    <p class="gpower-recipe-situation">${situation}</p>
                </div>
                <button type="button" class="gpower-recipe-close-btn" onclick="mapGoBack()" aria-label="Retour au choix">✕</button>
            </div>

            <!-- BLOC 1 : Menus déroulants G*Power -->
            <div class="gpower-recipe-section">
                <div class="recipe-section-title">
                    <span class="recipe-step-badge">1</span>
                    <h3>Ce qu'il faut sélectionner dans les menus de G*Power :</h3>
                </div>
                <div class="gpower-dropdowns-grid">
                    <div class="gpower-dropdown-card">
                        <span class="dropdown-label">1. Menu "Test family"</span>
                        <div class="dropdown-value">${node.gpowerFamily || 't tests'}</div>
                    </div>
                    <div class="gpower-dropdown-card">
                        <span class="dropdown-label">2. Menu "Statistical test"</span>
                        <div class="dropdown-value">${node.gpowerTest || ''}</div>
                    </div>
                    <div class="gpower-dropdown-card">
                        <span class="dropdown-label">3. Menu "Type of power analysis"</span>
                        <div class="dropdown-value highlight-type">${typeOfAnalysis}</div>
                    </div>
                </div>
            </div>

            <!-- BLOC 2 : Paramètres d'entrée (Input Parameters) -->
            <div class="gpower-recipe-section">
                <div class="recipe-section-title">
                    <span class="recipe-step-badge">2</span>
                    <h3>Ce que vous devez taper dans la zone "Input Parameters" :</h3>
                </div>
                <div class="gpower-table-wrapper">
                    <table class="gpower-params-table">
                        <thead>
                            <tr>
                                <th>Paramètre G*Power</th>
                                <th>Valeur à saisir</th>
                                <th>Explication &amp; Rôle</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${inputsHtml}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- BLOC 3 : Action Calculate & Sortie -->
            <div class="gpower-recipe-section">
                <div class="recipe-section-title">
                    <span class="recipe-step-badge">3</span>
                    <h3>Cliquez sur Calculate et observez le résultat :</h3>
                </div>
                
                <div class="gpower-result-action-box">
                    <div class="gpower-calc-button-preview">
                        <span class="calc-btn-mock">Calculate</span>
                        <span class="calc-hint">Bouton en bas à droite de l'écran G*Power</span>
                    </div>

                    <div class="gpower-output-explanation">
                        <div class="output-notice-text">${outputText}</div>
                        ${node.benchmarkValue ? `
                            <div class="gpower-benchmark-badge">
                                <strong>Résultat type obtenu :</strong>
                                <span>${node.benchmarkValue}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>

            <!-- BLOC 4 : Modèle de justification pour votre rapport / mémoire -->
            ${justification ? `
                <div class="gpower-recipe-section">
                    <div class="recipe-section-title">
                        <span class="recipe-step-badge">4</span>
                        <h3>Phrase de justification à copier pour votre rapport ou mémoire :</h3>
                    </div>
                    <div class="gpower-justification-box">
                        <blockquote id="gpower-justif-text">${justification}</blockquote>
                        <button type="button" class="gpower-copy-btn" onclick="copyGpowerJustification(this)">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            <span>Copier la phrase</span>
                        </button>
                    </div>
                </div>
            ` : ''}

            <!-- Navigation bas de page -->
            <div class="gpower-recipe-footer">
                <button type="button" class="gpower-footer-nav-btn" onclick="mapGoBack()">← Revenir au choix du test</button>
                <button type="button" class="gpower-footer-nav-btn secondary" onclick="mapReset()">↺ Recommencer du début</button>
            </div>
        </div>
    `;
}

/**
 * Copier la phrase de justification
 */
function copyGpowerJustification(btn) {
    const textElem = document.getElementById('gpower-justif-text');
    if (!textElem) return;

    const rawText = textElem.innerText.replace(/^[«“"]|[»”"]$/g, '').trim();
    navigator.clipboard.writeText(rawText).then(() => {
        const origHtml = btn.innerHTML;
        btn.innerHTML = `<span>✓ Phrase copiée !</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerHTML = origHtml;
            btn.classList.remove('copied');
        }, 2500);
    }).catch(err => {
        console.error('Erreur copie:', err);
    });
}

/**
 * Navigation vers l'arrière
 */
function mapGoBack() {
    if (gpowerHistory.length <= 1) return;
    gpowerHistory.pop();
    renderGpowerStep(gpowerHistory[gpowerHistory.length - 1]);
}

/**
 * Réinitialisation complète
 */
function mapReset() {
    gpowerHistory = ["root"];
    renderGpowerStep("root");
}

/**
 * Navigation directe vers une étape du fil d'Ariane
 */
function goToGpowerHistoryIndex(targetIndex) {
    if (targetIndex >= 0 && targetIndex < gpowerHistory.length) {
        gpowerHistory = gpowerHistory.slice(0, targetIndex + 1);
        renderGpowerStep(gpowerHistory[gpowerHistory.length - 1]);
    }
}

/**
 * Ouverture de la modale glossaire
 */
function openGlossary(termId) {
    const currentLang = (typeof currentLanguage !== 'undefined' && currentLanguage) || localStorage.getItem('site-lang') || 'fr';
    const dict = (window.GPowerData && window.GPowerData.glossary && (window.GPowerData.glossary[currentLang] || window.GPowerData.glossary.fr)) || {};
    const termData = dict[termId];

    if (!termData) return;

    const termElem = document.getElementById('glossary-term');
    const defElem = document.getElementById('glossary-def');
    const modal = document.getElementById('glossary-modal');

    if (termElem) termElem.innerHTML = termData.term;
    if (defElem) defElem.innerHTML = termData.def;
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Évite le scroll d'arrière-plan
    }
}

/**
 * Fermeture de la modale glossaire
 */
function closeGlossary() {
    const modal = document.getElementById('glossary-modal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

// Compatibilité legacy
function closeDetailCard() {
    mapGoBack();
}
