import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import myimage from "./../../../Assets/images/download.png";
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
                My Skills
              </Link>
            </li>
            <li>
              <Link to="#contactMe" smooth onClick={closeMenu}>
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="#myWork" smooth onClick={closeMenu}>
                What I've Done
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
          <span className="title">Freelance Web Developer</span>
          <h6>Passionate Web Developer.</h6>
          <p>
            As a dedicated frontend developer with a strong passion for creating exceptional user experiences, I bring 0.6 years of expertise in HTML5, CSS3, JavaScript, and React. My skills extend to frameworks like Bootstrap5, and I'm currently diving deep into the world of Node JS.
            <br /><br />
            I thrive on crafting visually stunning and functional web applications. My journey involves embracing modern technologies and ensuring a seamless blend of performance, security, and flexibility in digital solutions.
          </p>
          
          <motion.a 
            href="/AbubakarShafeeqResume.pdf" 
            download="AbubakarShafeeqResume.pdf" 
            className="btn-modern"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <span className="btn-icon">📄</span>
            Download CV
          </motion.a>
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

