import React from 'react';

import { GoogleApiWrapper, Polygon, Map} from 'google-maps-react';

class MapFragment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const containerStyles = {
        width: '100%',
        height: '500px',
    }

    const mapStyle = {
      width: '100%',
      height: '500px',
    }

    return  <div style={{containerStyles}}>
    			<Map
            google={this.props.google}
            style={mapStyle}
            zoom={18}
            // Center around the hackathon location
            initialCenter={ {lng: -0.1344412, lat: 51.5249917} }
            centerAroundCurrentLocation={false}
          >
            <Polygon
              path={this.props.locations}
              fillColor="#E37222"
              fillOpacity={0.35}
              strokeColor="#E37222"
              strokeOpacity={0.8}
              strokeWeight={6}
            />
          </Map>
    		</div>
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBPqj02ug28JWl-8pbuvWQNWJuYK6CFnNA'
})(MapFragment);