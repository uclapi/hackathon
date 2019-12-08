import React from 'react';

import { GoogleApiWrapper } from 'google-maps-react';

import Map from '../mapping/Map.jsx';
import Marker from '../mapping/Marker.jsx';
import Polyline from '../mapping/Polyline.jsx';

class MapFragment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const containerStyles = {
        width: '100%',
        height: this.props.height
    };

    return  <div style={{containerStyles}}>
    			<Map google={this.props.google} height={this.props.height}>
            <Polyline
              path={this.props.locations}
              color_="#000000"
              fillColor="#E37222"
              fillOpacity={0.35}
              strokeColor="#E37222"
              strokeOpacity={0.8}
              strokeWeight={6}
              fill="#FFFFFF"
              />
          </Map>
    		</div>
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBPqj02ug28JWl-8pbuvWQNWJuYK6CFnNA'
})(MapFragment);