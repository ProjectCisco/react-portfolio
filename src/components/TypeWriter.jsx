import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "./ThemeContext";
import styles from "./TypeWriterStyles.module.css";

const TypeWriter = ({ words = [], speed = 105, delay = 2205 }) => {
  const { theme } = useTheme();
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, words, wordIndex, speed, delay]);

  return (
    <span className={styles.typewriter}>
      <span
        className={`${styles.typewriterPrefix} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      >
        I&apos;m&nbsp;
      </span>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

TypeWriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  delay: PropTypes.number,
};

export default TypeWriter;
