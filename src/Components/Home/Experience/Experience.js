import React from 'react'
import "./Experience.css"
import divider from "./../../../Assets/images/divider.png"

const Experience = () => {
  return (
    <div className='mainexperience'>
    <h1>My Experience</h1>
        <div className='divider'>
            <img src={divider} alt="" />
          </div>
     <div className='experience'>
       
            <div className='experience1'>
              <h2>Front End Developer Intern</h2>
              <h3>Octaloop Technologies/Full Time</h3>
              <h4>
                August 2023 -October 2024  <br />
                Islamabad, Pakistan · On-site
              </h4>
              <p className='para1'>
                  ● Specialized in responsive web design and user interfaces. <br />
                  ● Utilized tools like React.js, Tailwind, and Bootstrap to create seamless user interfaces. <br />
                  ● Used SendGrid to make email templates attractive. <br />
                  ● We collaborated effectively using Git version control. <br />
                  ● I have a strong focus on writing clean and efficient code. <br />
                  ● I am contributing to the creation of impactful web solutions. <br />
                  ● I have utilized the following skills at this platform. <br />
               </p>
               <p className='skillsp'>
               <span>Skills:</span> JavaScript · React.js  · Git · Github · Responsive Web Design · HTML5 · CSS3· Tailwind CSS · Bootstrap 5 · Web Development.
               </p>
            </div>
            <div className='experience2'>
              <h2>Front End Developer</h2>
              <h3>Upwork/Full Time</h3>
              <h4>
                January 2024-Present  <br />
                Islamabad, Pakistan · On-site
              </h4>
              <p className='para1'>
                  ● Specialized in responsive web design and user interfaces. <br />
                  ● Utilized tools like React.js, Tailwind, and Bootstrap to create seamless user interfaces. <br />
                  ● Used SendGrid to make email templates attractive. <br />
                  ● We collaborated effectively using Git version control. <br />
                  ● I have a strong focus on writing clean and efficient code. <br />
                  ● I am contributing to the creation of impactful web solutions. <br />
                  ● I have utilized the following skills at this platform. <br />
               </p>
               <p>
               <span>Skills:</span> JavaScript · React.js  · Git · Github · Responsive Web Design · HTML5 · CSS3· Tailwind CSS · Bootstrap 5 · Web Development.
               </p>
            </div>
     </div> 
    </div>
  )
}

export default Experience
