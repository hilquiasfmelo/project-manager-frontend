import React from 'react';

import { Start } from './pages/Start';

import { GlobalStyle } from './styles';

export const App: React.FC = () => {
  return (
    <>
      <Start />
      <GlobalStyle />
    </>
  );
};
