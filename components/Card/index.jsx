import React from 'react';
import { CardWrapper, Paragraph } from './Card.css';

import { Heading3 } from '../shared';
const Card = ({ heading, children, src }) => {
  return (
    <CardWrapper>
      {src}
      <Heading3>{heading}</Heading3>
      <Paragraph>{children}</Paragraph>
    </CardWrapper>
  );
};

export default Card;
