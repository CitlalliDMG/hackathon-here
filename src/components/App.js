import React, { Fragment } from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import LandingPage from './Landing/Landing';
import SignInPage from './SignIn/SignIn';
import PasswordForgetPage from './PasswordForget/PasswordForget';
import HomePage from './Home/Home';
import Page404 from './Page404/Page404';

import * as routes from '../constants/routes';
import withAuthentication from '../session/withAuthentication';

const App = () => 
  <Router basename={process.env.PUBLIC_URL}>
    <Fragment>
      <Navigation/>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage}/>
        <Route exact path={routes.SIGN_IN} component={SignInPage}/>
        <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage}/>
        <Route exact path={routes.HOME} component={HomePage}/>
        <Route component={Page404}/>
      </Switch>
    </Fragment>
  </Router>

export default withAuthentication(App);
