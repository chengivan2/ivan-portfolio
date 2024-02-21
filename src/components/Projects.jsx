import React from 'react'
import '../componentstyles/Projects.css'
import projectsData from '../projects.json';
import epicurianescapeImage from '../assets/images/project-images/epicurian-escape-screenshot.png'

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

            <div className="project-cards-section">

                <div className='project-cards'>
                    {projectsData.projects.map((project) => (
                        <div className="product-card" key={project.id}>
                            <img src={project.image} alt={project.title + " screenshot"} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>View Project</a>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}