// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import Typewriter from '../components/Typewriter';
import Profile from '../assets/ayushi portfolio image.png';

import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Home = () => {
  const skills = [
    "Frontend Developer",
    "Problem Solver", 
    "DSA Learner ",
    "React Developer",
    "Tech Explorer",
    "Creative Coder"
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/ayushi2910", 
      label: "LinkedIn",
      color: "hover:bg-gray-700"
    },
    { 
      icon: Github, 
      href: "https://github.com/ayushi2910", 
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    { 
      icon: Mail, 
      href: "mailto:itsayushiranjan@gmail.com", 
      label: "Email",
      color: "hover:bg-gray-700"
    },
    { 
      icon: Code2, 
      href: "https://leetcode.com/ayushi2910", 
      label: "LeetCode",
      color: "hover:bg-gray-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Particles Background */}  
      <Particles />
     
      
      {/* Main Content */}
      <div className="min-h-screen p-4 lg:p-8 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
            
            {/* Left Section - Profile & Skills */}
            <motion.div
              className="text-center lg:text-left space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Profile Picture with Glow */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-80 h-80 sm:w-70 sm:h-70 lg:w-70 lg:h-70 rounded-full overflow-hidden border-4 border-teal-400 relative">
                    {/* Glowing Animation */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 animate-pulse opacity-20"></div>
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 opacity-20 animate-ping"></div>
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Profile Image */}
                    <img 
                      src={Profile} 
                      alt="Ayushi Ranjan" 
                      className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Greeting */}
              <div className="space-y-4 mt-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono tracking-tight">
                  Hello, I am{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 block lg:inline">
                    Ayushi Ranjan
                  </span>
                </h1>
                
                {/* Typewriter Skills */}
                <div className="text-xl lg:text-2xl text-slate-300 min-h-[3rem] flex items-center justify-center lg:justify-start">
                  <span className="mr-2 ">I am a </span>
                  <Typewriter 
                    words={skills}
                    speed={100}
                    deleteSpeed={80}
                    delayBetweenWords={2000}
                    className="text-teal-400 font-semibold font-mono"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Section - Bio & CTAs */}
            <motion.div
              className="space-y-6 lg:space-y-8 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Bio Section */}
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 lg:p-8 border border-teal-400/20 shadow-xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-mono flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-teal-400 to-cyan-300 mr-3"></span>
                  Who Am I?
                </h2>
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed ">
                  I'm a Computer Science and Design student with a strong interest in data structures and modern web development. I enjoy building responsive interfaces and constantly expanding my skills to stay ahead in the ever-evolving tech landscape.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <a href="/resume" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold shadow-lg hover:shadow-teal-400/30 transition-all duration-300 backdrop-blur-sm border border-teal-400/20 hover:scale-105 active:scale-95 text-md lg:text-base group">
                    <span className="flex items-center justify-center">
                      Resume
                    </span>
                  </button>
                </a>

                <a href="/projects" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold shadow-lg hover:shadow-slate-600/30 transition-all duration-300 backdrop-blur-sm border border-teal-400/20 hover:scale-105 active:scale-95  text-md lg:text-base group hover:from-teal-600 hover:to-cyan-500">
                    <span className="flex items-center justify-center">
                      My Work
                    </span>
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Media Section - Centered Below */}
          <div className="flex justify-center ">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-slate-800 text-white ${link.color} transition-colors duration-300 border border-slate-700`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;