import React from 'react';
import { CardWrapper, Paragraph, Placeholder } from './Card.css';

import { Heading3 } from '../shared';
const Card = () => {
  return (
    <CardWrapper>
      <Placeholder />
      <Heading3>Cybersecurity Consulting</Heading3>
      <Paragraph>
        We don&apos;t believe in simple pen-testing, we believe in solving a
        problem, your organization being vulnerable to hackers is one, We can
        solve it.
      </Paragraph>
    </CardWrapper>
  );
};

export default Card;
