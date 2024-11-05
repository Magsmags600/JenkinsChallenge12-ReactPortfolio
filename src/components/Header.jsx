import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Margaret "Maggie" Jenkins</h1>
      </div>
      <nav className="nav">
        <NavLink exact to="/" activeClassName="active" className="nav-link">
          About Me
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active" className="nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/resume" activeClassName="active" className="nav-link">
          Resume
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
