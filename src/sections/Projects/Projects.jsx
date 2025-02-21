import styles from './ProjectsStyles.module.css';
import authbot from '../../assets/authbot-img.png';
import mphLight from '../../assets/mph-light.png';
import mphDark from '../../assets/mph-dark.png';
import bsmLight from '../../assets/bsm-light.png';
import bsmDark from '../../assets/bsm-dark.png';
import ProjectCard from '../../Common/ProjectCard';
import { useTheme } from '../../Common/ThemeContext';

function Projects() {

    const {theme} = useTheme();
  
    // const authbot = theme === 'light' ? authbotLight : authbotDark; # logo not available
    const mph = theme === 'light' ? mphLight : mphDark;
    const bsm = theme === 'light' ? bsmLight : bsmDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Projects</h1>
      <div className={styles.projectsContainer}>
        < ProjectCard src={authbot} link="https://github.com/ElementalEngine/DiscordAuthenticator-bot" 
          h3="Authbot"
          p="Discord bot that authenticates users for the CPL Server"
        />
        < ProjectCard src={mph} link="https://github.com/CivilizationVIBetterBalancedGame/MultiplayerHelper" 
          h3="Multiplayer Helper Mod"
          p="Civilization 6 esports & multiplayer aider mod (127k subs)"
        />
          < ProjectCard src={bsm} link="https://github.com/CivilizationVIBetterBalancedGame/BetterSpectatorMod" 
          h3="Better Spectator Mod"
          p="Civilization 6 esports spectator mod (31k subs)"
        />
      </div>
    </section>
  )
}

export default Projects