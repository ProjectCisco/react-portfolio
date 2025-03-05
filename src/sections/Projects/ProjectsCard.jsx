import PropTypes from "prop-types";
import { SocialIcon, FolderIcon, TechIcon } from "../../components/Icons";
import iconStyles from "../../components/iconsStyles.module.css";       
import projectStyles from "./ProjectsStyles.module.css";
function ProjectsCard({ title, description, href, github, tech1, tech2, tech3, tech4 }) {
  const techs = [tech1, tech2, tech3, tech4].filter(Boolean);

  return (
    <div className={projectStyles.projectCard}>
      <div className={projectStyles.projectHeader}>
        <div className={projectStyles.folderTitle}>
          <FolderIcon />
          <h3 className={projectStyles.projectTitle}>{title}</h3>
        </div>
        <div className={iconStyles.projectIcons}>
          {href && <SocialIcon kind="external" href={href} />}
          {github && <SocialIcon kind="github" href={github} />}
        </div>
      </div>
      <p className={projectStyles.projectDescription}>{description}</p>
      <div className={projectStyles.techStack}>
        {techs.map((tech, index) => (
          <div key={index} className={projectStyles.techItem}>
            <TechIcon kind={tech} size={18} /> <span>{tech.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

ProjectsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
  github: PropTypes.string,
  tech1: PropTypes.string,
  tech2: PropTypes.string,
  tech3: PropTypes.string,
  tech4: PropTypes.string,
};

export default ProjectsCard;
