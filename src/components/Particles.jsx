// components/Particles.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Particles = ({ particleCount = 50, className = "" }) => {
  const [particles, setParticles] = useState([]);

  // Generate random particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: Math.random() * 0.6 + 0.2,
          shape: Math.random() > 0.5 ? 'circle' : 'square',
          color: ['purple', 'blue', 'cyan', 'green', 'pink'][Math.floor(Math.random() * 5)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, [particleCount]);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Wrap around screen edges
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;
          
          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color) => {
    const colors = {
      purple: 'bg-purple-400',
      blue: 'bg-blue-400',
      cyan: 'bg-cyan-400',
      green: 'bg-green-400',
      pink: 'bg-pink-400'
    };
    return colors[color] || 'bg-white';
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${getColorClass(particle.color)} ${
            particle.shape === 'circle' ? 'rounded-full' : 'rotate-45'
          }`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            rotate: particle.shape === 'square' ? [45, 405] : [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 border-2 border-purple-400 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-6 h-6 border-2 border-blue-400"
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full"
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-5 h-5 border-2 border-green-400 rounded-full"
        animate={{
          rotate: [0, -360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-8 h-8 border border-white opacity-20"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-6 h-6 border border-white opacity-20 rotate-45"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [45, 405],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Particles;