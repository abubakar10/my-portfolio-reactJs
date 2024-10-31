import React from 'react';
import './Header.css'
import myimage from "./../../../Assets/images/download.png"
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
  return (
    <>
    
      <div className="hero">
        <nav>
          <a href="/"><h1>Abubakar Shafeeq</h1></a>
          <ul>
            <li>
               <Link to="#skills" smooth>
                   My Skills
              </Link>
            </li>
            <li>
               <Link to="#contactMe" smooth>
                 Contact Me
              </Link>
            </li>
            <li>
               <Link to="#myWork" smooth>
                  What I've Done
              </Link>
            </li>
  
            {/* <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li> */}
            
          </ul>
         
        </nav>

        <div className="content">
             <div className='intro'>
             <span className="title">Freelance Web Developer</span>
            <h6>Passionate Web Developer.</h6>
            <p>
               As a dedicated frontend developer with a strong passion for creating exceptional user experiences, I bring 0.6 years of expertise in HTML5, CSS3, JavaScript, and React. My skills extend to frameworks like Bootstrap5, and I'm currently diving deep into the world of Node JS. <br /><br />

               I thrive on crafting visually stunning and functional web applications. My journey involves embracing modern technologies and ensuring a seamless blend of performance, security, and flexibility in digital solutions.
            </p>
            
          <a href="/AbubakarShafeeqResume.pdf" download="AbubakarShafeeqResume.pdf" className="btn">Download CV</a>
          </div>
          <div className='myImage'>
            <img src={myimage} alt="" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;

