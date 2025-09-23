import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div
          className="nav-logo">
          VH
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
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
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1mjRgmVI-pltxoylJbMXmQl_2O4_YMRz8/view?usp=sharing"
              target="_blank"
              className="nav-link">
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
