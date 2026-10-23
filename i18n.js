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

    // Mobile nav toggle logic
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');
    const siteNav = document.querySelector('.site-nav, .navbar');

    function closeMobileNav() {
        if (navLinks) {
            navLinks.classList.remove('nav-open');
            navLinks.classList.remove('open');
            if (navToggle) {
                navToggle.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinks.classList.toggle('nav-open');
            navLinks.classList.toggle('open', isOpen);
            navToggle.classList.toggle('is-active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close when clicking any link inside the mobile menu
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeMobileNav();
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (siteNav && !siteNav.contains(e.target)) {
                closeMobileNav();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileNav();
            }
        });

        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileNav();
            }
        });
    }

    // Initialize UI animations
    initNavHoverPill();
    initScrollProgress();
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

/* ========================================================
   ANIMATION: AnimatedTabsHover (Spring-sliding nav background)
   ======================================================== */
function initNavHoverPill() {
    const navLinksContainers = document.querySelectorAll('.nav-links');

    navLinksContainers.forEach(nav => {
        // Ensure relative positioning
        if (getComputedStyle(nav).position === 'static') {
            nav.style.position = 'relative';
        }

        let pill = nav.querySelector('.nav-hover-pill');
        if (!pill) {
            pill = document.createElement('div');
            pill.className = 'nav-hover-pill';
            nav.prepend(pill);
        }

        const tabs = nav.querySelectorAll('a, button.lang-btn');
        if (tabs.length === 0) return;

        function movePillTo(element, instant = false) {
            if (window.innerWidth <= 768 || !element) {
                pill.style.opacity = '0';
                return;
            }

            const navRect = nav.getBoundingClientRect();
            const elemRect = element.getBoundingClientRect();

            if (elemRect.width === 0 || elemRect.height === 0) return;

            const left = elemRect.left - navRect.left;
            const top = elemRect.top - navRect.top;
            const width = elemRect.width;
            const height = elemRect.height;

            if (instant) {
                pill.style.transition = 'none';
            } else {
                pill.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.3, 0.64, 1), width 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s ease';
            }

            pill.style.transform = `translate3d(${left}px, ${top}px, 0)`;
            pill.style.width = `${width}px`;
            pill.style.height = `${height}px`;
            pill.style.opacity = '1';
        }

        tabs.forEach(tab => {
            tab.addEventListener('mouseenter', () => movePillTo(tab));
            tab.addEventListener('focus', () => movePillTo(tab));
        });

        nav.addEventListener('mouseleave', () => {
            const activeTab = nav.querySelector('a.active') || nav.querySelector('.active');
            if (activeTab) {
                movePillTo(activeTab);
            } else {
                pill.style.opacity = '0';
            }
        });

        // Set initial position on active tab (or first tab)
        const activeTab = nav.querySelector('a.active') || nav.querySelector('.active') || tabs[0];
        // Wait a frame for geometry to stabilize
        requestAnimationFrame(() => {
            movePillTo(activeTab, true);
        });

        window.addEventListener('resize', () => {
            const currentActive = nav.querySelector('a.active') || nav.querySelector('.active');
            if (currentActive) {
                movePillTo(currentActive, true);
            }
        });
    });
}

/* ========================================================
   ANIMATION: ScrollProgress (Reading progress bar)
   ======================================================== */
function initScrollProgress() {
    let progressBar = document.querySelector('.reading-scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-scroll-progress';
        progressBar.setAttribute('aria-hidden', 'true');
        progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
        document.body.prepend(progressBar);
    }

    const fill = progressBar.querySelector('.scroll-progress-fill');
    if (!fill) return;

    let ticking = false;
    function updateScrollProgress() {
        const winScroll = window.scrollY || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (winScroll / totalHeight) * 100)) : 0;
        fill.style.width = `${progress}%`;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();
}

document.addEventListener('DOMContentLoaded', initI18n);

