import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, Background, Form, FormActions } from './styles';

export const SignInDev: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h1>Login como Dev</h1>
          <Input icon={FaEnvelope} type="email" placeholder="Entre com seu e-mail" required />
          <Input icon={FaLock} type="password" isPassword placeholder="Senha" required />

          <Button>Entrar</Button>

          <FormActions>
            <Link to="/sign-up/dev">Faça seu cadastro</Link>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};
