import "./Footer.css";
import linkedinIcon from "../../assets/icons/linked-in-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import emailIcon from "../../assets/icons/mail-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";

function Footer() {
  return (
    <footer id="contact" className="footer">
        <div className="footer-content">
            <h3 className="footer-title">Get in touch</h3>
            <p className="footer-text">Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div className="flex-icons">
                <a href="mailto:vilja.a.hen@gmail.com">
                    <img src={emailIcon} alt="E-mail icon" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/vilja-alexandra-henriksen-131274359/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn icon" className="footer-icon" />
                </a>
                <a href="https://github.com/viljaah" target="_blank">
                    <img src={githubIcon} alt="Github icon" className="footer-icon" />
                </a>
                <a href="tel:+4790533823">
                    <img src={phoneIcon} alt="Phone icon" className="footer-icon" />
                </a>
            </div>
            <p className="footer-creator">© 2025 - Vilja Henriksen.</p>
        </div>
    </footer>
  );
}

export default Footer;