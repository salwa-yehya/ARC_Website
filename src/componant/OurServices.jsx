import React from 'react';
import styled, { keyframes } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ModelServices from './ModelView/ModelServices';


const Section = styled.div`
  height: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

const Container = styled.div`
  height: 100vh;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    width : 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 75em) {
    flex-direction: column;
    display:flex;
    jusifty-content-center;
    
    
  }
`;

const Col = styled.div`
  width: 100%;
  padding: 0 0.9375em;

  @media screen and (min-width: 48em) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const TextStart = styled.div`
text-align: start;
`;

const H1 = styled.h1`
  font-weight: 900;
  margin-top: 2rem;
  font-size: 2.5em;
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 1rem;
    font-size: 2em;
    text-align: center;
    width: 20rem;
    left:-22%;
  }
`;

const H3 = styled.h3`
  font-size: 2.5em;
  font-weight: bold;
  color: #6c757d;
  margin: 0.25em 0;
  position:relative;
  animation: animate 4s ease-in forwards;

  @keyframes animate {
    from {
      left: -100%; // Start from off-screen on the left
    }
    to {
      left: 0; // End at its final position
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    font-size: 1.375em;
    margin: 1rem 0;
    text-align: center;
    width: 20rem;
    left:-22%;
    }
`;

const Paragraph = styled.p`
  color: #6c757d;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    font-size: 0.9rem;
    text-align:center;
    width: 23%;
    
  }
`;

const ParagraphGeneral = styled.p`
  color: #6c757d;
  width: 80%;
  padding-bottom: 1.25em;
  position:relative;
  animation: animate 5s ease-in forwards;

  @keyframes animate {
    from {
      left: -100%; // Start from off-screen on the left
    }
    to {
      left: 0; // End at its final position
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 50%;
    font-size: 1em;
    text-align:center;
    width: 20rem;
    left:-22%;
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
  font-size: 4em;
  text-align: center;
  padding: 1.875em 0 0 0;
`;

const H5 = styled.h5`
  font-weight: bold;
  margin-top: 2rem;
  padding: 0.625em 0;
  font-size: 1.25em;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 0.3125em 0;
    font-size: 1em;
    text-align:center;
    width: 20rem;
    left:-22%;
  }
`;

const ModelStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  flex-direction: column;
  gap: 40px;
  
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 50%;
    
    
  }
`;
const CarouselView = styled.div`
@media screen and (min-width: 280px) and (max-width: 1080px) {
  margin-bottom:50px;
  text-align:center;
}

`

const Services = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <TextStart>
              <H1>Services</H1>
              <H3>Our amazing Services</H3>
              <ParagraphGeneral>
                Presentations are communication tools that can be used as lectures, speeches, reports, and more it. It all depends on the purpose.
              </ParagraphGeneral>
            </TextStart>
            <CarouselView>
              <Carousel autoPlay infiniteLoop showArrows showIndicators>
                <Row >
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-laptop-code" />
                          <H5>Websites</H5>
                          <Paragraph>
                            Our team of skilled developers crafts visually stunning, functional, and user-friendly websites tailored to each client's unique requirements. By leveraging the latest technologies and best practices, we ensure your website stands out from the competition.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-mobile-screen-button" />
                          <H5>Mobile App Development</H5>
                          <Paragraph>
                            We design and develop user-friendly mobile apps for Android and iOS platforms, helping businesses reach and engage customers on the go.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-dumpster" />
                          <H5>E-Commerce Solutions</H5>
                          <Paragraph>
                            We provide comprehensive e-commerce solutions that make it easy for businesses to sell their products and services online. Our team specializes in building scalable, secure, and easily manageable e-commerce platforms that streamline operations and improve customer experiences.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-brands fa-rocketchat  " />
                          <H5>AI Integrations</H5>
                          <Paragraph>
                            Our AI integration services enable businesses to incorporate advanced artificial intelligence capabilities into their websites and applications. From chatbots and recommendation systems to natural language processing and image recognition, our AI solutions help drive efficiency, enhance user experiences, and provide valuable insights.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                </Row>
                <Row >
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-database" />
                          <H5>SDK Integrations</H5>
                          <Paragraph>
                            We offer SDK integration services to help businesses easily connect their websites and applications with third-party services and tools. Our team ensures seamless integration with popular APIs, payment gateways, social media platforms, and other external services, enabling clients to expand their offerings and improve user experiences.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-cube " />
                          <H5>3D-Designed Websites</H5>
                          <Paragraph>
                            We create captivating 3D-designed websites that provide immersive and interactive experiences for users. By combining stunning visuals with intuitive navigation, our 3D-designed websites help businesses engage their audience and stand out in the competitive digital landscape.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-server" />
                          <H5>Web Hosting</H5>
                          <Paragraph>
                            Our web hosting services provide reliable, secure, and fast solutions for businesses of all sizes. With our scalable hosting plans, clients can easily manage their websites, ensuring optimal performance and minimal downtime.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                  <Col>
                    <CartItem>
                      <Item>
                        <TextStart>
                          <Icon className="fa-solid fa-network-wired  " />
                          <H5>Cloud Hosting</H5>
                          <Paragraph>
                            While web hosting refers to hosting your website on a physical server, cloud hosting utilizes virtual servers, offering increased scalability, flexibility, and reliability. Our cloud hosting services provide businesses with a robust, cost-effective infrastructure that can easily adapt to changing needs and demands.
                          </Paragraph>
                        </TextStart>
                      </Item>
                    </CartItem>
                  </Col>
                </Row>
              </Carousel>
            </CarouselView>
          </Col>
          <Col >
            <ModelStyle>
              <ModelServices />
            </ModelStyle>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
export default Services;
