import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <ProjectCard 
          imageUrl="/images/duck-toller.webp"
          title="Project One" 
          description="This is a description of Project One."
          technologies={['React', 'CSS', 'JavaScript']} 
          projectUrl="https://example.com/project-one" 
        />
        <ProjectCard 
          imageUrl="/images/border-collie.jpg"
          title="Project One" 
          description="This is a description of Project One."
          technologies={['React', 'CSS', 'JavaScript']} 
          projectUrl="https://example.com/project-one" 
        />
        <ProjectCard 
          imageUrl="/images/jakt-cocker.avif"
          title="Project One" 
          description="This is a description of Project One."
          technologies={['React', 'CSS', 'JavaScript']} 
          projectUrl="https://example.com/project-one" 
        />
      </div>
    </section>
  );
}

export default Projects;
