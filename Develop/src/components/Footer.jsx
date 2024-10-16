import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p>© 2024 My Portfolio. All Rights Reserved.</p>
        <div>
          <a href="https://github.com/yourusername" className="text-white mx-2">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" className="text-white mx-2">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
