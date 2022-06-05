import React from 'react';
import Bitray from '../components/Bitray';
import styled from 'styled-components';
import { breakpoint } from '../styled/breakpoints.css';
import { Heading1, Subheading } from '../components/shared';

const Intro = () => {
  return (
    <BitrayContainer>
      <Bitray />
      <ContentWrapper>
        <Heading1>STINGRAY</Heading1>
        <Subheading>Bespoke Cyber Solutions</Subheading>
      </ContentWrapper>
    </BitrayContainer>
  );
};

export default Intro;

export const BitrayContainer = styled.div`
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 75px);
  position: relative;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;
