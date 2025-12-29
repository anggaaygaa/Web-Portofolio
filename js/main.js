/* ========================================
   PERSONAL PORTFOLIO - JAVASCRIPT
   Dynamic Features & Interactivity
======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    initLoader();
    initNavbar();
    initParticles();
    initCursorGlow();
    initScrollReveal();
    initScrollToTop();
    initTypingEffect();
    initSkillBars();
    initProjectFilter();
    initContactForm();
    initSmoothScroll();
    initCounterAnimation();
    initThemeToggle();
});

/* ===== PAGE LOADER ===== */
function initLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        });
    }
}

/* ===== NAVBAR ===== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu?.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ===== PARTICLE BACKGROUND (OPTIMIZED) ===== */
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    // Reduced from 50 to 15 for better performance
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

        const colors = ['#00d4ff', '#00ff88', '#8b5cf6', '#ec4899'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particlesContainer.appendChild(particle);
    }
}

/* ===== CURSOR GLOW EFFECT (OPTIMIZED) ===== */
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;

    // Disable on mobile and tablets
    if (window.innerWidth <= 1024) {
        cursorGlow.style.display = 'none';
        return;
    }

    // Throttled mousemove for better performance
    let ticking = false;
    document.addEventListener('mousemove', (e) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ===== SCROLL REVEAL ANIMATION ===== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on load
}

/* ===== SCROLL TO TOP BUTTON ===== */
function initScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-top');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ===== TYPING EFFECT ===== */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = typingElement.dataset.texts?.split(',') || ['Developer', 'Designer', 'Creator'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ===== SKILL BARS ANIMATION ===== */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length === 0) return;

    const animateSkills = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && !bar.classList.contains('animated')) {
                const targetWidth = bar.dataset.progress || '0';
                bar.style.width = targetWidth + '%';
                bar.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Check on load
}

/* ===== PROJECT FILTER ===== */
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    const formContent = form.closest('.contact-form');
    const successMessage = document.querySelector('.form-success');

    // Validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate input
    function validateInput(input, pattern = null) {
        const value = input.value.trim();
        const errorElement = input.parentElement.querySelector('.error-message');

        if (!value) {
            showError(input, errorElement, 'Field ini wajib diisi');
            return false;
        }

        if (pattern && !pattern.test(value)) {
            showError(input, errorElement, 'Format tidak valid');
            return false;
        }

        hideError(input, errorElement);
        return true;
    }

    function showError(input, errorElement, message) {
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    function hideError(input, errorElement) {
        input.classList.remove('error');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    // Real-time validation
    [nameInput, emailInput, messageInput].forEach(input => {
        if (!input) return;

        input.addEventListener('blur', () => {
            if (input === emailInput) {
                validateInput(input, emailPattern);
            } else {
                validateInput(input);
            }
        });

        input.addEventListener('input', () => {
            const errorElement = input.parentElement.querySelector('.error-message');
            hideError(input, errorElement);
        });
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const isNameValid = validateInput(nameInput);
        const isEmailValid = validateInput(emailInput, emailPattern);
        const isMessageValid = validateInput(messageInput);

        if (isNameValid && isEmailValid && isMessageValid) {
            const submitBtn = form.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner"></span> Mengirim...';
            submitBtn.disabled = true;

            try {
                // Actually send form data to Formspree
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success message
                    form.style.display = 'none';
                    successMessage?.classList.add('show');
                    form.reset();

                    // Trigger confetti celebration!
                    if (window.triggerConfetti) {
                        window.triggerConfetti();
                    }

                    // Hide success after delay
                    setTimeout(() => {
                        successMessage?.classList.remove('show');
                        form.style.display = 'block';
                    }, 5000);
                } else {
                    // Show error
                    alert('Gagal mengirim pesan. Silakan coba lagi.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Terjadi kesalahan. Silakan coba lagi.');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }
    });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ===== COUNTER ANIMATION ===== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;

    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target) || 0;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ===== DYNAMIC GREETING ===== */
function getDynamicGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi';
    if (hour < 17) return 'Selamat Siang';
    if (hour < 21) return 'Selamat Sore';
    return 'Selamat Malam';
}

// Update greeting if element exists
const greetingElement = document.querySelector('.dynamic-greeting');
if (greetingElement) {
    greetingElement.textContent = getDynamicGreeting();
}

/* ===== THEME TOGGLE (BONUS) ===== */
function initThemeToggle() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (!themeBtn) return;

    const root = document.documentElement;
    let isDark = true;

    themeBtn.addEventListener('click', () => {
        isDark = !isDark;

        if (isDark) {
            root.style.setProperty('--bg-primary', '#0a0a1a');
            root.style.setProperty('--bg-secondary', '#0f0f2a');
            root.style.setProperty('--text-primary', '#ffffff');
            themeBtn.textContent = '☀️';
        } else {
            root.style.setProperty('--bg-primary', '#f0f0f5');
            root.style.setProperty('--bg-secondary', '#ffffff');
            root.style.setProperty('--text-primary', '#1a1a2e');
            themeBtn.textContent = '🌙';
        }
    });
}

/* ===== PREMIUM EFFECTS ===== */

// Button Ripple Effect
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Card Tilt Effect (DISABLED for performance)
function initTiltEffect() {
    // Tilt effect disabled to improve performance
    // Cards still have CSS hover effects
    return;
}

// Magnetic Buttons Effect (DISABLED for performance)
function initMagneticButtons() {
    // Magnetic effect disabled to improve performance
    // Buttons still have CSS hover effects
    return;
}

// Enhanced Cursor Glow (DISABLED for performance)
function initEnhancedCursorGlow() {
    // Color cycling disabled to reduce CPU usage
    return;
}

// Smooth Element Parallax (DISABLED for performance)
function initParallax() {
    // Parallax disabled to reduce scroll lag
    return;
}

// Text Scramble Effect (DISABLED for performance)
function initTextScramble() {
    // Text scramble disabled to reduce CPU usage
    return;
}

// Glowing Skill Percent
function initGlowingPercent() {
    const percentElements = document.querySelectorAll('.skill-percent');

    percentElements.forEach(el => {
        el.addEventListener('mouseenter', function () {
            this.style.textShadow = '0 0 20px var(--accent-cyan), 0 0 40px var(--accent-cyan)';
        });

        el.addEventListener('mouseleave', function () {
            this.style.textShadow = 'none';
        });
    });
}

// Initialize all premium effects
document.addEventListener('DOMContentLoaded', function () {
    initRippleEffect();
    initTiltEffect();
    initMagneticButtons();
    initEnhancedCursorGlow();
    initTextScramble();
    initGlowingPercent();
    initSpotlightEffect();
});

// Spotlight Effect for Cards
function initSpotlightEffect() {
    const cards = document.querySelectorAll('.card, .project-card, .stat-item, .achievement-badge');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Stagger Animation for List Items
function initStaggerAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.1}s`;
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-item, .timeline-item, .tech-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize stagger animation
document.addEventListener('DOMContentLoaded', initStaggerAnimation);

/* ========================================
   ADVANCED FEATURES
======================================== */

// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===== THEME TOGGLE (DARK/LIGHT MODE) =====
function initThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<span class="icon-moon">🌙</span><span class="icon-sun">☀️</span>';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    document.body.appendChild(themeToggle);

    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio_theme', newTheme);

        // Add rotation animation
        themeToggle.style.transform = 'scale(1.2) rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

// ===== CONFETTI EFFECT =====
function triggerConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#00d4ff', '#00ff88', '#8b5cf6', '#ec4899', '#f97316', '#fbbf24'];
    const shapes = ['square', 'circle'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

        if (shapes[Math.floor(Math.random() * shapes.length)] === 'circle') {
            confetti.style.borderRadius = '50%';
        }

        container.appendChild(confetti);
    }

    // Remove container after animation
    setTimeout(() => {
        container.remove();
    }, 4000);
}

// ===== CUSTOM ANIMATED CURSOR (DISABLED) =====
function initCustomCursor() {
    // Custom cursor completely disabled to improve performance
    // The requestAnimationFrame loop was causing significant CPU usage
    return;
}

// ===== IMAGE LIGHTBOX =====
function initLightbox() {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <img src="" alt="Enlarged image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Add click handlers to project images
    document.querySelectorAll('.project-card img, .hero-avatar img, .about-image img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback
        images.forEach(img => img.classList.add('loaded'));
    }
}

// ===== SHARE BUTTONS =====
function initShareButtons() {
    const shareContainers = document.querySelectorAll('.share-buttons');

    shareContainers.forEach(container => {
        container.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pageUrl = encodeURIComponent(window.location.href);
                const pageTitle = encodeURIComponent(document.title);
                let shareUrl = '';

                if (btn.classList.contains('twitter')) {
                    shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
                } else if (btn.classList.contains('facebook')) {
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
                } else if (btn.classList.contains('linkedin')) {
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
                } else if (btn.classList.contains('whatsapp')) {
                    shareUrl = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
                } else if (btn.classList.contains('copy')) {
                    navigator.clipboard.writeText(window.location.href);
                    btn.innerHTML = '✓';
                    setTimeout(() => btn.innerHTML = '🔗', 2000);
                    return;
                }

                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            });
        });
    });
}

// ===== PWA INSTALL PROMPT =====
let deferredPrompt;

function initPWA() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });
}

function showInstallPrompt() {
    // Don't show if already dismissed
    if (localStorage.getItem('pwa_dismissed')) return;

    const prompt = document.createElement('div');
    prompt.className = 'pwa-install-prompt';
    prompt.innerHTML = `
        <span>📱 Install app for better experience!</span>
        <button class="pwa-install-btn">Install</button>
        <button class="pwa-dismiss">×</button>
    `;
    document.body.appendChild(prompt);

    prompt.querySelector('.pwa-install-btn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                prompt.remove();
            }
            deferredPrompt = null;
        }
    });

    prompt.querySelector('.pwa-dismiss').addEventListener('click', () => {
        prompt.remove();
        localStorage.setItem('pwa_dismissed', 'true');
    });
}

// ===== WHATSAPP FLOATING BUTTON =====
function initWhatsAppButton() {
    const waNumber = '6283108409959'; // Your WhatsApp number
    const waMessage = encodeURIComponent('Halo Angga! Saya tertarik untuk berdiskusi dengan Anda.');

    const waFloat = document.createElement('a');
    waFloat.className = 'whatsapp-float';
    waFloat.href = `https://wa.me/${waNumber}?text=${waMessage}`;
    waFloat.target = '_blank';
    waFloat.innerHTML = `
        💬
        <span class="tooltip">Chat via WhatsApp</span>
    `;
    document.body.appendChild(waFloat);
}

// ===== INITIALIZE ALL ADVANCED FEATURES =====
document.addEventListener('DOMContentLoaded', function () {
    initScrollProgress();
    initThemeToggle();
    initCustomCursor();
    initLightbox();
    initLazyLoading();
    initShareButtons();
    initPWA();
    initWhatsAppButton();
});

// Export confetti function for use in form submission
window.triggerConfetti = triggerConfetti;
