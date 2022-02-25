import React, { ComponentType } from 'react';
import { Redirect, Route as RouterRRD, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface IProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: React.FC<IProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <RouterRRD {...rest} render={({ location }) => {
      return isPrivate === (user !== undefined) ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/dashboard',
          state: { from: location }
        }} />
      )
    }} >

    </RouterRRD>
  )
}

export default Route;
