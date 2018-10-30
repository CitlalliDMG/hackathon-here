import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://image.maps.api.here.com/mia/1.6/mapview?',
            points: [],
        }        
    }

    render() {         
        return (
            // console.log(this.props.app_coord)
            <img
                src={`${this.state.url}&app_id=${this.props.app_id}&app_code=${this.props.app_code}&c=${this.props.app_coord}&z=${this.props.app_zoom}`}
                alt="mapa de ruta"
            />
        );
    }
}
 
export default Map;