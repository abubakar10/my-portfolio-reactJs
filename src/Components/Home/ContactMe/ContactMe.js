import React, { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import "./ContactMe.css";
import divider from "./../../../Assets/images/divider.png";

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
        <h2>I am available on contract to reboot something that needs a bit of help. Stop by and Say "Hi" or drop me a note.</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="contact-info-grid"
      >
        <motion.div variants={itemVariants} className="contact-card">
          <div className="contact-icon">📞</div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p>+923045414897</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="contact-card">
          <div className="contact-icon">✉️</div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>
              <a href="mailto:abubakarr1011@gmail.com">abubakarr1011@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="download-section"
      >
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
        variants={itemVariants}
        className="contact-footer"
      >
        <p className="thank-you">From virtual to reality, your visit is valued. Thank you 🙂 for being here!</p>
        <div className='divider'>
          <img src={divider} alt="" />
        </div>
        <p className="copyright">© 2030 Malik Abubakar Shafeeq. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
