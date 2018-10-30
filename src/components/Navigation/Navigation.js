import React from "react";
import { Link } from "react-router-dom";

import AuthUserContext from '../../session/AuthUserContext';
import * as routes from "../../constants/routes";
import SignOutButton from "../SignOut/SignOut";

const Navigation = () =>
  <AuthUserContext.Consumer>
      { authUser => authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
  </AuthUserContext.Consumer>


const NavigationAuth = () => 
  <nav className="navbar navbar-expand-lg navbar-light bg-green">
    <a className="navbar-brand" href={process.env.PUBLIC_URL + routes.LANDING}>
      Camioncito Seguro
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={routes.HOME} className="nav-link">Información</Link>
        </li>
          <SignOutButton className="nav-item"/>
      </ul>
    </div>
  </nav>

const NavigationNonAuth = () => 
  <nav className="navbar navbar-expand-lg navbar-light bg-green">
  <a className="navbar-brand" href={process.env.PUBLIC_URL + routes.LANDING}>
    Camioncito Seguro
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item  mr-3">
        <Link to={routes.LANDING} className="nav-link">Acerca de</Link>
      </li>
      <li className="nav-item">
        <Link to={routes.SIGN_IN} className="nav-link">Entrar</Link>
      </li>
    </ul>
  </div>
  </nav>

export default Navigation;
