import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaRocket, FaPalette, FaGraduationCap, FaHospital, FaGlobe, FaMapMarkerAlt, FaCalendarAlt, FaIndustry, FaLaptopCode } from 'react-icons/fa';
import "./Experience.css";
import divider from "./../../../Assets/images/divider.png";

const Experience = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('experience');
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.1, // Reduced for better mobile detection
    margin: "0px 0px -30px 0px" // Reduced margin for mobile
  });

  const experienceData = React.useMemo(() => [
    {
      id: 1,
      title: "Software Engineer",
      company: "IT Consulting and services",
      type: "Full-time",
      duration: "12/2024 – Present",
      location: "Islamabad, Pakistan",
      achievements: [
        "Built full-stack SaaS platform for cPanel license sales with automated subscription management",
        "Developed RESTful API with JWT authentication, Google OAuth, and bcrypt password hashing",
        "Integrated Stripe payment processing with webhook handling for subscription management",
        "Implemented cPanel Partner API integration for automated license generation and lifecycle management",
        "Created automated subscription renewals using node-cron with scheduled job processing",
        "Implemented role-based access control (RBAC) with admin and user permission levels",
        "Integrated email service (Brevo) for transactional emails and renewal reminders",
        "Developed PDF invoice generation and optimized database queries with Mongoose aggregation",
        "Built responsive UI with React, Vite, Tailwind CSS and real-time dashboard updates",
        "Implemented SEO optimization with structured data (Schema.org) and Open Graph tags"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "Vite", "Tailwind CSS", "Stripe", "JWT", "OAuth", "node-cron", "Mongoose"],
      color: "#0066ff",
      icon: <FaBriefcase />
    },
    {
      id: 2,
      title: "React Intern",
      company: "Troon Technologies",
      type: "Internship",
      duration: "09/2024 – 11/2024",
      location: "Remote",
      achievements: [
        "Contributed to product-based applications as a React Intern, focusing on frontend development using React.js and TypeScript",
        "Designed and implemented responsive, reusable UI components using Ant Design and Tailwind CSS",
        "Integrated frontend features with backend services using REST and GraphQL APIs",
        "Assisted in state management using Recoil and React hooks to improve application maintainability",
        "Collaborated with cross-functional teams using GitHub and participated in code reviews and UI optimizations",
        "Designed and developed frontend UI for Iconify, a medical system application"
      ],
      technologies: ["React.js", "TypeScript", "Ant Design", "Tailwind CSS", "REST API", "GraphQL", "Recoil", "GitHub"],
      color: "#00d4ff",
      icon: <FaRocket />
    },
    {
      id: 3,
      title: "Front End Intern",
      company: "Octaloop Technologies",
      type: "Internship",
      duration: "08/2023 – 10/2023",
      location: "Remote",
      achievements: [
        "Worked as a Frontend Intern, contributing to UI development using HTML, CSS, JavaScript, and React",
        "Designed and implemented responsive, reusable UI components using Ant Design and Tailwind CSS",
        "Implemented responsive layouts and reusable components based on design requirements",
        "Fixed UI bugs, improved styling consistency, and supported senior developers in frontend tasks",
        "Gained hands-on experience with real-world development workflows and collaborative version control practices",
        "Designed and developed frontend UI for company portfolio website"
      ],
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Ant Design", "Tailwind CSS", "Bootstrap"],
      color: "#0066ff",
      icon: <FaPalette />
    }
  ], []);

  const educationData = React.useMemo(() => [
    {
      id: 1,
      degree: "Bachelor in Information Technology",
      institution: "International Islamic University Islamabad",
      duration: "09/2020 – 08/2024",
      location: "Islamabad, Pakistan",
      description: "Courses: Programming Fundamentals, Object-Oriented Programming, Data Structure & Algorithms, Analysis of Algorithms, Operating Systems, Database management system, Android Development, Web Development, Artificial Intelligence",
      icon: <FaGraduationCap />,
      color: "#00d4ff"
    }
  ], []);

  const projectsData = React.useMemo(() => [
    {
      id: 1,
      name: "cPanel License Management Platform",
      technologies: "MERN Stack, Stripe, JWT, OAuth, node-cron",
      description: "Full-stack SaaS platform for cPanel license sales with automated subscription management, payment processing, and license generation",
      link: "#",
      icon: <FaBriefcase />
    },
    {
      id: 2,
      name: "ITCS Company Website",
      technologies: "MERN Stack, RESTful API, Azure, Git, Dev.to",
      description: "IT services and consulting company website with API integration, Azure cloud deployment, and Dev.to blog integration",
      link: "https://itcss.netlify.app/",
      icon: <FaLaptopCode />
    },
    {
      id: 3,
      name: "Octaloop Company Website",
      technologies: "React.js, Ant Design, Tailwind CSS",
      description: "Company portfolio website with modern UI/UX design and interactive components",
      link: "#",
      icon: <FaGlobe />
    },
    {
      id: 4,
      name: "Gas Station Management System",
      technologies: "MERN Stack, React.js, Node.js, MongoDB, Express.js",
      description: "Comprehensive gas station management system for inventory tracking, sales management, employee management, and real-time reporting",
      link: "https://rkandco.online/",
      icon: <FaIndustry />
    }
  ], []);

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
      {experienceData.map((exp, index) => (
        <motion.div
          key={exp.id}
          variants={itemVariants}
          className="timeline-item"
          style={{ '--item-color': exp.color }}
        >
          <div className="timeline-marker">
            <span className="timeline-icon">{exp.icon}</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="job-info">
                <h3>{exp.title}</h3>
                <h4>{exp.company} • {exp.type}</h4>
                <div className="duration-location">
                  <span className="duration">
                    <FaCalendarAlt style={{ marginRight: '5px', fontSize: '0.9em' }} />
                    {exp.duration}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt style={{ marginRight: '5px', fontSize: '0.9em' }} />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="achievements">
              <h5>Key Achievements:</h5>
              <ul>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="technologies">
              <h5>Technologies Used:</h5>
              <div className="tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="education-container">
      {educationData.map((edu) => (
        <motion.div
          key={edu.id}
          variants={itemVariants}
          className="education-card"
          style={{ '--edu-color': edu.color }}
        >
          <div className="education-icon">{edu.icon}</div>
          <div className="education-content">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <div className="edu-details">
              <span className="duration">
                <FaCalendarAlt style={{ marginRight: '5px', fontSize: '0.9em' }} />
                {edu.duration}
              </span>
              <span className="location">
                <FaMapMarkerAlt style={{ marginRight: '5px', fontSize: '0.9em' }} />
                {edu.location}
              </span>
            </div>
            <p>{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="projects-grid">
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className="project-item"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="project-icon">{project.icon}</div>
          <div className="project-content">
            <h4>{project.name}</h4>
            <p className="project-tech">{project.technologies}</p>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'experience':
        return renderExperience();
      case 'education':
        return renderEducation();
      case 'projects':
        return renderProjects();
      default:
        return renderExperience();
    }
  };

  return (
    <motion.div 
      className='mainexperience'
      id="experience"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ opacity: 1, visibility: 'visible' }} // Fallback to always show
    >
      <motion.div
        variants={itemVariants}
        className="experience-header"
        style={{ opacity: 1 }} // Fallback
      >
        <h1>Professional Journey</h1>
        <div className='divider'>
          <img src={divider} alt="" />
        </div>
        <p className="section-subtitle">
          Building scalable solutions with MERN stack, cloud platforms, and modern development practices
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="experience-tabs"
        style={{ opacity: 1 }} // Fallback
      >
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </motion.div>

      <motion.div
        className="experience-content"
        variants={containerVariants}
        key={activeTab} // Force re-animation when tab changes
        style={{ opacity: 1 }} // Fallback
      >
        {renderContent()}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="experience-footer"
        style={{ opacity: 1 }} // Fallback
      >
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Companies</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
