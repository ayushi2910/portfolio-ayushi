// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import Sidebar from '../components/Sidebar';
import Typewriter from '../components/Typewriter';

const Home = () => {
  const skills = [
    "Frontend Developer",
    "Problem Solver", 
    "DSA Enthusiast",
    "React Developer",
    "UI/UX Designer",
    "Tech Explorer"
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Particles Background */}
      <Particles particleCount={40} />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-20 lg:ml-80 p-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen items-center">
            
            {/* Left Grid - Profile Section */}
            <motion.div
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
              }}
            >
              {/* Profile Picture */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg shadow-purple-400/50"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(168, 85, 247, 0.5)',
                        '0 0 40px rgba(168, 85, 247, 0.8)',
                        '0 0 20px rgba(168, 85, 247, 0.5)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <img 
                      src="/api/placeholder/300/300" 
                      alt="Ayushi Ranjan" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  
                  {/* Floating elements around image */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full"
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rotate-45"
                    animate={{
                      x: [-5, 5, -5],
                      rotate: [45, 405],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Greeting */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Hello, I am{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Ayushi Ranjan
                  </span>
                </h1>
                
                {/* Typewriter Skills */}
                <div className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center">
                  <span className="mr-2">I am a </span>
                  <Typewriter 
                    words={skills}
                    speed={100}
                    deleteSpeed={80}
                    delayBetweenWords={2000}
                    className="text-purple-400 font-semibold"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Grid - Bio and CTA Section */}
            <motion.div
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
              }}
            >
              {/* Bio Section */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mr-3"></span>
                  Who Am I?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Passionate frontend developer with a love for creating beautiful, 
                  functional web experiences. I combine technical expertise with creative 
                  problem-solving to build solutions that make a difference. Always 
                  eager to learn new technologies and tackle challenging problems.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link to="/contact" className="flex-1">
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-purple-600/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center">
                      Contact Me
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </Link>

                <Link to="/projects" className="flex-1">
                  <motion.button
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-600/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center">
                      My Work
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-purple-400/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-cyan-400/30 rotate-45"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;