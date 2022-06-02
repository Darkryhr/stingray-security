import React from 'react';
import styled from 'styled-components';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Intro from '../containers/Intro';
import Services from '../containers/Services';
import { breakpoint } from '../styled/breakpoints.css';
import SectionWrapper from '../components/SectionWrapper';

const Home = () => {
  return (
    <>
      <DarkStrip>
        <SectionWrapper>
          <Intro />
          <Test dark />
        </SectionWrapper>
      </DarkStrip>

      <SectionWrapper>
        <About />
        <Test />
      </SectionWrapper>
      {/* <DualStrip></DualStrip> */}
      <DarkStrip>
        <SectionWrapper>
          <Services />
        </SectionWrapper>
      </DarkStrip>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default Home;

export const DarkStrip = styled.div`
  background-color: #131313;
`;

export const DualStrip = styled.div`
  background: linear-gradient(90deg, #000 50%, #1e1e1e 50%);
  @media (${breakpoint.device.sm}) {
    background: none;
  }
`;

export const Test = styled.div`
  clip-path: polygon(100% 0, 0 0, 100% 12%);
  position: absolute;
  background-color: ${props => (props.dark ? ' #131313' : '#1E1E1E')};
  width: 100vw;
  height: 70%;
  bottom: -70%;
`;
