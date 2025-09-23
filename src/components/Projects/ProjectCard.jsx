import "./ProjectCard.css";

function ProjectCard({ imageUrl, title, description, technologies, projectUrl }) {
  return (
    <div className="project-card">
      {imageUrl && (
        <img src={imageUrl} alt={`${title} image`} className="project-image" />
      )}
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
      {technologies && (
        <ul className="project-technologies">
          {technologies.map((tech, index) => (
            <li key={index} className="technology-item">{tech}</li>
          ))}
        </ul>
      )}
      {projectUrl && (
        <a href={projectUrl} className="project-link">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
