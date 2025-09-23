import "./Hero.css";

function HeroSection() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello W<span className="hero-earth">o</span>rld</h1>
        <p className="hero-subtitle">I am Vilja Alexandra Henriksen, soon to be a Fullstack Web Developer<span className="hero-subtitle-underscore">_</span></p>
        {/* <button className="hero-button" onClick={(e) => scrollToSection(e, "projects")}>View Projects</button> */}
        {/* <button className="hero-button-outline" onClick={(e) => scrollToSection(e, "contact")}>Get In Touch</button> */}
      </div>
      <div className="hero-image">
          <img src="/images/profile-pic.jpeg" alt="Profile picture" className="profile-picture" />
      </div>
    </section>
  );
}

export default HeroSection;