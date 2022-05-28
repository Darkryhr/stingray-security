import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

export const FooterWrapper = styled.div`
  max-width: ${breakpoint.size.lg};
  width: 100%;
  margin: 0 auto;
  min-height: 18vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  max-width: 120px;
  padding: 1rem 0;
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
