import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import Login from '../views/login/login';
import Register from '../views/register/register';
import ForgetPassword from '../views/forgetPassword/forgetPassword';
import FPVerification from '../views/fpverification/fpverification';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={MainLayout} path="/" />
      <RouteWithLayout
        component={Login}
        exact
        layout={MainLayout}
        path="/login"
      />
      <RouteWithLayout
        component={Register}
        exact
        layout={MainLayout}
        path="/register"
      />
      <RouteWithLayout
        component={ForgetPassword}
        exact
        layout={MainLayout}
        path="/forgotpassword"
      />
      <RouteWithLayout
        component={FPVerification}
        exact
        layout={MainLayout}
        path="/fpverification"
      />
    </Switch>
  );
};

export default Routes;
