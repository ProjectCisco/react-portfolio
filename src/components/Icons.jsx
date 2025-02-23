import PropTypes from "prop-types";
import { FaGithub, FaLinkedin, FaXTwitter, FaRegFolderOpen } from "react-icons/fa6";
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

export const SocialIcon = ({ kind, href, size = 24 }) => {
  if (!href) return null;

  const iconMap = {
    github: <FaGithub size={size} className="icon" />,
    linkedin: <FaLinkedin size={size} className="icon" />,
    twitter: <FaXTwitter size={size} className="icon" />,
    external: <FaExternalLinkAlt size={size} className="icon" />,
    checkmark: <FaCheckCircle size={size} className="icon" />,
  };

  return (
    <a className="social-icon" target="_blank" rel="noopener noreferrer" href={href}>
      {iconMap[kind]}
    </a>
  );
};

SocialIcon.propTypes = {
  kind: PropTypes.oneOf(["github", "linkedin", "twitter", "external", "checkmark"]).isRequired,
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
  return <FaRegFolderOpen size={size} className="folder-icon" style={{ color: "#5f1fc0" }} />;
};

FolderIcon.propTypes = {
  size: PropTypes.number,
};

const Icons = { SocialIcon, TechIcon, FolderIcon };
export default Icons;
