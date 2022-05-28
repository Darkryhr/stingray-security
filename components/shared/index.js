import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Heading1 = styled.h1`
  font-family: Poppins, sans-serif;
  font-size: 8vw;
  letter-spacing: 1rem;
  margin: 0;

  @media (${breakpoint.device.sm}) {
    font-size: 10vw;

    letter-spacing: 0.5rem;
  }
`;

export const Heading2 = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 2.5rem;

  @media (${breakpoint.device.sm}) {
    font-size: 1.5rem;
  }

  @media (${breakpoint.device.xs}) {
    font-size: 1rem;
  }
`;

export const Heading3 = styled.h3`
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.2rem;
  text-align: center;
  @media (${breakpoint.device.sm}) {
    font-size: 1.2rem;
  }

  @media (${breakpoint.device.xs}) {
    font-size: 0.9rem;
  }
`;

export const Lead = styled.p`
  color: #ff6161;
  text-align: center;
  font-size: 1.5rem;
  padding: 1.5rem 0;
`;

export const Subheading = styled.h4`
  font-size: 1.7rem;
  padding: 1rem 0;
  @media (${breakpoint.device.sm}) {
    font-size: 1.2rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 1rem;
  }
`;

export const MutedSubHeading = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  opacity: 0.5;
  font-size: 1.5rem;
  padding: 0.6rem 0 1.5rem 0;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
`;

export const MutedParagraph = styled.p`
  font-size: 1.1rem;
  opacity: 0.5;
`;
