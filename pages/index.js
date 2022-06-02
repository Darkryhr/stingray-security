import React from 'react';
import styled from 'styled-components';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Intro from '../containers/Intro';
import Services from '../containers/Services';
import { Logo, TextlessLogo } from '../components/icons';
import { breakpoint } from '../styled/breakpoints.css';

const Home = () => {
  return (
    <>
      <DarkStrip>
        <Intro />
      </DarkStrip>
      {/* 
      <Image
        src={bitmap}
        alt='pixel'
        style={{
          height: 'auto',
          width: '100%',
        }}
      /> */}

      <About />
      {/* <DualStrip></DualStrip> */}
      <DarkStrip>
        <Services />
      </DarkStrip>
      <Contact />
    </>
  );
};

export default Home;

export const DarkStrip = styled.div`
  background: #131313;
`;

export const DualStrip = styled.div`
  background: linear-gradient(90deg, #000 50%, #1e1e1e 50%);
  @media (${breakpoint.device.sm}) {
    background: none;
  }
`;
