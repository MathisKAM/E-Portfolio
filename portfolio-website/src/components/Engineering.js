import React from 'react';

const Engineering = () => {
    const courses = [
        {
            title: 'Programmation',
            description: 'Introduction to programming concepts and languages.'
        },
        {
            title: 'Mathématiques appliquées',
            description: 'Applied mathematics for engineering problems.'
        },
        {
            title: 'Data & IA',
            description: 'Fundamentals of data science and artificial intelligence.'
        },
        {
            title: 'Modélisation & Simulation',
            description: 'Techniques for modeling and simulating real-world systems.'
        }
    ];

    return (
        <section id="engineering">
            <h2>Engineering Courses</h2>
            <div className="courses-container">
                {courses.map((course, index) => (
                    <div key={index} className="course-block">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Engineering;