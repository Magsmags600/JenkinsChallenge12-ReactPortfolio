import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
