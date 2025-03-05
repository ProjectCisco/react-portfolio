import { SocialIcon } from "../../components/Icons";
import iconStyles from "../../components/iconsStyles.module.css";
import TypeWriter from "../../components/TypeWriter";
import avatarStyles from "./AvatarStyles.module.css"; 
import avatarImage from "../../assets/avatar-img.png";
import Resume from "../../assets/SGA-Resume-Git.pdf";

const Avatar = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={avatarStyles.avatarSection}>
      <div className={avatarStyles.avatarContainer}>
        <div className={avatarStyles.avatarImageContainer}>
          <img src={avatarImage} alt="Avatar" className={avatarStyles.avatarImage} />
        </div>
        <div className={avatarStyles.textContainer}>
          <h1 className={avatarStyles.greeting}>
            Hi, I&apos;m <span className={avatarStyles.nameHighlight}>Project Cisco</span> 👋
          </h1>
          <TypeWriter
            words={[
              "a Full-Stack Developer.",
              "an Open Source Contributor.",
              "a Tech Enthusiast."
            ]}
            delay={110} 
            infinite={true}
          />
          <div className={avatarStyles.infoContainer}>
            <p className={avatarStyles.infoItem}>☕ Fueled by coffee</p>
            <p className={avatarStyles.infoItem}>🌍 Based in the UK</p>
          </div>
          <div className={avatarStyles.buttons}>
          <button
            onClick={() => {
            const link = document.createElement("a");
            link.href = Resume;
            link.setAttribute("download", "SGA-Resume.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            }}
            className={avatarStyles.button}
            >
            Resume
          </button>
            <button onClick={scrollToContact} className={avatarStyles.button}>
              Contact Me
            </button>
          </div>
          <div className={iconStyles.socialIcons}>
            <SocialIcon kind="github" href="https://github.com/your-profile" />
            <SocialIcon kind="linkedin" href="https://linkedin.com/in/your-profile" />
            <SocialIcon kind="twitter" href="https://twitter.com/your-profile" />
            <SocialIcon kind="instagram" href="https://instagram.com/your-profile" />
            <SocialIcon kind="spotify" href="https://open.spotify.com/user/your-profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avatar;
