import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="py-8 mt-12 border-t border-teal-400/30"
      style={{ backgroundColor: '#0f172a' }} // slate-900
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          
          {/* Left: Branding */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <span 
              className="text-xl font-semibold bg-clip-text text-transparent" 
              style={{ backgroundImage: 'linear-gradient(to right, #2dd4bf, #0d9488)' }} // teal-400 to teal-600
            >
              Ayushi Ranjan
            </span>
            <p className="text-slate-300 mt-1 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </motion.div>

          {/* Right: Back to Top Button (Arrow Only) */}
          <motion.div
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer p-2 rounded-full border border-teal-400/50 hover:bg-teal-900/30 transition duration-300"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-teal-300" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;