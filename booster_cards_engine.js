// ==========================================================================
// Significant — Moteur Universel des Cartes Booster
// Gère le rendu 3D, le tilt, le retournement, la galerie Théorie et les modales
// ==========================================================================

/**
 * Récupère les chemins d'images et les listes de secours pour un test donné
 */
function getCardImagePaths(testKey) {
    const slug = (testKey || 'test').replace(/^res_/, '');
    return {
        slug: slug,
        frontPrimary: `images/cards/${slug}_front.png`,
        frontFallbacks: [
            `images/${slug}_front.png`,
            `images/cards/${slug}_front.jpg`,
            `images/${slug}_front.jpg`,
            `images/cards/${slug}.png`,
            `images/${slug}.png`,
            `images/cards/${slug}.jpg`,
            `images/${slug}.jpg`,
            `images/cards/${testKey}_front.png`,
            `images/${testKey}_front.png`,
            `images/cards/${testKey}_front.jpg`,
            `images/${testKey}_front.jpg`,
            `images/booster_art.png`,
            `images/booster_art.jpg`,
            `images/bear_flames_booster.jpg`
        ],
        decoPrimary: `images/cards/${slug}_deco.png`,
        decoFallbacks: [
            `images/${slug}_deco.png`,
            `images/cards/${slug}_transparent.png`,
            `images/${slug}_transparent.png`,
            `images/cards/${testKey}_deco.png`,
            `images/${testKey}_deco.png`,
            `images/booster_deco_transparent.png`
        ]
    };
}

/**
 * Gère le fallback séquentiel d'une image sans boucle infinie
 */
function handleCardImageFallback(img) {
    try {
        const fallbacks = JSON.parse(img.dataset.fallbacks || '[]');
        let idx = parseInt(img.dataset.fallbackIdx || '0', 10);
        if (idx < fallbacks.length) {
            img.dataset.fallbackIdx = (idx + 1).toString();
            img.src = fallbacks[idx];
            return;
        }
    } catch (e) {}
    img.onerror = null;
    if (img.classList.contains('booster-deco-img')) {
        img.style.display = 'none';
    }
}

/**
 * Initialise l'effet 3D tilt sur une carte booster
 */
function initBoosterCard3DTilt(tiltTarget) {
    if (!tiltTarget) return;
    const glares = tiltTarget.querySelectorAll('.booster-card-glare');

    function handleMouseMove(e) {
        const rect = tiltTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (0.5 - y) * 16;
        const tiltY = (x - 0.5) * 16;

        tiltTarget.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;

        glares.forEach(glare => {
            glare.style.opacity = '1';
            glare.style.background = `radial-gradient(circle at ${(x * 100).toFixed(1)}% ${(y * 100).toFixed(1)}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`;
        });
    }

    function handleMouseLeave() {
        tiltTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        glares.forEach(glare => {
            glare.style.opacity = '0';
        });
    }

    tiltTarget.addEventListener('mousemove', handleMouseMove);
    tiltTarget.addEventListener('mouseleave', handleMouseLeave);
}

/**
 * Retourne la carte booster (flip Recto <-> Verso)
 */
function flipBoosterCard(toBack, flipperId = 'booster-flipper') {
    const flipper = document.getElementById(flipperId);
    if (!flipper) return;

    if (toBack) {
        flipper.classList.add('is-flipped');
    } else {
        flipper.classList.remove('is-flipped');
    }
}

/**
 * Gestion du tiroir méthodologie & code
 */
function openMethodoDrawer(drawerId = 'booster-methodo-drawer') {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
    }
}

function closeMethodoDrawer(drawerId = 'booster-methodo-drawer') {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
    }
}

function switchCodeTab(tabName, btn) {
    const container = btn.closest('.booster-methodo-drawer') || document;
    container.querySelectorAll('.code-tab-btn').forEach(b => b.classList.remove('active'));
    container.querySelectorAll('.code-pane').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const pane = container.querySelector(`#pane-${tabName}`) || document.getElementById(`pane-${tabName}`);
    if (pane) pane.classList.add('active');
}

function copyCode(paneId, btn) {
    const pane = document.getElementById(paneId);
    if (!pane) return;
    const codeEl = pane.querySelector('code');
    const textToCopy = codeEl ? codeEl.innerText : pane.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = (typeof getT === 'function' ? getT('methodo-copied-btn') : null) || 'Copié !';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 1800);
    }).catch(err => {
        console.error('Erreur copie:', err);
    });
}

/**
 * Génère le code HTML complet d'une carte Booster (Recto/Verso/Tilt)
/**
 * Obtient le libellé traduit de la rareté d'une carte (FR / EN)
 */
function getRarityLabel(rarity, lang) {
    const currentLang = lang || (typeof localStorage !== 'undefined' && localStorage.getItem('site-lang')) || 'fr';
    const key = 'card-rarity-' + rarity;
    if (typeof getT === 'function') {
        const val = getT(key);
        if (val && val !== key) return val;
    }
    if (typeof window !== 'undefined' && typeof window.getT === 'function') {
        const val = window.getT(key);
        if (val && val !== key) return val;
    }
    if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLang] && uiTranslations[currentLang][key]) {
        return uiTranslations[currentLang][key];
    }
    const fallbackDict = {
        fr: {
            commune: "Commune",
            peu_commune: "Peu commune",
            rare: "Rare",
            super_rare: "Super rare",
            mythique: "Mythique"
        },
        en: {
            commune: "Common",
            peu_commune: "Uncommon",
            rare: "Rare",
            super_rare: "Ultra rare",
            mythique: "Mythic"
        }
    };
    return (fallbackDict[currentLang] && fallbackDict[currentLang][rarity]) || (fallbackDict.fr && fallbackDict.fr[rarity]) || rarity;
}

/**
 * Génère le code HTML complet de la carte booster réversible (Recto + Verso)
 */
function buildBoosterCardHtml(testKey, options = {}) {
    const currentLang = localStorage.getItem('site-lang') || 'fr';
    const meta = (typeof getQuizTestMeta === 'function') ? getQuizTestMeta(testKey) : null;
    const rarity = meta ? meta.rarity : 'commune';
    const rarityLabel = getRarityLabel(rarity, currentLang);
    const courseId = (meta && meta.courseId) ? meta.courseId : 'types-variables';
    const courseUrl = `theory.html?id=${courseId}`;
    const testTitle = (meta && meta.displayTitle && meta.displayTitle[currentLang])
        ? meta.displayTitle[currentLang]
        : (options.title || 'Test statistique');
    const testDesc = (meta && meta.description && meta.description[currentLang])
        ? meta.description[currentLang]
        : (options.desc || '');
    const usageText = (meta && meta.howToUse && meta.howToUse[currentLang])
        ? meta.howToUse[currentLang]
        : (meta && meta.howToUse ? meta.howToUse.fr : '');
    const pythonCode = (meta && meta.codePython) ? meta.codePython : '# Code disponible sur la fiche';
    const rCode = (meta && meta.codeR) ? meta.codeR : '# Code disponible sur la fiche';
    const jamoviText = (meta && meta.jamoviPath && meta.jamoviPath[currentLang])
        ? meta.jamoviPath[currentLang]
        : (meta && meta.jamoviPath ? meta.jamoviPath.fr : 'Analyses › Consulter le manuel Jamovi');

    const prefix = options.idPrefix || '';
    const tiltId = prefix ? `${prefix}-tilt-target` : 'booster-tilt-target';
    const flipperId = prefix ? `${prefix}-flipper` : 'booster-flipper';
    const drawerId = prefix ? `${prefix}-methodo-drawer` : 'booster-methodo-drawer';
    const panePyId = prefix ? `${prefix}-pane-python` : 'pane-python';
    const paneRId = prefix ? `${prefix}-pane-r` : 'pane-r';
    const paneJamoviId = prefix ? `${prefix}-pane-jamovi` : 'pane-jamovi';

    const imgSources = getCardImagePaths(testKey);

    // Construction des étapes du chemin du Quiz
    const quizPath = (meta && meta.quizPath && (meta.quizPath[currentLang] || meta.quizPath.fr)) || [];
    let quizPathHtml = '';
    if (quizPath.length > 0) {
        const stepsHtml = quizPath.map((step, idx) => `
            <span class="path-step-pill ${idx === quizPath.length - 1 ? 'is-final' : ''}">${step}</span>
            ${idx < quizPath.length - 1 ? '<span class="path-sep-arrow">›</span>' : ''}
        `).join('');

        quizPathHtml = `
            <div class="booster-quiz-path-box" aria-label="Chemin de décision">
                <div class="booster-quiz-path-trail">
                    ${stepsHtml}
                </div>
            </div>
        `;
    }

    return `
        <div class="booster-flip-scene">
            <div class="booster-card-3d-tilt" id="${tiltId}">
                <div class="booster-flipper" id="${flipperId}">
                    <!-- ==============================================
                         FACE 1 : RECTO (ILLUSTRATION PRINCIPALE DU BOOSTER)
                         ============================================== -->
                    <div class="booster-face booster-face-front" onclick="flipBoosterCard(true, '${flipperId}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();flipBoosterCard(true, '${flipperId}');}" role="button" tabindex="0" aria-label="Cliquer sur la carte pour la retourner">
                        <div class="booster-card-glare"></div>
                        <div class="booster-shimmer-sweep"></div>
                        <div class="booster-front-inner">
                            <div class="booster-art-frame">
                                <img src="${imgSources.frontPrimary}" 
                                     data-fallbacks='${JSON.stringify(imgSources.frontFallbacks)}' 
                                     data-fallback-idx="0" 
                                     onerror="handleCardImageFallback(this)" 
                                     alt="${testTitle}" 
                                     class="booster-art-img" 
                                     loading="eager">
                            </div>
                        </div>
                    </div>

                    <!-- ==============================================
                         FACE 2 : VERSO (RÉSULTAT TECHNIQUE DU TEST)
                         ============================================== -->
                    <div class="booster-face booster-face-back">
                        <div class="booster-card-glare"></div>
                        <div class="booster-back-inner">
                            <!-- Barre d'en-tête : [COMMUN] | [Cours] [Méthodo] | (↺) -->
                            <div class="booster-back-topbar">
                                <div class="booster-topbar-left">
                                    <span class="booster-rarity-badge rarity-${rarity}">
                                        ${rarityLabel}
                                    </span>
                                    <div class="booster-actions-inline">
                                        <a href="${courseUrl}" target="_blank" class="booster-action-pill btn-cours" title="Ouvrir la fiche de cours">
                                            ${(typeof getT === 'function' && getT('card-btn-cours')) || 'Cours'}
                                        </a>
                                        <a href="methodo.html?test=${testKey}#codes" class="booster-action-pill btn-methodo" title="${(typeof getT === 'function' && getT('card-btn-methodo-title')) || 'Consulter les codes Python, R et Jamovi dans la section Méthodologie'}">
                                            ${(typeof getT === 'function' && getT('card-btn-methodo')) || 'Méthodo'}
                                        </a>
                                    </div>
                                </div>
                                <button type="button" class="booster-flip-back-btn" onclick="flipBoosterCard(false, '${flipperId}')" title="${(typeof getT === 'function' && getT('card-flip-back')) || 'Retourner au dessin ↺'}" aria-label="Retourner au dessin">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                        <path d="M3 3v5h5"/>
                                    </svg>
                                </button>
                            </div>

                            <!-- Cartouche de Titre du Test -->
                            <div class="booster-title-box">
                                <h2 class="booster-test-title">${testTitle}</h2>
                            </div>

                            <!-- Chemin de décision dans le Quiz -->
                            ${quizPathHtml}

                            <!-- Description du Test -->
                            <div class="booster-desc-box">
                                <p class="booster-test-desc">${testDesc}</p>
                            </div>

                            <!-- Illustration décorative transparente en bas à droite -->
                            <div class="booster-deco-corner" onclick="flipBoosterCard(false, '${flipperId}')" title="${(typeof getT === 'function' && getT('card-flip-back')) || 'Retourner au dessin ↺'}" role="button" tabindex="0" aria-label="Retourner au dessin">
                                <img src="${imgSources.decoPrimary}" 
                                     data-fallbacks='${JSON.stringify(imgSources.decoFallbacks)}' 
                                     data-fallback-idx="0" 
                                     onerror="handleCardImageFallback(this)" 
                                     alt="Décoration" 
                                     class="booster-deco-img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            ${options.showRestart ? `
            <div class="booster-restart-wrapper">
                <button type="button" class="booster-btn-restart-main" onclick="renderQuestion('start')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                    </svg>
                    <span>${(typeof getT === 'function' && getT('card-btn-restart')) || 'Recommencer le Quiz'}</span>
                </button>
            </div>
            ` : ''}
        </div>
    `;
}

/**
 * Modale de visualisation d'une carte Booster (utilisée dans la page Théorie)
 */
function openBoosterCardModal(testKey) {
    let modalOverlay = document.getElementById('booster-modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'booster-modal-overlay';
        modalOverlay.className = 'booster-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="booster-modal-backdrop" onclick="closeBoosterCardModal()"></div>
            <div class="booster-modal-window">
                <button type="button" class="booster-modal-close-btn" onclick="closeBoosterCardModal()" aria-label="Fermer la carte">✕</button>
                <div class="booster-modal-body" id="booster-modal-card-slot"></div>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        // Fermeture sur Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeBoosterCardModal();
        });
    }

    const slot = document.getElementById('booster-modal-card-slot');
    slot.innerHTML = buildBoosterCardHtml(testKey, { idPrefix: 'modal-booster', showRestart: false });
    
    // Initialise le tilt
    const tiltTarget = document.getElementById('modal-booster-tilt-target');
    if (tiltTarget) initBoosterCard3DTilt(tiltTarget);

    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function closeBoosterCardModal() {
    const modalOverlay = document.getElementById('booster-modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('is-active');
        document.body.style.overflow = '';
    }
}

/**
 * Affiche la Galerie de Cartes de Tests dans la page Théorie (Index alphabétique + Ruban horizontal)
 */
function renderTheoryCardsGallery(ribbonContainerId = 'theory-cards-ribbon', listContainerId = 'theory-cards-list') {
    const ribbon = document.getElementById(ribbonContainerId) || document.getElementById('theory-cards-grid');
    const listContainer = document.getElementById(listContainerId);
    if (!ribbon || typeof quizTestMeta === 'undefined') return;

    const currentLang = localStorage.getItem('site-lang') || 'fr';
    const rawKeys = Object.keys(quizTestMeta);
    // Filtrer pour n'avoir que les clés uniques
    const testKeys = Array.from(new Set(rawKeys));

    // Préparer et trier les tests par ordre alphabétique
    const sortedTests = testKeys.map(key => {
        const meta = getQuizTestMeta(key);
        const title = (meta.displayTitle && meta.displayTitle[currentLang]) ? meta.displayTitle[currentLang] : key;

        // Catégorie pour filtrage (selon premier item du quizPath)
        const pathSteps = (meta.quizPath && (meta.quizPath.fr || meta.quizPath[currentLang])) || [];
        const pGoal = (pathSteps[0] || '').toLowerCase();
        let filterCategory = 'autre';
        if (pGoal.includes('relat') || pGoal.includes('corrél') || pGoal.includes('associ') || pGoal.includes('lien') || key.includes('chi2') || key.includes('pearson') || key.includes('spearman') || key.includes('cramer') || key.includes('fisher')) {
            if (key === 'res_chi2_fit') {
                filterCategory = 'comparer';
            } else {
                filterCategory = 'relation';
            }
        } else if (pGoal.includes('compar')) {
            filterCategory = 'comparer';
        } else if (pGoal.includes('prédi') || pGoal.includes('predict') || pGoal.includes('régres') || key.includes('reg')) {
            filterCategory = 'predire';
        } else if (pGoal.includes('décri') || pGoal.includes('describ') || key.includes('tendance') || key.includes('dispersion') || key.includes('visu') || key.includes('tri_plat')) {
            filterCategory = 'decrire';
        } else if (pGoal.includes('vérifi') || pGoal.includes('check') || pGoal.includes('inféren') || pGoal.includes('postulat') || pGoal.includes('assumpt') || key.includes('shapiro') || key.includes('levene') || key.includes('intervalle')) {
            filterCategory = 'verifier';
        }

        return { key, meta, title, filterCategory };
    }).sort((a, b) => a.title.localeCompare(b.title, currentLang));

    const hintText = (typeof getT === 'function' && getT('theory-deck-hint-enlarge')) || (currentLang === 'fr' ? '⤢ Agrandir' : '⤢ Enlarge');

    // 1. Rendu des mini-cartes dans le ruban horizontal
    const cardsHtml = sortedTests.map(item => {
        const { key, meta, title, filterCategory } = item;
        const rarity = meta.rarity || 'commune';
        const rarityLabel = getRarityLabel(rarity, currentLang);
        const imgSources = getCardImagePaths(key);

        return `
            <div class="deck-mini-card" data-category="${filterCategory}" data-test-key="${key}" onclick="openBoosterCardModal('${key}')" role="button" tabindex="0" title="${title} — ${hintText}">
                <div class="deck-mini-inner">
                    <div class="deck-mini-topbar">
                        <span class="booster-rarity-badge rarity-${rarity}">${rarityLabel}</span>
                    </div>
                    <div class="deck-mini-art-frame">
                        <img src="${imgSources.frontPrimary}" 
                             data-fallbacks='${JSON.stringify(imgSources.frontFallbacks)}' 
                             data-fallback-idx="0" 
                             onerror="handleCardImageFallback(this)" 
                             alt="${title}" 
                             class="deck-mini-art-img" 
                             loading="lazy">
                        <div class="deck-mini-glint"></div>
                    </div>
                    <div class="deck-mini-footer">
                        <h4 class="deck-mini-title">${title}</h4>
                        <span class="deck-mini-hint">${hintText}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    ribbon.innerHTML = cardsHtml;

    // 2. Rendu de la liste alphabétique sur le côté
    if (listContainer) {
        const listHtml = sortedTests.map(item => {
            const { key, title, filterCategory } = item;
            return `
                <button type="button" class="deck-list-item" data-category="${filterCategory}" data-test-key="${key}" onclick="selectDeckTestFromSidebar('${key}')" title="${title}">
                    <span class="deck-list-item-title">${title}</span>
                    <span class="deck-list-item-arrow">→</span>
                </button>
            `;
        }).join('');
        listContainer.innerHTML = listHtml;
    }

    const countBadge = document.getElementById('deck-list-count');
    if (countBadge) {
        countBadge.textContent = `${sortedTests.length} tests`;
    }
}

/**
 * Sélection d'un test depuis la barre latérale alphabétique :
 * Fait défiler le ruban vers la carte, l'anime et ouvre la carte agrandie
 */
function selectDeckTestFromSidebar(testKey) {
    const ribbon = document.getElementById('theory-cards-ribbon');
    const card = document.querySelector(`.deck-mini-card[data-test-key="${testKey}"]`);
    if (ribbon && card) {
        const cardOffset = card.offsetLeft - (ribbon.clientWidth / 2) + (card.clientWidth / 2);
        ribbon.scrollTo({ left: Math.max(0, cardOffset), behavior: 'smooth' });
        card.classList.add('highlight-focus');
        setTimeout(() => card.classList.remove('highlight-focus'), 1200);
    }

    document.querySelectorAll('.deck-list-item').forEach(el => el.classList.remove('is-active'));
    const item = document.querySelector(`.deck-list-item[data-test-key="${testKey}"]`);
    if (item) item.classList.add('is-active');

    // Agrandit la carte en modale 3D (carte à taille réelle)
    openBoosterCardModal(testKey);
}

/**
 * Filtre les cartes de la galerie par objectif
 */
function filterTheoryCardsDeck(category, btn) {
    const section = btn.closest('.theory-deck-section') || document;
    section.querySelectorAll('.deck-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let visibleCount = 0;
    const cards = section.querySelectorAll('.deck-mini-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    const listItems = section.querySelectorAll('.deck-list-item');
    listItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    const countBadge = document.getElementById('deck-list-count');
    if (countBadge) {
        countBadge.textContent = `${visibleCount} test${visibleCount > 1 ? 's' : ''}`;
    }

    const ribbon = document.getElementById('theory-cards-ribbon');
    if (ribbon) ribbon.scrollTo({ left: 0, behavior: 'smooth' });
}

/**
 * Fait défiler le ruban de cartes avec les flèches gauche/droite
 */
function scrollDeckRibbon(offset) {
    const ribbon = document.getElementById('theory-cards-ribbon');
    if (ribbon) {
        ribbon.scrollBy({ left: offset, behavior: 'smooth' });
    }
}

