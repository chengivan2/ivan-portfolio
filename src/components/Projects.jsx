import React from 'react'
import '../componentstyles/Projects.css'
import projectsData from '../projects.json';

export default function Projects() {
    return (
        <div className='projects-section'>

            <div className="projects-section-header">
                <h2>My work</h2>
            </div>

            <div className="projects-section-paragraph-hook">

                <p>
                    Things I have built and can build for you too.
                </p>

            </div>

            <div className="project-cards">

                <div>
                    {projectsData.projects.map((project) => (
                        <div key={project.id}>
                            <h2>{project.title}</h2>
                            <img src={project.image} alt={project.title} />
                            <p>{project.description}</p>
                            <a href={project.link}>View Project</a>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}