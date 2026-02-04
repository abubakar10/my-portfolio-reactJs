import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaComments } from 'react-icons/fa';
import './Header.css';
import myimage from "./../../../Assets/images/download.jpeg";
import cvPdf from "./../../../download.pdf";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.4
      }
    }
  };

  return (
    <motion.div 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav variants={itemVariants}>
        <motion.a 
          href="/" 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
        >
          <h1>Abubakar Shafeeq</h1>
        </motion.a>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="#skills" smooth onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="#experience" smooth onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="#myWork" smooth onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contactMe" smooth onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.nav>

      <motion.div className="content" variants={containerVariants}>
        <motion.div className='intro' variants={itemVariants}>
          <motion.span 
            className="title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Software Engineer
          </motion.span>
          <motion.h6
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full-Stack Developer | MERN Stack Specialist
          </motion.h6>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Software Engineer with hands-on experience in building and maintaining product-based web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in developing clean, scalable, and high-performance user interfaces with seamless backend integration.
            <br /><br />
            Strong expertise in modern frontend frameworks, state management, and performance optimization. Backend expertise includes RESTful API development, authentication and authorization, real-time communication, and database optimization. Experienced in cloud platforms including Azure and AWS, with hands-on exposure to deployments, CI/CD pipelines, and application monitoring.
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href={cvPdf} 
              download="Malik_Abubakar_Shafeeq_CV.pdf" 
              className="btn-modern primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="btn-icon">
                <FaFileDownload />
              </span>
              Download CV
            </motion.a>
            <motion.a 
              href="#contactMe" 
              className="btn-modern secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="btn-icon">
                <FaComments />
              </span>
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className='myImage'
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <img src={myimage} alt="Abubakar Shafeeq" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;

