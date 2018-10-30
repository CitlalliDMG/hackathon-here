import React from 'react';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';


const LandingPage = () =>
  <div className="center container col-8 landing">
    <h1>Camioncito Seguro</h1>
    <p className="mt-5">
      <Link to={routes.SIGN_IN} className="link">Ingresar</Link>
    </p>  
  </div>

export default LandingPage;