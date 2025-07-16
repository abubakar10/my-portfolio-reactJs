import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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
      title: "Full Stack Developer Intern",
      company: "Octaloop Technologies",
      type: "Intern",
      duration: "08/2023 - 09/2024",
      location: "Islamabad, Pakistan",
      achievements: [
        "Developed and maintained web applications using React.js, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS",
        "Collaborated on dynamic web solutions for improved user experiences and functionality",
        "Worked with cross-functional teams to deliver high-quality web solutions",
        "Gained hands-on experience with modern frontend technologies and best practices"
      ],
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
      color: "#667eea",
      icon: "💼"
    },
    {
      id: 2,
      title: "Front End Developer",
      company: "Upwork (Freelance)",
      type: "Freelance",
      duration: "12/2023 - Present",
      location: "Remote",
      achievements: [
        "Developing responsive and interactive web applications using React.js, HTML, CSS, and JavaScript",
        "Creating modern UI/UX designs with focus on user experience and accessibility",
        "Collaborating with clients to understand requirements and deliver custom solutions",
        "Maintaining high code quality and following industry best practices"
      ],
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      color: "#764ba2",
      icon: "🌐"
    }
  ], []);

  const educationData = React.useMemo(() => [
    {
      id: 1,
      degree: "BS in Information Technology",
      institution: "University of Gujrat",
      duration: "2020 - 2024",
      location: "Gujrat, Pakistan",
      description: "Comprehensive study of computer science fundamentals, software development, and modern web technologies",
      icon: "🎓",
      color: "#ff6b6b"
    }
  ], []);

  const projectsData = React.useMemo(() => [
    {
      id: 1,
      name: "My Portfolio Website",
      technologies: "React.js, CSS3, Bootstrap",
      description: "Personal portfolio showcasing development skills and projects",
      link: "https://abubakar-portfolio11.netlify.app",
      icon: "🚀"
    },
    {
      id: 2,
      name: "SpaceX Info API",
      technologies: "React.js, REST API, Bootstrap",
      description: "Interactive application displaying SpaceX mission data",
      link: "https://spacex-info-api.netlify.app",
      icon: "🛸"
    },
    {
      id: 3,
      name: "Falcon Logistics",
      technologies: "React.js, Bootstrap, CSS3",
      description: "Logistics management system with modern UI design",
      link: "#",
      icon: "📦"
    }
  ], []);

  const tabsData = [
    { id: 'experience', label: 'Work Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'projects', label: 'Key Projects', icon: '🚀' }
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
                  <span className="duration">📅 {exp.duration}</span>
                  <span className="location">📍 {exp.location}</span>
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
              <span className="duration">📅 {edu.duration}</span>
              <span className="location">📍 {edu.location}</span>
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
          Exploring my path through technology, education, and impactful projects
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
            <span className="stat-number">1+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
