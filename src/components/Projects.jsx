import React from 'react'
import '../componentstyles/Projects.css'
import projectsData from '../projects.json';
import { Cloudinary } from "@cloudinary/url-gen";

export default function Projects() {

    const cld = new Cloudinary({ cloud: { cloudName: 'doqbnfais' } });
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
                        <a href={project.link}>
                            <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.title + " screenshot"} />
                            <div className="project-card-text">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>

            </div>

        </div>
    )
}