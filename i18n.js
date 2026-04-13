function initI18n() {
    const savedLang = localStorage.getItem('site-lang') || 'fr';
    setLanguage(savedLang);

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('site-lang') || 'fr';
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(newLang);
            location.reload(); // Reload to refresh theory data
        });
    }
}

function setLanguage(lang) {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = lang;

    // Update UI elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    if (typeof uiTranslations === 'undefined') {
        console.warn('uiTranslations is not defined');
        return;
    }
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[lang] && uiTranslations[lang][key]) {
            el.innerHTML = uiTranslations[lang][key];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });

    // Update toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    }
}

document.addEventListener('DOMContentLoaded', initI18n);
