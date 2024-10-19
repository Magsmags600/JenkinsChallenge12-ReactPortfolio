import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <div>
    <h2>Portfolio</h2>
    <div className="row">
      <div className="col-md-6 d-flex">
        <div style={{ backgroundColor: '#84a59d', height: '100px', width: '100%', marginBottom: '10px' }}></div>
        <Project 
          title="Payroll Management Application" 
          github="https://github.com/project1"
          description="Developed a responsive web application for payroll managers to efficiently view and manage employee payroll data. The application ran in the browser, featuring dynamically updated HTML and CSS powered by JavaScript. It delivered a clean, polished interface and ensured seamless adaptability across various screen sizes, enhancing the overall user experience."
        />
      </div>
      <div className="col-md-6 d-flex">
        <div style={{ backgroundColor: '#f6bd60', height: '100px', width: '100%', marginBottom: '10px' }}></div>
        <Project 
          title="Personal Blog" 
          github="https://github.com/project2"
          description="Created a dynamic personal blog featuring a content form, real-time blog post rendering, and a light/dark mode toggle. This project provided hands-on experience with JavaScript and leveraged the power of the Document Object Model (DOM) to enhance interactivity. It laid a solid foundation for more advanced development tasks, offering a responsive and engaging user experience."
        />
      </div>
      <div className="col-md-6 d-flex">
        <div style={{ backgroundColor: '#f28482', height: '100px', width: '100%', marginBottom: '10px' }}></div>
        <Project 
          title="README Generator" 
          github="https://github.com/project3"
          description="Developed a command-line application that dynamically generated professional README.md files based on user input, utilizing the Inquirer package. This project streamlined the process of creating high-quality documentation by adhering to industry standards, ensuring that each README included all essential elements for professionalism and clarity."
        />
      </div>
      <div className="col-md-6 d-flex">
        <div style={{ backgroundColor: '#84a59d', height: '100px', width: '100%', marginBottom: '10px' }}></div>
        <Project 
          title="Employee Database Manager" 
          github="https://github.com/project4"
          description="Developed a command-line application from the ground up to manage a company's employee database, utilizing Node.js, Inquirer, and PostgreSQL. This solution streamlined database operations by allowing for efficient employee data management, enhancing productivity through its powerful, intuitive interface for handling complex queries and data manipulation."
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
