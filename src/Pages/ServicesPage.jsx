import React from 'react'
import Services from '../componant/Services'
import Pageshead from '../componant/Pageshead'
import Footer from '../componant/Footer'
import OurServices from '../componant/OurServices'
import Menu from '../componant/Menu'

const ServicesPage = () => {
  return (
    <div>
          <Menu/>
          <Pageshead pageTitle="Services" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, expedita!"/>
          <OurServices/>
     
          <Footer/>
    </div>
  )
}

export default ServicesPage