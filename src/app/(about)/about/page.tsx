import React from 'react'
// import Header from '../components/header'
// import Navbar from '../components/header'
// import AboutHome from '../components/home'
import AboutHomePage from '../components/home'
import Navbar from '../components/header'
import Problems from '../components/problems'
import Costumers from '../components/costumers'
import Video from '../components/video'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHomePage/>
        <Problems/>
        <Costumers/>
        <Video/>
    </div>
  )
}

export default About