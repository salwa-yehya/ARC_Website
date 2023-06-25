import React from "react";
import CoolFlipCard from '../componant/CoolFlipCard';
// import styled, { css } from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import './Team.css'
// const media = {
//   small: (...args) => css`
//     @media (max-width: 576px) {
//       ${css(...args)}
//     }
//   `,
//   medium: (...args) => css`
//     @media (min-width: 576px) and (max-width: 767px) {
//       ${css(...args)}
//     }
//   `,
//   large: (...args) => css`
//     @media (min-width: 768px) and (max-width: 991px) {
//       ${css(...args)}
//     }
//   `,
//   extraLarge: (...args) => css`
//     @media (min-width: 992px) and (max-width: 1199px) {
//       ${css(...args)}
//     }
//   `,
//   xxl: (...args) => css`
//     @media (min-width: 1200px) {
//       ${css(...args)}
//     }
//   `,
// };

// const Teamsection = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;


//   ${media.small`
//     height: 100%;
//   `}

//   }
// `;
// const TextStart = styled.div`
// text-align: start;

// `;

// const Col = styled.div` 
//    width: 100%;
// `;

// const Teams = styled.div`
//     display: flex;
//    flex-direction: row;
//    justify-content: center;
// `;

// const H1 = styled.h1`
//   font-weight: 900;
//   margin-top: 2rem;
//   font-size: 2.5em;
//   position:relative;
//   animation: animate 3s ease-in forwards;

//   @keyframes animate {
//     from {
//       left: -100%; // Start from off-screen on the left
//     }
//     to {
//       left: 0; // End at its final position
//     }
//   }
//   ${media.small`
//   margin-top: 1rem;
//   font-size: 2em;
//   text-align: center;
//   width: 20rem;
//   left: -22%;
// `}
//   }
// `;

// const H3 = styled.h3`
//   font-size: 2.5em;
//   font-weight: bold;
//   color: #6c757d;
//   margin: 0.25em 0;
//   position:relative;
//   animation: animate 3s ease-in ;

//   @keyframes animate {
//     from {
//       left: -100%; // Start from off-screen on the left
//     }
//     to {
//       left: 0; // End at its final position
//     }
//   }

//   ${media.small`
//   font-size: 1.375em;
//   margin: 1rem 0;
//   text-align: center;
//   width: 20rem;
//   left: -22%;
// `}
// `;


// const ParagraphGeneral = styled.p`
//   color: #6c757d;
//   width: 80%;
//   padding-bottom: 1.25em;
//   position:relative;
//   animation: animate 5s ease-in forwards;

//   @keyframes animate {
//     from {
//       left: -100%; // Start from off-screen on the left
//     }
//     to {
//       left: 0; // End at its final position
//     }
//   }

//   ${media.small`
//   width: 50%;
//   font-size: 1em;
//   text-align: center;
//   width: 20rem;
//   left: -22%;
// `}
// `;

// const Row = styled.div`
//   display: flex;
//   justify-content: space-between;

//   ${media.xxl`
//     flex-wrap: wrap;
//     justify-content: center;
//   `}
// `;


// const Teamcolumn = styled.div`
//   width: 25%;
//   display:flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;


//   ${media.small`
//   width: 100%;
//   margin-right: 90px;
// `}

// ${media.medium`
//   width: 50%;
//   justify-content: start;
//   align-items: center;
//   text-align: center;
// `}

// ${media.large`
//   width: 50%;
//   flex-wrap: wrap;
// `}

// ${media.extraLarge`
//   width: 33.33%;
// `}

// ${media.xxl`
//   width: 25%;
// `}
// `;



// const Profilecard = styled.div`
//   padding: 2.5rem 2rem;
//   cursor: pointer;
//   ${media.small`
//   width: 100%;
//   padding: 0.5rem 0;
// `}

// ${media.medium`
//   width: 50%;
//   padding: 0.5rem 0;
// `}

// ${media.large`
//   width: 33.33%;
//   padding: 0.5rem 0;
// `}

// ${media.extraLarge`
//   width: 33.33%;
//   padding: 0.5rem 0;
// `}

// ${media.xxl`
//   width: 25%;
//   padding: 2.5rem 2rem;
// `}
// `;

// const Imgcontanier = styled.div`
//   width: 14em;
//   height: 20em;
//   background-color: #fff;
//   border-radius: 15px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//   transition: all 0.2s ease-out;

//   &:hover {
//     box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #1b50e3, 0 0 5px #1b50e3,
//       0 0 5px #1b50e3, 0 0 5px #1b50e3, 0 0 5px #1b50e3;
//   }
// `;

// const ProfileImg = styled.img`
//   margin-top: 1rem;
//   width: 60%;
//   border-radius: 50%;
// `;

// const Name = styled.h3`
//   font-weight: 600;
//   margin-top: 1rem;
//   font-size: 1.2rem;
//   color: #1d3058;
// `;

// const Position = styled.p`
//   font-weight: 300;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   margin-top: 1rem;
//   margin-bottom: 2rem;
// `;

// const Icons = styled.div`
//   width: 50%;
//   min-width: 180px;
//   margin: 1.1rem;
//   display: flex;
//   justify-content: space-around;
//   font-size: 1.2rem;
// `;
// const Container = styled.div`
//   height: 100vh;
//   width: 90%;
//   display: flex;
//   justify-content: flex-start;

//   ${media.small`
//   flex-direction: column;
//   width: 100%;
// `}
// `;

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
