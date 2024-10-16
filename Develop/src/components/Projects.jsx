import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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

const Projects = () => {
  return (
    <section id="projects" className="py-5 custom-background">
      <Container>
        <h2 className="text-center mb-4" style={{ color: 'hsl(295, 70%, 55%)' }}>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="shadow-sm custom-card" style={{ backgroundColor: 'hsl(278, 100%, 73%)' }}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="light" href={project.link}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
