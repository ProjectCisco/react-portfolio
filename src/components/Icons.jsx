import PropTypes from "prop-types";
import iconStyles from "./IconsStyles.module.css";
import { FaCheckCircle, FaExternalLinkAlt, FaWrench } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiLua,
  SiJavascript,
  SiDiscord,
  SiCss3,
  SiVite,
  SiXml,
  SiGit,
  SiPython
} from "react-icons/si";
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter, 
  FaRegFolderOpen, 
  FaInstagram, 
  FaSpotify 
} from "react-icons/fa6";

export const SocialIcon = ({ kind, href, size = 24 }) => {
  if (!href) return null;

  const iconMap = {
    github: <FaGithub size={size} className={iconStyles.icon} />,
    linkedin: <FaLinkedin size={size} className={iconStyles.icon} />,
    twitter: <FaXTwitter size={size} className={iconStyles.icon} />,
    instagram: <FaInstagram size={size} className={iconStyles.icon} />,
    spotify: <FaSpotify size={size} className={iconStyles.icon} />,
    external: <FaExternalLinkAlt size={size} className={iconStyles.icon} />,
    checkmark: <FaCheckCircle size={size} className={iconStyles.icon} />,
  };

  return (
    <a className={iconStyles.socialIcon} target="_blank" rel="noopener noreferrer" href={href}>
      {iconMap[kind]}
    </a>
  );
};

SocialIcon.propTypes = {
  kind: PropTypes.oneOf(["github", "linkedin", "twitter", "instagram", "spotify", "external", "checkmark"]).isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export const TechIcon = ({ kind, size = 18 }) => {
  const techIcons = {
    react: <SiReact size={size} />,
    typescript: <SiTypescript size={size} />,
    nodejs: <SiNodedotjs size={size} />,
    mongodb: <SiMongodb size={size} />,
    modding: <FaWrench size={size} />,
    lua: <SiLua size={size} />,
    javascript: <SiJavascript size={size} />,
    discord: <SiDiscord size={size} />,
    css: <SiCss3 size={size} />,
    vite: <SiVite size={size} />,
    xml: <SiXml size={size} />,
    git: <SiGit size={size} />,
    python: <SiPython size={size} />,
  };

  return techIcons[kind.toLowerCase()] || null;
};

TechIcon.propTypes = {
  kind: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export const FolderIcon = ({ size = 50 }) => {
  // Instead of an inline style, use the module class so that the color comes from global CSS variables.
  return <FaRegFolderOpen size={size} className={iconStyles.folderIcon} />;
};

FolderIcon.propTypes = {
  size: PropTypes.number,
};

const Icons = { SocialIcon, TechIcon, FolderIcon };
export default Icons;
