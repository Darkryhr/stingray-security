import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';
import { motion } from 'framer-motion';
import { keyframes } from 'styled-components';
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${breakpoint.size.sm};

  margin: 0 auto;
  padding: 0 2.5rem;
  max-height: 85px;
  /* background: #131313; */
  @media (${breakpoint.device.sm}) {
    padding: 0 1rem;
  }

  button {
    display: none;
    @media (${breakpoint.device.sm}) {
      display: block;
      width: 2.5rem;
      cursor: pointer;
      transition: ease all 0.15s;
      &:hover {
        transform: scale(1.15);
      }
      &:active {
        transform: scale(0.8);
      }
    }
  }
`;

const flow = keyframes`

0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}


`;

export const GradientBorder = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  background: linear-gradient(270deg, #b202d1 0%, #4f1271 74%);
  background-size: 400% 400%;
  animation: ${flow} 8s ease infinite;
  height: 0.3rem;
  width: 100%;
  @media (${breakpoint.device.sm}) {
    display: none;
  }
`;

export const NavLink = styled.li`
  font-family: Poppins, sans-serif;
  cursor: pointer;
  display: block;
  padding: 0 2rem;
  font-weight: 500;
  transition: ease 0.2s;
  &:last-of-type {
    padding-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }

  @media (${breakpoint.device.sm}) {
    font-size: 1.4rem;
    display: block;
    padding: 1.3rem 2rem;

    &:hover {
      opacity: 1;
      color: #000;
      background: #fff;
      transform: unset;
    }

    &:focus {
      background: none;
    }
  }
`;

export const NavMenu = styled.div`
  transition: ease all 0.4s;
  transform: translateX(0);
  .close {
    display: none;
  }
  @media (${breakpoint.device.sm}) {
    position: fixed;
    width: 40%;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    height: 100vh;
    z-index: 999;
    right: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    .close {
      display: unset;
      float: right;
      margin: 2em;
    }
    &::after {
      content: ' ';
      height: 100vh;
      width: 1%;
      display: block;
      position: absolute;
      top: 0;
      z-index: -2;
      background: linear-gradient(315deg, #7882f9 0%, #4f1271 74%);
    }
  }

  @media (${breakpoint.device.md}) {
    width: 60%;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  @media (${breakpoint.device.sm}) {
    padding: 0;
    margin-top: 8em;
    display: block;
  }
`;

export const LogoWrapper = styled(motion.div)`
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 65px;
  padding: 1.2rem 0 1.5rem 0;
  svg {
    max-width: 100px;
    fill: ${({ theme }) => theme.colors.text};
    transition: ease 150ms;
  }
  span {
    margin-top: 8px;
    padding-left: 10px;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    transition: ease 150ms;
  }
`;

// 7B287D
