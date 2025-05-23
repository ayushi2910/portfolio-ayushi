import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUser, 
  FiFileText, 
  FiAward, 
  FiMail,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { FaFolderOpen } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('home');

  // Sync active item with current route
  useEffect(() => {
    const currentPath = location.pathname;
    const activeNavItem = navItems.find(item => currentPath.includes(item.path));
    if (activeNavItem) {
      setActiveItem(activeNavItem.id);
    }
  }, [location]);

  const navItems = [
    { id: 'home', path: '/home', label: 'Home', icon: FiHome },
    { id: 'about', path: '/about', label: 'About', icon: FiUser },
    { id: 'resume', path: '/resume', label: 'Resume', icon: FiFileText },
    { id: 'projects', path: '/projects', label: 'Projects', icon: FaFolderOpen },
    { id: 'certifications', path: '/certifications', label: 'Certs', icon: FiAward },
    { id: 'contact', path: '/contact', label: 'Contact', icon: FiMail },
  ];

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Glassmorphism Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative backdrop-blur-xl bg-gradient-to-r from-teal-900/30 via-emerald-800/20 to-teal-900/30 
                       border border-teal-400/30 rounded-2xl shadow-2xl shadow-teal-500/20"
            style={{
              background: 'linear-gradient(135deg, rgba(19, 78, 74, 0.4) 0%, rgba(6, 95, 70, 0.3) 50%, rgba(19, 78, 74, 0.4) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center justify-between px-7 py-2">
              {/* Brand Logo */}
              <Link to="/home">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2"
                >
                  <div className="relative">
                    <div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 
                                 flex items-center justify-center shadow-lg"
                      style={{
                        boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <span 
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace' }}
                      >
                        A
                      </span>
                    </div>
                    <div 
                      className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full 
                                 animate-pulse shadow-lg"
                      style={{ boxShadow: '0 0 10px rgba(52, 211, 153, 0.8)' }}
                    />
                  </div>
                  <div>
                    <h1 
                      className="text-xl font-bold text-white tracking-wider"
                      style={{ 
                        fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
                        textShadow: '0 2px 10px rgba(20, 184, 166, 0.5)'
                      }}
                    >
                      AYUSHI
                    </h1>
                    <div className="text-xs text-teal-300 opacity-80 font-mono">
                      &lt;/developer&gt;
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  
                  return (
                    <Link to={item.path} key={item.id} onClick={handleItemClick}>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl 
                                  transition-all duration-300 group ${
                          isActive
                            ? 'bg-gradient-to-r from-teal-500/40 to-emerald-500/40 text-white shadow-lg'
                            : 'text-teal-200 hover:text-white hover:bg-teal-800/30'
                        }`}
                        style={{
                          fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
                          ...(isActive && {
                            boxShadow: '0 4px 20px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                          })
                        }}
                      >
                        <Icon 
                          size={16} 
                          className={`${isActive ? 'text-teal-200' : 'group-hover:text-teal-300'} 
                                     transition-colors duration-300`}
                        />
                        <span className="text-sm font-medium tracking-wide">
                          {item.label}
                        </span>
                        
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 
                                     rounded-xl border border-teal-400/30"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-teal-800/30 text-teal-200 
                         hover:text-white hover:bg-teal-700/40 transition-all duration-300"
                style={{
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(20, 184, 166, 0.2)'
                }}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 pb-4 pt-2 border-t border-teal-400/20">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.id;
                    
                    return (
                      <Link to={item.path} key={item.id} onClick={handleItemClick}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl 
                                    transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-teal-500/40 to-emerald-500/40 text-white'
                              : 'text-teal-200 hover:text-white hover:bg-teal-800/30'
                          }`}
                          style={{
                            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
                            ...(isActive && {
                              boxShadow: '0 4px 15px rgba(20, 184, 166, 0.2)'
                            })
                          }}
                        >
                          <Icon size={18} />
                          <span className="font-medium tracking-wide">{item.label}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;