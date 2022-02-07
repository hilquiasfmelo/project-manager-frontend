import React from 'react';

import { Container, Content, Background, Form } from './styles';

export const SignInDev: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h1>Login como Dev</h1>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};
