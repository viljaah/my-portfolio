import "./Hero.css";

function HeroSection() {

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello W<span className="hero-earth">o</span>rld</h1>
        <p className="hero-subtitle">I am Vilja, soon to be a Fullstack Web Developer<span className="hero-subtitle-underscore">_</span></p>
      </div>
      <div className="hero-image">
          <img src="/images/profile-pic.jpeg" alt="Profile picture" className="profile-picture" />
      </div>
    </section>
  );
}

export default HeroSection;