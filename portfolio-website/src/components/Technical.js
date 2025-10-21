const Technical = () => {
    const technologies = [
        { name: 'Python', logo: 'path/to/python-logo.png' },
        { name: 'HADA', logo: 'path/to/hada-logo.png' },
        { name: 'SOLIDWORKS', logo: 'path/to/solidworks-logo.png' },
        { name: 'Git', logo: 'path/to/git-logo.png' },
        { name: 'HTML', logo: 'path/to/html-logo.png' },
        { name: 'CSS', logo: 'path/to/css-logo.png' },
        { name: 'JavaScript', logo: 'path/to/javascript-logo.png' },
        { name: 'ADA', logo: 'path/to/ada-logo.png' },
    ];

    return (
        <section className="technical-highlights">
            <h2>Technical Highlights</h2>
            <div className="technologies">
                {technologies.map((tech, index) => (
                    <div key={index} className="technology">
                        <img src={tech.logo} alt={`${tech.name} logo`} />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technical;