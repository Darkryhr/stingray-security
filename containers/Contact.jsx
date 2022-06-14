import React from 'react';
import { Divider, Heading2, Pre } from '../components/shared';
import styled from 'styled-components';
import { breakpoint } from '../styled/breakpoints.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <ContactWrapper id='contact-section'>
      <Block />
      <ContentWrapper>
        <Pre>Let&apos;s Talk</Pre>
        <Heading2 center>We will come up with a solution, try us.</Heading2>
        <Divider />
        <MailLink
          href='mailto:contact@stingray.team'
          whileHover={{
            scale: 1.1,
            filter: 'brightness(1.1)',
          }}
          whileTap={{
            scale: 0.9,
            filter: 'brightness(0.9)',
          }}
        >
          contact@stingray.team
        </MailLink>
      </ContentWrapper>
    </ContactWrapper>
  );
};

export default Contact;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 5rem 5vw;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  min-height: 40vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const MailLink = styled(motion.a)`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.text};
  padding: 1rem 1.35rem;

  border-radius: 5px;
`;

const Block = styled.div`
  height: 60%;
  top: 40px;
  z-index: -1;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  left: 70px;
`;
