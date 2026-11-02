import React from 'react'
import Header from "./Header/Header"
import About from './About/About'
import MySkills from './MySkills/MySills'
import CloudDevOps from './CloudDevOps/CloudDevOps'
import ContactMe from './ContactMe/ContactMe'
import Experience from './Experience/Experience'
import Freelance from './Freelance/Freelance'
import SideBar from './SideBar/SideBar'
import MyWork from './MyWork/MyWork'
import { BrowserRouter } from 'react-router-dom'
import './shared.css'

const Home = () => {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#about">Skip to content</a>
      <Header />
      <main>
        <About />
        <MySkills />
        <CloudDevOps />
        <Experience />
        <Freelance />
        <MyWork />
        <ContactMe />
      </main>
      <SideBar />
    </BrowserRouter>
  )
}

export default Home
