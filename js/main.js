// Translations
const translations = {
    fr: {
        nav: {
            welcome: 'Accueil',
            engineering: 'Formation',
            technical: 'Compétences',
            mobility: 'Mobilité',
            sustainability: 'Engagement',
            activities: "Centres d'intérêt",
            projects: 'Projets',
            contact: 'Contact'
        },
        welcome: {
            title: 'MATHIS KAM',
            subtitlePart1: "Ingénieur en Sciences du Numérique pour",
            subtitlePart2: "l'Aéronautique & le Spatial",
            viewCV: 'Voir mon CV',
            elevatorPitch: 'Elevator Pitch'
        },
        engineering: {
            title: "Formation d'ingénieur",
            courses: [
                {
                    name: 'Programming',
                    description: 'Maîtrise de C, Python, ADA, et développement logiciel.',
                    icon: 'fa-code'
                },
                {
                    name: 'Mathématiques appliquées',
                    description: 'Analyse numérique, algèbre linéaire, optimisation.',
                    icon: 'fa-calculator'
                },
                {
                    name: 'Data & IA',
                    description: 'Machine Learning, traitement de données, deep learning.',
                    icon: 'fa-brain'
                },
                {
                    name: 'Modélisation & Simulation',
                    description: 'Systèmes complexes, simulation numérique, calcul scientifique.',
                    icon: 'fa-cube'
                }
            ]
        },
        technical: {
            title: 'Compétences techniques',
            categories: [
                {
                    name: 'Programming & Development',
                    skills: [
                        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
                        { name: 'ADA', icon: 'fa-solid fa-code', color: '#02f88c' },
                        { name: 'SQL', icon: 'fa-solid fa-database', color: '#f29111' },
                        { name: 'HTML', icon: 'fa-brands fa-html5', color: '#e34f26' },
                        { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
                        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
                    ]
                },
                {
                    name: 'Data & Engineering Tools',
                    skills: [
                        { name: 'NumPy', icon: 'fa-solid fa-chart-line', color: '#013243' },
                        { name: 'Pandas', icon: 'fa-solid fa-table', color: '#150458' },
                        { name: 'MATLAB', icon: 'fa-solid fa-wave-square', color: '#e16737' },
                        { name: 'Simulink', icon: 'fa-solid fa-project-diagram', color: '#0076a8' },
                        { name: 'SOLIDWORKS', icon: 'fa-solid fa-cube', color: '#FF0000' }
                    ]
                },
                {
                    name: 'Tools & Productivity',
                    skills: [
                        { name: 'Microsoft Office', icon: 'fa-brands fa-microsoft', color: '#0078d4' },
                        { name: 'GitHub', icon: 'fa-brands fa-github', color: '#333' },
                        { name: 'GitLab', icon: 'fa-brands fa-gitlab', color: '#fc6d26' },
                        { name: 'VS Code', icon: 'fa-solid fa-code', color: '#007acc' },
                        { name: 'LaTeX', icon: 'fa-solid fa-file-code', color: '#008080' }
                    ]
                },
                {
                    name: 'Operating Systems',
                    skills: [
                        { name: 'Windows', icon: 'fa-brands fa-windows', color: '#0078d6' },
                        { name: 'Linux', icon: 'fa-brands fa-linux', color: '#fcc624' },
                        { name: 'MacOS', icon: 'fa-brands fa-apple', color: '#000000' }
                    ]
                }
            ]
        },
        mobility: {
            title: 'Mobilité internationale',
            text: 'Destinations que je souhaite viser pour mes futures expériences de mobilité internationale.',
            destinations: [
                {
                    name: 'Polytechnique Montréal',
                    country: 'Canada 🇨🇦',
                    logo: 'assets/Polytech Montreal.png',
                    tagline: 'Destination cible pour une future mobilité internationale.'
                },
                {
                    name: 'Georgia Tech',
                    country: 'États-Unis 🇺🇸',
                    logo: 'https://brand.gatech.edu/sites/default/files/inline-images/GeorgiaTech_RGB.png',
                    tagline: 'Destination cible pour une future mobilité internationale.'
                },
                {
                    name: 'Cranfield University',
                    country: 'Royaume-Uni 🇬🇧',
                    logo: 'assets/Crandfield.webp',
                    tagline: 'Destination cible pour une future mobilité internationale.'
                }
            ]
        },
        sustainability: {
            title: 'Engagement civique',
            text: 'Participation active dans des projets associatifs et actions citoyennes pour contribuer à la société.',
            activities: [
                {
                    name: 'Marche Verte',
                    location: 'Toulouse',
                    description: 'Nettoyage des rues pour préserver l\'environnement urbain',
                    icon: 'fa-broom',
                    color: '#10b981'
                },
                {
                    name: 'Festival Futur Proche',
                    location: 'Toulouse',
                    description: 'Sensibilisation aux violences et au climat',
                    icon: 'fa-earth-americas',
                    color: '#3b82f6'
                },
                {
                    name: 'Le Procès de King Kong',
                    location: 'Toulouse',
                    description: 'Pièce de théâtre sur les discriminations et violences',
                    icon: 'fa-masks-theater',
                    color: '#8b5cf6'
                }
            ]
        },
        activities: {
            title: "Centres d'intérêt",
            list: [
                { name: 'Musculation', icon: 'fa-dumbbell' },
                { name: 'Football', icon: 'fa-futbol' },
                { name: 'Tennis', icon: 'fa-solid fa-baseball' },
                { name: 'Gaming', icon: 'fa-gamepad' },
                { name: 'Spatial', icon: 'fa-rocket' },
                { name: 'IA', icon: 'fa-brain' }
            ]
        },
        projects: {
            title: 'Projets',
            list: [
                {
                    title: 'TIPE',
                    subtitle: 'Simulation numérique',
                    description: 'Projet de recherche sur l\'isolation thermique par matériaux à changement de phase (MCP). Modélisation thermique et simulations numériques avec Python.',
                    pdf: 'TIPE_KAM_Mathis.pdf',
                    button: 'Voir le PDF',
                    logo: 'assets/Logo ISOLATION.jpeg'
                },
                {
                    title: 'Astre Launch',
                    subtitle: 'Association étudiante',
                    description: 'Projet associatif de lancement de fusée expérimentale. Conception et développement de systèmes aérospatiaux pour l\'activité spatiale étudiante.',
                    link: 'https://astre-toulouse.fr/',
                    button: 'Visiter le site',
                    logo: 'assets/Logo ASTRE.png'
                }
            ]
        },
        contact: {
            title: 'Contact'
        }
    },
    en: {
        nav: {
            welcome: 'Home',
            engineering: 'Engineering',
            technical: 'Skills',
            mobility: 'Mobility',
            sustainability: 'Engagement',
            activities: 'Activities',
            projects: 'Projects',
            contact: 'Contact'
        },
        welcome: {
            title: 'MATHIS KAM',
            subtitlePart1: 'Digital Sciences Engineer for',
            subtitlePart2: 'Aeronautics & Space',
            viewCV: 'View My CV',
            elevatorPitch: 'Elevator Pitch'
        },
        engineering: {
            title: 'Engineering Courses',
            courses: [
                {
                    name: 'Programming',
                    description: 'Mastery of C, Python, ADA, and software development.',
                    icon: 'fa-code'
                },
                {
                    name: 'Applied Mathematics',
                    description: 'Numerical analysis, linear algebra, optimization.',
                    icon: 'fa-calculator'
                },
                {
                    name: 'Data & AI',
                    description: 'Machine Learning, data processing, deep learning.',
                    icon: 'fa-brain'
                },
                {
                    name: 'Modeling & Simulation',
                    description: 'Complex systems, numerical simulation, scientific computing.',
                    icon: 'fa-cube'
                }
            ]
        },
        technical: {
            title: 'Technical Highlights',
            categories: [
                {
                    name: 'Programming & Development',
                    skills: [
                        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
                        { name: 'ADA', icon: 'fa-solid fa-code', color: '#02f88c' },
                        { name: 'SQL', icon: 'fa-solid fa-database', color: '#f29111' },
                        { name: 'HTML', icon: 'fa-brands fa-html5', color: '#e34f26' },
                        { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
                        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
                    ]
                },
                {
                    name: 'Data & Engineering Tools',
                    skills: [
                        { name: 'NumPy', icon: 'fa-solid fa-chart-line', color: '#013243' },
                        { name: 'Pandas', icon: 'fa-solid fa-table', color: '#150458' },
                        { name: 'MATLAB', icon: 'fa-solid fa-wave-square', color: '#e16737' },
                        { name: 'Simulink', icon: 'fa-solid fa-project-diagram', color: '#0076a8' },
                        { name: 'SOLIDWORKS', icon: 'fa-solid fa-cube', color: '#FF0000' }
                    ]
                },
                {
                    name: 'Tools & Productivity',
                    skills: [
                        { name: 'Microsoft Office', icon: 'fa-brands fa-microsoft', color: '#0078d4' },
                        { name: 'GitHub', icon: 'fa-brands fa-github', color: '#333' },
                        { name: 'GitLab', icon: 'fa-brands fa-gitlab', color: '#fc6d26' },
                        { name: 'VS Code', icon: 'fa-solid fa-code', color: '#007acc' },
                        { name: 'LaTeX', icon: 'fa-solid fa-file-code', color: '#008080' }
                    ]
                },
                {
                    name: 'Operating Systems',
                    skills: [
                        { name: 'Windows', icon: 'fa-brands fa-windows', color: '#0078d6' },
                        { name: 'Linux', icon: 'fa-brands fa-linux', color: '#fcc624' },
                        { name: 'MacOS', icon: 'fa-brands fa-apple', color: '#000000' }
                    ]
                }
            ]
        },
        mobility: {
            title: 'International Mobility',
            text: 'Target destinations for future international mobility experiences.',
            destinations: [
                {
                    name: 'Polytechnique Montréal',
                    country: 'Canada 🇨🇦',
                    logo: 'assets/Polytech Montreal.png',
                    tagline: 'Target destination for future international mobility.'
                },
                {
                    name: 'Georgia Tech',
                    country: 'United States 🇺🇸',
                    logo: 'https://brand.gatech.edu/sites/default/files/inline-images/GeorgiaTech_RGB.png',
                    tagline: 'Target destination for future international mobility.'
                },
                {
                    name: 'Cranfield University',
                    country: 'United Kingdom 🇬🇧',
                    logo: 'assets/Crandfield.webp',
                    tagline: 'Target destination for future international mobility.'
                }
            ]
        },
        sustainability: {
            title: 'Civic Engagement',
            text: 'Active participation in community projects and civic actions to contribute to society.',
            activities: [
                {
                    name: 'Green Walk',
                    location: 'Toulouse',
                    description: 'Street cleaning to preserve the urban environment',
                    icon: 'fa-broom',
                    color: '#10b981'
                },
                {
                    name: 'Futur Proche Festival',
                    location: 'Toulouse',
                    description: 'Awareness on violence and climate issues',
                    icon: 'fa-earth-americas',
                    color: '#3b82f6'
                },
                {
                    name: 'The Trial of King Kong',
                    location: 'Toulouse',
                    description: 'Theater play about discrimination and violence',
                    icon: 'fa-masks-theater',
                    color: '#8b5cf6'
                }
            ]
        },
        activities: {
            title: 'Activities',
            list: [
                { name: 'Strength Training', icon: 'fa-dumbbell' },
                { name: 'Football', icon: 'fa-futbol' },
                { name: 'Tennis', icon: 'fa-solid fa-baseball' },
                { name: 'Gaming', icon: 'fa-gamepad' },
                { name: 'Space', icon: 'fa-rocket' },
                { name: 'AI', icon: 'fa-brain' }
            ]
        },
        projects: {
            title: 'Projects',
            list: [
                {
                    title: 'TIPE',
                    subtitle: 'Personal Supervised Initiative Work',
                    description: 'Research project on thermal insulation using phase change materials (PCM). Thermal modeling and numerical simulations with Python.',
                    pdf: 'TIPE_KAM_Mathis.pdf',
                    button: 'View PDF',
                    logo: 'assets/Logo ISOLATION.jpeg'
                },
                {
                    title: 'Astre Launch',
                    subtitle: 'Student Association',
                    description: 'Experimental rocket launch association project. Design and development of aerospace systems for student space activities.',
                    link: 'https://astre-toulouse.fr/',
                    button: 'Visit Website',
                    logo: 'assets/Logo ASTRE.png'
                }
            ]
        },
        contact: {
            title: 'Contact'
        }
    }
};

let currentLang = 'en'; // Démarrer en anglais par défaut

// Header Component
function Header() {
    const t = translations[currentLang].nav;
    return `
        <header id="main-header">
            <div class="header-left">
                <img src="./assets/images/PHOTO_CV_CLAIR.png" alt="MATHIS KAM" class="header-photo hover-grow" id="header-photo">
                <span class="header-name">MATHIS KAM</span>
            </div>
            <nav>
                <a href="#welcome" class="enhanced-hover">${t.welcome}</a>
                <a href="#engineering" class="enhanced-hover">${t.engineering}</a>
                <a href="#mobility" class="enhanced-hover">${t.mobility}</a>
                <a href="#sustainability" class="enhanced-hover">${t.sustainability}</a>
                <a href="#activities" class="enhanced-hover">${t.activities}</a>
                <a href="#projects" class="enhanced-hover">${t.projects}</a>
                <a href="#contact" class="enhanced-hover">${t.contact}</a>
            </nav>
            <div class="header-right">
                <div class="lang-selector">
                    <button class="lang-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                    <div class="lang-divider"></div>
                    <button class="lang-option ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
                </div>
            </div>
        </header>
    `;
}

// Welcome Component - Style propre sans effets néon
function Welcome() {
    const t = translations[currentLang].welcome;
    const cvFile = currentLang === 'fr' ? 'CV MATHIS KAM FR.pdf' : 'CV MATHIS KAM EN.pdf';
    return `
        <section id="welcome" class="welcome-section parallax-element">
            <div class="welcome-content" data-aos="fade-up" data-aos-duration="1000">
                <div class="welcome-text">
                    <h1>${t.title}</h1>
                    <p class="subtitle" data-aos="fade-up" data-aos-delay="300">
                        <span class="subtitle-normal">${t.subtitlePart1}</span><br>
                        <span class="subtitle-glow">${t.subtitlePart2}</span>
                    </p>
                    <div class="welcome-buttons" data-aos="fade-up" data-aos-delay="600">
                        <a href="./assets/${cvFile}" target="_blank" class="cv-button enhanced-hover">
                            <i class="fas fa-file-pdf"></i> ${t.viewCV}
                        </a>
                        <!-- Replaced direct video file link with an embedded YouTube player (opens modal) -->
                        <button id="open-pitch" class="pitch-button enhanced-hover" type="button" aria-haspopup="dialog" aria-controls="video-modal">
                            <i class="fas fa-video"></i> ${t.elevatorPitch}
                        </button>
                    </div>
                </div>
                <div class="profile-container" data-aos="fade-left" data-aos-delay="400">
                    <div class="profile-glow"></div>
                    <img src="./assets/images/PHOTO_CV_CLAIR.png" alt="MATHIS KAM" class="profile-image hover-grow">
                </div>
            </div>
        </section>
    `;
}

// Engineering Component
function Engineering() {
    const t = translations[currentLang].engineering;
    return `
        <section id="engineering" class="section" data-aos="fade-up">
            <h2 data-aos="fade-up">${t.title}</h2>
            <div class="courses">
                ${t.courses.map((course, index) => `
                    <div class="course-block glass-card enhanced-hover tilt-card" data-aos="flip-left" data-aos-delay="${index * 150}">
                        <div class="course-icon">
                            <i class="fa-solid ${course.icon}"></i>
                        </div>
                        <h3>${course.name}</h3>
                        <p>${course.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Technical Component - Nouvelle structure par catégories
function Technical() {
    const t = translations[currentLang].technical;
    return `
        <section id="technical" class="section" data-aos="fade-up">
            <h2 data-aos="zoom-in">${t.title}</h2>
            <div class="technical-categories">
                ${t.categories.map((category, categoryIndex) => `
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="${categoryIndex * 200}">
                        <h3 class="category-title">${category.name}</h3>
                        <div class="skills-grid">
                            ${category.skills.map((skill, skillIndex) => `
                                <div class="skill-item hover-grow micro-bounce" data-aos="zoom-in" data-aos-delay="${(categoryIndex * 200) + (skillIndex * 50)}">
                                    <div class="skill-icon" style="color: ${skill.color}">
                                        <i class="${skill.icon}"></i>
                                    </div>
                                    <p class="skill-name">${skill.name}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Mobility Component
function Mobility() {
    const t = translations[currentLang].mobility;
    return `
        <section id="mobility" class="section" data-aos="fade-up">
            <h2 data-aos="fade-up">${t.title}</h2>
            <p class="section-text" data-aos="fade-up" data-aos-delay="200">${t.text}</p>
            <div class="mobility-grid">
                ${t.destinations.map((destination, index) => `
                    <div class="mobility-card" data-aos="zoom-in" data-aos-delay="${index * 150}">
                        <div class="mobility-logo">
                            <img src="${destination.logo}" alt="${destination.name} logo" onerror="this.style.display='none'">
                        </div>
                        <h3 class="mobility-name">${destination.name}</h3>
                        <p class="mobility-country">${destination.country}</p>
                        <p class="mobility-tagline">${destination.tagline}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Sustainability Component - Style propre
function Sustainability() {
    const t = translations[currentLang].sustainability;
    return `
        <section id="sustainability" class="section" data-aos="fade-up">
            <h2 data-aos="fade-up">${t.title}</h2>
            <p class="section-text" data-aos="fade-up" data-aos-delay="200">${t.text}</p>
            <div class="civic-grid">
                ${t.activities.map((activity, index) => `
                    <div class="civic-card" data-aos="fade-up" data-aos-delay="${index * 150}">
                        <div class="civic-icon" style="background: ${activity.color}">
                            <i class="fa-solid ${activity.icon}"></i>
                        </div>
                        <h3 class="civic-name">${activity.name}</h3>
                        <p class="civic-location"><i class="fa-solid fa-location-dot"></i> ${activity.location}</p>
                        <p class="civic-description">${activity.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Activities Component
function Activities() {
    const t = translations[currentLang].activities;
    return `
        <section id="activities" class="section" data-aos="fade-up">
            <h2 data-aos="flip-up">${t.title}</h2>
            <div class="activities-list">
                ${t.list.map((activity, index) => `
                    <div class="activity glass-card enhanced-hover no-tilt" data-aos="bounce-in" data-aos-delay="${index * 150}">
                        <div class="activity-icon">
                            <i class="fa-solid ${activity.icon}"></i>
                        </div>
                        <p>${activity.name}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Projects Component - Style propre sans dégradés flashy
function Projects() {
    const t = translations[currentLang].projects;
    return `
        <section id="projects" class="section" data-aos="fade-up">
            <h2 data-aos="zoom-in">${t.title}</h2>
            <div class="projects-grid">
                ${t.list.map((project, index) => `
                    <div class="project-block glass-card tilt-card enhanced-hover" data-aos="flip-up" data-aos-delay="${index * 200}">
                        ${project.logo ? `<img src="${project.logo}" alt="${project.title} logo" class="project-logo">` : ''}
                        <h3>${project.title}</h3>
                        <h4>${project.subtitle}</h4>
                        <p>${project.description}</p>
                        ${project.pdf ? 
                            `<a href="assets/${project.pdf}" target="_blank" rel="noopener noreferrer" class="project-button pdf-link">${project.button}</a>` :
                            `<a href="${project.link}" class="project-button">${project.button}</a>`
                        }
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Contact Component - Style cohérent en FR et EN
function Contact() {
    const t = translations[currentLang].contact;
    const email = 'mathis.kam@etu.inp-n7.fr';
    const phone = '+33 06 03 46 18 73';
    const linkedin = 'linkedin.com/in/Mathis-Kam';
    const github = 'github.com/MathisKAM';
    
    return `
        <section id="contact" class="section contact-section">
            <h2>${t.title}</h2>
            <div class="contact-line">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <a href="#" class="email-link" data-email="${email}">${email}</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>
                </div>
                <div class="contact-item">
                    <i class="fab fa-linkedin"></i>
                    <a href="https://${linkedin}" target="_blank">LinkedIn</a>
                </div>
                <div class="contact-item">
                    <i class="fab fa-github"></i>
                    <a href="https://${github}" target="_blank">GitHub</a>
                </div>
            </div>
        </section>
    `;
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Optional: Show a brief notification
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = '✓ Copié';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    });
}

// Render function
function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${Header()}
        ${Welcome()}
        ${Engineering()}
        ${Technical()}
        ${Mobility()}
        ${Sustainability()}
        ${Activities()}
        ${Projects()}
        ${Contact()}
    `;

    // Language toggle - nouveau système propre
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newLang = option.dataset.lang;
            if (newLang !== currentLang) {
                // Nettoyer l'ancien fond spatial
                if (window.cleanupSpace3D) {
                    console.log('🧹 Nettoyage de l\'ancien fond spatial');
                    window.cleanupSpace3D();
                }
                
                currentLang = newLang;
                render();
                initScrollAnimations();
                
                // S'assurer que tous les effets visuels sont réappliqués
                setTimeout(() => {
                    harmonizeStyles(); // Réappliquer les styles
                    
                    // RÉINITIALISER LE FOND SPATIAL
                    console.log('🌌 Réinitialisation du fond spatial après changement de langue');
                    if (window.initSpace3DBackground) {
                        window.initSpace3DBackground();
                    }
                    
                    // Double refresh pour garantir la synchronisation
                    setTimeout(() => {
                        AOS.refresh();
                        
                        // Les animations d'activités sont maintenant inline, pas besoin de fonction séparée
                        console.log('🔄 Changement de langue: animations inline préservées');
                        
                        // Réappliquer les effets modernes (curseur personnalisé désactivé)
                        if (window.modernEffects) {
                            window.modernEffects.addGlowEffect('.cv-button, .project-button');
                            window.modernEffects.addGlassmorphism('.course-block, .activity, .project-block');
                            // window.modernEffects.refreshCursorEvents(); // DÉSACTIVÉ - Curseur par défaut utilisé
                        }
                        
                        // Réinitialiser le modal elevator pitch après changement de langue
                        initPitchModal();
                    }, 100);
                }, 200);
            }
        });
    });

    // Email click to copy
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.dataset.email;
            copyToClipboard(email);
        });
    });

    // PDF links - Force open in new tab
    const pdfLinks = document.querySelectorAll('.pdf-link');
    pdfLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfUrl = link.getAttribute('href');
            console.log('Opening PDF:', pdfUrl);
            window.open(pdfUrl, '_blank');
        });
    });

    // Header photo visibility on scroll - Optimized with throttle
    const headerPhoto = document.getElementById('header-photo');
    const welcomeSection = document.getElementById('welcome');
    
    let ticking = false;
    const updateHeaderPhoto = () => {
        if (welcomeSection) {
            const welcomeBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;
            if (window.scrollY > welcomeBottom - 100) {
                headerPhoto?.classList.add('visible');
            } else {
                headerPhoto?.classList.remove('visible');
            }
        }
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeaderPhoto);
            ticking = true;
        }
    }, { passive: true });

    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize AOS (Animate On Scroll) d'abord
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100,
        delay: 0
    });
    
    // PUIS harmoniser les styles APRÈS que AOS soit initialisé
    // Utiliser setTimeout pour s'assurer que le DOM est complètement rendu
    setTimeout(() => {
        harmonizeStyles();
        
        // Forcer la réapplication des styles CSS pour les animations
        setTimeout(() => {
            const activities = document.querySelectorAll('.activity');
            console.log(`🔄 Forçage des styles CSS pour ${activities.length} activités...`);
            
            activities.forEach((activity, index) => {
                const icon = activity.querySelector('.activity-icon');
                if (icon) {
                    // Forcer les styles CSS en les appliquant directement
                    icon.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    icon.style.transformOrigin = 'center center';
                    icon.style.display = 'flex';
                    icon.style.alignItems = 'center';
                    icon.style.justifyContent = 'center';
                    
                    // Forcer la classe CSS pour que les règles s'appliquent
                    activity.classList.add('css-hover-ready');
                    
                    console.log(`✅ Styles forcés pour activité ${index}: ${activity.querySelector('p')?.textContent}`);
                }
            });
            
            // Ajouter les événements hover en JavaScript pour garantir le fonctionnement
            setTimeout(() => {
                document.querySelectorAll('.activity').forEach((el, index) => {
                    const icon = el.querySelector('.activity-icon');
                    if (icon && !el.hasAttribute('data-hover-forced')) {
                        
                        el.addEventListener('mouseenter', function() {
                            const activityIcon = this.querySelector('.activity-icon');
                            if (activityIcon) {
                                activityIcon.style.transform = 'rotate(360deg) scale(1.1)';
                                console.log(`🌟 Hover IN: ${this.querySelector('p')?.textContent}`);
                            }
                        });
                        
                        el.addEventListener('mouseleave', function() {
                            const activityIcon = this.querySelector('.activity-icon');
                            if (activityIcon) {
                                activityIcon.style.transform = 'rotate(0deg) scale(1)';
                                console.log(`🌟 Hover OUT: ${this.querySelector('p')?.textContent}`);
                            }
                        });
                        
                        el.setAttribute('data-hover-forced', 'true');
                        console.log(`🎯 Événements hover ajoutés pour activité ${index}`);
                    }
                });
                
                // Observer supplémentaire : attendre que la section activities soit visible
                const activitiesSection = document.getElementById('activities');
                if (activitiesSection) {
                    const visibilityObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                console.log('👁️ Section activities visible, réapplication des animations...');
                                
                                // Re-forcer les animations quand la section devient visible
                                setTimeout(() => {
                                    document.querySelectorAll('.activity').forEach((el, index) => {
                                        const icon = el.querySelector('.activity-icon');
                                        if (icon) {
                                            // Reset et réapplication des styles
                                            icon.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                                            icon.style.transformOrigin = 'center center';
                                            icon.style.transform = 'rotate(0deg) scale(1)';
                                            
                                            console.log(`🔄 Animation réinitialisée pour activité ${index}`);
                                        }
                                    });
                                }, 100);
                                
                                visibilityObserver.disconnect(); // Une seule fois
                            }
                        });
                    }, { threshold: 0.3 });
                    
                    visibilityObserver.observe(activitiesSection);
                }
            }, 200);
            
        }, 500);
    }, 300);

    // Elevator pitch / YouTube modal binding - Init immediately
    initPitchModal();
}

// Initialize elevator pitch modal (separate function for reliability)
function initPitchModal() {
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
        const pitchBtn = document.getElementById('open-pitch');
        console.log('🎬 Initializing pitch modal, button found:', !!pitchBtn);
        
        if (pitchBtn) {
            // Check if already has listener
            if (pitchBtn.dataset.listenerAttached === 'true') {
                console.log('⚠️ Listener already attached, skipping');
                return;
            }
            
            pitchBtn.dataset.listenerAttached = 'true';
            
            pitchBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎬 Pitch button clicked!');
                
                // Remove existing modal if any
                const existingModal = document.getElementById('video-modal');
                if (existingModal) {
                    console.log('⚠️ Removing existing modal');
                    existingModal.remove();
                }

                const modal = document.createElement('div');
                modal.id = 'video-modal';
                modal.className = 'video-modal';
                // YouTube embed (responsive)
                modal.innerHTML = `
                    <div class="video-modal-inner" role="dialog" aria-modal="true" aria-label="Elevator Pitch video">
                        <button class="video-modal-close" aria-label="Close video">&times;</button>
                        <div class="video-wrapper">
                            <iframe src="https://www.youtube.com/embed/xekXB96Gb_A?rel=0&modestbranding=1&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                `;

                document.body.appendChild(modal);
                document.body.classList.add('modal-open');
                console.log('✅ Modal created and added to body');

                const closeBtn = modal.querySelector('.video-modal-close');
                const closeModal = () => {
                    console.log('🚪 Closing modal');
                    modal.remove();
                    document.body.classList.remove('modal-open');
                };

                closeBtn.onclick = closeModal;
                modal.onclick = function(e) { 
                    if (e.target === modal) closeModal(); 
                };
            };
            console.log('✅ Pitch button click listener attached');
        } else {
            console.error('❌ Pitch button not found in DOM');
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add visible class to child elements
                const children = entry.target.querySelectorAll('.course-block, .technology, .activity, .project-block, .contact-item');
                children.forEach(child => child.classList.add('visible'));
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Fonction pour harmoniser le style entre FR et EN
function harmonizeStyles() {
    console.log('🎯 Harmonisation des styles et animations...');
    
    // ===== SECTIONS PRINCIPALES =====
    document.querySelectorAll('.course-block').forEach(el => {
        if (!el.classList.contains('glass-card')) el.classList.add('glass-card');
        if (!el.classList.contains('enhanced-hover')) el.classList.add('enhanced-hover');
        
        // DÉSACTIVER tilt pour tous les grands carrés (courses/engineering)
        el.classList.remove('tilt-card');
        if (!el.classList.contains('no-tilt')) el.classList.add('no-tilt');
    });
    
    document.querySelectorAll('.activity').forEach(el => {
        if (!el.classList.contains('glass-card')) el.classList.add('glass-card');
        if (!el.classList.contains('enhanced-hover')) el.classList.add('enhanced-hover');
        
        // DÉSACTIVER tilt pour les activités (pas de 3D, seulement rotation des logos)
        el.classList.remove('tilt-card');
        if (!el.classList.contains('no-tilt')) el.classList.add('no-tilt');
        
        // Les styles CSS gèrent maintenant les animations, pas besoin de JavaScript
    });
    
    document.querySelectorAll('.project-block').forEach(el => {
        if (!el.classList.contains('glass-card')) el.classList.add('glass-card');
        if (!el.classList.contains('enhanced-hover')) el.classList.add('enhanced-hover');
        
        // DÉSACTIVER tilt pour tous les blocs de projets
        el.classList.remove('tilt-card');
        if (!el.classList.contains('no-tilt')) el.classList.add('no-tilt');
    });
    
    // ===== COMPÉTENCES TECHNIQUES - SYNCHRONISATION COMPLÈTE =====
    document.querySelectorAll('.skill-item').forEach(el => {
        // Ajouter toutes les classes nécessaires
        if (!el.classList.contains('hover-grow')) el.classList.add('hover-grow');
        if (!el.classList.contains('micro-bounce')) el.classList.add('micro-bounce');
        if (!el.classList.contains('enhanced-hover')) el.classList.add('enhanced-hover');
        
        // Forcer les attributs AOS pour garantir les animations
        if (!el.hasAttribute('data-aos')) {
            el.setAttribute('data-aos', 'zoom-in');
        }
    });
    
    document.querySelectorAll('.skill-category').forEach((el, index) => {
        if (!el.classList.contains('glass-card')) el.classList.add('glass-card');
        
        // Synchroniser les délais d'animation AOS
        if (!el.hasAttribute('data-aos')) {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', (index * 150).toString());
        }
    });
    
    // ===== ICÔNES - ANIMATIONS DE ROTATION UNIVERSELLES =====
    document.querySelectorAll('.skill-icon').forEach(el => {
        // Forcer les styles de transition pour garantir l'animation de rotation
        el.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transformOrigin = 'center center';
    });
    
    document.querySelectorAll('.activity-icon').forEach(el => {
        // Forcer les styles de transition pour garantir l'animation de rotation
        el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transformOrigin = 'center center';
        // S'assurer que l'icône peut tourner
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
    });
    
    // ===== ICÔNES FORMATION (course-block icons) =====
    document.querySelectorAll('.course-block i').forEach(el => {
        // S'assurer que les icônes de formation ont aussi des animations
        el.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transformOrigin = 'center center';
    });
    
    // ===== BOUTONS ET ÉLÉMENTS INTERACTIFS =====
    document.querySelectorAll('.cv-button, .project-button').forEach(el => {
        if (!el.classList.contains('enhanced-hover')) el.classList.add('enhanced-hover');
    });
    
    // ===== FORCE AOS REFRESH =====
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 100);
    
    console.log(`✅ Harmonisation terminée - Langue: ${currentLang}`);
    console.log(`🎯 Tilt désactivé pour tous les grands carrés`);
    console.log(`📦 Animations synchronisées, sections rendues visibles`);
}

// Initialize app
document.addEventListener('DOMContentLoaded', render);

// Optimized animations initialization
window.addEventListener('load', () => {
    // Use requestAnimationFrame for better performance instead of setTimeout
    requestAnimationFrame(() => {
        const activities = document.querySelectorAll('.activity');
        
        activities.forEach((el) => {
            const icon = el.querySelector('.activity-icon');
            
            if (icon) {
                // Pre-set styles using cssText for better performance
                icon.style.cssText = `
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transform-origin: center center;
                    transform: rotate(0deg) scale(1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                `;
                
                // Optimized event handlers with null check
                el.onmouseenter = function() {
                    const activityIcon = this.querySelector('.activity-icon');
                    if (activityIcon) {
                        activityIcon.style.transform = 'rotate(360deg) scale(1.1)';
                    }
                };
                
                el.onmouseleave = function() {
                    const activityIcon = this.querySelector('.activity-icon');
                    if (activityIcon) {
                        activityIcon.style.transform = 'rotate(0deg) scale(1)';
                    }
                };
            }
        });
    });
});
