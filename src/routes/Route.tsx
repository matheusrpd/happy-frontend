import React from 'react';
import {
  Route as ReactDOMRoute,
  Redirect,
  RouteProps as ReactDOMRuteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRuteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return (isPrivate === !!user) || (!isPrivate && user) ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/app',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;