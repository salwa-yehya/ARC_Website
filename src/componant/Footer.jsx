import React from 'react'
import './Style.css'
import { GoMarkGithub } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { BsLinkedin, BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
      <div className="footer-distributed">
        <div className='footer-left'>
          <Link to={'/'}
            onClick={() => {
              window.scroll(0, 0);
            }}>
            <img src="./images/logo.png" alt="footer-logo" width={'62px'} />
            <div className="company-name">
              <p> Progressive- <span>ARC </span> Technologies</p>
            </div>
            <div className="footer-company-name">
              Copyright © 2021 Progressive-ARC Technologies
            </div>
          </Link>
        </div>
        <div className="footer-center">
          <div>
            <ImLocation className='i' />
            <p>Jorden - Amman</p>
          </div>
          <div>
            <BsTelephoneFill className='i' />
            <p>+96278123456</p>
          </div>
          <div>
            <CgMail className='i' />
            <p>PARC-Technologies@gmail.com</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-company-about">
            <span className='span'>About the company</span>
            <p >PARC Technologies Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, impedit.</p>
          </div>
          <div className="footer-icons">
            <a href="#">
              <GoMarkGithub className='github' />
            </a>
            <a href="#">
              <BsLinkedin className='Linkedin' />
            </a>
            <a href="#">
              <BsInstagram className='instagram' />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer