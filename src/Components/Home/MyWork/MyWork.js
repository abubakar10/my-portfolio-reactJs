import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import "./MyWork.css";
import divider from "./../../../Assets/images/divider.png";

const MyWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1
  });

  const projects = [
    {
      id: 1,
      name: "My Portfolio",
      technology: "React.js, CSS3, Bootstrap",
      company: "Personal Project",
      link: "https://abubakar-portfolio11.netlify.app",
      color: "#667eea",
      status: "Live"
    },
    {
      id: 2,
      name: "SpaceX Info API",
      technology: "React.js, REST API, Bootstrap",
      company: "Learning Project",
      link: "https://spacex-info-api.netlify.app",
      color: "#764ba2",
      status: "Live"
    },
    {
      id: 3,
      name: "Falcon Logistics",
      technology: "React.js, Bootstrap, CSS3",
      company: "Falcon Logistics",
      link: "https://github.com/abubakar10/my-portfolio-reactJs",
      color: "#ff6b6b",
      status: "In Progress"
    },
    {
      id: 4,
      name: "ToeFit Website",
      technology: "MERN Stack, CSS3",
      company: "Practice Project",
      link: "https://github.com/abubakar10/my-portfolio-reactJs",
      color: "#ee5a6f",
      status: "Development"
    }
  ];

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
    <div className='mywork' id='myWork' ref={sectionRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mywork-content"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="work-header">
          <h1>Featured Projects</h1>
          <div className='divider'>
            <img src={divider} alt="Divider" />
          </div>
          <p className="work-subtitle">
            Explore my recent projects showcasing modern web development skills and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{ '--project-color': project.color }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>

                <div className="project-tech">
                  <strong>Tech Stack:</strong> {project.technology}
                </div>

                <div className="project-company">
                  <strong>Client:</strong> {project.company}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    View Project →
                  </a>
                  <button className="project-btn secondary">
                    Learn More
                  </button>
                </div>

                {/* Hover Effect */}
                <div 
                  className="project-hover-bg"
                  style={{
                    opacity: hoveredProject === project.id ? 0.1 : 0
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="work-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          <p className="work-footer-text">
            🚀 More exciting projects coming soon!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyWork;
