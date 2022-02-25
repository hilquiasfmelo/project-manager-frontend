import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';
import { Store } from 'react-notifications-component';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, Background, Form, FormActions } from './styles';
import { IDevForm } from '../../interfaces/IDevForm';
import { api } from '../../services/api';

export const SignUpDev: React.FC = () => {
  const history = useHistory();

  const [model, setModel] = useState<IDevForm>({
    name: '',
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
      await api.post('/users', model);

      Store.addNotification({
        title: "Sucesso",
        message: "Usuário cadastrado",
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

      // Envia o user cadastrado para login
      history.push('/sign-in/dev');
    } catch (err) {
      Store.addNotification({
        title: "Error",
        message: "Falha ao cadastrar usuário",
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
  }, [model, history]);

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Cadastro de Dev</h1>
          <Input icon={FaUserAlt} type="text" name='name' value={model.name} onChange={updateModel} placeholder="Nome" required />
          <Input icon={FaEnvelope} type="email" name='email' value={model.email} onChange={updateModel} placeholder="E-mail" required />
          <Input icon={FaLock} type="password" name='password' value={model.password} onChange={updateModel} isPassword placeholder="Senha" required />

          <Button type="submit">Cadastrar</Button>

          <FormActions>
            <Link to="/sign-in/dev">Já tenho conta</Link>
            <Link to="/sign-in/dev">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};
