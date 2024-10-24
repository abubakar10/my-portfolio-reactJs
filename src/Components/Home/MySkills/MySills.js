import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import "./MySkills.css"
import html from "./../../../Assets/icons/html.png"
import css from "./../../../Assets/icons/css-3.png"
import bootstrap from "./../../../Assets/icons/icons8-bootstrap-50.png"
import javascript from "./../../../Assets/icons/icons8-javascript-50.png"
import react from "./../../../Assets/icons/icons8-react-js-30.png"
import responsive from "./../../../Assets/icons/icons8-responsive-50.png"
import divider from "./../../../Assets/images/divider.png"

const MySkills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use useEffect to initialize Intersection Observer
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // Set visible to true when section is in view
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.unobserve(entry.target); // Stop observing once section is in view
  //       }
  //     },
  //     { threshold: 0.5 } // Trigger when section is 50% in view
  //   );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="technologies" id='skills' ref={sectionRef}>
      <h1>Skills</h1>
      <div className='divider'>
        <img src={divider} alt="" />
      </div>
      <div className="skillsText">
        <div className='skillHeading'>
          <h3>Modern Technologies</h3>
        </div>
        <div className="skillParagraph">
          <p>
            Technology changes but I keep up with it. I look to modern technology to deliver the best performance, security, and flexibility for your digital business, ensuring your team can get more done, easier and faster.
          </p>
        </div>
      </div>

      <div className='motiondiv'>
      <motion.div
        className="technology"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.7 }} // Add delay for staggered animation
      >
        <div className='skill'>
          <div className='skill-icon'>
            <img src={javascript} alt="" />
          </div>
          <div className="skill-text">
             <h6>JAVASCRIPT</h6>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="technology"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.7, delay: 0.2 }} // Add delay for staggered animation
      >
        <div className='skill'>
          <div className='skill-icon'>
            <img src={react} alt="" />
          </div>
          <div className="skill-text">
             <h6>React JS</h6>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="technology"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.7, delay: 0.4 }} // Add delay for staggered animation
      >
        <div className='skill'>
          <div className='skill-icon'>
            <img src={responsive} alt="" />
          </div>
          <div className="skill-text">
             <h6>RESPONSIVE DESIGNS</h6>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="technology"
        initial={{ opacity: 0, y: 50 }} // Initial animation properties
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }} // Animate when visible
        transition={{ duration: 0.7, delay:0.6 }} // Animation duration
      >
        <div className='skill'>
          <div className='skill-icon'>
            <img src={html} alt="" />
          </div>
          <div className="skill-text">
             <h6>HTML5</h6>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="technology"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.7, delay: 0.8 }} // Add delay for staggered animation
      >
        <div className='skill'>
          <div className='skill-icon'>
            <img src={css} alt="" />
          </div>
          <div className="skill-text">
             <h6>CSS3</h6>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="technology"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.7, delay: 1.0 }} // Add delay for staggered animation
      >
        <div className='skill'>
          <div className='skill-icon'>
            <img src={bootstrap} alt="" />
          </div>
          <div className="skill-text">
             <h6>BOOTSTRAP5</h6>
          </div>
        </div>
      </motion.div>
      
      </div>
      {/* Add more technologies as needed */}
      <div className="skillsText">
        <div className='skillHeading'>
          <h3>Balanced Life </h3>
        </div>
        <div className="skillParagraph">
            <p>    
             Magical things happen when your personal life and work life are in balance ✨.
            </p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
