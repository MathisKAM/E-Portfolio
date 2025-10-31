/* 
 * EFFETS VISUELS MODERNES - JAVASCRIPT
 * Gestion du curseur, parallax, particules, typing, et autres animations
 */

class ModernEffects {
    constructor() {
        this.cursor = null;
        this.cursorTrail = null;
        this.particles = [];
        this.scrollIndicator = null;
        this.scrollToTopBtn = null;
        this.init();
    }

    init() {
        this.createScrollIndicator();
        this.createScrollToTopButton();
        // this.createCustomCursor(); // DÉSACTIVÉ - Curseur par défaut du navigateur
        this.createParticles();
        this.initParallax();
        this.initTypingEffect();
        this.initTiltCards();
        this.initEnhancedAnimations();
        this.initScrollTracking();
        this.addRippleEffects();
    }

    // ===== CURSEUR PERSONNALISÉ DÉSACTIVÉ =====
    createCustomCursor() {
        // DÉSACTIVÉ - Le site utilise maintenant le curseur par défaut du navigateur
        return;
    }

    // Méthode pour réappliquer les événements de curseur - DÉSACTIVÉE
    refreshCursorEvents() {
        // DÉSACTIVÉ - Curseur par défaut du navigateur utilisé
        return;
    }
    
    // Handlers pour curseur personnalisé - DÉSACTIVÉS
    handleCursorEnter() {
        // DÉSACTIVÉ
        return;
    }
    
    handleCursorLeave() {
        // DÉSACTIVÉ
        return;
    }

    // ===== SYSTÈME DE PARTICULES =====
    createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        document.body.appendChild(particlesContainer);

        // Créer 15 particules
        for (let i = 0; i < 15; i++) {
            this.createParticle(particlesContainer);
        }

        // Recréer les particules périodiquement
        setInterval(() => {
            if (this.particles.length < 15) {
                this.createParticle(particlesContainer);
            }
        }, 2000);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Taille aléatoire
        const size = Math.random() * 6 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Position horizontale aléatoire
        particle.style.left = Math.random() * 100 + '%';
        
        // Durée d'animation aléatoire
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        
        container.appendChild(particle);
        this.particles.push(particle);

        // Supprimer après animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                this.particles = this.particles.filter(p => p !== particle);
            }
        }, duration * 1000);
    }

    // ===== EFFET PARALLAX =====
    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax pour la section welcome
            const welcomeSection = document.querySelector('.welcome-section');
            if (welcomeSection) {
                welcomeSection.style.transform = `translateY(${rate}px)`;
            }

            // Parallax pour les éléments de background
            document.querySelectorAll('.parallax-element').forEach((el, index) => {
                const speed = (index + 1) * 0.1;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // ===== EFFET TYPING =====
    initTypingEffect() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    if (!element.classList.contains('typed')) {
                        this.typeText(element);
                        element.classList.add('typed');
                    }
                }
            });
        });

        // Observer le titre principal
        setTimeout(() => {
            const mainTitle = document.querySelector('.welcome-text h1');
            if (mainTitle) {
                mainTitle.classList.add('typing-text');
                observer.observe(mainTitle);
            }
        }, 100);
    }

    typeText(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Retirer l'effet après l'animation
                setTimeout(() => {
                    element.style.width = 'auto';
                    element.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }

    // ===== CARTES TILT 3D =====
    initTiltCards() {
        if (window.innerWidth <= 768) return; // Pas sur mobile

        document.querySelectorAll('.course-block, .project-block, .activity').forEach(card => {
            card.classList.add('tilt-card');
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    // ===== ANIMATIONS AMÉLIORÉES =====
    initEnhancedAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Ajouter les classes d'animation selon le type
                    if (element.classList.contains('slide-in-left')) {
                        element.classList.add('visible');
                    } else if (element.classList.contains('slide-in-right')) {
                        element.classList.add('visible');
                    } else if (element.classList.contains('fade-in-up')) {
                        element.classList.add('visible');
                    }

                    // Animer les enfants avec délai
                    const children = element.querySelectorAll('.course-block, .technology, .activity, .project-block');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible', 'fade-in-up');
                        }, index * 150);
                    });
                }
            });
        }, observerOptions);

        // Observer les sections après le rendu
        setTimeout(() => {
            document.querySelectorAll('section').forEach((section, index) => {
                // Alterner les animations d'entrée
                if (index % 2 === 0) {
                    section.classList.add('slide-in-left');
                } else {
                    section.classList.add('slide-in-right');
                }
                observer.observe(section);
            });
        }, 500);
    }

    // ===== MÉTHODES UTILITAIRES =====
    addGlowEffect(selector) {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('neon-button');
        });
    }

    addGlassmorphism(selector) {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('glass-card');
        });
    }

    addAnimatedGradient(selector) {
        // Fonction désactivée pour maintenir un fond stable
        // document.querySelectorAll(selector).forEach(el => {
        //     el.classList.add('animated-gradient');
        // });
    }

    // ===== CLEANUP =====
    destroy() {
        if (this.cursor) {
            this.cursor.remove();
        }
        if (this.cursorTrail) {
            this.cursorTrail.remove();
        }
        
        const particlesContainer = document.querySelector('.particles-container');
        if (particlesContainer) {
            particlesContainer.remove();
        }
        
        if (this.scrollIndicator) {
            this.scrollIndicator.remove();
        }
        
        if (this.scrollToTopBtn) {
            this.scrollToTopBtn.remove();
        }
    }

    // ===== INDICATEUR DE SCROLL =====
    createScrollIndicator() {
        this.scrollIndicator = document.createElement('div');
        this.scrollIndicator.className = 'scroll-indicator';
        this.scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
        document.body.appendChild(this.scrollIndicator);
    }

    // ===== BOUTON SCROLL TO TOP =====
    createScrollToTopButton() {
        this.scrollToTopBtn = document.createElement('button');
        this.scrollToTopBtn.className = 'scroll-to-top';
        this.scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        this.scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(this.scrollToTopBtn);
    }

    // ===== SUIVI DU SCROLL =====
    initScrollTracking() {
        window.addEventListener('scroll', () => {
            // Mise à jour de l'indicateur de progression
            const scrolled = window.pageYOffset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxScroll) * 100;
            
            const progressBar = document.querySelector('.scroll-progress');
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }

            // Affichage/masquage du bouton scroll to top
            if (this.scrollToTopBtn) {
                if (scrolled > 500) {
                    this.scrollToTopBtn.classList.add('visible');
                } else {
                    this.scrollToTopBtn.classList.remove('visible');
                }
            }
        });
    }

    // ===== EFFETS RIPPLE =====
    addRippleEffects() {
        const rippleElements = document.querySelectorAll('.cv-button, .project-button, .lang-btn');
        rippleElements.forEach(element => {
            element.classList.add('ripple-effect');
        });
    }
}

// ===== EFFET DE MOUSE FOLLOW POUR LES ÉLÉMENTS =====
class MouseFollowEffect {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);
        this.options = {
            strength: options.strength || 0.1,
            smoothness: options.smoothness || 0.2,
            ...options
        };
        this.init();
    }

    init() {
        this.elements.forEach(element => {
            let targetX = 0;
            let targetY = 0;
            let currentX = 0;
            let currentY = 0;

            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                targetX = (e.clientX - centerX) * this.options.strength;
                targetY = (e.clientY - centerY) * this.options.strength;
            });

            element.addEventListener('mouseleave', () => {
                targetX = 0;
                targetY = 0;
            });

            // Animation fluide
            const animate = () => {
                currentX += (targetX - currentX) * this.options.smoothness;
                currentY += (targetY - currentY) * this.options.smoothness;
                
                element.style.transform = `translate(${currentX}px, ${currentY}px)`;
                requestAnimationFrame(animate);
            };
            animate();
        });
    }
}

// ===== AUTO-INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Attendre que le contenu soit rendu
    setTimeout(() => {
        window.modernEffects = new ModernEffects();
        
        // Ajouter des effets spécifiques (sans dégradé animé)
        window.modernEffects.addGlowEffect('.cv-button, .project-button');
        // window.modernEffects.addAnimatedGradient('.welcome-section'); // Supprimé pour fond stable
        
        // Mouse follow sur les icônes
        new MouseFollowEffect('.tech-icon, .activity-icon, .course-icon', {
            strength: 0.15,
            smoothness: 0.3
        });
        
    }, 1000);
});

// ===== EXPORT POUR RÉUTILISATION =====
window.ModernEffects = ModernEffects;
window.MouseFollowEffect = MouseFollowEffect;