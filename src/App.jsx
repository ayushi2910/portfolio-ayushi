// App.jsx
import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import Particles from './components/Particles';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleLandingComplete = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return (
      <AnimatePresence>
        <Landing onNavigateToHome={handleLandingComplete} />
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <div className="App relative min-h-screen overflow-x-hidden bg-slate-900">
        <Particles />
        
        <Sidebar />
          <main className="">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
              
              </Routes>
            </AnimatePresence>    
          </main>
          <Footer />
          <ToastContainer />
          
        
      </div>
    </Router>
  );
}

export default App;