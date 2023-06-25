import * as React from 'react'


import Home from './Pages/Home.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'

import styled from 'styled-components'
import './componant/Container.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';






const Container = styled.div`
  height: 100vh;
  width :100%;
  background-color: #e6eff8;
  color: #1d3058;
  scroll-snap-type:y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: block;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
     height :auto ;
     scroll-behavior: scroll;
     overflow-y: scroll;
  }
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/ARC_Website' element={<Home />}> </Route>
          <Route path='/about' element={<AboutPage />}> </Route>
          <Route path='/services' element={<ServicesPage />}> </Route>
          <Route path='/contact' element={<ContactPage />}> </Route>
        </Routes>
      </BrowserRouter>
    </Container>

  );
}

export default App;