import { createContext, useContext, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      {theme === "light" ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
    </button>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
