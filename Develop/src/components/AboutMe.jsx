import React from 'react';
import { Container, Card } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id="about" className="bg-light py-5">
      <Container>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <h2>About Me</h2>
            <p>
              I am a passionate developer with a strong background in React, JavaScript, and modern web development. My goal is to create sleek, responsive, and user-friendly web applications.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default AboutMe;
