import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, Background, Form, FormActions } from './styles';

export const SignInClient: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <Form>
          <h1>Login como Client</h1>
          <Input icon={FaCode} type="text" placeholder="Digite seu código" required />

          <Button>Entrar</Button>

          <FormActions>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
};
