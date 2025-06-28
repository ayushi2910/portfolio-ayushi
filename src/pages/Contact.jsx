import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { Send, Users, Mail, MessageSquare } from 'lucide-react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending...");
    emailjs
      .send(
        "service_bhbl9kr",
        "template_qvh5som",
        formData,
        "7Lfamo_ktg_Be7Prd"
      )
      .then(() => {
        toast.update(toastId, {
          render: "Message Sent Successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch(() => {
        toast.update(toastId, {
          render: "Failed to send message. Try again later.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const FloatingElement = ({ delay, x, y, scale, rotate, children }) => (
    <motion.div
      className="absolute text-sky-300/30 pointer-events-none"
      initial={{ x, y }}
      animate={{
        x: [x, x + 10, x - 5, x + 5, x],
        y: [y, y - 10, y + 5, y - 5, y],
        rotate: [rotate, rotate + 5, rotate - 3, rotate + 2, rotate],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay
      }}
      style={{ scale }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">

      {/* Contact form container */}
      <motion.div 
        className="relative z-10 p-8 mt-12 mb-12 rounded-2xl bg-slate-900/90 backdrop-blur-lg shadow-xl border border-sky-300/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="mt-2 text-lg text-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Have a question or want to work together? Send me a message!
          </motion.p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-3 top-3 text-teal-300">
              <Users size={20} />
            </div>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-teal-300/20 rounded-lg focus:ring-2 focus:ring-teal-300/50 focus:border-teal-300/50 outline-none backdrop-blur-sm text-slate-100"
              placeholder="Your Name"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-3 top-3 text-teal-300">
              <Mail size={20} />
            </div>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-teal-300/20 rounded-lg focus:ring-2 focus:ring-teal-300/50 focus:border-teal-300/50 outline-none backdrop-blur-sm text-slate-100"
              placeholder="Your Email"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-3 top-3 text-teal-300">
              <MessageSquare size={20} />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-teal-300/20 rounded-lg focus:ring-2 focus:ring-teal-300/50 focus:border-teal-300/50 outline-none backdrop-blur-sm resize-none text-slate-100"
              placeholder="Your Message"
            />
          </motion.div>

          {/* Submit */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              type="submit"
              className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-medium rounded-lg shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              >
                <Send size={18} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Footer note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-400">
            You can also reach me directly at <span className="text-teal-300 font-medium">itsayushiranjan@gmail.com</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
