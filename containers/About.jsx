import React from 'react';
import styled from 'styled-components';
import { Divider, Heading2, Lead, Paragraph, Pre } from '../components/shared';
import { breakpoint } from '../styled/breakpoints.css';
import Image from 'next/image';

const About = () => {
  return (
    <TwoColumn>
      <Column>
        <Image src={'/hacker.png'} alt='hacker' width={450} height={450} />
      </Column>
      <Column>
        <ContentWrapper>
          <Pre>Pushing Forward</Pre>

          <Heading2 style={{ textAlign: 'start' }}>
            We aspire to raise the bar, period.
          </Heading2>
          <Divider />
          <Paragraph>
            In this day and age cyber-warfare became an integral part of our
            lives. We are getting more and more entangled with computers and the
            internet, and there is not a single soul who can live without some
            connection to a computer. With that change many opportunities rose,
            but you have to think like a hacker in order to seize them, And
            that&apos;s what we do.
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
  padding: 5rem 5vw;
  position: relative;
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
    padding: 4rem 1rem 2rem 1rem;
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
  padding: 1rem;
  @media (${breakpoint.device.sm}) {
    justify-content: flex-start;
    min-height: unset;
    padding: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  @media (${breakpoint.device.sm}) {
    padding: 1rem 0;
  }
`;
