import React from 'react';
import { 
  User, 
  Globe, 
  Lightbulb, 
  Heart, 
  Target,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Coffee,
  Music,
  Camera,
  BookOpen,
  Zap,
  Smile,
  Brain,
  Trophy
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const About = () => {
  const aboutCards = [
    {
      id: 'about',
      title: 'About Me',
      icon: User,
      content: "I'm a passionate full-stack developer with 5+ years of experience crafting digital solutions. I love turning complex problems into simple, beautiful, and intuitive designs. My journey in tech started with curiosity and has evolved into a deep passion for creating meaningful user experiences.",
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      id: 'social',
      title: 'Find Me On',
      icon: Globe,
      content: (
        <div className="grid grid-cols-2 gap-4">
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group">
            <Github className="w-5 h-5 text-teal-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group">
            <Linkedin className="w-5 h-5 text-blue-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group">
            <Twitter className="w-5 h-5 text-sky-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm">Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group">
            <Mail className="w-5 h-5 text-emerald-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm">Email</span>
          </a>
        </div>
      ),
      gradient: 'from-cyan-400 to-teal-500'
    },
    {
      id: 'facts',
      title: 'Fun Facts',
      icon: Lightbulb,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Coffee className="w-5 h-5 text-amber-300" />
            <span className="text-sm">500+ cups of coffee consumed this year</span>
          </div>
          <div className="flex items-center gap-3">
            <Music className="w-5 h-5 text-purple-300" />
            <span className="text-sm">Code better with lo-fi beats</span>
          </div>
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-pink-300" />
            <span className="text-sm">Weekend photographer</span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-green-300" />
            <span className="text-sm">Currently reading 3 tech books</span>
          </div>
        </div>
      ),
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'personality',
      title: 'Personality',
      icon: Heart,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="text-sm">High energy & enthusiastic</span>
          </div>
          <div className="flex items-center gap-3">
            <Smile className="w-5 h-5 text-orange-300" />
            <span className="text-sm">Positive & collaborative</span>
          </div>
          <div className="flex items-center gap-3">
            <Brain className="w-5 h-5 text-blue-300" />
            <span className="text-sm">Analytical problem solver</span>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-red-300" />
            <span className="text-sm">Empathetic team player</span>
          </div>
        </div>
      ),
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      id: 'goals',
      title: 'Goals',
      icon: Target,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Master AI/ML technologies</span>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-red-400" />
            <span className="text-sm">Launch a successful SaaS product</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-teal-400" />
            <span className="text-sm">Mentor junior developers</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Contribute to open source</span>
          </div>
        </div>
      ),
      gradient: 'from-blue-400 to-teal-500'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
         <Sidebar />
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4 font-mono">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Get to know me better through these floating glimpses into my world
          </p>
        </div>

        {/* 3D Floating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  index === 0 ? 'lg:col-span-2' : ''
                } ${index === 1 ? 'lg:col-span-1' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* 3D Card */}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl overflow-hidden h-full">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 group-hover:from-teal-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-teal-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-mono tracking-tight">
                        {card.title}
                      </h3>
                    </div>
                    
                    {/* Content */}
                    <div className="text-slate-300 font-light leading-relaxed">
                      {typeof card.content === 'string' ? (
                        <p>{card.content}</p>
                      ) : (
                        card.content
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/0 via-cyan-400/0 to-blue-400/0 group-hover:from-teal-400/5 group-hover:via-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
                </div>
                
                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default About;