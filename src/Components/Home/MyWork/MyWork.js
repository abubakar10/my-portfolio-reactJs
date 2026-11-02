import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./MyWork.css";
import { projects } from '../../../data/siteContent';
import SkillIcon from '../SkillIcon';

const MyWork = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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
        duration: 0.5
      }
    }
  };

  return (
    <section className='mywork' id='myWork' ref={sectionRef} aria-labelledby="work-title">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mywork-content"
      >
        <motion.div variants={itemVariants} className="work-header">
          <h2 className="section-title" id="work-title">Featured Projects</h2>
          <p className="work-subtitle">
            Selected client and product work spanning full-stack applications, cloud deployments, WordPress, and technical SEO.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                style={{ '--project-color': '#0066ff' }}
              >
                <div className="project-icon-large">
                  <SkillIcon name={project.icon} size={36} />
                </div>

                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="project-tech">
                  <strong>Tech stack:</strong> {project.technology}
                </p>
                <p className="project-company">
                  <strong>Client:</strong> {project.client}
                </p>

                <div className="project-actions">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="project-btn secondary">No public URL</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MyWork;
