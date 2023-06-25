 import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    height :100%
  }
`;

const Container = styled.div`
  height: 100vh;  
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
  
  }
`;

const HeroImg = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:relative;

  @media screen and (min-width: 280px) and (max-width: 1200px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width:28rem;
  margin:-5px 0px;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  left: -43%;
  position:relative;
  animation: animate 3s ease-in forwards;

  @keyframes animate {
    from {
      left: -100%; // Start from off-screen on the left
    }
    to {
      left: 0; // End at its final position
    }
  }

  @media all and (max-width: 575px) {
    font-size: 20px;
    text-align: center;
    width: 20rem;
    left:-22%;    
    }
    @media all and (min-width: 576px) and (max-width: 767px) {
      font-size: 25px;
      text-align: center;
      width: 80%;
      left:-45%; 
    }
    @media all and (min-width: 768px) and (max-width: 991px) {
      font-size: 25px;
      text-align: center;
      width: 80%;
      left:-32%; 
    }
    @media all and (min-width: 992px) and (max-width: 1199px) {
      font-weight: 600;
  font-size: 30px;
  left: -59%;
  position:relative;    
    }
    @media all and (min-width: 1200px) {
    }
`;


const SubTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 80px;
  position: relative;
  left: -43%;
  animation: animate 4s ease-in forwards;

  @keyframes animate {
    from {
      left: -100%; // Start from off-screen on the left
    }
    to {
      left: 0; // End at its final position
    }
  }

  @media all and (max-width: 575px) {
    font-size: 16px;
    left: 0;
    text-align: center;
    width: 20rem;
    left:-22%;
    padding-bottom: 30px;  
    }
    @media all and (min-width: 576px) and (max-width: 767px) {
      font-size: 20px;
      text-align: center;
      width: 70%;
      left:-42%; 
      padding-bottom: 20px;
    }
    @media all and (min-width: 768px) and (max-width: 991px) {
      font-size: 23px;
      text-align: center;
      width: 80%;
      left:-32%;     
      padding-bottom: 20px;
    }
    @media all and (min-width: 992px) and (max-width: 1199px) {
      font-weight: 500;
  font-size: 20px;
  padding-bottom: 80px;
  position: relative;
  left: -59%;
    }
    @media all and (min-width: 1200px) {
    }
`;

const HeroTxt = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  vertical-align: top;
  gap: 20px;
  padding-top: 0px;
  margin: 1rem 3rem;

  @media all and (max-width: 575px) {
    width: 100%;
    }
    @media all and (min-width: 576px) and (max-width: 767px) {
      width: 50%;
    }
    @media all and (min-width: 768px) and (max-width: 991px) {
      width: 50%;
    }
    @media all and (min-width: 992px) and (max-width: 1199px) {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      vertical-align: top;
      gap: 20px;
      padding-top: 0px;
      margin: 1rem 3rem;
        }
    @media all and (min-width: 1200px) {
    }
`;

const Button = styled.button`
  width: 180px;
  height: 50px;
  background-color: white;
  border: 4px solid #7b99bb;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  position: relative;
  left: -43%;
  animation: animate 3s ease-in forwards;

  @keyframes animate {
    from {
      left: -100%; // Start from off-screen on the left
    }
    to {
      left: 0; // End at its final position
    }
  }

    @media all and (max-width: 575px) {
      font-size: 14px;
      margin:auto;
      transform: translateX(0);
      animation: none;
      left: -40%;
      }
      @media all and (min-width: 576px) and (max-width: 767px) {
        font-size: 14px;
      margin:auto;
      transform: translateX(0);
      animation: none;
      left: -10%;
      }
      @media all and (min-width: 768px) and (max-width: 991px) {
        font-size: 14px;
      margin:auto;
      transform: translateX(0);
      animation: none;
      left: 0;
      }
      @media all and (min-width: 992px) and (max-width: 1199px) {
        font-size: 14px;
      margin:auto;
      transform: translateX(0);
      animation: none;
      left: -43%;
      }
      @media all and (min-width: 1200px) {
      }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 3s ease-out reverse;

  @keyframes animate {
    to {
      transform: translateX(300px);
    }
  }

  @media all and (max-width: 575px) {
    width: 80%;
    height: 100%;
    position: static;
    transform: none;
    margin: 20px 0;
    }
    @media all and (min-width: 576px) and (max-width: 767px) {
      width: 100%;
      height:100%;
      margin:-5px 6rem;
    }
    @media all and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      height:100%;
      margin:-10px 11rem;
    }
    @media all and (min-width: 992px) and (max-width: 1199px) {
      width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    }
    @media all and (min-width: 1200px) {
    }
`;
const Banner = () => {
    return (
        <Section>
            <Container>
                <HeroTxt>
                    <Title>One-stop solution for innovative web development, hosting services, mobile applications, and unparalleled customer support. </Title>
                    <SubTitle>Our talented team is dedicated to transforming your ideas into reality, enabling your business to thrive in the digital world.</SubTitle>
                    <Button><Link to={'/services'}>Explore our services</Link></Button>
                </HeroTxt>
                <HeroImg>
                    <Img src="./images/Hero_sec.png"></Img>
                </HeroImg>
            </Container>
        </Section>
    )
}

export default Banner