import React from "react";
import "./HomeComponentStyles/Projects.css";
import projectsData from "../public/projects.json";

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <h2>My work</h2>
      </div>

      <div className="projects-section-paragraph-hook">
        <p>Things I have built and can build for you too.</p>
      </div>

      <div className="project-cards-section">
        <div className="project-cards">
          {projectsData.projects.map((project) => (
            <a target="_blank" href={project.link}>
              <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.title + " screenshot"} />
                <div className="project-card-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
