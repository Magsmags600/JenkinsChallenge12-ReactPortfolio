import React from 'react';
import { Container } from 'react-bootstrap';
import './responsive.css';

const AboutMePage = () => {
  return (
    <>
      <header className="bg-dark text-white text-center py-4">
        <h1>About Me</h1>
        <nav>
          <a href="/" className="text-white mx-3">Home</a>
          <a href="/projects" className="text-white mx-3">Projects</a>
          <a href="/#contact" className="text-white mx-3">Contact</a>
        </nav>
      </header>

      <section className="py-5">
        <Container>
          <h2>Who I Am</h2>
          <p>
            I’m a passionate web developer with experience in React, JavaScript, Node.js, and other modern web technologies. I enjoy building interactive, dynamic, and user-friendly web applications.
          </p>
          <p>
            Throughout my journey, I've worked on numerous projects ranging from simple landing pages to more complex applications that provide engaging user experiences. My goal is to continuously learn and grow as a developer.
          </p>
        </Container>
      </section>
    </>
  );
};

export default AboutMePage;
