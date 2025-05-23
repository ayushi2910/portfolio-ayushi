import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Eye, 
  X,
  Code,
  Smartphone,
  Globe,
  Database,
  Server,
  Palette
} from 'lucide-react';
import Particles from '../components/Particles';
import Sidebar from '../components/Sidebar';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample projects data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "/api/placeholder/400/250",
      description: "A full-stack e-commerce platform with modern UI and secure payment integration.",
      fullDescription: "This comprehensive e-commerce platform features a modern, responsive design built with React and Node.js. It includes user authentication, product catalog, shopping cart functionality, secure payment processing with Stripe, order management, and an admin dashboard. The application uses MongoDB for data storage and implements JWT for authentication. Key features include <br> real-time inventory updates, email notifications, search and filtering capabilities, and mobile-responsive design. The platform is deployed on AWS with CI/CD pipeline integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      image: "/api/placeholder/400/250",
      description: "A collaborative task management application with real-time updates and team features.",
      fullDescription: "A comprehensive task management solution designed for teams and individuals. Built with React and Firebase, this application offers real-time collaboration features, drag-and-drop task organization, deadline tracking, and progress visualization. Users can create projects, assign tasks to team members, set priorities, and track completion status. The app includes notification systems, file attachments, comment threads, and detailed analytics. It features a clean, intuitive interface with dark/light mode support and is fully responsive across all devices.",
      techStack: ["React", "Firebase", "Material-UI", "TypeScript"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://taskmanager-demo.com",
      category: "Web App"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      image: "/api/placeholder/400/250",
      description: "Beautiful weather app with location-based forecasts and interactive maps.",
      fullDescription: "An elegant weather application that provides comprehensive weather information with stunning visual design. The app fetches real-time weather data from OpenWeatherMap API and displays current conditions, hourly forecasts, and 7-day predictions. Features include location-based weather detection, search functionality for any city worldwide, interactive weather maps, severe weather alerts, and historical weather data. The application uses geolocation services and includes animated weather icons, gradient backgrounds that change based on weather conditions, and detailed metrics like humidity, wind speed, and UV index.",
      techStack: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weather-forecast-demo.com",
      category: "API Integration"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      image: "/api/placeholder/400/250",
      description: "Analytics dashboard for social media management with data visualization.",
      fullDescription: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms including Twitter, Instagram, and Facebook. Built with React and D3.js, it provides detailed insights into engagement rates, follower growth, content performance, and audience demographics. The dashboard features interactive charts, real-time data updates, custom date range filtering, and automated report generation. It includes sentiment analysis of comments and mentions, competitor analysis tools, and scheduling features for posts. The application uses OAuth for secure platform integration and implements responsive design for mobile and desktop use.",
      techStack: ["React", "D3.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/username/social-dashboard",
      liveUrl: "https://social-analytics-demo.com",
      category: "Analytics"
    },
    {
      id: 5,
      title: "Portfolio Website",
      image: "/api/placeholder/400/250",
      description: "Personal portfolio website with modern animations and responsive design.",
      fullDescription: "A stunning personal portfolio website showcasing projects, skills, and experience with modern web technologies. Built with React and featuring smooth animations, 3D elements, and interactive components. The site includes a dynamic project gallery, skill visualization, contact form with email integration, blog section, and downloadable resume. It implements lazy loading for optimal performance, SEO optimization, and analytics tracking. The design features glassmorphism effects, gradient animations, and a responsive layout that works seamlessly across all devices and screen sizes.",
      techStack: ["React", "Three.js", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://myportfolio-demo.com",
      category: "Portfolio"
    },
    {
      id: 6,
      title: "Chat Application",
      image: "/api/placeholder/400/250",
      description: "Real-time chat application with group messaging and file sharing capabilities.",
      fullDescription: "A feature-rich real-time chat application built with React and Socket.io that supports individual and group messaging. The application includes user authentication, online status indicators, typing indicators, message history, file and image sharing, emoji support, and push notifications. Users can create chat rooms, manage group settings, and share multimedia content. The app features end-to-end encryption for secure messaging, message search functionality, and customizable themes. It's fully responsive and includes offline message queuing, ensuring messages are delivered when users come back online.",
      techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/username/chat-app",
      liveUrl: "https://chatapp-demo.com",
      category: "Real-time"
    }
  ];

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const renderTechStack = (techStack) => {
    const visibleTags = techStack.slice(0, 3);
    const remainingCount = techStack.length - 3;

    return (
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 text-teal-300 text-sm font-mono rounded-full hover:from-teal-400/20 hover:to-cyan-400/20 hover:border-teal-400/50 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 text-slate-400 text-sm font-mono rounded-full">
            +{remainingCount} more
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Particles Background */}
      <Particles particleCount={40} />
      
      {/* Sidebar */}
      <Sidebar />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white font-mono mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 font-mono max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* 3D Floating Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* 3D Card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6">
                  {/* Project Title & Category */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white font-mono tracking-tight group-hover:text-teal-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm font-mono leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    {renderTechStack(project.techStack)}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    {/* GitHub & Live Demo */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 hover:from-slate-600/50 hover:to-slate-700/50 border border-slate-600/50 hover:border-teal-400/50 text-white font-mono text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 hover:from-slate-600/50 hover:to-slate-700/50 border border-slate-600/50 hover:border-cyan-400/50 text-white font-mono text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    </div>

                    {/* View More Button */}
                    <button
                      onClick={() => handleViewMore(project)}
                      className="group/view w-full relative overflow-hidden bg-gradient-to-r from-teal-100 to-cyan-100 hover:from-teal-200 hover:to-cyan-200 text-slate-900 font-mono font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4 group-hover/view:rotate-12 transition-transform duration-300" />
                        <span>View More</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-full group-hover/view:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/0 via-cyan-400/0 to-blue-400/0 group-hover:from-teal-400/5 group-hover:via-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
              </div>
              
              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700/50 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <div>
                  <h3 className="text-3xl font-bold text-white font-mono mb-2">
                    {selectedProject.title}
                  </h3>
                  <span className="text-sm font-mono text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-slate-700/50 rounded-xl transition-colors duration-300 group"
                >
                  <X className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                {/* Project Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white font-mono mb-4">Project Overview</h4>
                  <p className="text-slate-300 font-mono leading-relaxed text-sm">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white font-mono mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 border border-teal-400/30 text-teal-300 font-mono rounded-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600 hover:border-teal-400 text-white font-mono font-bold rounded-xl transition-all duration-300"
                  >
                    <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View on GitHub</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-mono font-bold rounded-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
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

export default Projects;