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
  Smartphone,
  Palette,
  GitBranch
} from 'lucide-react';
import Profile from '../assets/ayushi portfolio image.png';
import Particles from '../components/Particles';

const Resume = () => {
  const [resumeModal, setResumeModal] = useState(false);

  // Updated data to match the image
  const profileData = {
    name: "Ayushi Ranjan",
    branch: "Computer Science and Design Student",
    email: "itsayushiranjan@gmail.com",
    image: "/api/placeholder/150/150",
    skills: [
      { name: "C++, Python", icon: Code },
      { name: "HTML, CSS, JavaScript", icon: Code },
      { name: "React.js, Node.js, Express.js ", icon: Code },
      { name: "MongoDB, Supabase", icon:Database },
      { name: "Data Structures and Algorithms", icon: Code },
      { name: "Problem Solving", icon: Code },
      { name: "Computer Networking, Github", icon: GitBranch },
      { name: "OOPS, DBMS", icon: GitBranch }
    ]
  };

  const educationData = [
    {
      institution: "Madhav Institute of Technology and Science, Gwalior",
      degree: "B.Tech in Computer Science and Design",
      timeline: "Graduating: 2026",
      score: "Current CGPA: 8.64 (Among highest in branch)",
      type: "cgpa",
      semester: "Semester 6"
    },
    {
      institution: "Shanti Public Hr. Sec. School, Guna",
      degree: "Class 12th - CBSE",
      timeline: "Year: 2021",
      score: "Percentage: 94.%8",
      type: "percentage",
      semester: ""
    },
    {
      institution: "Shanti Public Hr. Sec. School, Guna",
      degree: "Class 10th - CBSE",
      timeline: "Year: 2019",
      score: "Percentage: 93.6%",
      type: "percentage",
      semester: ""
    }
  ];



  const handleDownloadResume = () => {
    window.open("https://drive.google.com/uc?export=download&id=1Q5ag8uGJRgb3tdYDLi_7Z4U8NTNFdPQ7", "_blank");
  };

  return (
    <section className="min-h-screen from-slate-900 via-slate-800 to-slate-900 py-10 sm:py-20 px-4 sm:px-6">
      

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4 font-mono">
             My Resume
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-200 to-teal-300 mx-auto rounded-full mb-4 sm:mb-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          
          {/* Left Column - Profile */}
          <div className="md:col-span-1 brelative bg-gradient-to-br from-teal-200/80 to-teal-200/80 backdrop-blur-xl rounded-2xl p-8 border shadow-2xl overflow-hidden h-full   border-gray-200">
            {/* Profile Section */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4">
                <img 
                  src={Profile} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-900 mb-1">
                {profileData.name}
              </h3>
              <p className="text-teal-700 text-sm mb-2">
                {profileData.branch}
              </p>
              <div className="flex items-center justify-center gap-2 text-teal-700 text-sm">
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h4 className="text-lg font-semibold text-teal-900 mb-4 border-b pb-2">
                Skills
              </h4>
              <div className="space-y-3">
                {profileData.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-start gap-2">
                      <IconComponent className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-2xl border border-gray-200 relative bg-gradient-to-br from-slate-800/80 to-slate-900/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="bg-teal-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {edu.institution}
                    </h4>
                    {edu.degree && (
                      <p className="text-gray-600 text-sm mb-2">{edu.degree}</p>
                    )}
                    {edu.semester && (
                      <p className="text-gray-600 text-sm mb-2">{edu.semester}</p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://drive.google.com/file/d/1Q5ag8uGJRgb3tdYDLi_7Z4U8NTNFdPQ7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 px-6 lg:px-4 py-3 lg:py-4 rounded-xl font-bold shadow-lg hover:shadow-teal-400/30 duration-300 backdrop-blur-sm border border-teal-400/20 hover:scale-105 active:scale-95 text-md lg:text-base group flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume Online</span>
              </a>

              <button
                onClick={handleDownloadResume}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold shadow-lg hover:shadow-slate-600/30  duration-300 backdrop-blur-sm hover:scale-105 active:scale-95  text-md lg:text-base group hover:from-teal-600 hover:to-cyan-500 flex items-center justify-center gap-2 bg-white border border-teal-600 hover:bg-blue-50  transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download as PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {resumeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Resume Preview</h3>
            <p className="text-gray-600 mb-6">
              This would open your full resume in a new tab or display it in a modal.
            </p>
            <button
              onClick={() => setResumeModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;