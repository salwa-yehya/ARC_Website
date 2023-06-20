import React, { useState } from 'react'
import styled from 'styled-components';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Section = styled.div`
    display: flex;
    justify-content: center;
    // padding-top: 15px;
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    background-color: #E6EFF8; 
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    z-index : 99;
`;

const Container = styled.div`
   width: 1400px;
   height: 85px;
   /* background-color: rgba(255,255,255,0.5); */
   display: flex;
   justify-content: space-between;
   
   padding-top:10px;
`;

const Links = styled.div`
display: ${({ collapsed }) => (collapsed ? 'none' : 'flex')};
justify-content: space-between;
align-items: center;
gap: 150px;
font-size: medium;
padding-right: 25px;


@media screen and (max-width: 768px) {
  display: ${({ collapsed }) => (collapsed ? 'flex' : 'none')};
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

const LogoImg = styled.img`
@media all and (max-width: 575px) {
    width:20%;
}
@media all and (min-width: 576px) and (max-width: 767px) {
    width:25%;
}
@media all and (min-width: 768px) and (max-width: 991px) {
}
@media all and (min-width: 992px) and (max-width: 1199px) {
}
@media all and (min-width: 1200px) {
}
`;

const List = styled.ul`
   display: flex;
   justify-content: space-between;
   gap: 40px;
`;

const ListItem = styled.li`
   font-weight: 500;
   font-size: large;
   cursor: pointer;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: medium;
    height: 75px;
`;

const SLogo = styled.div`
   font-size: small;
   color: #7b99bb;
   @media all and (max-width: 575px) {
    font-size:14px;
    width:50%;
}
@media all and (min-width: 576px) and (max-width: 767px) {
    font-size:16px;
    width:50%;
}
@media all and (min-width: 768px) and (max-width: 991px) {
}
@media all and (min-width: 992px) and (max-width: 1199px) {
}
@media all and (min-width: 1200px) {
}
`;

const FullLogo = styled.div`
   font-weight: 500;
   @media all and (max-width: 575px) {
    font-size:14px;
    width:50%;
}
@media all and (min-width: 576px) and (max-width: 767px) {
    font-size:14px;
    width:50%;
}
@media all and (min-width: 768px) and (max-width: 991px) {
}
@media all and (min-width: 992px) and (max-width: 1199px) {
}
@media all and (min-width: 1200px) {
}
`;

const LogoSection = styled.div`
    padding-top: 20px;
`;

const CollapseButton = styled.button`
  display: block;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Menu = () => {
    const [collapsed, setCollapsed] = useState(false);


    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Section >
            <Container >
                <Logo>
                    <LogoImg src="./images/logo.png"></LogoImg>
                    <LogoSection>
                        <FullLogo>Progressive-ARC Technologies</FullLogo>
                        <SLogo>Advanced, Responsive, cutting-edge Technologies</SLogo>
                    </LogoSection>
                </Logo>
                <Links collapsed={collapsed}>
                        <List>
                            <ListItem><Link to={'/'}>Home</Link></ListItem>
                            <ListItem><Link to={'/services'}>Services</Link></ListItem>
                            <ListItem><Link to={'/about'}>About Us</Link></ListItem>
                            <ListItem><Link to={'/contact'}>Contact Us</Link></ListItem>
                        </List>
                </Links>
                <CollapseButton onClick={toggleCollapse}><FaBars /></CollapseButton>
            </Container>
        </Section>
    )
}

export default Menu;