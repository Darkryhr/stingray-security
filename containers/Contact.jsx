import React from 'react';
import { Divider, Heading2, Lead, Pre } from '../components/shared';
import styled from 'styled-components';
import { breakpoint } from '../styled/breakpoints.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <ContactWrapper>
      <Block />
      <Pre>Let&apos;s Talk</Pre>
      <Heading2 center>We will come up with a solution, try us.</Heading2>
      <Divider />
      <MailLink href='mailto:contact@stingray.team'>
        contact@stingray.team
      </MailLink>
    </ContactWrapper>
  );
};

export default Contact;

export const ContactWrapper = styled.footer`
  width: 100%;
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding: 5rem 5vw;
  overflow: hidden;
  position: relative;
`;

export const MailLink = styled(motion.a)`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 700;
  color: #000;
  background: #f9f8f8;
  padding: 1rem 1.35rem;

  border-radius: 5px;
`;

const Block = styled.div`
  height: 60%;
  top: 40px;
  z-index: -1;
  width: 50%;
  background-color: #272727;
  position: absolute;
  left: 70px;
`;
