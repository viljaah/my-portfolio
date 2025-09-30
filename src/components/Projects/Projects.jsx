import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-title-wrapper">
        <h2 className="projects-title">Projects</h2>
      </div>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            projectUrl={project.projectUrl}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
