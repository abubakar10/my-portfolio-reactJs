import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaComments, FaBriefcase, FaCloud, FaStar } from 'react-icons/fa';
import './Header.css';
import myimage from "./../../../Assets/images/download.jpeg";
import cvPdf from "./../../../download.pdf";
import { HashLink as Link } from 'react-router-hash-link';
import { profile, navItems } from '../../../data/siteContent';

const highlightIcons = [FaBriefcase, FaCloud, FaStar];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
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
    <motion.header
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav variants={itemVariants} aria-label="Primary">
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
        >
          <p className="brand-name">{profile.name}</p>
        </motion.a>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} smooth onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.nav>

      <motion.div className="content" variants={containerVariants}>
        <motion.div className='intro' variants={itemVariants}>
          <motion.span
            className="title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {profile.role}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {profile.headline}
          </motion.h1>
          <motion.p
            className="role-line"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {profile.positioning}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {profile.summary}
          </motion.p>

          <motion.ul
            className="hero-highlights"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {profile.highlights.map((item, index) => {
              const Icon = highlightIcons[index] || FaBriefcase;
              return (
                <li key={item}>
                  <Icon aria-hidden="true" />
                  {item}
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#myWork"
              className="btn-modern primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="btn-icon">
                <FaBriefcase />
              </span>
              View My Work
            </motion.a>
            <motion.a
              href={cvPdf}
              download="Malik_Abubakar_Shafeeq_CV.pdf"
              className="btn-modern secondary"
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
              Contact Me
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
          <img src={myimage} alt={profile.fullName} width="400" height="400" />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
