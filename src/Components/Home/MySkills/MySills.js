import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPalette, FaCog, FaCloud, FaTools } from 'react-icons/fa';
import "./MySkills.css";
import SkillIcon from '../SkillIcon';
import { skillCategories } from '../../../data/siteContent';

const categoryIcons = {
  frontend: <FaPalette />,
  backend: <FaCog />,
  cloud: <FaCloud />,
  tools: <FaTools />
};

const MySkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px"
  });

  const activeSkills = skillCategories.find((category) => category.id === activeCategory)?.skills || [];

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef} aria-labelledby="skills-title">
      <div className="skills-header">
        <h2 className="section-title" id="skills-title">Skills & Expertise</h2>
        <p className="skills-intro">
          Full-stack, cloud, and DevOps capabilities used to design, build, deploy, and maintain production software.
        </p>
      </div>

      <div className="category-tabs" role="tablist" aria-label="Skill categories">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <span className="tab-icon">{categoryIcons[category.id]}</span>
            <span className="tab-text">{category.name}</span>
          </button>
        ))}
      </div>

      <motion.div
        className="skills-container"
        key={activeCategory}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: isInView ? 1 : 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="skills-grid">
          {activeSkills.map((skill) => (
            <li key={skill.name} className="skill-card" style={{ '--skill-color': skill.color }}>
              <span className="skill-icon-wrap">
                <SkillIcon name={skill.icon} size={26} />
              </span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default MySkills;
