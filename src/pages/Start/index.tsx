import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaUser } from 'react-icons/fa';

import { Container, EntryCard, EntryCardItem } from './styles';

import logo from '../../assets/logo.png';

export const Start: React.FC = () => {
  const navigation = useNavigate();

  const navigate = useCallback((path: string) => {
    navigation(path)
  }, [navigation])

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
