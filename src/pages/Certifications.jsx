import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, Trophy, Medal } from 'lucide-react';
import Particles from '../components/Particles';

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);
  const [flippedId, setFlippedId] = useState(null);


  // Certificate data from your file, converted to teal/cyan theme
  useEffect(() => {
    const certificatesData = [
      {
        id: 1,
        name: "Data Structures and Algorithms (DSA)",   
        organization: "Coding Ninjas",
        skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
        description: "Completed a comprehensive DSA course focused on mastering C++, core Data Structures, Algorithms, and Problem Solving techniques essential for coding interviews and competitive programming.",
        type: "Certification",
        link: "https://drive.google.com/file/d/121CN5JPXXVfjHYLQrNU4336lx1fzVxHY/view?usp=sharing",
        icon: Award
      },

      {
        id: 2,
        name: "Alpha 3.0 DSA",
        organization: "Apna College",
        skills: ["Java", "Data Structures", "Algorithms", "Graphs", "Dynamic Programming", "Greedy Algorithms"],
        description: "Successfully completed the Alpha 3.0 DSA Certification program by Apna College, designed for in-depth mastery of Data Structures and Algorithms using Java.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1W-z1oJ2so6SByXrJKQpdK2aEQDJ27a8G/view?usp=sharing",
        icon: Award
      },

      {
        id: 3,
        name: "Data Analytics and Visualization",
        organization: "Accenture",
        skills: ["Data Cleaning", "Data Modeling", "Data Visualization"],
        description: "Completed Accenture's Data Analytics and Visualization Job Simulation in May 2025, gained hands-on experience in data analytics.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1hYT-TKM5qNIa0NyatZtNe7XvdlIkTdxb/view?usp=sharing",
        icon: Award
      },

      {
        id: 4,
        name: "Getting Started with Competitive Programming",
        organization: "IIT Gandhinagar (NPTEL)",
        skills: ["Competitive Programming", "Algorithms", "Problem Solving", "C++", "Greedy Algorithms", "Dynamic Programming"],
        description: "Successfully completed the NPTEL course, gained foundational skills in algorithms and problem solving using C++ with an aggregated score of 48.",
        type: "Badge",
        link: "https://drive.google.com/file/d/1kZ4NOSDoWtYkXcQLGLeL75GE1r5QOQrA/view?usp=drive_link",
        icon: Award
      },

      {
        id: 5,
        name: "Smart India Hackathon 2024 ",
        organization: "Ministry of Education's Innovation Cell and AICTE",
        skills: ["Machine Learning", "Team Work", "Development", "Innovation", "Problem Solving"],
        description: "Developed an AI-based ship routing solution using real-time weather and agro data.Selected among the top 30 teams from the college for Smart India Hackathon 2024.",
        type: "",
        link: "https://dcs.mitsgwalior.in/certificates/69",
        icon: Award
      },

      {
        id: 6,
        name: "HackByte 3.O",
        organization: "IIITDM Jabalpur",
        skills: ["Problem Solving", "Team Work", "Development"],
        description: "Participated in HackByte 3.0, where I collaborated with my team to develop a centralized pratform for women safety.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1U2ovIbdmGntjiz5o1LTeO1Pedci5aV7c/view?usp=drive_link",
        icon: Award
      },
    ];
    
    setCertificates(certificatesData);
  }, []);

  const handleFlip = (id) => {
    if (flippedId === id) {
      setFlippedId(null);
    } else {
      setFlippedId(id);
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Award':
        return 'from-amber-400/20 to-yellow-400/20 border-amber-400/30';
      case 'Badge':
        return 'from-emerald-400/20 to-green-400/20 border-emerald-400/30';
      default:
        return 'from-teal-400/20 to-cyan-400/20 border-teal-400/30';
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen mt-9">
      {/* Particles Background */}  
      <Particles />
      
      <div className="max-w-6xl mx-auto relative z-10 mt-9">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white  mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => {
              const IconComponent = certificate.icon;
              return (
                <div
                  key={certificate.id}
                  className="group relative h-80 perspective-1000 transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    perspective: '1000px'
                  }}
                >
                  {/* 3D Flip Container */}
                  <div
                    className="w-full h-full cursor-pointer transition-transform duration-700 preserve-3d"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedId === certificate.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                    onClick={() => handleFlip(certificate.id)}
                  >
                    {/* Front Face */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Glassmorphism Card */}
                      <div className="relative w-full h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 flex flex-col justify-between">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
                        
                        {/* Floating Particles */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                        
                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full">
                          {/* Header */}
                          <div>
                            <div className="flex items-start justify-between mb-4">
                              <div className={`p-2 rounded-xl bg-gradient-to-br ${getTypeColor(certificate.type)} transition-all duration-300`}>
                                <IconComponent className="w-6 h-6 text-teal-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                              </div>
                              <span className={`text-xs  px-2 py-1 rounded-full bg-gradient-to-r ${getTypeColor(certificate.type)} text-teal-300`}>
                                {certificate.type}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-white font-mono mb-2 leading-tight group-hover:text-teal-300 transition-colors duration-300">
                              {certificate.name}
                            </h3>
                            
                            <p className="text-slate-400 text-sm font-mono mb-4 opacity-80">
                              {certificate.organization}
                            </p>
                          </div>

                          {/* Skills */}
                          <div className="mb-4">
                            <p className="text-slate-300 text-sm font-mono mb-2">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {certificate.skills.slice(0, 4).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-gradient-to-r from-teal-400/20 to-cyan-400/20 border border-teal-400/30 text-teal-300 text-xs px-2 py-1 rounded-md hover:from-teal-400/30 hover:to-cyan-400/30 transition-all duration-300"
                                >
                                  {skill}
                                </span>
                              ))}
                              {certificate.skills.length > 4 && (
                                <span className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 text-slate-400 text-xs  px-2 py-1 rounded-md">
                                  +{certificate.skills.length - 4}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Flip Indicator */}
                          <div className="text-center">
                            <span className="text-teal-400 text-xs  opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                              Back
                            </span>
                          </div>
                        </div>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/0 via-cyan-400/0 to-blue-400/0 group-hover:from-teal-400/5 group-hover:via-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        transform: 'rotateY(180deg)' 
                      }}
                    >
                      {/* Glassmorphism Card Back */}
                      <div className="relative w-full h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 flex flex-col justify-between">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-teal-400/5 opacity-10 rounded-2xl"></div>
                        
                        {/* Floating Particles */}
                        <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                        
                        {/* Back Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full">
                          <div>
                            <h3 className="text-lg font-bold text-white font-mono mb-3 ">
                              {certificate.name}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                              {certificate.description}
                            </p>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <a
                              href={certificate.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-300 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 hover:from-teal-400/20 hover:to-cyan-400/20 px-3 py-2 rounded-lg border border-teal-400/30 hover:border-teal-400/50"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Certificate
                              <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                            </a>
                            <span className="text-cyan-400 text-xs  opacity-60">
                              Front
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 3D Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-teal-300 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Certifications;
