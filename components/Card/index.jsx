import React from 'react';
import { CardWrapper, Paragraph } from './Card.css';
import Image from 'next/image';

import { Heading3 } from '../shared';
const Card = ({ heading, children, src }) => {
  return (
    <CardWrapper>
      {src}
      {/* <Image src={src} width={200} height={200} alt='compass' /> */}
      <Heading3>{heading}</Heading3>
      <Paragraph>{children}</Paragraph>
    </CardWrapper>
  );
};

export default Card;
