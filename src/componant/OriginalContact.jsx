import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ModelContact from './ModelView/ModelContact';
import Form from './Form';


const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height:100vh;
  width:100vw;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    width: 100%;
    padding: 0 20px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 992px) {
    padding: 0 15px;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 0 15px;
  flex: 0 0 100%;
  max-width: 100%;

  @media screen and (max-width: 1200px) {
    margin: 0;
    height: auto;
  }

  @media screen and (min-width: 320px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const TextStart = styled.div`
  text-align: left;
`;

const H2 = styled.h2`
  font-weight: bold;
  margin-top: 2rem;
  font-size: 35px;
  position: relative;
  left: -43%;
  animation: animate 3s ease-in forwards;

  @media screen and (max-width: 1200px) {
    margin-top: 2rem;
    left: 0;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 28px;
  }
`;


const Paragraph = styled.p`
  color: #6c757d;
`;

const ParagraphGeneral = styled.p`
  color: #6c757d;
  width: 50%;
  padding: 20px 0;
  position: relative;
  left: -43%;
  animation: animate 5s ease-in forwards;

  @media screen and (max-width: 1200px) {
    left: 0;
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  text-align: center;
`;

const Icon = styled.i`
  font-size: 4rem;
  text-align: center;
  padding: 30px 0 0 0;
`;

const H5 = styled.h5`
  font-weight: bold;
  margin-top: 2rem;
  padding: 10px 0;
  font-size: 20px;

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 0;
    font-size: 16px;
  }
`;

const ModelStyle = styled.div`
margin:auto;
display:flex;
justify-content:center;
align-items:center;
`

const ContactUS = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <TextStart>
              <H2>Contact Us</H2>
              <ParagraphGeneral>
                Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more.
              </ParagraphGeneral>
              </TextStart>
              <Form/>
          </Col>
          <Col >
          <ModelStyle>
            <ModelContact/>
          </ModelStyle>
          </Col>
        </Row>
      </Container>
    </Section>
)
}

export default ContactUS
