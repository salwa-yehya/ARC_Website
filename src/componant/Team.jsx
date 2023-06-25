import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import './Style.css'


const Team = () => {
  return (

    <div className="Teamsection">

      <div className="TextStart">
        <div className="H1">Our amazing Team</div>
      </div>
      
      <div className="Teams">

        <div className="Profilecard">
          <div className="content">
            <div className="Imgcontanier">
              <img className="ProfileImg" src="./images/shaden.jpg" alt="profile-image" />
              <div className="Name">
                <h3>Shaden Zidan</h3>
              </div>
              <div className="Position">
                <p>Founder</p>
              </div>
              <div className="Icons">
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </div>

            </div>
            <div className="flip-back">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi non nostrum reprehenderit magnam, veniam deleniti officia nemo soluta iusto!</p>
            </div>
          </div>
        </div>

        <div className="Profilecard">
          <div className="content">
            <div className="Imgcontanier">
              <img className="ProfileImg" src="./images/ha.jpeg" alt="profile-image" />
              <div className="Name">
                <h3>Haneen AlRousan</h3>
              </div>
              <div className="Position">
                <p>General Manager</p>
              </div>
              <div className="Icons">
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </div>
            </div>
            <div className="flip-back">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi non nostrum reprehenderit magnam, veniam deleniti officia nemo soluta iusto!</p>
            </div>
          </div>
        </div>

        <div className="Profilecard">
          <div className="content">
            <div className="Imgcontanier">
              <img className="ProfileImg" src="./images/mostafa.jpeg" alt="profile-image" />
              <div className="Name">
                <h3>Mostafa Hosny</h3>
              </div>
              <div className="Position">
                <p>Developer</p>
              </div>
              <div className="Icons">
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </div>
            </div>
            <div className="flip-back">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi non nostrum reprehenderit magnam, veniam deleniti officia nemo soluta iusto!</p>
            </div>
          </div>
        </div>

        <div className="Profilecard">
          <div className="content">
            <div className="Imgcontanier">
              <img className="ProfileImg" src="./images/salwa.png" alt="profile-image" />
              <div className="Name">
                <h3>Salwa Yehya</h3>
              </div>
              <div className="Position">
                <p>Developer</p>
              </div>
              <div className="Icons">
                <GoMarkGithub />
                <BsLinkedin />
                <BsInstagram />
                <FiLink />
              </div>
            </div>
            <div className="flip-back">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi non nostrum reprehenderit magnam, veniam deleniti officia nemo soluta iusto!</p>
            </div>
          </div>
        </div>

      </div>


    </div >
  );
};

export default Team;
