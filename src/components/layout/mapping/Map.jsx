import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Map extends React.Component {
	constructor(props) {
		super(props);

		const {lat, lng} = this.props.initialCenter;
	    this.state = {
	      currentLocation: {
	        lat: lat,
	        lng: lng
	      }
	    }
	}
	/* Called when there is an update to the state */
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.google !== this.props.google) {
		  this.loadMap();
		}
		if (prevState.currentLocation !== this.state.currentLocation) {
	      this.recenterMap();
	    }
	}
	/* Called when loaded */
	componentDidMount() {
		if (this.props.centerAroundCurrentLocation) {
	        if (navigator && navigator.geolocation) {
	            navigator.geolocation.getCurrentPosition((pos) => {
	                const coords = pos.coords;
	                this.setState({
	                    currentLocation: {
	                        lat: coords.latitude,
	                        lng: coords.longitude
	                    }
	                })
	            })
	        }
	    }
	    this.loadMap();
	}
	/* re-centers the map in case the user is moving */
	recenterMap() {
	    const map = this.map;
	    const curr = this.state.currentLocation;

	    const google = this.props.google;
	    const maps = google.maps;

	    if (map) {
	        let center = new maps.LatLng(curr.lat, curr.lng)
	        map.panTo(center)
	    }
	  }
	/* Loads in the map */
	loadMap() {
	    if (this.props && this.props.google) {
  			// Google is available so load this in
  			const {google} = this.props;
  			const maps = google.maps;
  			// Get a reference to the DOM element where the map will go
  			const mapRef = this.refs.map;
  			const node = ReactDOM.findDOMNode(mapRef);
  			// Initialise a map at London zoomed out a little bit
  			let {initialCenter, zoom} = this.props;
  			const {lat, lng} = this.state.currentLocation;
  			const center = new maps.LatLng(lat, lng);

  			const mapConfig = Object.assign({}, {
  				center: center,
  				zoom: zoom,
        })
        this.map = new maps.Map(node, mapConfig);
	    }
	    // ...
	}
	/* Renders all the groups as markers */
	renderChildren() {
	    const {children} = this.props;

	    if (!children) return;

		return React.Children.map(children, c => {
			return React.cloneElement(c, {
				map: this.map,
				google: this.props.google,
				mapCenter: this.state.currentLocation
			});
		});
	}
	/* Actually renders the map */
	render() {
		return (
			<div ref='map' className="map-view" style={{'width' : '100%', 'height' : this.props.height}}>
		    	Loading map...
		    	{this.renderChildren()}
			</div>
		)
	} 
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  groups: PropTypes.array
}

Map.defaultProps = {
  zoom: 15,
  // Center around the hackathon location
  initialCenter: {
    lat: 51.5246,
    lng: 0.1340
  },
  centerAroundCurrentLocation: false,
}

export default Map;