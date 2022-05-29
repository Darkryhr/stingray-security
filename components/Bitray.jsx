import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { breakpoint } from '../styled/breakpoints.css';

const Bitray = () => {
  return (
    <Svg>
      <Image src={'/bitray.png'} alt='bitmap stingray' layout='fill' />
    </Svg>
  );
};

export default Bitray;

const Svg = styled.div`
  position: absolute;
  padding: 0 7vw 4rem 7vw;
  max-width: ${breakpoint.size.lg};
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 70vh;
  opacity: 0.3;
  @media (${breakpoint.device.xs}) {
    /* max-width: ${breakpoint.size.xs}; */
  }

  img {
    object-fit: contain;
  }
`;
