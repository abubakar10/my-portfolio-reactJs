import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cloudExpertise } from '../../../data/siteContent';
import SkillIcon from '../SkillIcon';
import '../shared.css';
import './CloudDevOps.css';

const CloudDevOps = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });

  return (
    <section
      className="portfolio-section cloud-section"
      id="cloud"
      ref={sectionRef}
      aria-labelledby="cloud-title"
    >
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title" id="cloud-title">{cloudExpertise.title}</h2>
          <p className="section-subtitle">{cloudExpertise.description}</p>
        </motion.div>

        <div className="cloud-grid">
          {cloudExpertise.groups.map((group, index) => (
            <motion.article
              key={group.id}
              className="cloud-card"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.4, delay: 0.08 * index }}
            >
              <div className="cloud-card-header">
                <span className="cloud-icon">
                  <SkillIcon name={group.icon} size={26} />
                </span>
                <h3>{group.name}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDevOps;
