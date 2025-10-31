function translate(key, lang) {
    const translations = {
        en: {
            welcome: "Welcome",
            engineering: "Engineering Courses",
            mobility: "International Mobility",
            sustainability: "Sustainability",
            activities: "Activities",
            career: "Career",
            projects: "Projects",
            contact: "Contact",
            cv: "Download CV"
        },
        fr: {
            welcome: "Bienvenue",
            engineering: "Cours d'ingénierie",
            mobility: "Mobilité internationale",
            sustainability: "Durabilité",
            activities: "Activités",
            career: "Carrière",
            projects: "Projets",
            contact: "Contact",
            cv: "Télécharger le CV"
        }
    };

    return translations[lang][key] || key;
}

export { translate };