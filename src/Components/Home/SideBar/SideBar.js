// AppWithSidebar.js

import React from 'react';
import { motion } from 'framer-motion';
import './SideBar.css';
import github from "./../../../Assets/icons/github.png";
import linkedIn from "./../../../Assets/icons/linkedin.png";

const SideBar = () => {
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      icon: github,
      url: "https://github.com/abubakar10",
      color: "#333"
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: linkedIn,
      url: "https://www.linkedin.com/in/abubakar-shafeeq1/",
      color: "#0077B5"
    }
  ];

  const containerVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="app-container">
      <motion.div 
        className="sidebar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ul>
          {socialLinks.map((link) => (
            <motion.li 
              key={link.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ '--link-color': link.color }}
              >
                <img src={link.icon} alt={link.name} />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SideBar;