import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { freelance, links } from '../../../data/siteContent';
import '../shared.css';
import './Freelance.css';

const Freelance = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const upworkHref = links.upwork;

  return (
    <section
      className="portfolio-section freelance-section"
      id="freelance"
      ref={sectionRef}
      aria-labelledby="freelance-title"
    >
      <div className="section-inner">
        <motion.div
          className="section-header freelance-header"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4 }}
        >
          <span className="top-rated-badge">
            <FaStar aria-hidden="true" />
            {freelance.badge}
          </span>
          <h2 className="section-title" id="freelance-title">{freelance.title}</h2>
          <p className="section-subtitle">{freelance.description}</p>
        </motion.div>

        <motion.ul
          className="freelance-services"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {freelance.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </motion.ul>

        <motion.div
          className="freelance-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          {upworkHref ? (
            <a
              href={upworkHref}
              className="btn-modern primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Upwork Profile
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          ) : (
            <a href="#contactMe" className="btn-modern primary">
              Hire Me on Upwork
            </a>
          )}
          <a href="#contactMe" className="btn-modern secondary">Discuss a Project</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;
