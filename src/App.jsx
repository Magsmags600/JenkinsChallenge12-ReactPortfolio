import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated for v6
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

const App = () => (
  <Router>
    <Header />
    <main className="container my-5">
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
