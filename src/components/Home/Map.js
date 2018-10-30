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
                src={`${this.state.url}app_id=${this.props.app_id}&app_code=${this.props.app_code}&waypoint0=${this.props.app_coord}&waypoint1=19.401331,-99.178634&poix0=${this.props.app_coord};00a3f2;00a3f2;11;.&poix1=19.401331,-99.178634;white;white;11;.&lc=1652B4&lw=6&t=0&ppi=320&w=400&h=600`}
                alt="mapa de ruta"
            />
        );
    }
}
 
export default Map;