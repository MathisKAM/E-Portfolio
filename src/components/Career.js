import React from 'react';

const Career = () => {
    return (
        <section id="career">
            <div className="career-block">
                <h2>CV</h2>
                <a href="/assets/documents/CV.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
                    Télécharger mon CV
                </a>
            </div>
            <div className="career-block">
                <h2>Ambitions</h2>
                <p>
                    En tant que futur ingénieur en Sciences du Numérique, je vise à contribuer à des projets innovants
                    qui allient technologie et durabilité. Mon objectif est de travailler dans un environnement dynamique
                    où je peux continuer à apprendre et à me développer professionnellement.
                </p>
            </div>
        </section>
    );
};

export default Career;