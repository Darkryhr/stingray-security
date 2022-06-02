import React from 'react';
import { IconButton } from '../shared';
import {
  Copy,
  FooterWrapper,
  LogoWrapper,
  SocialWrapper,
  Wrapper,
} from './Footer.css';
import { Logo } from '../icons';
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <Copy>
          <span>&copy;2022 </span>
          stingraysecurity
        </Copy>
      </Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Wrapper>
        <SocialWrapper>
          <IconButton
            whileHover={{
              backgroundColor: '#fff',
            }}
          >
            <BsFacebook />
          </IconButton>
          <IconButton
            whileHover={{
              backgroundColor: '#fff',
            }}
          >
            <BsGoogle />
          </IconButton>
          <IconButton
            whileHover={{
              backgroundColor: '#fff',
            }}
          >
            <BsTwitter />
          </IconButton>
        </SocialWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
