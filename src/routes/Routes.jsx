import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import Login from '../views/login/login';
import Register from '../views/register/register';
import ForgetPassword from '../views/forgetPassword/forgetPassword';
import FPVerification from '../views/fpverification/fpverification';
import Welcome from '../views/welcome/welcome';
import ChangePasswordConfirm from '../views/changepasswordconfirm/changepasswordconfirm';

const Routes = (props) => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        auth={props.auth}
        path="/"
      />
      <RouteWithLayout
        component={Login}
        exact
        layout={MainLayout}
        auth={props.auth}
        path="/login"
      />
      <RouteWithLayout
        component={Register}
        exact
        layout={MainLayout}
        auth={props.auth}
        path="/register"
      />
      <RouteWithLayout
        component={ForgetPassword}
        exact
        layout={MainLayout}
        auth={props.auth}
        path="/forgotpassword"
      />
      <RouteWithLayout
        component={FPVerification}
        exact
        layout={MainLayout}
        auth={props.auth}
        path="/fpverification"
      />
      <RouteWithLayout
        component={Welcome}
        exact
        layout={MainLayout}
        path="/welcome"
      />
      <RouteWithLayout
        component={ChangePasswordConfirm}
        exact
        layout={MainLayout}
        path="/changepasswordconfirmation"
      />
    </Switch>
  );
};

export default Routes;
