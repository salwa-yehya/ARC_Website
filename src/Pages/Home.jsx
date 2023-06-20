import React from 'react'

import Team from '../componant/Team'
import ContactUS from '../componant/ContactUS'
import Footer from '../componant/Footer'
import Menu from '../componant/Menu'
import Banner from '../componant/Banner'
import AboutTeam from '../componant/AboutTeam'
import HomeService from '../componant/HomeService'
import GetStarted from '../componant/GetStarted'

const Home = () => {
  return (
    <div>
       <Menu />
       <Banner/>
       <HomeService/>
       <AboutTeam/>
      <GetStarted/>
       <Footer/>
    </div>
  )
}

export default Home