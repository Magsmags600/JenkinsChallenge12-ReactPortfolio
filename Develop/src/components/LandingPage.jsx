import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './responsive.css';

const LandingPage = () => {
  return (
    <>
      <header className="bg-dark text-white text-center py-4">
        <h1>Welcome to My Portfolio</h1>
        <p>Your one-stop showcase for all my projects</p>
        <nav>
          <a href="/about" className="text-white mx-3">About Me</a>
          <a href="/projects" className="text-white mx-3">Projects</a>
          <a href="#contact" className="text-white mx-3">Contact</a>
        </nav>
      </header>

      <section className="hero-banner text-center text-white py-5">
        <Container>
          <h2>Discover My Journey</h2>
          <p>I’m a web developer passionate about creating user-friendly and engaging websites.</p>
          <Button href="#contact" variant="light">Get in Touch</Button>
        </Container>
      </section>

      <section className="summary-section py-5">
        <Container>
          <h2>Summary</h2>
          <p>
            I have experience working with technologies such as React, JavaScript, and Node.js, building interactive web applications. My focus is on delivering high-quality projects with responsive design and user-centric functionality.
          </p>
        </Container>
      </section>

      <section id="contact" className="bg-light py-5">
        <Container>
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" className="form-control mb-3" />
            <input type="email" placeholder="Your Email" className="form-control mb-3" />
            <textarea placeholder="Your Message" className="form-control mb-3" rows="5"></textarea>
            <Button type="submit" variant="primary">Submit</Button>
          </form>
        </Container>
      </section>
    </>
  );
};

export default LandingPage;
