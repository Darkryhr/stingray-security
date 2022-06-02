import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Divider, Heading2, Pre } from '../components/shared';
import { breakpoint } from '../styled/breakpoints.css';

const Services = () => {
  return (
    <ServicesWrapper id='services-section'>
      <div
        style={{
          paddingTop: '2rem',
        }}
      >
        <Pre
          style={{
            textAlign: 'center',
          }}
        >
          Our Services
        </Pre>
        <Heading2>
          This is what we
          <strong> Do</strong>
        </Heading2>

        <Divider center />
      </div>
      <Container>
        <Card heading='Cybersecurity Consulting' src={'/compass.svg'}>
          We don&apos;t believe in simple pen-testing, we believe in solving a
          problem, your organization being vulnerable to hackers is one, We can
          solve it.
        </Card>
        <Card heading='Cybersecurity Teaching' src={'/apple.svg'}>
          We have tremendous experience in turning newcomers to the
          CyberSecurity world into amazing hackers, Should you want a more
          proficient security guy, Or a team of low-level researchers.
        </Card>
        <Card heading='Cybersecurity Tools' src={'/tools.svg'}>
          Many products are coming in the near future, Stay tuned.
        </Card>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  width: 100%;
  padding-bottom: 3rem;
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
    align-items: center;
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
  padding: 5rem 5vw;
  @media (${breakpoint.device.md}) {
    padding: 4rem 0 1rem 0;
  }
`;
