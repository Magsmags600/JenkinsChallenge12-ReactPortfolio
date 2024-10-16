import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1>My Portfolio</h1>
        <ul className="nav-links">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
