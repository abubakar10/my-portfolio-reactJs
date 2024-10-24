// AppWithSidebar.js

import React from 'react';
import './SideBar.css';
import github from "./../../../Assets/icons/github.png"
import linkedIn from "./../../../Assets/icons/linkedin.png"
const SideBar = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <ul>
          <li> <a href="https://github.com/abubakar10"><img src={github} alt="Github" /></a></li>
          <li> <a href="https://www.linkedin.com/in/abubakar-shafeeq-88294b243/"><img src={linkedIn} alt="LinkedIn" /></a></li>
         
          {/* Add more menu items as needed */}
        </ul>
      </div>
      
    </div>
  );
};

export default SideBar;