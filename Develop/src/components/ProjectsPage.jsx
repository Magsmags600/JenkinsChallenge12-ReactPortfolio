import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../responsive.css';  // Move up one directory level to access the src folder


const projects = [
  {
    name: "Project One",
    description: "A brief description of the first project.",
    link: "#"
  },
  {
    name: "Project Two",
    description: "A description of the second project.",
    link: "#"
  },
  {
    name: "Project Three",
    description: "This is the new project you are adding.",
    link: "#"
  }
];

const ProjectsPage = () => {
  return (
    <>
      <header className="bg-dark text-white text-center py-4">
        <h1>My Projects</h1>
        <nav>
          <a href="/" className="text-white mx-3">Home</a>
          <a href="/about" className="text-white mx-3">About Me</a>
          <a href="/#contact" className="text-white mx-3">Contact</a>
        </nav>
      </header>

      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="shadow-sm custom-card">
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="light" href={project.link}>View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectsPage;
