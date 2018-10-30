import React from 'react';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
// import logo from '../../assets/bus.png';


const LandingPage = () =>
  <div className="center container col-8 landing">
    {/* <img src={logo} className="bus" alt="logo aplicación"/> */}
    <h1>Camioncito Seguro</h1>
    <p className="mt-5">
      <Link to={routes.SIGN_IN} className="link">Ingresar</Link>
    </p>  
  </div>

export default LandingPage;