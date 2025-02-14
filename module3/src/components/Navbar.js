import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/styles.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext); // Using ThemeContext

  return (
    <nav className={`navbar ${theme}`}>
      <h2>Theme Context App</h2>
    </nav>
  );
};

export default Navbar;
