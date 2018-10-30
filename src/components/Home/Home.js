import React, { Component } from 'react';

import withAuthorization from '../../session/withAuthorization';
import Map from './Map';
import './Home.css';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      // items: [],
      // isLoaded: true,
      value:'0,0',
      error: null,
    }
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            value: `${position.coords.latitude},${position.coords.longitude}`,
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
    }
  }

  render() {
    return(
      <div className="col-sm-12 col-xl-6 offset-xl-3 mt-3">
        <Map app_id="GJI8ICf6LihEIAGbLTZb" app_code="C-Z87J-qv8YxWSZ5ctQLSg" app_coord={this.state.value} app_zoom="15"/>
      </div>
    )
    
  }
}

const authCondition  = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);