import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import "./MySkills.css";
import html from "./../../../Assets/icons/html.png";
import css from "./../../../Assets/icons/css-3.png";
import bootstrap from "./../../../Assets/icons/icons8-bootstrap-50.png";
import javascript from "./../../../Assets/icons/icons8-javascript-50.png";
import react from "./../../../Assets/icons/icons8-react-js-30.png";
import responsive from "./../../../Assets/icons/icons8-responsive-50.png";
import divider from "./../../../Assets/images/divider.png";

const MySkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  
  // Use Framer Motion's useInView hook for better performance
  const isInView = useInView(sectionRef, { 
    once: true, // Only trigger once for better performance
    amount: 0.2,
    margin: "0px 0px -100px 0px" // Start animation before element is fully visible
  });

  // Memoize skill data to prevent unnecessary re-renders
  const skillsData = React.useMemo(() => ({
    frontend: [
      { 
        id: 1, 
        name: "React.js", 
        icon: react, 
        level: 90, 
        description: "Building interactive UIs with modern React patterns",
        color: "#61DAFB"
      },
      { 
        id: 2, 
        name: "JavaScript", 
        icon: javascript, 
        level: 85, 
        description: "ES6+ features and modern JavaScript development",
        color: "#F7DF1E"
      },
      { 
        id: 3, 
        name: "HTML5", 
        icon: html, 
        level: 95, 
        description: "Semantic markup and accessibility standards",
        color: "#E34F26"
      },
      { 
        id: 4, 
        name: "CSS3", 
        icon: css, 
        level: 88, 
        description: "Advanced styling with animations and layouts",
        color: "#1572B6"
      },
      { 
        id: 5, 
        name: "Bootstrap", 
        icon: bootstrap, 
        level: 80, 
        description: "Responsive framework for rapid development",
        color: "#7952B3"
      },
      { 
        id: 6, 
        name: "Responsive Design", 
        icon: responsive, 
        level: 92, 
        description: "Mobile-first approach and cross-device compatibility",
        color: "#FF6B6B"
      }
    ],
    tools: [
      { 
        id: 7, 
        name: "Git & GitHub", 
        icon: html, 
        level: 85, 
        description: "Version control and collaborative development",
        color: "#F05032"
      },
      { 
        id: 8, 
        name: "Development Tools", 
        icon: css, 
        level: 90, 
        description: "Modern IDE usage and productivity tools",
        color: "#007ACC"
      }
    ]
  }), []);

  const categories = React.useMemo(() => [
    { id: 'frontend', name: 'Frontend Technologies', icon: '🎨' },
    { id: 'tools', name: 'Development Tools', icon: '🛠️' }
  ], []);

  // Optimized animation variants with reduced complexity
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Reduced duration
        delayChildren: 0.1, // Reduced delay
        staggerChildren: 0.08 // Reduced stagger
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, // Reduced movement
      scale: 0.95 // Less dramatic scale
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Increased stiffness for faster animation
        damping: 15, // Adjusted damping
        duration: 0.4 // Added max duration
      }
    },
    hover: {
      scale: 1.03, // Reduced hover scale
      y: -5, // Reduced hover movement
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.2
      }
    }
  };

  // Memoized callbacks to prevent unnecessary re-renders
  const handleSkillHover = useCallback((skillId) => {
    setHoveredSkill(skillId);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  // Set hasAnimated when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="technologies" id="skills" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="skills-header"
      >
        <h1>My Skills & Expertise</h1>
        <div className="divider">
          <img src={divider} alt="" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="skillsText"
      >
        <div className="skillHeading">
          <h3>Modern Technologies</h3>
        </div>
        <div className="skillParagraph">
          <p>
            Technology changes but I keep up with it. I focus on modern
            technology to deliver the best performance, security, and flexibility
            for digital solutions, ensuring exceptional results every time.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="category-tabs"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <span className="tab-icon">{category.icon}</span>
            <span className="tab-text">{category.name}</span>
          </button>
        ))}
      </motion.div>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="skills-grid">
          {skillsData[activeCategory].map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              variants={skillVariants}
              whileHover="hover"
              onHoverStart={() => handleSkillHover(skill.id)}
              onHoverEnd={handleSkillLeave}
              style={{ '--skill-color': skill.color }}
              layout // Add layout animation for category switching
              transition={{ layout: { duration: 0.3 } }}
            >
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <div className="skill-glow"></div>
                </div>
                
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">{skill.description}</p>
                  
                  <div className="skill-level">
                    <div className="level-label">
                      <span>Proficiency</span>
                      <span className="level-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: isInView ? `${skill.level}%` : '0%' 
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.3 + (skill.id * 0.1), // Staggered delay
                          ease: "easeOut"
                        }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        className="balanced-life-section"
      >
        <div className="skillsText">
          <div className="skillHeading">
            <h3>Balanced Life ⚖️</h3>
          </div>
          <div className="skillParagraph">
            <p>
              Magical things happen when your personal life and work life are in
              balance ✨. I believe in continuous learning, creativity, and maintaining
              harmony to deliver exceptional results.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MySkills;
