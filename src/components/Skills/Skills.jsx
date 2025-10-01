import "./Skills.css";
import SkillsCard from "./SkillsCard";
import htmlIcon from "../../assets/icons/html5-icon.svg";
import cssIcon from "../../assets/icons/css3-icon.svg";
import jsIcon from "../../assets/icons/javascript-icon.svg";
import pythonIcon from "../../assets/icons/python-icon.svg";
import phpIcon from "../../assets/icons/php-icon.svg";
import sqlIcon from "../../assets/icons/sql-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import sassIcon from "../../assets/icons/sass-icon.svg";
import nodeIcon from "../../assets/icons/node-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import vscodeIcon from "../../assets/icons/vscode-icon.svg";
import cliIcon from "../../assets/icons/cli-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import figmaIcon from "../../assets/icons/figma-icon.svg";
import dockerIcon from "../../assets/icons/docker-icon.svg";
import mongodbIcon from "../../assets/icons/mongodb-icon.svg";
import mysqlIcon from "../../assets/icons/mysql-icon.svg";
import postgresqlIcon from "../../assets/icons/postgresql-icon.svg";

function Skills() {
  return (
        <section id="skills" className="skills-section">
          <h2 className="skills-main-title">Technologies</h2>
          <div className="skills-container">
            <div className="skills-items">
              <SkillsCard 
                title="Languages" 
                itemNames={['HTML', 'CSS', 'Java Script', 'Python', 'PHP', 'SQL']}
                item_images={[
                  htmlIcon, cssIcon, jsIcon, pythonIcon, phpIcon, sqlIcon
                ]}
              />
            </div>
            <div className="skills-items">
              <SkillsCard 
                title="Frontend & Backend" 
                itemNames={['React', 'Sass', 'Node.js', 'Express']}
                item_images={[
                  reactIcon, sassIcon, nodeIcon, expressIcon
                ]}
              />
            </div>
            <div className="skills-items">
              <SkillsCard 
                title="Tools & Other" 
                itemNames={['VS Code', 'Github', 'Terminal/ CLI', 'Git', 'Figma', 'Docker', 'MongoDB', 'Postgre SQL', 'MySQL']}
                item_images={[
                  vscodeIcon, githubIcon, cliIcon, gitIcon, figmaIcon, dockerIcon, mongodbIcon, postgresqlIcon, mysqlIcon
                ]}
              />
            </div>
          </div>
        </section>
  );
}

export default Skills;
