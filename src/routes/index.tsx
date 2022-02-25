import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import { Start } from '../pages/Start';
import { SignInDev } from '../pages/SignInDev';
import { SignInClient } from '../pages/SignInClient';
import { SignUpDev } from '../pages/SignUpDev';
import Dashboard from '../pages/Dashboard';


export const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" component={SignInDev} />
      <Route path="/sign-up/dev" component={SignUpDev} />
      <Route path="/sign-in/client" component={SignInClient} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Redirect to='/' />
    </Switch>
  );
};
