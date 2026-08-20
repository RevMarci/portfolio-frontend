import React from 'react';
import '../styles/Experience.css';

const Experience = ({ id, experiences }) => {
    return (
        <div id={id} className="section experience">
            <h2 className="section-title">Tapasztalat</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3 className="job-title">{exp.title}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="duration">{exp.duration}</p>
                        <p className="description">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
