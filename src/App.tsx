import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <div className="pt-10"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;