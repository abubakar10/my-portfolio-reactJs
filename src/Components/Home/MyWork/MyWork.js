import React from 'react'
import "./MyWork.css"
import divider from "./../../../Assets/images/divider.png"

const MyWork = () => {
  return (
    <>
      <div className='mywork' id='myWork'>
        <h1>What Projects I've Done</h1>
        <div className='divider'>
           <img src={divider} alt="" />
        </div>
        <div className="rectangular-box">
          <div className="row">
           <div className="column" style={{ backgroundColor: 'black', color: 'white' }}><h2>Project</h2></div>
           <div className="column technolgy" style={{ backgroundColor: 'black', color: 'white'  }}><h2>Technology</h2></div>
           <div className="column company" style={{ backgroundColor: 'black', color: 'white'  }}><h2>Company</h2></div>
           <div className="column" style={{ backgroundColor: 'black', color: 'white'  }}><h2>Visit website</h2></div>
         </div>
         <div className="row">
           <div className="column"><h4>My Portfolio</h4></div>
           <div className="column languages"><h4>React Js,CSS,Bootstrap </h4></div>
           <div className="column forwhom"><h4>For MySelf</h4></div>
           <div className="column"><h4><a href="https://github.com/abubakar10/my-portfolio-reactJs">Visit</a></h4></div>
         </div>
         <div className="row">
         <div className="column "><h4>Falcon Logistics</h4></div>
           <div className="column languages"><h4>React Js,Bootstrap,CSS</h4></div>
           <div className="column forwhom"><h4>Falcon Logistics</h4></div>
           <div className="column"><h4><a href="https://github.com/abubakar10/my-portfolio-reactJs">Visit</a></h4></div>
         </div>
         <div className="row">
         <div className="column"><h4>ToeFit Website</h4></div>
           <div className="column languages"><h5>MERN Stack,CSS</h5></div>
           <div className="column forwhom"><h4>For Practice</h4></div>
           <div className="column"><h4><a href="https://github.com/abubakar10/my-portfolio-reactJs">Visit</a></h4></div>
         </div>
        </div>

      </div>
      
    </>
  )
}

export default MyWork
