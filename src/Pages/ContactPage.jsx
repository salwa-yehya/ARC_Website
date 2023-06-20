import React from 'react'
import Footer from '../componant/Footer'
import ContactUS from '../componant/ContactUS'
import Menu from '../componant/Menu'
import Pageshead from '../componant/Pageshead'


const ContactPage = () => {
  return (
    <div>
          <Menu/>
          <Pageshead pageTitle="contact " description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, expedita!"/>
          <ContactUS/>
          <Footer/>
    </div>
  )
}

export default ContactPage