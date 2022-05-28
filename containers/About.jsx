import React from 'react';
import styled from 'styled-components';
import { Heading2, MutedSubHeading, Paragraph } from '../components/shared';
import { breakpoint } from '../styled/breakpoints.css';

const About = () => {
  return (
    <TwoColumn>
      <Column>
        <div
          style={{
            background: '#fff',
            height: '400px',
            width: '100%',
          }}
        ></div>
      </Column>
      <Column>
        <ContentWrapper>
          <Heading2>Pushing Forward</Heading2>
          <MutedSubHeading>We aspire to raise the bar, period.</MutedSubHeading>
          <Paragraph>
            In this day and age cyber-warfare became an integral part of our
            lives. We are getting more and more entangled with computers and the
            internet, and there is not a single soul who can live without some
            connection to a computer. With that change many opportunities rose,
            but you have to think like a hacker in order to seize them, And
            that’s what we do.
            <br />
            <br />
            We have great mind working here and they will be able to solve any
            cyber-oriented problem/idea you might have.
          </Paragraph>
        </ContentWrapper>
      </Column>
    </TwoColumn>
  );
};

export default About;

export const TwoColumn = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: ${breakpoint.size.lg};
  @media (${breakpoint.device.sm}) {
    flex-direction: column-reverse;
    padding: 2rem 0 3rem 0;
  }
  @media (${breakpoint.device.xs}) {
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  @media (${breakpoint.device.sm}) {
    justify-content: flex-start;
    min-height: unset;
    padding: 0 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 500px;
  @media (${breakpoint.device.sm}) {
    padding: 1rem;
  }
`;
