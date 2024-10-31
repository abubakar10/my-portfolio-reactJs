import React from 'react'
import Header from "./Header/Header"
import MySkills from './MySkills/MySills'
import ContactMe from './ContactMe/ContactMe'
import Experience from './Experience/Experience'
import SideBar from './SideBar/SideBar'
import MyWork from './MyWork/MyWork'
import { BrowserRouter } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <MyWork/>
       <MySkills/>
      <Experience/>
      <ContactMe/>
      <SideBar/>
      </BrowserRouter>
    </>
  )
}

export default Home
