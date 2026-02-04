import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaHospital, FaGlobe, FaRocket, FaIndustry, FaLaptopCode } from 'react-icons/fa';
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
      name: "cPanel License Management Platform",
      technology: "MERN Stack, Stripe, JWT, OAuth, MongoDB, Express.js",
      company: "SaaS Platform",
      description: "Full-stack SaaS platform with automated subscription management, payment processing, and license generation. Features include JWT authentication, Google OAuth, Stripe integration, and real-time dashboard updates.",
      link: "https://www.cpanelforless.com/",
      color: "#0066ff",
      status: "Live",
      icon: <FaBriefcase />
    },
    {
      id: 2,
      name: "ITCS Company Website",
      technology: "MERN Stack, RESTful API, Azure, Git, Dev.to Integration",
      company: "IT Consulting & Services",
      description: "IT services and consulting company website built with MERN stack. Features include service showcase, API integration, Azure cloud deployment, Git version control, and Dev.to blog integration for content management.",
      link: "https://itcss.netlify.app/",
      color: "#00d4ff",
      status: "Live",
      icon: <FaLaptopCode />
    },
    {
      id: 3,
      name: "Octaloop Company Website",
      technology: "React.js, Ant Design, Tailwind CSS",
      company: "Octaloop Technologies",
      description: "Company portfolio website with modern UI/UX design, interactive components, and responsive layouts built with React and modern CSS frameworks.",
      link: "https://www.octaloop.io/",
      color: "#0066ff",
      status: "Live",
      icon: <FaGlobe />
    },
    {
      id: 4,
      name: "Gas Station Management System",
      technology: "MERN Stack, React.js, Node.js, MongoDB, Express.js",
      company: "RK & Co",
      description: "Comprehensive gas station management system for inventory tracking, sales management, employee management, and real-time reporting. Features include automated fuel monitoring, transaction processing, and administrative dashboards.",
      link: "https://rkandco.online/",
      color: "#0066ff",
      status: "Live",
      icon: <FaIndustry />
    },
    {
      id: 5,
      name: "Personal Portfolio",
      technology: "React.js, Vite, Framer Motion, CSS3",
      company: "Personal Project",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive UI components.",
      link: "https://www.abubakar-portfolio.site",
      color: "#00d4ff",
      status: "Live",
      icon: <FaRocket />
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
            Full-stack applications and modern web solutions built with MERN stack, cloud platforms, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                style={{ '--project-color': project.color }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="project-icon-large">{project.icon}</div>
                
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>

                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                <div className="project-tech">
                  <strong>Tech Stack:</strong> {project.technology}
                </div>

                <div className="project-company">
                  <strong>Client:</strong> {project.company}
                </div>

                <div className="project-actions">
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project →
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <div 
                  className="project-hover-bg"
                  style={{
                    opacity: hoveredProject === project.id ? 0.15 : 0
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="work-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
          <p className="work-footer-text">
            🚀 Continuously building innovative solutions with modern technologies!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyWork;
