import React from 'react';
import './Welcome.css'; // Assuming you have a separate CSS file for Welcome component styles

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcome-content">
                <img src="/assets/images/profile/your-profile-image.jpg" alt="Mathis KAM" className="profile-image" />
                <h1>Mathis KAM</h1>
                <h2>Futur ingénieur en Sciences du Numérique, NSET Toulouse</h2>
                <a href="/assets/documents/cv.pdf" className="cv-button">Mon CV</a>
            </div>
        </section>
    );
};

export default Welcome;