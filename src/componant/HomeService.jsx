import React from 'react'
import './HomeService.css'
import { CgWebsite } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { BiStore } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { color } from 'd3';

const HomeService = () => {
    return (
        <div id='Home-Service'>
            <div className="heading">
                <h2>We Provide Awosome Services</h2>
            </div>
            <div className="services-content">
                <div className="services-box ">
                    <div className="icon-box">
                        <CgWebsite size={50} style={{ color: 'white', transform: 'rotate(-45deg)', marginTop: '7px' }} />
                    </div>
                    <h3>Websites</h3>
                    <p>Stunning, functional, and user-friendly</p>
                </div>
                <div className="services-box ">
                    <div className="icon-box">
                        <ImMobile size={50} style={{ color: 'white', transform: 'rotate(-45deg)', marginTop: '7px' }} />
                    </div>
                    <h3>Mobile App Development</h3>
                    <p>User-friendly mobile apps for Android and iOS platforms,</p>
                </div>
                <div className="services-box ">
                    <div className="icon-box">
                        <BiStore size={50} style={{ color: 'white', transform: 'rotate(-45deg)', marginTop: '7px' }} />
                    </div>
                    <h3>E-Commerce Solutions</h3>
                    <p>Scalable, secure, and easily manageable e-commerce platforms</p>
                </div>

            </div>
            <div className='service-button'>
                <button>
                    <Link to={'/services'}> Show more </Link>
                </button>
            </div>

        </div>
    )
}

export default HomeService