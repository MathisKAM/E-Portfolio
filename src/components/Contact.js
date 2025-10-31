import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
            </div>
        </div>
    );
};

export default Contact;