import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./MyWork.css";
import divider from "./../../../Assets/images/divider.png";

const MyWork = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "My Portfolio",
      technology: "React.js, CSS3, Bootstrap 5",
      company: "Personal Project",
      link: "https://abubakar-portfolio11.netlify.app",
      color: "#667eea",
      status: "Live",
      description: "A modern, responsive portfolio showcasing my development skills and projects."
    },
    {
      id: 2,
      name: "SpaceX Info API",
      technology: "React.js, REST API, Bootstrap",
      company: "Learning Project",
      link: "https://spacex-info-api.netlify.app",
      color: "#764ba2",
      status: "Live",
      description: "Interactive SpaceX mission data viewer with real-time API integration."
    },
    {
      id: 3,
      name: "Falcon Logistics",
      technology: "React.js, Bootstrap, CSS3",
      company: "Falcon Logistics",
      link: "https://github.com/abubakar10/my-portfolio-reactJs",
      color: "#ff6b6b",
      status: "In Progress",
      description: "Complete logistics management system with modern UI/UX design."
    },
    {
      id: 4,
      name: "ToeFit Website",
      technology: "MERN Stack, CSS3",
      company: "Practice Project",
      link: "https://github.com/abubakar10/my-portfolio-reactJs",
      color: "#ee5a6f",
      status: "Development",
      description: "Full-stack fitness application with user authentication and tracking."
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    }, { threshold: 0.3 });

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className='mywork' 
      id='myWork'
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <motion.div
        variants={itemVariants}
        className="work-header"
      >
        <h1>Featured Projects</h1>
        <div className='divider'>
          <img src={divider} alt="" />
        </div>
        <div className="work-intro">
          <p>Explore my recent projects showcasing modern web development skills and creative solutions.</p>
        </div>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={projectCardVariants}
            whileHover="hover"
            className="project-card"
            style={{ '--project-color': project.color }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <div className="project-content">
              <div className="project-header">
                <div className="project-title-section">
                  <h3>{project.name}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-number">0{project.id}</div>
              </div>
              
              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <div className="project-details">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">🛠️ Technology</span>
                    <span className="detail-value">{project.technology}</span>
                  </div>
                </div>
                
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">🏢 Client</span>
                    <span className="detail-value">{project.company}</span>
                  </div>
                </div>
              </div>

              <div className="project-actions">
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <span className="link-arrow">→</span>
                </motion.a>
                
                <motion.button
                  className="project-link secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                </motion.button>
              </div>
            </div>

            {/* Animated background glow */}
            <motion.div 
              className="project-glow"
              animate={{
                opacity: hoveredProject === project.id ? 0.6 : 0,
                scale: hoveredProject === project.id ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="work-footer"
      >
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Technologies Used</span>
          </div>
        </div>
        <p className="footer-text">
          🚀 More exciting projects are in development! Follow my journey as I continue building innovative web solutions.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MyWork;
