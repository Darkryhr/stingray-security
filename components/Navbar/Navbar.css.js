import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

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

export const GradientBorder = styled.div`
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #7882f9 0%, #4f1271 74%);
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
  padding: 1rem 2rem;
  font-weight: 500;
  transition: ease 0.2s;
  &:last-of-type {
    padding-right: 0;
  }

  &:hover {
    opacity: 0.8;
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
    background-color: #000;
    /* border-left: 3px solid linear-gradient(315deg, #7882f9 0%, #4f1271 74%); */
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

export const LogoWrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 65px;
  svg {
    max-width: 80px;
    fill: #fff;
    transition: ease 150ms;
  }
  span {
    margin-top: 8px;
    padding-left: 10px;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    color: #fff;
    transition: ease 150ms;
  }

  &:hover {
    svg {
      transform: translateX(3px);
    }
    span {
      letter-spacing: 1px;
    }
  }
`;

// 7B287D
