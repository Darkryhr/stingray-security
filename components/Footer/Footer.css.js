import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

export const FooterWrapper = styled.div`
  max-width: ${breakpoint.size.lg};
  width: 100%;
  margin: 0 auto;
  min-height: 18vh;
  display: flex;

  justify-content: space-between;
  position: relative;
  padding: 2rem 5vw;
  align-items: center;
  @media (${breakpoint.device.sm}) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  max-width: 120px;
  padding: 1rem 0;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  @media (${breakpoint.device.sm}) {
    max-width: 120px;
    padding: 2rem 0;
  }
`;

export const Copy = styled.p`
  font-family: Poppins, san-serif;
  font-weight: 700;
  text-transform: uppercase;

  span {
    font-weight: 500;
    opacity: 0.6;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 220px;
  text-align: end;
  @media (${breakpoint.device.sm}) {
    text-align: center;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
