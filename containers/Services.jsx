import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Heading2, Lead } from '../components/shared';
import { breakpoint } from '../styled/breakpoints.css';

const Services = () => {
  return (
    <ServicesWrapper>
      <div
        style={{
          paddingTop: '2rem',
        }}
      >
        <Heading2
          style={{
            textAlign: 'center',
          }}
        >
          Our Services
        </Heading2>
        <Lead>
          This is what we
          <strong> Do</strong>
        </Lead>
      </div>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </ServicesWrapper>
  );
};

export default Services;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  padding-bottom: 3rem;
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: ${breakpoint.size.lg};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  min-height: 85vh;
`;
