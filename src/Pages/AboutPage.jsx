import React from 'react'
import Team from '../componant/Team'
import Pageshead from '../componant/Pageshead'
import Footer from '../componant/Footer'
import Menu from '../componant/Menu'
import Vision from '../componant/Vision'
import OurVisionSection from '../componant/OurVisionSection'

const AboutPage = () => {
  return (
    <div>
          <Menu/>
          <Pageshead pageTitle="about us" description="The Most Important Thing To Us Is Satisfy Our Customers .."/> 
          <Vision/> 
          <OurVisionSection/>
          <Team/>
          <Footer/>
    </div>
  )
}

export default AboutPage