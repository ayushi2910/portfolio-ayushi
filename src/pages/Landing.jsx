// pages/Landing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';

const Landing = ({ onNavigateToHome }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Landing clicked - navigating to home'); // Debug log
    if (onNavigateToHome) {
      onNavigateToHome();
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-950 relative overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={handleClick}
      style={{ minHeight: '100vh', width: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Google Fonts Import - Professional Coding Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Fira+Code:wght@400;500;700&family=Source+Code+Pro:wght@400;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Particles Background - Blue themed */}
      <Particles particleCount={60} />
      
      {/* Animated Background Gradient - Teal/Dark theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-950 opacity-80 z-10"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-15 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
          animate={{
            textShadow: [
              '0 0 20px rgba(20, 184, 166, 0.5)',
              '0 0 30px rgba(20, 184, 166, 0.8)',
              '0 0 20px rgba(20, 184, 166, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Welcome to{' '}
          <motion.span 
            className="text-teal-400"
            animate={{
              color: ['#14b8a6', '#ffffff', '#14b8a6']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ayushi's
          </motion.span>
          <br />
          <span className="text-teal-300">Tech World</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 font-medium"
          style={{ fontFamily: 'Fira Code, monospace' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-teal-400">&lt;</span>
          Crafting innovative solutions with code
          <span className="text-teal-400"> /&gt;</span>
        </motion.p>

      
        {/* Click indicator */}
        <motion.div
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              y: [0, -8, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span style={{ fontFamily: 'Source Code Pro, monospace' }} className="font-medium">
              Click anywhere to enter
            </span>
            <motion.div
              className="w-2 h-6 bg-teal-400 opacity-80"
              animate={{
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
          
          {/* Additional clickable area for better UX */}
          <motion.button
            className="mt-8 px-8 py-3 border-2 border-teal-400/50 text-teal-400 rounded-lg hover:bg-teal-400/10 transition-all duration-300 font-mono font-medium backdrop-blur-sm"
            onClick={handleClick}
            whileHover={{ scale: 1.05, borderColor: 'rgba(20, 184, 166, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Enter Portfolio
          </motion.button>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;