// src/components/ResumePage.jsx
import React from 'react';

const ResumePage = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>You can download my resume <a href="/path-to-your-resume.pdf" download>here</a>.</p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>And more...</li>
      </ul>
    </section>
  );
};

export default ResumePage;
