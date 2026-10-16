let quizContainer = document.getElementById('quiz-content');



let currentQuestions = null;

function getQuizData() {
    const lang = localStorage.getItem('site-lang') || 'fr';
    return quizData[lang];
}

// Helper to get translated string for UI
function getT(key) {
    const lang = localStorage.getItem('site-lang') || 'fr';
    return uiTranslations[lang][key] || key;
}


// History Tracking for V13 Recap & V27 Navigation
let pathHistory = []; // Text history for Recap
let keyStack = [];    // ID history for Back Button

function updateProgressBar(key) {
    const progressBar = document.getElementById('quiz-progress-bar');
    if (!progressBar) return;
    
    const container = progressBar.closest('.progress-container');
    const depth = keyStack.length;
    let progress = 0;
    if (key === 'start') progress = 12;
    else if (quizData['fr'][key] && quizData['fr'][key].isResult) progress = 100;
    else progress = Math.min(25 + (depth * 22), 92);
    
    progressBar.style.width = `${progress}%`;
    if (container) {
        container.setAttribute('aria-valuenow', Math.round(progress));
    }
}

function renderBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById('quiz-breadcrumbs');
    if (!breadcrumbsContainer) return;
    
    breadcrumbsContainer.innerHTML = '';
    
    // Always add "Goal" (start) if we are past it
    const steps = [getT('quiz-step-label') + " 1"];
    
    pathHistory.forEach((text, i) => {
        steps.push(text);
    });
    
    steps.forEach((stepText, i) => {
        const step = document.createElement('div');
        step.className = 'breadcrumb-step' + (i === steps.length - 1 ? ' active' : ' completed');
        step.innerHTML = `<span>${stepText}</span>`;
        breadcrumbsContainer.appendChild(step);
    });
}

// --- HELPERS POUR CARTE BOOSTER RÉVERSIBLE ---
function flipBoosterCard(toBack) {
    const flipper = document.getElementById('booster-flipper');
    if (!flipper) return;
    if (typeof toBack === 'boolean') {
        if (toBack) flipper.classList.add('is-flipped');
        else flipper.classList.remove('is-flipped');
    } else {
        flipper.classList.toggle('is-flipped');
    }
}

function openMethodoDrawer() {
    const drawer = document.getElementById('booster-methodo-drawer');
    if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
    }
}

function closeMethodoDrawer() {
    const drawer = document.getElementById('booster-methodo-drawer');
    if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
    }
}

function switchCodeTab(tabName, btn) {
    const drawer = document.getElementById('booster-methodo-drawer');
    if (!drawer) return;
    drawer.querySelectorAll('.code-tab-btn').forEach(b => b.classList.remove('active'));
    drawer.querySelectorAll('.code-pane').forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const pane = document.getElementById('pane-' + tabName);
    if (pane) pane.classList.add('active');
}

function copyCodeFrom(elemId, btn) {
    const elem = document.getElementById(elemId);
    if (!elem) return;
    const text = elem.innerText || elem.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = getT('methodo-copied-btn') || 'Copié !';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 1800);
    }).catch(err => {
        console.error('Clipboard copy failed:', err);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function attachTiltEffect(tiltTarget) {
    if (!tiltTarget) return;
    const glares = tiltTarget.querySelectorAll('.booster-card-glare');
    const rotationFactor = 8;
    const isReverse = true;

    function handleMouseMove(e) {
        const rect = tiltTarget.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotX = isReverse ? (y - 0.5) * rotationFactor * 2 : (0.5 - y) * rotationFactor * 2;
        const rotY = isReverse ? (0.5 - x) * rotationFactor * 2 : (x - 0.5) * rotationFactor * 2;

        tiltTarget.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

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

function renderResult(data, key) {
    if (!quizContainer) quizContainer = document.getElementById('quiz-content');
    if (!quizContainer) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'booster-scene-wrapper';

    if (typeof buildBoosterCardHtml === 'function') {
        wrapper.innerHTML = buildBoosterCardHtml(key, { 
            showRestart: true,
            title: data ? data.testName : null,
            desc: data ? data.text : null
        });
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(wrapper);

    const tiltTarget = document.getElementById('booster-tilt-target');
    if (tiltTarget && typeof initBoosterCard3DTilt === 'function') {
        initBoosterCard3DTilt(tiltTarget);
    }

    setTimeout(() => {
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
}

function renderQuestion(key, fromOptionText = null, isBackStep = false) {
    const data = getQuizData()[key];

    // --- NAVIGATION LOGIC ---
    if (key === 'start') {
        pathHistory = [];
        keyStack = [];
    } else if (!isBackStep) {
        if (fromOptionText) pathHistory.push(fromOptionText);
    }
    
    renderBreadcrumbs();
    updateProgressBar(key);

    if (!quizContainer) quizContainer = document.getElementById('quiz-content');
    if (!quizContainer) return;

    // Animation fade out
    quizContainer.style.opacity = 0;

    setTimeout(() => {
        quizContainer.innerHTML = '';

        // --- BACK BUTTON ---
        if (keyStack.length > 0) {
            const backBtn = document.createElement('button');
            backBtn.className = 'back-btn';
            backBtn.innerHTML = `<span>←</span> ${getT('quiz-back')}`;
            backBtn.onclick = goBack;
            quizContainer.appendChild(backBtn);
        }

        if (data.isResult) {
            renderResult(data, key);
        } else {
            const card = document.createElement('div');
            card.className = 'question-card';

            const title = document.createElement('h3');
            title.textContent = data.question;
            card.appendChild(title);

            const grid = document.createElement('div');
            grid.className = (key === 'start') ? 'options-grid start-options-grid' : 'options-grid';

            data.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'quiz-btn';
                btn.textContent = opt.text;
                btn.onclick = () => {
                    let recapText = opt.recap || opt.text;
                    keyStack.push(key);
                    if (opt.next) renderQuestion(opt.next, recapText);
                    if (opt.result) renderQuestion(opt.result, recapText);
                };
                grid.appendChild(btn);
            });

            // ADDED: Help Button
            if (data.help) {
                const helpBtn = document.createElement('button');
                helpBtn.className = 'quiz-btn help-btn';
                helpBtn.innerHTML = getT('quiz-help-btn');
                helpBtn.onclick = () => toggleHelp(helpBtn, data.help);
                grid.appendChild(helpBtn);

                // V11: Adding a direct theory button for Concepts (if theoryId exists)
                if (data.help.theoryId) {
                    const theoryBtn = document.createElement('button');
                    theoryBtn.className = 'quiz-btn expert-btn';
                    theoryBtn.style.marginTop = "0.5rem";
                    theoryBtn.innerHTML = getT('quiz-theory-btn');
                    theoryBtn.onclick = () => window.open(`theory.html?id=${data.help.theoryId}`, '_blank');
                    grid.appendChild(theoryBtn);
                }
            }

            card.appendChild(grid);
            quizContainer.appendChild(card);
        }

        // Animation fade in
        quizContainer.style.opacity = 1;
    }, 300);
}

// Function to handle help toggle
// Function to handle help toggle
function toggleHelp(btn, helpData) {
    // Check if help is already open
    let existingHelp = btn.nextElementSibling;
    if (existingHelp && existingHelp.classList.contains('help-container')) {
        existingHelp.remove();
        return;
    }

    // Create help container
    const helpContainer = document.createElement('div');
    helpContainer.className = 'help-container fade-in';

    // 1. Title
    const title = document.createElement('h4');
    title.textContent = helpData.title || getT('quiz-comparison-title');
    helpContainer.appendChild(title);

    // 2. Tabs Header
    const tabsHeader = document.createElement('div');
    tabsHeader.className = 'help-tabs-header';

    // 3. Content Area
    const contentArea = document.createElement('div');
    contentArea.className = 'help-tabs-content';

    const optionKeys = Object.keys(helpData).filter(k => k.startsWith('option')).sort();
    let firstTab = true;

    optionKeys.forEach((key, index) => {
        const opt = helpData[key];
        if (opt) {
            // Tab Button
            const tabBtn = document.createElement('button');
            tabBtn.className = 'help-tab-btn' + (firstTab ? ' active' : '');
            tabBtn.textContent = opt.title;
            tabBtn.onclick = () => switchHelpContentTab(tabBtn, index);
            tabsHeader.appendChild(tabBtn);

            // Tab Pane
            const pane = document.createElement('div');
            pane.className = 'help-tab-pane' + (firstTab ? ' active' : '');
            pane.innerHTML = `
                <p>${opt.desc}</p>
                ${opt.ex ? `<p class="ex-tag">Ex: ${opt.ex}</p>` : ''}
            `;
            contentArea.appendChild(pane);

            firstTab = false;
        }
    });

    helpContainer.appendChild(tabsHeader);
    helpContainer.appendChild(contentArea);

    // 4. Inline Code (if any)
    if (helpData.inlineCode) {
        const codeWrapper = document.createElement('div');
        codeWrapper.className = 'code-wrapper help-code';
        codeWrapper.style.marginTop = "1.5rem";

        const jamoviCode = helpData.inlineCode.code3 || "Pas de code Jamovi disponible.";
        codeWrapper.innerHTML = `
            <div class="code-tabs">
                <button class="tab-btn active" onclick="switchHelpTab(this, 0)">R</button>
                <button class="tab-btn" onclick="switchHelpTab(this, 1)">Python</button>
                <button class="tab-btn" onclick="switchHelpTab(this, 2)">Jamovi</button>
            </div>
            <div class="code-content active" style="display:block; padding: 12px 14px; background: var(--code-bg, #2A2420); border-radius: 0 0 6px 6px;">
                <pre style="color: var(--code-text, #E8D5B7); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.5; margin:0; overflow-x: auto;">${helpData.inlineCode.code}</pre>
            </div>
            <div class="code-content" style="display:none; padding: 12px 14px; background: var(--code-bg, #2A2420); border-radius: 0 0 6px 6px;">
                <pre style="color: var(--code-text, #E8D5B7); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.5; margin:0; overflow-x: auto;">${helpData.inlineCode.code2}</pre>
            </div>
            <div class="code-content" style="display:none; padding: 12px 14px; background: var(--code-bg, #2A2420); border-radius: 0 0 6px 6px;">
                 <pre style="color: var(--code-text, #E8D5B7); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.5; margin:0; overflow-x: auto;">${jamoviCode}</pre>
            </div>
        `;
        helpContainer.appendChild(codeWrapper);
    }

    // 5. Footer
    const footer = document.createElement('p');
    footer.className = 'help-footer';
    footer.textContent = getT('quiz-comparison-footer');
    helpContainer.appendChild(footer);

    // Insert after the button
    btn.parentNode.insertBefore(helpContainer, btn.nextSibling);

    // Scroll to help
    helpContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to switch help content tabs
function switchHelpContentTab(btn, index) {
    const container = btn.closest('.help-container');
    const buttons = container.querySelectorAll('.help-tab-btn');
    const panes = container.querySelectorAll('.help-tab-pane');

    buttons.forEach((b, i) => b.classList.toggle('active', i === index));
    panes.forEach((p, i) => p.classList.toggle('active', i === index));
}

// Expert Toggle Function
function toggleExpert(btn, expertData) {
    let existingExpert = btn.nextElementSibling;
    if (existingExpert && existingExpert.classList.contains('expert-container')) {
        existingExpert.remove();
        return;
    }

    const expertContainer = document.createElement('div');
    expertContainer.className = 'expert-container fade-in';
    expertContainer.innerHTML = `
        <h4>${getT('quiz-expert-title')}</h4>
        <div class="expert-content">
            <p><strong>Formule :</strong> <code>${expertData.formula}</code></p>
            <p><strong>Hypothèses :</strong> ${expertData.assumptions}</p>
            <p><strong>Conditions d'application :</strong> ${expertData.conditions}</p>
            <p><strong>Alternative non paramétrique :</strong> ${expertData.alternatives}</p>
        </div>
    `;

    btn.parentNode.insertBefore(expertContainer, btn.nextSibling);
}

// Remove old toggleExpert if it exists, as we now redirect.
function toggleExpert() { }

// Helper to scroll safely
function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add('highlight-pulse');
        setTimeout(() => el.classList.remove('highlight-pulse'), 2000);
    }
}

// Code Tabs Logic
function openTab(evt, tabName) {
    // Get the parent wrapper to scope the search
    const wrapper = evt.currentTarget.closest('.code-wrapper');

    // Hide all tab content within this wrapper
    const tabContents = wrapper.getElementsByClassName("code-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }

    // Remove active class from buttons
    const tabLinks = wrapper.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the specific tab content
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.style.display = "block";
        targetTab.classList.add("active");
    }

    // Add active to button
    evt.currentTarget.className += " active";
}

// Copy Code Logic
function copyCode(btn) {
    const codeBlock = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        const originalText = btn.textContent;
        btn.textContent = "Copié !";
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Initial Render
function initQuiz() {
    quizContainer = document.getElementById('quiz-content');
    if (quizContainer) {
        renderQuestion('start');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// V27: Back Function
function goBack() {
    if (keyStack.length === 0) return;

    // Pop the previous node ID
    const previousKey = keyStack.pop();

    // Pop the last text history entry (so we don't duplicate it if we go forward again)
    pathHistory.pop();

    // Re-render the previous question, flagging it as a 'Back' step to avoid duplicate logic
    renderQuestion(previousKey, null, true);
}

// V29: Helper for Dynamic Help Tabs
function switchHelpTab(btn, tabIndex) {
    const wrapper = btn.closest('.code-wrapper');
    const buttons = wrapper.querySelectorAll('.tab-btn');
    const contents = wrapper.querySelectorAll('.code-content');

    // Update buttons
    buttons.forEach((b, i) => {
        if (i === tabIndex) b.classList.add('active');
        else b.classList.remove('active');
    });

    // Update content
    contents.forEach((c, i) => {
        if (i === tabIndex) {
            c.style.display = 'block';
            c.classList.add('active');
        } else {
            c.style.display = 'none';
            c.classList.remove('active');
        }
    });
}
