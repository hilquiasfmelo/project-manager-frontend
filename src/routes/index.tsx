import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Start } from '../pages/Start';
import { SignInDev } from '../pages/SignInDev';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/sign-in/dev" element={<SignInDev />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
