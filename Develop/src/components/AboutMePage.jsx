import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../responsive.css';

const AboutMePage = () => {
  return (
    <section className="about-me-section custom-background py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="mt-4">
          <Col md={4} className="text-center">
            <img
              src="/assets/my-photo.png"  // Save the file as my-photo.png in the assets folder
              alt="My Photo"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col md={8}>
            <p>
              I am a seasoned general and product counsel with over nineteen
              years of experience, specializing in product and technology
              transactions, intellectual property strategy, regulatory
              compliance, and managing complex legal matters across industries.
              Throughout my career, I’ve provided strategic legal guidance in
              hardware, software, and enterprise product integration,
              collaborating closely with cross-functional teams in engineering,
              product development, sales, and marketing to help businesses
              navigate legal complexities early in the product lifecycle.
            </p>
            <p>
              Currently, I serve as the Interim Associate General Counsel at May
              Mobility, where I focus on business-to-business (B2B) and
              business-to-government (B2G) transactions. My role includes
              reviewing and drafting NDAs, supply agreements, and custom
              transactional agreements, while managing government bidding
              processes and ensuring compliance with relevant regulations in the
              autonomous vehicle space.
            </p>
            <p>
              Prior to joining May Mobility, I was General Counsel at QSC, LLC,
              from 2005 to 2022. During my tenure, I worked extensively with
              product development teams to assess and manage legal risks
              throughout the product lifecycle, from new product introductions
              to sustaining and end-of-life processes. I oversaw intellectual
              property strategy, including patents, trademarks, trade secrets,
              and open-source software compliance. My role also involved guiding
              the company through complex commercial transactions, including
              channel partner agreements, SaaS contracts, and strategic
              alliances across global markets. Additionally, I led regulatory
              compliance efforts for GDPR, CCPA, and various international data
              privacy laws, while collaborating with HR and finance teams on
              topics ranging from employment matters to tax implications of new
              business entities.
            </p>
            <p>
              I’ve also had the privilege of working at Meta (Facebook), where I
              supported the Meta Reality Labs team on product, technology, and
              supply chain matters for AR/VR devices and the Metaverse. My
              experience spans multiple industries, always aiming to provide
              legal solutions that align with business goals, protect
              intellectual property, and ensure compliance.
            </p>
            <p>
              Whether guiding teams in emerging industries like autonomous
              vehicles or supporting large-scale technology product launches, my
              focus remains on enabling innovation while minimizing legal risks.
              Let’s connect to explore how I can bring strategic legal insight
              to your next venture.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMePage;
