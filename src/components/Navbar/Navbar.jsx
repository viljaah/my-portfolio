import { useState, useEffect } from "react";
import "./Navbar.css";
import linkedinIcon from "../../assets/icons/linked-in-icon.svg";
import emailIcon from "../../assets/icons/mail-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-name">Vilja Henriksen</div>
          <div className="availability-status">
            <span className={`status-indicator ${isAvailable ? 'available' : 'unavailable'}`}></span>
            <span className="status-text">
              {isAvailable ? 'Available For Work' : 'Not Available'}
            </span>
          </div>
        </div>
        <ul className="nav-menu">
          {/* <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li> */}
          <li className="nav-item">
            <a
              href="#skills"
              className="nav-link"
              onClick={(e) => scrollToSection(e, "skills")}>
              Technologies
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => scrollToSection(e, "projects")}>
              Projects
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
          </li> */}
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1UqVOUyagGbeYU7E8eK0LMOZpdceGINM2/view?usp=sharing"
              target="_blank"
              className="nav-link">
              CV
            </a>
          </li>

          <li className="nav-separator">|</li>

          <li className="nav-item">
            <a href="mailto:vilja.a.hen@gmail.com" className="nav-icon-link">
                <img src={emailIcon} alt="E-mail icon" className="nav-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/vilja-alexandra-henriksen-131274359/" target="_blank" className="nav-icon-link">
                <img src={linkedinIcon} alt="LinkedIn icon" className="nav-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/viljaah" target="_blank" className="nav-icon-link">
                <img src={githubIcon} alt="Github icon" className="nav-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
