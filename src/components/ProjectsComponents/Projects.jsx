import React from 'react'
import '../../componentstyles/HomeComponentStyles/Projects.css'
import projectsData from '../../projects.json';
import { Cloudinary } from "@cloudinary/url-gen";
import '../../componentstyles/ProjectsComponentStyles/Projectsmain.css'

export default function Projects() {

    const cld = new Cloudinary({ cloud: { cloudName: 'doqbnfais' } });
    return (
        <div className='pr-projects-section'>

            <div className="pr-projects-section-header">
                <h2>My work</h2>
            </div>

            <div className="pr-projects-section-paragraph-hook">

                <p>
                    Things I have built and can build for you too.
                </p>

            </div>

            <div className="pr-project-cards-section">

                <div className='pr-project-cards'>
                    {projectsData.projects.map((project) => (
                        <a target='_blank' href={project.link}>
                            <div className="pr-project-card" key={project.id}>
                                <img src={project.image} alt={project.title + " screenshot"} />
                                <div className="pr-project-card-text">
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