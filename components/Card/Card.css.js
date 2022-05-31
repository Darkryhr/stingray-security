import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: center;
  padding: 1rem;
  @media (${breakpoint.device.sm}) {
    padding-bottom: 2rem;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  max-width: 400px;
  height: 260px;
  background: white;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 0.9rem;
  max-width: 90%;
  word-wrap: break-word;
  padding: 0.4rem 0 0 0;
`;
