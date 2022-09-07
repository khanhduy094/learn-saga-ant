import * as React from 'react';
import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
//   children: React.ReactNode;
  outlet: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const isLogged = Boolean(localStorage.getItem('access_token'));

  return isLogged ? props.outlet : <Navigate to="/login" />;
}
