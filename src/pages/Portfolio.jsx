import React from 'react';
import Project from '../components/Project';

import payrollImage from '/assets/employeetrackerch3.jpg';
import blogImage from '/assets/MyBlogch4.jpg';
import readmeImage from '/assets/ReadmeGenerator.jpg';
import databaseImage from '/assets/EmployeeManager.jpg';
import portfolioImage from '/assets/Portfolioch2.jpg';
import candidateSearchImage from '/assets/CandidateSearch.jpg';
import portfolioCSSImage from '/assets/Portfolioch1.jpg'; // Previously Task Tracker
import weatherDashboardImage from '/assets/WeatherDashboard.jpg'; // Previously E-Commerce Platform

const Portfolio = () => (
  <div>
    <h2>Portfolio</h2>
    <div className="row">
      {/* Project 1 - Payroll Management Application */}
      <div className="col-md-6 d-flex">
        <img src={payrollImage} alt="Payroll Management" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Payroll Management Application" 
          github="https://github.com/project1"
          description="Developed a responsive web application for payroll managers to efficiently view and manage employee payroll data. The application ran in the browser, featuring dynamically updated HTML and CSS powered by JavaScript. It delivered a clean, polished interface and ensured seamless adaptability across various screen sizes, enhancing the overall user experience."
        />
      </div>

      {/* Project 2 - Personal Blog */}
      <div className="col-md-6 d-flex">
        <img src={blogImage} alt="Personal Blog" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Personal Blog" 
          github="https://github.com/project2"
          description="Created a dynamic personal blog featuring a content form, real-time blog post rendering, and a light/dark mode toggle. This project provided hands-on experience with JavaScript and leveraged the power of the Document Object Model (DOM) to enhance interactivity. It laid a solid foundation for more advanced development tasks, offering a responsive and engaging user experience."
        />
      </div>

      {/* Project 3 - README Generator */}
      <div className="col-md-6 d-flex">
        <img src={readmeImage} alt="README Generator" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="README Generator" 
          github="https://github.com/project3"
          description="Developed a command-line application that dynamically generated professional README.md files based on user input, utilizing the Inquirer package. This project streamlined the process of creating high-quality documentation by adhering to industry standards, ensuring that each README included all essential elements for professionalism and clarity."
        />
      </div>

      {/* Project 4 - Employee Database Manager */}
      <div className="col-md-6 d-flex">
        <img src={databaseImage} alt="Employee Database Manager" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Employee Database Manager" 
          github="https://github.com/project4"
          description="Developed a command-line application from the ground up to manage a company's employee database, utilizing Node.js, Inquirer, and PostgreSQL. This solution streamlined database operations by allowing for efficient employee data management, enhancing productivity through its powerful, intuitive interface for handling complex queries and data manipulation."
        />
      </div>

      {/* Project 5 - Portfolio */}
      <div className="col-md-6 d-flex">
        <img src={portfolioImage} alt="Portfolio" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Portfolio" 
          github="https://github.com/project5"
          description="Showcase of completed projects demonstrating a range of development skills, from front-end design to full-stack applications. The portfolio highlights responsive design, efficient coding practices, and attention to user experience, providing a comprehensive look at hands-on coding abilities."
        />
      </div>

      {/* Project 6 - Candidate Search */}
      <div className="col-md-6 d-flex">
        <img src={candidateSearchImage} alt="Candidate Search" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Candidate Search" 
          github="https://github.com/project6"
          description="Created a candidate search application that allows users to search and save profiles from GitHub. The app enables recruiters to keep a list of potential candidates and features a user-friendly interface with filters and sorting options to streamline the recruitment process."
        />
      </div>

      {/* Project 7 - Portfolio with CSS */}
      <div className="col-md-6 d-flex">
        <img src={portfolioCSSImage} alt="Portfolio with CSS" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Portfolio with CSS" 
          github="https://github.com/project7"
          description="An enhanced portfolio project showcasing various CSS styling techniques, transitions, and animations. This project demonstrates strong design principles, including responsive layout, modern CSS properties, and consistent visual styling for an attractive and professional presentation."
        />
      </div>

      {/* Project 8 - Weather Dashboard */}
      <div className="col-md-6 d-flex">
        <img src={weatherDashboardImage} alt="Weather Dashboard" style={{ height: '150px', width: '100%', marginBottom: '10px', objectFit: 'cover' }} />
        <Project 
          title="Weather Dashboard" 
          github="https://github.com/project8"
          description="Developed a weather dashboard application that utilizes the OpenWeather API to display current and forecasted weather conditions for various locations. This project features a user-friendly interface, real-time data fetching, and responsive design for seamless functionality across devices."
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
