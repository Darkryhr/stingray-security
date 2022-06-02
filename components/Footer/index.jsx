import React from 'react';
import { Paragraph } from '../shared';
import { Copy, FooterWrapper, LogoWrapper, Wrapper } from './Footer.css';
import { Logo } from '../icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <Copy>
          <span>&copy;2022 </span>
          stingray security
        </Copy>
      </Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Wrapper>
        <Paragraph>Links</Paragraph>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
