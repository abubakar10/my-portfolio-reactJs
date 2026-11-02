import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaRocket, FaPalette, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import "./Experience.css";
import { experience, education, projects, profile } from '../../../data/siteContent';
import SkillIcon from '../SkillIcon';

const roleIcons = {
  1: <FaBriefcase />,
  2: <FaRocket />,
  3: <FaPalette />
};

const Experience = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('experience');
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -30px 0px"
  });

  const tabsData = [
    { id: 'experience', label: 'Work Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'projects', label: 'Key Projects', icon: <FaRocket /> }
  ];

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

  const renderExperience = () => (
    <div className="timeline-container">
      {experience.map((exp) => (
        <motion.article
          key={exp.id}
          variants={itemVariants}
          className="timeline-item"
          style={{ '--item-color': '#0066ff' }}
        >
          <div className="timeline-marker">
            <span className="timeline-icon">{roleIcons[exp.id] || <FaBriefcase />}</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="job-info">
                <h3>{exp.title}</h3>
                <h4>{exp.company} · {exp.type}</h4>
                <div className="duration-location">
                  <span className="duration">
                    <FaCalendarAlt aria-hidden="true" />
                    {exp.duration}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="achievements">
              <h5>Key contributions</h5>
              <ul>
                {exp.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="experience-tech">
              <h5>Technologies</h5>
              <div className="tech-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="education-container">
      {education.map((edu) => (
        <motion.article
          key={edu.id}
          variants={itemVariants}
          className="education-card"
          style={{ '--edu-color': '#00d4ff' }}
        >
          <div className="education-icon"><FaGraduationCap /></div>
          <div className="education-content">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <div className="edu-details">
              <span className="duration">
                <FaCalendarAlt aria-hidden="true" />
                {edu.duration}
              </span>
              <span className="location">
                <FaMapMarkerAlt aria-hidden="true" />
                {edu.location}
              </span>
            </div>
            <p>{edu.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="experience-projects-grid">
      {projects.map((project) => (
        <motion.article
          key={project.id}
          variants={itemVariants}
          className="project-item"
        >
          <div className="project-icon">
            <SkillIcon name={project.icon} size={28} />
          </div>
          <div className="project-content">
            <h4>{project.name}</h4>
            <p className="project-tech">{project.technology}</p>
            <p className="project-desc">{project.description}</p>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            ) : (
              <span className="project-link project-link-disabled">Internal contribution</span>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'education') return renderEducation();
    if (activeTab === 'projects') return renderProjects();
    return renderExperience();
  };

  return (
    <motion.section
      className='mainexperience'
      id="experience"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-labelledby="experience-title"
    >
      <motion.div variants={itemVariants} className="experience-header">
        <h2 className="section-title" id="experience-title">Professional Journey</h2>
        <p className="section-subtitle">
          Building scalable solutions with the MERN stack, cloud platforms, and modern development practices.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="experience-tabs" role="tablist">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </motion.div>

      <motion.div className="experience-content" variants={containerVariants} key={activeTab}>
        {renderContent()}
      </motion.div>

      <motion.div variants={itemVariants} className="experience-footer">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{profile.yearsExperience}</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Companies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Featured Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Top Rated</span>
            <span className="stat-label">Upwork Freelancer</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
