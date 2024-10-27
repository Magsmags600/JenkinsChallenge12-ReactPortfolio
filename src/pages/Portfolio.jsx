import React from 'react';
import Project from '../components/Project';

import birdle from '/assets/birdle.jpg';
import blogImage from '/assets/MyBlogch4.jpg';
import readmeImage from '/assets/ReadmeGenerator.jpg';
import databaseImage from '/assets/EmployeeManager.jpg';
import portfolioImage from '/assets/Portfolioch2.jpg';
import candidateSearchImage from '/assets/CandidateSearch.jpg';
import portfolioCSSImage from '/assets/Portfolioch1.jpg';
import weatherDashboardImage from '/assets/WeatherDashboard.jpg';

const Portfolio = () => (
  <div>
    <h2 className="text-center mb-4">Portfolio</h2>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {/* Project 1 - Birdle */}
      <div className="col d-flex flex-column">
        <img src={birdle} alt="Birdle Word Game" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Birdle Word Game" 
          github="https://github.com/Kenhie94/Birdle"
          description="Developed a responsive word game which features selecting four letter words and guessing the right answer. The game uses colors to indicate correct letters in correct or incorrect positions, enhancing user interactivity."
        />
      </div>

      {/* Project 2 - Personal Blog */}
      <div className="col d-flex flex-column">
        <img src={blogImage} alt="Personal Blog" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Personal Blog" 
          github="https://github.com/Magsmags600/ChallengesNoGit"
          description="Created a dynamic personal blog featuring content forms, real-time post rendering, and a light/dark mode toggle. It laid a foundation for advanced development tasks, offering a responsive and engaging experience."
        />
      </div>

      {/* Project 3 - README Generator */}
      <div className="col d-flex flex-column">
        <img src={readmeImage} alt="README Generator" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="README Generator" 
          github="https://github.com/Magsmags600/JenkinsChallenge7"
          description="A command-line application that generates professional README.md files based on user input, utilizing the Inquirer package for streamlined documentation."
        />
      </div>

      {/* Project 4 - Employee Database Manager */}
      <div className="col d-flex flex-column">
        <img src={databaseImage} alt="Employee Database Manager" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Employee Database Manager" 
          github="https://github.com/Magsmags600/ChallengesNoGit"
          description="Developed to manage employee databases with Node.js, Inquirer, and PostgreSQL, providing a powerful, intuitive interface for handling complex queries and data management."
        />
      </div>

      {/* Project 5 - Portfolio */}
      <div className="col d-flex flex-column">
        <img src={portfolioImage} alt="Portfolio" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Portfolio" 
          github="https://github.com/Magsmags600/ChallengesNoGit"
          description="A showcase of completed projects demonstrating skills in front-end and full-stack development, with a focus on responsive design and user experience."
        />
      </div>

      {/* Project 6 - Candidate Search */}
      <div className="col d-flex flex-column">
        <img src={candidateSearchImage} alt="Candidate Search" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Candidate Search" 
          github="https://github.com/Magsmags600/JenkinsChallenge13-CandidateSearch"
          description="A candidate search application that allows recruiters to search and save GitHub profiles, featuring a user-friendly interface with filters and sorting options."
        />
      </div>

      {/* Project 7 - Portfolio with CSS */}
      <div className="col d-flex flex-column">
        <img src={portfolioCSSImage} alt="Portfolio with CSS" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Portfolio with CSS" 
          github="https://github.com/Magsmags600/ChallengesNoGit"
          description="An enhanced portfolio showcasing CSS techniques, animations, and transitions, demonstrating strong design principles and modern styling for an attractive presentation."
        />
      </div>

      {/* Project 8 - Weather Dashboard */}
      <div className="col d-flex flex-column">
        <img src={weatherDashboardImage} alt="Weather Dashboard" className="img-fluid" style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
        <Project 
          title="Weather Dashboard" 
          github="https://github.com/Magsmags600/JenkinsChallenge9"
          description="A weather dashboard application using the OpenWeather API to display current and forecasted weather conditions, with a responsive design and real-time data fetching."
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
