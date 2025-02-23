import styles from './ProjectsStyles.module.css';
import projectsData from '../../data/projectsData';
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeader}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <p className={styles.projectsSubtitle}>
          A list of projects I have been working on or built
        </p>
        <div className={styles.projectsDivider}></div>
      </div>

      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            href={project.href}
            github={project.github}
            tech1={project.tech1}
            tech2={project.tech2}
            tech3={project.tech3}
            tech4={project.tech4} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

