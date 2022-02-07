import React from 'react';
import { FaCode, FaUser } from 'react-icons/fa';

import { Container, EntryCard, EntryCardItem } from './styles';

import logo from '../../assets/logo.png';

export const Start: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Project Manager" />

      <EntryCard>
        <EntryCardItem>
          <FaCode size={50} />
          <span>Entrar como Dev</span>
        </EntryCardItem>
        <EntryCardItem color="#FFF" background="#111">
          <FaUser size={50} />
          <span>Entrar como Client</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
};
