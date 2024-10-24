import React from 'react';
import "./ContactMe.css";
import divider from "./../../../Assets/images/divider.png"
import { Link } from 'react-router-dom';
const ContactMe = () => {
  return (
    <>
     <div className="contactMe" id='contactMe'>
       <h1>Contact Me</h1>
         <div className='divider'>
            <img src={divider} alt="" />
          </div>
        <h2>I am available on contract to reboot something that needs a bit of help. Stop by and Say "Hi" or drop me a note.</h2>
        <h3>Contact: <br /> +923045414897</h3>
        <h3>Email: <br /> <a href="mailto:abubakarr1011@gmail.com">abubakarr1011@gmail.com</a></h3>
        <Link href="./Malik Abubakar Shafeeq Resume (2).pdf" download="Resume.pdf" className="btn">Download CV</Link>
        <h6>From virtual to reality, your visit is valued. Thank you 🙂 for being here!</h6>
        <div className='divider'>
            <img src={divider} alt="" />
          </div>
          <h6>© 2030 Malik Abubakar Shafeeq. All rights reserved.</h6>
     </div>
      
    </>
  )
}

export default ContactMe
