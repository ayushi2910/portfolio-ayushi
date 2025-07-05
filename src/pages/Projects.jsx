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
//images
import Sahayak from '../assets/sahayak.jpeg';
import FinEase from '../assets/artcanvas.jpeg';
import SortingVisualizer from '../assets/sortingalgo.jpeg';
import SoftSell from '../assets/softsell.jpeg';
import MedicineRec from '../assets/medicine.jpeg';
import RockPaperScissors from '../assets/rps.jpeg';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample projects data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Sahayak- Women Support Platform",
      image: Sahayak,
      description: "A full-stack e-commerce platform with modern UI and secure payment integration.",
      fullDescription: "Sahayak is designed to provide a safe space for women to speak openly about personal safety issues, daily harassment, and concerns they often cannot express aloud. The platform aims to raise awareness, encourage community support, and connect users to helpful resources.",
      keyFeatures: [
        "Create posts to share women security and other concerns",
        "Read experiences shared by other women",
        "Access blogs on women’s safety and awareness",
        "Find emergency helpline numbers and support websites",
        "Filter posts by location and issue type",
        "Comment on posts to suggest solutions or show support",],
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/RohanMalakar/Hack-Byte",
      liveUrl: "https://hack-byte-indol.vercel.app/",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "FinEase",
      image: FinEase,
      description: "AI-powered personal finance platform for smart expense tracking, budgeting, and financial insights.",
      fullDescription: "FinEase is a smart, responsive full-stack finance management platform, it offers users advanced tools to manage their finances effectively, including multi-account management, transaction filtering, real-time dashboards, and monthly budgeting features. With AI-powered receipt scanning and automated insights, users get personalized financial reports on their mails. The app integrates Inngest for background jobs and Arcjet for bot protection and rate limiting. Designed with modern UI/UX principles, FinEase ensures a seamless user experience. Fully deployed on Vercel.",
      techStack: ["Next.js", "React.js" "JavaScript", "Tailwind CSS", "Supabase", "Prisma", "Inngest", "Arcjet", "Shadcn UI"],
      githubUrl: "https://github.com/ayushi2910/Fin-Ease",
      liveUrl: "https://finease-ayushiranjan.vercel.app/",
      category: "Finance Platform"
    },
    {
      id: 3,
      title: "Sorting Algorithm Visualizer",
      image: SortingVisualizer,
      description: "An interactive visualizer built in React to demonstrate and compare real-time sorting algorithms with animations.",
      fullDescription: "Sorting Algorithm Visualizer is a real-time interactive web tool built using ReactJS, Vite, and CSS. It visually demonstrates the working of five sorting algorithms — Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort. The application includes customizable controls for array size and speed levels, and uses color-coded animations to enhance clarity. It has been demonstrated in MITS-DU labs and classrooms to simplify the understanding of algorithm behavior, such as comparisons, swaps, and recursion.",
      techStack: ["ReactJS", "CSS3", "Vite"],
      githubUrl: "https://github.com/ayushi2910/dsa-sorting-algorithm-visualizer",
      liveUrl: "https://verdant-stardust-f941ef.netlify.app/",
      category: "Frontend, DSA"
    },
    {
      id: 4,
      title: "SoftSell–Credex",
      image: SoftSell,
      description: "Responsive marketing website for a fictional SaaS license resale startup.",
      fullDescription: "SoftSell–Credex is a single-page responsive marketing site for a fictional software license resale company. Built with React.js and Tailwind CSS, the site includes key product sections like Hero, How It Works, Why Choose Us, Testimonials, and a Contact Form with frontend validation. The design emphasizes clean UI and modern layout practices. Bonus features include SEO meta tags, favicon, and a light/dark mode toggle. A mock AI-powered chat widget using the OpenAI API simulates customer support interactions with hardcoded prompts and fallback responses.",
      techStack: ["React", "Tailwind CSS", "OpenAI API", "Framer Motion"],
      githubUrl: "https://github.com/ayushi2910/SoftSell-Credex",
      liveUrl: "https://softsell-credex.netlify.app/",
      category: "Front-End"
    },
    {
      id: 5,
      title: "Medicine Recommendation System",
      image: MedicineRec,
      description: "ML-based web system that suggests personalized medications, diets, and precautions.",
      fullDescription: "This project implements a machine learning-based system that provides personalized medical recommendations based on user-inputted symptoms. Trained on a dataset of over 2,150 patient records, the system achieved 91.3% prediction accuracy using optimized classification algorithms. The web interface allows users to enter symptoms and receive real-time recommendations, including suitable medications, corresponding precautions, suggested workouts, and diet plans. It aims to support data-driven healthcare and minimize time spent on manual diagnosis and treatment suggestions.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ayushi2910/medicine-recommendation-system",
      liveUrl: "",
      category: "Machine Learning"
    },
    {
      id: 6,
      title: "Rock Paper Scissors",
      image: RockPaperScissors,
      description: "An animated, interactive Rock Paper Scissors game with sound, score tracking, and dark mode.",
      fullDescription: "Rock Paper Scissors is a modern, interactive web game built using HTML, CSS, and JavaScript. This version includes dark mode with a starry animated background, smooth UI transitions, sound effects for each move, and real-time score tracking for wins and losses. It features a custom cursor with hover effects and tooltips, making gameplay more engaging and visually appealing. The project demonstrates attention to detail in both interactivity and aesthetics, providing a fun user experience in a browser-based game.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ayushi2910/rock-paper-scissors-game",
      liveUrl: "https://dulcet-quokka-637fc5.netlify.app/",
      category: "Game"
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
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-9">
      {/* Particles Background */}  
      <Particles />
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 mt-10">
          <h2 className="text-5xl font-bold text-white  mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Projects</span>
          </h2>
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
                      <span className="text-xs  text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
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
                   

                    {/* View More Button */}
                    <button
                      onClick={() => handleViewMore(project)}
                      className="group/view w-full relative overflow-hidden bg-gradient-to-r from-teal-100 to-cyan-100 hover:from-teal-200 hover:to-cyan-200 text-slate-900  font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25"
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
                  <span className="text-sm  text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
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
                  <h4 className="text-xl font-bold text-white  mb-4">Project Overview</h4>
                  <p className="text-slate-300  leading-relaxed text-sm">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white  mb-4">Technologies Used</h4>
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
                    className="flex-1 group/btn flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600 hover:border-teal-400 text-white  font-bold rounded-xl transition-all duration-300"
                  >
                    <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View on GitHub</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white  font-bold rounded-xl transition-all duration-300"
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
    </section>
  );
};

export default Projects;