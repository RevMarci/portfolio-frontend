import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = ({ id, projects }) => {
    // első projekt legyen alapból aktív
    const [activeProject, setActiveProject] = useState(projects[0] || null);

    return (
        <div id={id} className="section projects">
            <h2 className="section-title">Projektek</h2>
            <div className="projects-layout">
                <ProjectList projects={projects} activeProject={activeProject} setActiveProject={setActiveProject} />
                <ProjectPreview project={activeProject} />
            </div>
        </div>
    );
};

const ProjectList = ({ projects, activeProject, setActiveProject }) => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-list-item ${activeProject === project ? 'active' : ''}`}
                    onMouseEnter={() => setActiveProject(project)}
                >
                    <h3>{project.name}</h3>
                    <div className="stack">
                        {project.stack.map((tech, i) => (
                            <span key={i} className="stack-item">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProjectPreview = ({ project }) => {
    const [visible, setVisible] = useState(true);
    const [currentProject, setCurrentProject] = useState(project);

    useEffect(() => {
        if (project && project !== currentProject) {
            setVisible(false);
            const timeout = setTimeout(() => {
                setCurrentProject(project);
                setVisible(true);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [project, currentProject]);

    if (!currentProject) return null;

    return (
        <div className={`project-preview ${visible ? 'fade-in' : 'fade-out'}`}>
            {currentProject.image && (
                <img src={currentProject.image} alt={currentProject.name} className="preview-image" />
            )}
            <h3>{currentProject.name}</h3>
            <p>{currentProject.description}</p>
            <div className="project-links">
                {currentProject.github && (
                    <a className="aButton" href={currentProject.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
                {currentProject.demo && (
                    <a className="aButton" href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default Projects;
