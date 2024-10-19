import React from 'react';

const Project = ({ title, github, description, color }) => (
  <div className="card mb-4" style={{ backgroundColor: color, color: '#333' }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  </div>
);

export default Project;
