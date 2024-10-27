import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}> {/* Optional: ensures content area has space */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer /> {/* Add Footer here so it displays on every page */}
    </Router>
  );
}

export default App;
