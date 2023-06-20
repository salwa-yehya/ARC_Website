import React from 'react'
import styled from 'styled-components'
import MiniCard from './MiniCard';
import Menu from './Menu';


const Section = styled.div`
  height: 100vh;
  width: 100vw; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
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
  
`;

const HeroTxt = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  vertical-align:top;
  gap: 40px;
  padding-top: 0px; // Adjust the padding-top value here
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: white;
    border: 4px solid #7b99bb; 
    border-radius: 30px;
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    position: relative;
    left: -43%;
    animation: animate 5s ease-in forwards;

    @keyframes animate {
      from {
        left: -100%; // Start from off-screen on the left
      }
      to {
        left: 0; // End at its final position
      }
    }
`;

const Services = () => {
  return (
      <Section>
        <Container>
          <MiniCard/>
        </Container>
      </Section>
  )
}

export default Services