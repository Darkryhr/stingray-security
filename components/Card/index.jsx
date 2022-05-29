import React from 'react';
import { CardWrapper, Paragraph, Placeholder } from './Card.css';

import { Heading3 } from '../shared';
const Card = ({ heading, children }) => {
  return (
    <CardWrapper>
      <Placeholder />
      <Heading3>{heading}</Heading3>
      <Paragraph>{children}</Paragraph>
    </CardWrapper>
  );
};

export default Card;
