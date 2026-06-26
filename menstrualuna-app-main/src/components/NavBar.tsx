import React, { useState } from "react";
import "./NavBar.css";


const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
        <a href="/" className="logo-link">
          <h1 className="logo-title">Menstrualuna - The Period Tracker App</h1>
        </a>
      </div>

      {/* Hamburger Menu (Three Dots) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`menu-bar ${isMenuOpen ? "open" : ""}`} />
        <div className={`menu-bar ${isMenuOpen ? "open" : ""}`} />
        <div className={`menu-bar ${isMenuOpen ? "open" : ""}`} />
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        {/* Close button */}
        <button className="close-btn" onClick={toggleMenu}>
          &times; {/* Close icon */}
        </button>

        {/* Add navigation links here */}
        <a href="#">The Period Tracker</a>
        <a href="#">App Version 2.6.0</a>
      </div>
    </nav>
  );
};

export default NavBar;
