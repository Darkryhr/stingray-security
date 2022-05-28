import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpoint.device.lg};
  margin: 0 auto;
  padding: 0 2.5rem;
  max-height: 85px;
  @media (${breakpoint.device.sm}) {
    padding: 0 1rem;
  }

  button {
    display: none;
    @media (${breakpoint.device.sm}) {
      display: block;
      width: 2.5rem;
      cursor: pointer;
    }
  }
`;

export const GradientBorder = styled.div`
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  height: 0.3rem;
  width: 100%;
`;

export const NavLink = styled.li`
  font-family: Poppins, sans-serif;
  cursor: pointer;
  display: block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  &:last-of-type {
    padding-right: 0;
  }

  @media (${breakpoint.device.sm}) {
    font-size: 1.4rem;
    display: block;
    padding: 1.3rem 2rem;

    &:hover {
      background: #1e1e1e;
    }
  }
`;

export const NavMenu = styled.div`
  transform: translateX(0);
  .close {
    display: none;
  }
  @media (${breakpoint.device.sm}) {
    position: fixed;
    width: 60%;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    height: 100vh;
    z-index: 999;
    right: 0;
    top: 0;
    background-color: #000;

    .close {
      display: unset;
      float: right;
      margin: 2em;
    }
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
  max-width: 180px;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  @media (${breakpoint.device.sm}) {
    max-width: 150px;
  }
`;
