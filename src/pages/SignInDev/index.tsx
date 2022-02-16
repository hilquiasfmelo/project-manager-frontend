import React, { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Store } from 'react-notifications-component';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { ICredentialsDev } from '../../interfaces/ICredentialsDev';
import { AuthContext } from '../../context/auth';

import { Container, Content, Background, Form, FormActions } from './styles';

export const SignInDev: React.FC = () => {
  const { user, signInDev } = useContext(AuthContext);

  const [model, setModel] = useState<ICredentialsDev>({
    email: '',
    password: '',
  });

  // Busca e atualiza/registra no value o que o user digita
  const updateModel = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [event.target.name]: event.target.value
    })
  }, [model]);

  // Realiza o envio do formulário
  const onSubmit = useCallback(async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInDev(model);

      Store.addNotification({
        title: "Sucesso",
        message: "Usuário autenticado com sucesso",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });

    } catch (err) {
      Store.addNotification({
        title: "Error",
        message: "Falha ao autentica o usuário",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
    }
  }, [model, signInDev]);

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Login como Dev</h1>
          <Input icon={FaEnvelope} type="email" name="email" value={model.email} onChange={updateModel} placeholder="Entre com seu e-mail" required />
          <Input icon={FaLock} type="password" name="password" value={model.password} onChange={updateModel} isPassword placeholder="Senha" required />

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
