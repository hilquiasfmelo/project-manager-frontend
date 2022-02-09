import React from 'react';

import { Container } from './sytles';

export const Button: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

