import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { projectsData } from "../../data/projectsData";
import NotFound from "../NotFound/NotFound";
import githubIcon from "../../assets/icons/github-icon.svg";
import globeIcon from "../../assets/icons/globe-icon.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowTopRightIcon from "../../assets/icons/arrow-top-right.svg";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { projectUrl } = useParams();
  const project = projectsData.find(p => p.projectUrl === projectUrl);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <NotFound />;
  }

  const images = project.images || [project.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <div className="project-detail-container">
        <Link to="/" className="back-button">
          <img src={arrowLeftIcon} alt="Back to home" className="back-icon" />
          Back to Home
        </Link>
        
        <div className="project-detail-content">
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-description">{project.fullDescription}</p>

            <div className="project-detail-image-container">
              {images.length > 1 && (
                <button onClick={prevImage} className="carousel-button prev-button">
                  ‹
                </button>
              )}
              <img 
                src={images[currentImageIndex]} 
                alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
                className="project-detail-image" 
              />
              {images.length > 1 && (
                <button onClick={nextImage} className="carousel-button next-button">
                  ›
                </button>
              )}
              {images.length > 1 && (
                <div className="carousel-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="project-technologies-section">
              <h3>Technologies Used</h3>
              <ul className="project-detail-technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="technology-tag">{tech}</li>
                ))}
              </ul>
            </div>

            {project.contributors && (
              <div className="project-contributors-section">
                <h3>Contributors</h3>
                <ul className="project-contributors">
                  {project.contributors.map((contributor, index) => (
                    <li key={index}>
                      <a href={contributor.link} target="_blank">
                        {contributor.name}
                        <img src={arrowTopRightIcon} alt="External link" className="external-link-icon" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-links-section">
              <h3>Github code and live site</h3>
              <div className="project-links">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    className="project-link-item"
                  >
                    <span className="link-text">View on GitHub</span>
                    <img src={globeIcon} alt="Live site" className="link-icon" />
                  </a>
                )}
                {project.liveUrl ? (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    className="project-link-item"
                  >
                    <span className="link-text">View Live Project</span>
                    <img src={githubIcon} alt="GitHub" className="link-icon" />
                  </a>
                ) : (
                  <p>Live site not available</p>
                )}
              </div>
            </div>

            {project.process && (
              <div className="project-process-section">
                <h3>Process</h3>
                {project.process.map((paragraph, index) => (
                  <p key={index} className="process-text">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default ProjectDetail;