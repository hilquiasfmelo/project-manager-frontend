import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FaCode, FaUser } from 'react-icons/fa';

import { Container, EntryCard, EntryCardItem } from './styles';

import logo from '../../assets/logo.png';

export const Start: React.FC = () => {
  const history = useHistory();

  const navigate = useCallback((path: string) => {
    history.push(path)
  }, [history])

  return (
    <Container>
      <img src={logo} alt="Project Manager" />

      <EntryCard >
        <EntryCardItem onClick={() => navigate('/sign-in/dev')}>
          <FaCode size={50} />
          <span>Entrar como Dev</span>
        </EntryCardItem>
        <EntryCardItem onClick={() => navigate('/sign-in/client')} color="#FFF" background="#111">
          <FaUser size={50} />
          <span>Entrar como Client</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
};
