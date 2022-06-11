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
      <SectionWrapper>
        <Intro />
      </SectionWrapper>

      <DarkStrip>
        <SectionWrapper>
          <About />
        </SectionWrapper>
      </DarkStrip>
      {/* <DualStrip></DualStrip> */}
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <DarkStrip>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </DarkStrip>
    </>
  );
};

export default Home;

export const DarkStrip = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const DualStrip = styled.div`
  background: linear-gradient(90deg, #000 50%, #1e1e1e 50%);
  @media (${breakpoint.device.sm}) {
    background: none;
  }
`;
