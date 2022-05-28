import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  align-items: center;
  padding: 1rem;
  @media (${breakpoint.device.sm}) {
    max-width: none;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 260px;
  background: white;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 0.9rem;
  max-width: 90%;
  padding: 0.4rem 0 0 0;
`;
