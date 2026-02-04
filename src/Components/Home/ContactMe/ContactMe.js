import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaFileDownload } from 'react-icons/fa';
import "./ContactMe.css";
import divider from "./../../../Assets/images/divider.png";
import cvPdf from "./../../../download.pdf";

const ContactMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2,
    margin: "0px 0px -50px 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
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
      className="contactMe" 
      id='contactMe'
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        variants={itemVariants}
        className="contact-header"
      >
        <h1>Get In Touch</h1>
        <div className='divider'>
          <img src={divider} alt="" />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="contact-intro"
      >
        <h2>Let's Build Something Amazing Together</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack solution, frontend expertise, or cloud infrastructure, let's connect!</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="contact-info-grid"
      >
        <motion.div 
          variants={itemVariants} 
          className="contact-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="contact-icon">
            <FaPhone />
          </div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p>
              <a href="tel:+923045414897">+92 304 5414897</a>
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="contact-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>
              <a href="mailto:abubakarr1011@gmail.com">abubakarr1011@gmail.com</a>
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="contact-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-details">
            <h3>Location</h3>
            <p>Islamabad, Pakistan</p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="contact-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="contact-icon">
            <FaBriefcase />
          </div>
          <div className="contact-details">
            <h3>Available For</h3>
            <p>Full-time • Contract • Freelance</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="download-section"
      >
        <motion.a 
          href={cvPdf} 
          download="Malik_Abubakar_Shafeeq_CV.pdf" 
          className="btn-modern"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <span className="btn-icon">
            <FaFileDownload />
          </span>
          Download CV
        </motion.a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="contact-footer"
      >
        <p className="thank-you">Thank you for visiting my portfolio! Let's create something extraordinary together. 🚀</p>
        <div className='divider'>
          <img src={divider} alt="" />
        </div>
        <p className="copyright">© {new Date().getFullYear()} Malik Abubakar Shafeeq. All rights reserved.</p>
        <div className="social-links-footer">
          <a href="https://www.linkedin.com/in/abubakar-shafeeq1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/abubakar10" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
