import PropTypes from 'prop-types';
import { TechIcon } from '../../components/Icons';
import styles from './SkillsStyles.module.css';

const SkillsCard = ({ frontEnd, middleware, backend }) => {
  return (
    <div className={styles.skillsCard}>
      <div className={styles.skillsColumns}>
        <div className={styles.skillsColumn}>
          <h3 className={styles.columnTitle}>Front-end</h3>
          <ul className={styles.techList}>
            {frontEnd.map((tech, index) => (
              <li key={index} className={styles.techItem}>
                <TechIcon kind={tech} size={18} /> <span>{tech.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skillsColumn}>
          <h3 className={styles.columnTitle}>Middleware</h3>
          <ul className={styles.techList}>
            {middleware.map((tech, index) => (
              <li key={index} className={styles.techItem}>
                <TechIcon kind={tech} size={18} /> <span>{tech.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skillsColumn}>
          <h3 className={styles.columnTitle}>Backend</h3>
          <ul className={styles.techList}>
            {backend.map((tech, index) => (
              <li key={index} className={styles.techItem}>
                <TechIcon kind={tech} size={18} /> <span>{tech.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SkillsCard.propTypes = {
  frontEnd: PropTypes.arrayOf(PropTypes.string).isRequired,
  middleware: PropTypes.arrayOf(PropTypes.string).isRequired,
  backend: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsCard;
