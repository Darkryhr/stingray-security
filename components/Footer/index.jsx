import React from 'react';
import { MutedParagraph, MutedSubHeading, Paragraph } from '../shared';
import { Copy, FooterWrapper, LogoWrapper } from './Footer.css';
import { Logo, TextlessLogo } from '../icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <Copy>
        <span>&copy;2022 </span>
        stingray security
      </Copy>
      <LogoWrapper>
        <TextlessLogo />
      </LogoWrapper>
      <Paragraph style={{ minWidth: '220px', textAlign: 'end' }}>
        Links
      </Paragraph>
    </FooterWrapper>
  );
};

export default Footer;
