import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  GraduationCap, 
  Calendar, 
  Award, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  GitBranch,
  Server,
  Layers
} from 'lucide-react';

const Resume = () => {
  const [resumeModal, setResumeModal] = useState(false);

  // Sample data - replace with your actual information
  const profileData = {
    name: "John Developer",
    branch: "Computer Science Engineering",
    email: "john.developer@gmail.com",
    image: "/api/placeholder/150/150", // Circular profile image
    skills: [
      { name: "JavaScript", icon: Code },
      { name: "React", icon: Layers },
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code },
      { name: "MongoDB", icon: Database },
      { name: "Git", icon: GitBranch },
      { name: "HTML/CSS", icon: Globe },
      { name: "UI/UX", icon: Palette },
      { name: "React Native", icon: Smartphone }
    ]
  };

  const educationData = [
    {
      institution: "XYZ University",
      degree: "B.Tech Computer Science",
      timeline: "2020 - 2024",
      score: "8.5 CGPA",
      type: "cgpa"
    },
    {
      institution: "ABC Higher Secondary School",
      degree: "12th Grade - Science",
      timeline: "2018 - 2020",
      score: "92%",
      type: "percentage"
    }
  ];

  const handleViewResume = () => {
    setResumeModal(true);
    // In real implementation, this could open a modal or navigate to a full resume view
  };

  const handleDownloadResume = () => {
    // In real implementation, this would trigger PDF download
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Replace with actual resume PDF path
    link.download = 'John_Developer_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white font-mono mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* 3D Floating Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Grid - Profile & Skills */}
          <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            {/* 3D Card */}
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl overflow-hidden h-full">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Profile Section */}
                <div className="text-center mb-8">
                  {/* Circular Profile Image */}
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-400 to-cyan-400 p-1 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:rotate-6 transition-transform duration-300">
                      <img 
                        src={profileData.image} 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full">
                      <User className="w-6 h-6 text-teal-300 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Profile Info */}
                  <h3 className="text-3xl font-bold text-white font-mono mb-2 tracking-tight">
                    {profileData.name}
                  </h3>
                  <p className="text-xl text-teal-300 font-mono mb-2">
                    {profileData.branch}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-slate-300 mb-6">
                    <Mail className="w-5 h-5 text-teal-400" />
                    <span className="font-mono">{profileData.email}</span>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h4 className="text-2xl font-bold text-white font-mono mb-6 text-center">
                    Technical Skills
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {profileData.skills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={index}
                          className="group/skill relative overflow-hidden"
                        >
                          <button className="w-full p-3 bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-teal-400/20 hover:to-cyan-400/20 border border-slate-600/50 hover:border-teal-400/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25">
                            <div className="flex items-center justify-center gap-2">
                              <IconComponent className="w-4 h-4 text-teal-300 group-hover/skill:rotate-12 transition-transform duration-300" />
                              <span className="text-sm font-mono text-white group-hover/skill:text-teal-300 transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/0 via-cyan-400/0 to-blue-400/0 group-hover:from-teal-400/5 group-hover:via-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
            </div>
            
            {/* 3D Shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
          </div>

          {/* Right Grid - Education & CTA */}
          <div className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            {/* 3D Card */}
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl overflow-hidden h-full">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-teal-400/5 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
              
              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Education Section */}
                <div className="flex-1 mb-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-teal-400/20 group-hover:from-cyan-400/30 group-hover:to-teal-400/30 transition-all duration-300">
                      <GraduationCap className="w-8 h-8 text-cyan-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-mono tracking-tight">
                      Education
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {educationData.map((edu, index) => (
                      <div key={index} className="relative">
                        <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl p-6 border border-slate-600/30 hover:border-teal-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-bold text-white font-mono">
                              {edu.institution}
                            </h4>
                            <div className="flex items-center gap-2 text-teal-300">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-mono">{edu.timeline}</span>
                            </div>
                          </div>
                          <p className="text-slate-300 font-mono mb-2">{edu.degree}</p>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-300 font-mono font-semibold">{edu.score}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleViewResume}
                    className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-mono font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>View Resume Online</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </button>

                  <button
                    onClick={handleDownloadResume}
                    className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border-2 border-teal-400/50 hover:border-teal-400 text-white font-mono font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Download className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Download Resume</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/20 to-teal-400/0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-teal-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:via-teal-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
            </div>
            
            {/* 3D Shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
          </div>
        </div>

        {/* Resume Modal */}
        {resumeModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-md w-full border border-slate-700">
              <h3 className="text-2xl font-bold text-white font-mono mb-4">Resume Preview</h3>
              <p className="text-slate-300 font-mono mb-6">
                This would open your full resume in a new tab or display it in a modal.
              </p>
              <button
                onClick={() => setResumeModal(false)}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-mono font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
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

export default Resume;