// components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', path: '/home', label: 'Home', icon: FiHome },
    { id: 'about', path: '/about', label: 'About Me', icon: FiUser },
    { id: 'resume', path: '/resume', label: 'Resume', icon: FiFileText },
    { id: 'projects', path: '/projects', label: 'Projects', icon: FaFolderOpen },
    { id: 'certifications', path: '/certifications', label: 'Certifications', icon: FiAward },
    { id: 'contact', path: '/contact', label: 'Contact Me', icon: FiMail },
  ];

  const sidebarVariants = {
    expanded: { width: "280px" },
    collapsed: { width: "80px" }
  };

  const textVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  };

  return (
    <motion.div
      className="fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-md border-r border-gray-800 z-30"
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col h-full">
        {/* Brand Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <motion.h1
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'Orbitron, monospace' }}
              variants={textVariants}
              animate={isCollapsed ? "collapsed" : "expanded"}
            >
              Ayushi
            </motion.h1>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              {isCollapsed ? <FiMenu size={20} /> : <FiX size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 group ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={`flex-shrink-0 ${isActive ? 'text-white' : 'group-hover:text-purple-400'}`} 
                    />
                    <motion.span
                      className="ml-3 font-medium"
                      variants={textVariants}
                      animate={isCollapsed ? "collapsed" : "expanded"}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <motion.div
          className="p-6 border-t border-gray-800"
          variants={textVariants}
          animate={isCollapsed ? "collapsed" : "expanded"}
        >
          <p className="text-xs text-gray-500 text-center">
            © 2025 Ayushi Ranjan
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;