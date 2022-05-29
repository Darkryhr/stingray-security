import React from 'react';
import styled from 'styled-components';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Intro from '../containers/Intro';
import Services from '../containers/Services';
import Image from 'next/image';
import bitmap from '../public/grad.svg';

const Home = () => {
  return (
    <>
      <DarkStrip>
        <Intro />
      </DarkStrip>

      <Image
        src={bitmap}
        alt='pixel'
        style={{
          height: 'auto',
          width: '100%',
        }}
      />

      <About />
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
