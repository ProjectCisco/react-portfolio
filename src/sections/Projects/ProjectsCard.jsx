import PropTypes from "prop-types";
import { SocialIcon, FolderIcon, TechIcon } from "../../components/Icons";
import styles from "./ProjectsStyles.module.css";

function ProjectsCard({ title, description, href, github, tech1, tech2, tech3, tech4 }) {
  const techs = [tech1, tech2, tech3, tech4].filter(Boolean);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <div className={styles.folderTitle}>
          <FolderIcon />
          <h3 className={styles.projectTitle}>{title}</h3>
        </div>
        <div className={styles.projectIcons}>
          {href && <SocialIcon kind="external" href={href} />}
          {github && <SocialIcon kind="github" href={github} />}
        </div>
      </div>
      <p className={styles.projectDescription}>{description}</p>

      <div className={styles.techStack}>
        {techs.map((tech, index) => (
          <div key={index} className={styles.techItem}>
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
