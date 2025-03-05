import styles from './SkillsStyles.module.css';
import skillsData from '../../data/skillsData'; 
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsHeader}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <p className={styles.skillsSubtitle}>
          A list of my technical skills and proficiencies
        </p>
        <div className={styles.skillsDivider}></div>
      </div>

      <div className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <SkillsCard 
            key={skill.id}
            frontEnd={skill.frontEnd}
            middleware={skill.middleware}
            backend={skill.backend}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
