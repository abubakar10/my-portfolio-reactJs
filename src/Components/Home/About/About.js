import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { about, profile } from '../../../data/siteContent';
import '../shared.css';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      className="portfolio-section about-section"
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title" id="about-title">{about.title}</h2>
          <p className="section-subtitle">{about.intro}</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="about-meta">
              {profile.fullName} · {profile.location} · {profile.yearsExperience} years experience
            </p>
          </motion.div>

          <motion.ul
            className="about-focus"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            {about.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;
