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
    			</Map>
    		</div>
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBuviEt2BLE039rNeLfbT4MDHcEOK8KMHI'
})(MapFragment);