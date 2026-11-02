import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import "./ContactMe.css";
import cvPdf from "./../../../download.pdf";
import { links, profile } from '../../../data/siteContent';

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

  const cards = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: links.phoneLabel,
      href: links.phone
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: links.emailLabel,
      href: links.email
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: profile.location
    },
    {
      icon: <FaBriefcase />,
      title: "Available For",
      value: profile.availability
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "abubakar-shafeeq1",
      href: links.linkedin,
      external: true
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "abubakar10",
      href: links.github,
      external: true
    },
    {
      icon: <SiUpwork />,
      title: "Upwork",
      value: "Top Rated Freelancer",
      href: links.upwork || "#freelance",
      external: Boolean(links.upwork)
    }
  ];

  return (
    <motion.section
      className="contactMe"
      id='contactMe'
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-labelledby="contact-title"
    >
      <motion.div variants={itemVariants} className="contact-header">
        <h2 className="section-title" id="contact-title">Get In Touch</h2>
      </motion.div>

      <motion.div variants={itemVariants} className="contact-intro">
        <h3>Let's build something reliable together</h3>
        <p>
          I'm available for full-time, contract, and freelance work. If you need a full-stack application, cloud deployment, DevOps automation, or a polished web experience, let's talk.
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="contact-info-grid">
        {cards.map((card) => (
          <motion.article
            key={card.title}
            variants={itemVariants}
            className="contact-card"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="contact-icon">{card.icon}</div>
            <div className="contact-details">
              <h3>{card.title}</h3>
              <p>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                  >
                    {card.value}
                  </a>
                ) : card.value}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="download-section">
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

      <motion.footer variants={itemVariants} className="contact-footer">
        <p className="thank-you">Thank you for visiting. I look forward to working together.</p>
        <p className="copyright">© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
        <div className="social-links-footer">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span aria-hidden="true">·</span>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span aria-hidden="true">·</span>
          {links.upwork ? (
            <a href={links.upwork} target="_blank" rel="noopener noreferrer">Upwork</a>
          ) : (
            <a href="#freelance">Upwork</a>
          )}
        </div>
      </motion.footer>
    </motion.section>
  );
};

export default ContactMe;
