const quizContainer = document.getElementById('quiz-content');



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

function renderQuestion(key, fromOptionText = null, isBackStep = false) {
    const data = getQuizData()[key];

    // --- NAVIGATION LOGIC (V27) ---
    if (key === 'start') {
        pathHistory = [];
        keyStack = [];
    } else if (!isBackStep) {
        // Normal navigation: Push to history
        if (fromOptionText) pathHistory.push(fromOptionText);
        // Push the *previous* key to the stack so we can go back to it
        // BUT wait, we need to know where we came FROM. 
        // Actually, simpler: push the CURRENT key to stack *before* moving? 
        // No, we need a stack of "where we have been". 
        // Strategy: 
        // 1. When we enter a node, we push the *previous* node ID to the stack? 
        //    No, because we don't pass the previous ID.
        // 2. Better: When we click an option, BEFORE calling renderQuestion, we push 'key' (current) to stack.
    }

    // Animation fade out
    quizContainer.style.opacity = 0;

    setTimeout(() => {
        quizContainer.innerHTML = '';

        // --- BACK BUTTON (V27) ---
        // If we are deep in the quiz (stack not empty), show Back button
        if (keyStack.length > 0) {
            const backBtn = document.createElement('button');
            backBtn.className = 'back-btn';
            backBtn.innerHTML = getT('quiz-back');
            backBtn.onclick = goBack;
            quizContainer.appendChild(backBtn);
        }

        if (data.isResult) {
            renderResult(data);
        } else {
            const card = document.createElement('div');
            card.className = 'question-card';

            const title = document.createElement('h3');
            title.textContent = data.question;
            card.appendChild(title);

            const grid = document.createElement('div');
            grid.className = (key === 'start' || key.includes('bi')) ? 'options-grid start-options-grid' : 'options-grid';

            data.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'quiz-btn';
                btn.textContent = opt.text;
                btn.onclick = () => {
                    // Cleaner Recap
                    let recapText = opt.recap || opt.text.split(" (")[0];

                    // PUSH TO STACK (V27)
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
            <div class="code-content active" style="display:block; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 0 0 8px 8px;">
                <pre style="color: #a5b4fc; margin:0;">${helpData.inlineCode.code}</pre>
            </div>
            <div class="code-content" style="display:none; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 0 0 8px 8px;">
                <pre style="color: #fca5a5; margin:0;">${helpData.inlineCode.code2}</pre>
            </div>
            <div class="code-content" style="display:none; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 0 0 8px 8px;">
                 <pre style="color: #fdba74; margin:0;">${jamoviCode}</pre>
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
            <p><strong>📐 Formule :</strong> <code>${expertData.formula}</code></p>
            <p><strong>🧠 Hypothèses :</strong> ${expertData.assumptions}</p>
            <p><strong>⚠️ Conditions :</strong> ${expertData.conditions}</p>
            <p><strong>🔄 Alternative :</strong> ${expertData.alternatives}</p>
        </div>
    `;

    btn.parentNode.insertBefore(expertContainer, btn.nextSibling);
}

function renderResult(data) {
    const card = document.createElement('div');
    card.className = 'result-card';

    // Build Recap HTML
    const recapHtml = pathHistory.length > 0
        ? `<div class="recap-box" style="margin-bottom: 2rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; border-left: 4px solid #facc15;">
             <h5 style="color: #facc15; margin-bottom: 0.5rem;">${getT('quiz-recap-title')}</h5>
             <p style="font-size: 0.9rem; color: #e2e8f0;">
                ${pathHistory.map((step, i) => `<span style="opacity: ${0.6 + (i * 0.1)}">${i + 1}. ${step}</span>`).join(' &nbsp;➝&nbsp; ')}
             </p>
           </div>`
        : '';

    const content = document.createElement('div');
    content.innerHTML = `
        <!-- V28 Winner Banner -->
        <div class="winner-banner">
            <div class="winner-icon">🏆</div>
            <div class="winner-info">
                <span class="winner-label">${getT('quiz-winner-label')}</span>
                <h2 class="winner-title">${data.testName || "Résultat"}</h2>
            </div>
        </div>
        
        ${recapHtml}
        
        <p style="margin-top: 1.5rem;">${data.text}</p>
        
        <!-- V11 Expert Button (Redirect to Theory Page) -->
        ${data.expert ? `<button class="quiz-btn expert-btn" onclick="window.open('theory.html?id=${data.expert}', '_blank')">${getT('quiz-more-btn')}</button>` : ''}
        
        <!-- V13 Safety Net: Diagnostic Button -->
        <button class="quiz-btn help-btn" onclick="window.open('theory.html?id=${data.sos || 'troubleshooting'}', '_blank')" style="margin-top: 0.5rem; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #fca5a5;">
            ${getT('quiz-sos-btn')}
        </button>

        <br><br>
        <a href="#${data.targetId}" class="result-action-btn" onclick="scrollToId('${data.targetId}')">${getT('quiz-code-btn')}</a>
        <br>
        <button class="result-action-btn" onclick="renderQuestion('start')" style="margin-top: 10px; background: transparent; border-color: rgba(255,255,255,0.3);">${getT('quiz-restart-btn')}</button>
    `;
    card.appendChild(content);

    quizContainer.appendChild(card);
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
document.addEventListener('DOMContentLoaded', () => {
    if (quizContainer) {
        renderQuestion('start');
    }
});

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
