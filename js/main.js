/* ========================================
   PERSONAL PORTFOLIO - JAVASCRIPT
   Dynamic Features & Interactivity
======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
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

/* ===== PARTICLE BACKGROUND ===== */
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position and animation
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random color
        const colors = ['#00d4ff', '#00ff88', '#8b5cf6', '#ec4899'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

/* ===== CURSOR GLOW EFFECT ===== */
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;
    
    // Only on desktop
    if (window.innerWidth <= 768) {
        cursorGlow.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
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
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateInput(nameInput);
        const isEmailValid = validateInput(emailInput, emailPattern);
        const isMessageValid = validateInput(messageInput);
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Simulate form submission
            const submitBtn = form.querySelector('.form-submit');
            submitBtn.innerHTML = '<span class="spinner"></span> Mengirim...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                form.style.display = 'none';
                successMessage?.classList.add('show');
                
                // Reset form
                form.reset();
                submitBtn.innerHTML = 'Kirim Pesan';
                submitBtn.disabled = false;
                
                // Hide success after delay
                setTimeout(() => {
                    successMessage?.classList.remove('show');
                    form.style.display = 'block';
                }, 5000);
            }, 1500);
        }
    });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
