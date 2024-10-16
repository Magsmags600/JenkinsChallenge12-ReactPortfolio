import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import './responsive.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutMePage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </Router>
  );
}

export default App;
