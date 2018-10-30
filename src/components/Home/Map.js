import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://image.maps.api.here.com/mia/1.6/routing?',
            points: '',
        }        
    }

    render() {         
        return (
            // console.log(this.props.app_coord)
            <img
                src={`${this.state.url}app_id=${this.props.app_id}&app_code=${this.props.app_code}&waypoint0=${this.props.app_coord}&waypoint1=19.401331,-99.178634&waypoint2=19.404061,-99.183695&waypoint3=19.409433,-99.189008&waypoint4=19.413108,-99.178980&poi=${this.props.app_coord},19.401331,-99.178634,19.404061,-99.183695,19.409433,-99.189008,19.413108,-99.178980&lc=001f5e&lw=6&t=0&ppi=320&w=400&h=650&z=35`}
                alt="mapa de ruta"
                className="map-image"
            />
        );
    }
}
 
export default Map;