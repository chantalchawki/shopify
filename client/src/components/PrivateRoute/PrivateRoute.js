import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthService from '../../Services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.user
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

export default PrivateRoute;