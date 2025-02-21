import styles from './AvatarStyles.module.css';
import avatarImage from '../../assets/avatar-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkinLight from '../../assets/linkedin-light.svg';
import linkinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import xLight from '../../assets/x-light.svg';
import xDark from '../../assets/x-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../Common/ThemeContext';

function Avatar() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkinIcon = theme === 'light' ? linkinLight : linkinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const xIcon = theme === 'light' ? xLight : xDark;

  return (
    <section id="avatar" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.avatar} src={avatarImage} alt="Profile Avatar" />
        <img className={styles.colorMode} src={themeIcon} alt="ColorModeIcon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Project <br /> Cisco</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://linkedin.com/in/sga-8102ab139" target="_blank">
            <img src={linkinIcon} alt="LinkedIcon" />
          </a>
          <a href="https://github.com/ProjectCisco" target="_blank">
            <img src={githubIcon} alt="GithubIcon" />
          </a>
          <a href="https://x.com/project_cisco" target="_blank">
            <img src={xIcon} alt="xIcon" />
          </a>
        </span>
        <p className={styles.description} >Passionate Full-Stack Developer dedicated to clean code, scalability, and efficiency. 
          Always exploring new technologies to build robust, innovative, and impactful solutions.</p>
        <a href={CV} download><button className="hover">Resume</button></a>
      </div>
    </section>
  );
}

export default Avatar;
