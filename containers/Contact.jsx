import React from 'react';
import { Heading2, Lead } from '../components/shared';
import styled from 'styled-components';
import { breakpoint } from '../styled/breakpoints.css';

const Contact = () => {
  return (
    <ContactWrapper>
      <Heading2>Let&apos;s Talk</Heading2>
      <Lead>We will come up with a solution, try us.</Lead>
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
  padding: 1rem 0;
`;

export const MailLink = styled.a`
  font-size: 1.4rem;
  padding-top: 1rem;
`;
