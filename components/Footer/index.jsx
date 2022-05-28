import React from 'react';
import { MutedParagraph, MutedSubHeading, Paragraph } from '../shared';
import {
  Copy,
  CopyRow,
  FooterWrapper,
  LogoWrapper,
  Wrapper,
} from './Footer.css';
import { Logo, TextlessLogo } from '../icons';

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
        <TextlessLogo />
      </LogoWrapper>
      <Wrapper>
        <Paragraph>Links</Paragraph>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
