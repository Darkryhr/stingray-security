import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints.css';
import { motion } from 'framer-motion';

export const Button = styled.button`
  background: none;
  border: none;
`;

export const IconButton = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid white;
  svg {
    height: 1.35em;
    width: 1.35em;
    fill: #fff;
    transition: 0.3s ease all;
  }
  &:hover {
    svg {
      fill: #000;
    }
  }
  &:active {
    svg {
      fill: #fff;
    }
  }
`;

export const Heading1 = styled.h1`
  font-family: Poppins, sans-serif;
  font-size: 8vw;
  letter-spacing: 1rem;
  margin: 0;

  @media (${breakpoint.device.sm}) {
    font-size: 12vw;

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
  min-width: 350px;
  /* word-spacing: 350px; */
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
  color: #7882f9;
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
