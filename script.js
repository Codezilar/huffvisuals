/**
 * HUFF Visuals - Interactive Portfolio
 * Main JavaScript for enhanced user experience
 */

// ============================================
// MOBILE NAVIGATION
// ============================================

class MobileNavigation {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = this.navMenu.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.navToggle.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.updateToggleIcon();
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.updateToggleIcon();
    }

    updateToggleIcon() {
        const spans = this.navToggle.querySelectorAll('span');
        if (this.navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(12px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-12px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleScroll(e));
        });
    }

    handleScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Check if it's a valid anchor link
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 60; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.observer = new IntersectionObserver(
            (entries) => this.onIntersect(entries),
            this.observerOptions
        );
        this.init();
    }

    init() {
        const animatedElements = document.querySelectorAll('[data-animate], .portfolio-item, .exhibition-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            this.observer.observe(el);
        });
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateElement(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }

    animateElement(element) {
        element.style.animation = 'fadeInUp 0.6s cubic-bezier(0.23, 1, 0.320, 1) forwards';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: this.form.querySelector('#name').value.trim(),
            email: this.form.querySelector('#email').value.trim(),
            message: this.form.querySelector('#message').value.trim()
        };

        // Validate
        if (!this.validate(formData)) {
            return;
        }

        // Show success message (in a real app, this would send to a server)
        this.showSuccessMessage();
        this.form.reset();
    }

    validate(data) {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.name) {
            this.showError('Please enter your name');
            return false;
        }

        if (!emailRegex.test(data.email)) {
            this.showError('Please enter a valid email address');
            return false;
        }

        if (data.message.length < 10) {
            this.showError('Message must be at least 10 characters');
            return false;
        }

        return true;
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'form-message success';
        message.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        message.style.cssText = `
            background: #4CAF50;
            color: white;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            animation: slideDown 0.3s ease;
        `;

        this.form.insertBefore(message, this.form.firstChild);

        setTimeout(() => {
            message.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    showError(errorMessage) {
        const message = document.createElement('div');
        message.className = 'form-message error';
        message.textContent = '✕ ' + errorMessage;
        message.style.cssText = `
            background: #f44336;
            color: white;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            animation: slideDown 0.3s ease;
        `;

        // Remove previous error messages
        const previousErrors = this.form.querySelectorAll('.form-message');
        previousErrors.forEach(el => el.remove());

        this.form.insertBefore(message, this.form.firstChild);

        setTimeout(() => {
            message.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 4000);
    }
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

class ScrollProgress {
    constructor() {
        this.init();
    }

    init() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.id = 'scrollProgress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #FFB84D, #FF9500);
            width: 0;
            z-index: 999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => this.updateProgress(progressBar));
    }

    updateProgress(progressBar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    }
}

// ============================================
// ANALYTICS & PERFORMANCE
// ============================================

class Analytics {
    constructor() {
        this.trackPageView();
        this.trackLinks();
        this.trackFormInteractions();
    }

    trackPageView() {
        // Log initial page view
        if (typeof window.gtag === 'function') {
            gtag('event', 'page_view', {
                page_path: window.location.pathname,
                page_title: document.title
            });
        }
    }

    trackLinks() {
        const links = document.querySelectorAll('a[target="_blank"]');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (typeof window.gtag === 'function') {
                    gtag('event', 'external_link_click', {
                        destination: link.href
                    });
                }
            });
        });
    }

    trackFormInteractions() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('focus', () => {
                if (typeof window.gtag === 'function') {
                    gtag('event', 'form_interaction', {
                        form_name: 'contact'
                    });
                }
            }, true);
        }
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

class LazyLoad {
    constructor() {
        this.init();
    }

    init() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Close mobile menu with Escape key
            if (e.key === 'Escape') {
                const mobileNav = document.querySelector('.mobile-navigation');
                if (mobileNav) {
                    mobileNav.closeMenu?.();
                }
            }

            // Skip to main content with Alt+M
            if (e.altKey && e.key === 'm') {
                const main = document.querySelector('main') || document.querySelector('section');
                if (main) {
                    main.focus();
                }
            }
        });
    }
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

class PerformanceMonitoring {
    constructor() {
        this.init();
    }

    init() {
        if (window.PerformanceObserver) {
            try {
                // Monitor Core Web Vitals
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        console.debug('Performance:', entry.name, entry.value);
                    }
                });

                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'cumulative-layout-shift'] });
            } catch (e) {
                console.debug('Performance monitoring not fully supported');
            }
        }
    }
}

// ============================================
// ADD REQUIRED CSS ANIMATIONS
// ============================================

function injectAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-10px);
            }
        }

        .nav-menu.active {
            display: flex;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inject animations
    injectAnimationStyles();

    // Initialize components
    new MobileNavigation();
    new SmoothScroll();
    new ScrollAnimations();
    new ContactForm();
    new ScrollProgress();
    new KeyboardNavigation();
    new LazyLoad();
    new PerformanceMonitoring();
    
    // Optional: Initialize Analytics if gtag is available
    if (window.gtag) {
        new Analytics();
    }

    console.log('✓ HUFF Visuals website initialized');
});

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================

if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker not available, site still works
        });
    });
}
