import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-block">
                <h3>TIPE</h3>
                <p>Description of the TIPE project.</p>
                <a href="/path/to/tipe.pdf" target="_blank" rel="noopener noreferrer">View TIPE Project</a>
            </div>
            <div className="project-block">
                <h3>Astre Launch</h3>
                <p>Description of the Astre Launch project.</p>
                <a href="#astre-launch-details">Learn more about Astre Launch</a>
            </div>
        </section>
    );
};

export default Projects;