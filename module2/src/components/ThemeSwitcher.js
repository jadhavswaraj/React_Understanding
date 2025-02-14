import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme; // Change the body's class based on theme
  }, [theme]); // Runs whenever theme changes

  return (
    <div className="container">
      <h2>Theme Switcher</h2>
      <button onClick={() => setTheme("light")}>Light Theme</button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
