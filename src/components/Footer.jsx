import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#f28482', color: '#fff', padding: '20px' }}>
    <p>© 2024 My Portfolio</p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><a href="https://github.com/yourprofile" style={{ color: '#fff' }}>GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/yourprofile" style={{ color: '#fff' }}>LinkedIn</a></li>
      <li><a href="https://stackoverflow.com/users/yourprofile" style={{ color: '#fff' }}>Stack Overflow</a></li>
    </ul>
  </footer>
);

export default Footer;
