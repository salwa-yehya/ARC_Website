import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';



const AboutTeam = () => {
    return (
        <div id='about'>
            <div className="about-image">
                <img src="./images/teamabout.jpg" alt="" />
            </div>
            <div className="about-text">
                <h2>ARC Team</h2>
                <p>ARC is backed by a team of experienced professionals with diverse backgrounds in design, development, marketing, and technology. Our collective expertise enables us to provide top-notch digital solutions that cater to a wide range of industries and business sizes.
                </p>
                <button><Link to={'/about'}>Discover</Link></button>
            </div>
        </div>
    )
}

export default AboutTeam