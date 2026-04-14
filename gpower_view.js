const viewport = document.getElementById('mindmap-viewport');
const container = document.getElementById('mindmap-container');
const detailCard = document.getElementById('detail-card');
const detailContent = document.getElementById('detail-content');
const backBtn = document.getElementById('map-back-btn');
const tooltip = document.getElementById('mindmap-tooltip');

let historyStack = ["root"];

/**
 * Initial Render
 */
document.addEventListener('DOMContentLoaded', () => {
    renderLevel("root");
});

/**
 * Render a Level of the Mind Map
 */
function renderLevel(nodeId) {
    const node = GPowerData.mindmap[nodeId];
    if (!node) return;

    // Fade out
    container.style.opacity = "0";
    container.style.transform = "scale(0.95)";
    hideTooltip();

    setTimeout(() => {
        container.innerHTML = '';
        
        // --- If it's a LEAF node, show detail card ---
        if (node.type === "leaf") {
            showDetailCard(node);
        } else {
            closeDetailCard();
            // Render children
            node.children.forEach(childId => {
                const childNode = GPowerData.mindmap[childId];
                if (childNode) {
                    const bubble = createBubble(childNode);
                    container.appendChild(bubble);
                }
            });
        }

        // Toggle back button
        backBtn.style.display = historyStack.length > 1 ? "block" : "none";

        // Fade in
        container.style.opacity = "1";
        container.style.transform = "scale(1)";
    }, 300);
}

/**
 * Create a Bubble Element
 */
function createBubble(node) {
    const lang = localStorage.getItem('site-lang') || 'fr';
    const div = document.createElement('div');
    div.className = 'mindmap-bubble';
    if (node.color) div.style.borderColor = `var(${node.color})`;
    
    div.innerHTML = `<h3>${node.title[lang]}</h3>`;
    
    // Add Info icon for intent
    const infoIcon = document.createElement('div');
    infoIcon.className = 'bubble-info-icon';
    infoIcon.textContent = 'i';
    
    // On mobile, clicking the 'i' icon shows description
    infoIcon.onclick = (e) => {
        e.stopPropagation();
        showTooltip(node, e);
        // On mobile, we might want to keep the tooltip visible until clicked elsewhere
        if (window.innerWidth <= 768) {
            tooltip.classList.add('mobile-persistent');
        }
    };
    
    div.appendChild(infoIcon);
    
    // Hover Logic (Desktop)
    div.onmouseenter = (e) => showTooltip(node, e);
    div.onmousemove = (e) => positionTooltip(e);
    div.onmouseleave = () => {
        if (!tooltip.classList.contains('mobile-persistent')) {
            hideTooltip();
        }
    };

    div.onclick = () => {
        hideTooltip(); // Hide any persistent tooltip
        historyStack.push(node.id);
        renderLevel(node.id);
    };
    
    return div;
}

/**
 * Tooltip Logic
 */
function showTooltip(node, event) {
    if (!node.hoverDesc) return;
    const lang = localStorage.getItem('site-lang') || 'fr';
    
    tooltip.innerHTML = `<h4>${node.title[lang]}</h4><p>${node.hoverDesc[lang]}</p>`;
    tooltip.classList.add('visible');
    positionTooltip(event);
}

function positionTooltip(event) {
    if (!tooltip.classList.contains('visible')) return;
    
    const x = event.clientX;
    const y = event.clientY;
    
    // Offset from cursor
    tooltip.style.left = (x + 20) + 'px';
    tooltip.style.top = (y - 50) + 'px';
}

function hideTooltip() {
    tooltip.classList.remove('visible');
    tooltip.classList.remove('mobile-persistent');
}

// Global listener to hide persistent tooltip on mobile when clicking elsewhere
document.addEventListener('mousedown', (e) => {
    if (!tooltip.contains(e.target) && !e.target.classList.contains('bubble-info-icon')) {
        hideTooltip();
    }
});

/**
 * Detail Card Logic (Level 4 - Final Summary)
 */
function showDetailCard(node) {
    const lang = localStorage.getItem('site-lang') || 'fr';
    
    let html = `<h2 class="gradient-text">${node.title[lang]}</h2>`;
    html += `<p class="pedagogical-desc">${node.hoverDesc ? node.hoverDesc[lang] : ''}</p>`;

    // Detailed Indicator Section
    html += `<div class="indicators-summary" style="margin-top: 2rem;">`;
    html += `<h3 style="font-size: 1.1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--primary-color);">📚 ${lang === 'fr' ? 'Concepts clés à maîtriser' : 'Key Concepts to Master'}</h3>`;
    
    if (node.params) {
        node.params.forEach(paramKey => {
            const term = GPowerData.glossary[lang][paramKey];
            if (term) {
                html += `
                <div class="indicator-item" style="margin-bottom: 1.2rem;">
                    <strong style="color: var(--primary-color); display: block; margin-bottom: 3px;">${term.term}</strong>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.4;">${term.def}</p>
                </div>`;
            }
        });
    }
    
    // Add extra common indicators if not present
    if (node.id.includes('t-test') || node.id.includes('anova')) {
        const pVal = GPowerData.glossary[lang]['p-value'];
        html += `
        <div class="indicator-item" style="margin-bottom: 1.2rem; border-top: 1px dashed var(--border-subtle); pt: 10px;">
            <strong style="color: var(--accent-color); display: block; margin-bottom: 3px;">${pVal.term}</strong>
            <p style="font-size: 0.9rem; margin: 0; line-height: 1.4;">${pVal.def}</p>
        </div>`;
    }

    html += `</div>`;

    // Reporting Example
    html += `<div class="reporting-box glass-panel" style="margin-top: 2rem; background: rgba(var(--primary-rgb), 0.05);">`;
    html += `<p style="font-size: 0.9rem; font-style: italic;">` + (lang === 'fr' ? '💡 <b>Conseil de rédaction :</b> Toujours rapporter la taille d’effet (d ou f) en plus de la p-value pour montrer l’importance pratique de votre résultat.' : '💡 <b>Writing Tip:</b> Always report the effect size (d or f) alongside the p-value to show the practical importance of your result.') + `</p>`;
    html += `</div>`;

    detailContent.innerHTML = html;
    detailCard.style.display = "block";
    container.style.display = "none";
}

function closeDetailCard() {
    detailCard.style.display = "none";
    container.style.display = "flex";
}

/**
 * Navigation Hooks
 */
function mapGoBack() {
    if (historyStack.length <= 1) return;
    historyStack.pop();
    renderLevel(historyStack[historyStack.length - 1]);
}

function mapReset() {
    historyStack = ["root"];
    renderLevel("root");
}

/**
 * Glossary Modal Logic (kept for legacy support or manual triggers)
 */
function openGlossary(termId) {
    const lang = localStorage.getItem('site-lang') || 'fr';
    const termData = GPowerData.glossary[lang][termId];
    if (!termData) return;

    document.getElementById('glossary-term').textContent = termData.term;
    document.getElementById('glossary-def').innerHTML = termData.def;
    document.getElementById('glossary-modal').style.display = "flex";
}

function closeGlossary() {
    document.getElementById('glossary-modal').style.display = "none";
}
