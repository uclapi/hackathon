import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Marker extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            icon: '',
			map: '',
			animation: google.maps.Animation.DROP,
			position: ''
        }

        this.toggleBounce = this.toggleBounce.bind(this);
    }
	render() {
		return null;
	}

	componentDidUpdate(prevProps) {
		if ((this.props.map !== prevProps.map) ||
		  (this.props.position !== prevProps.position)) {
			this.renderMarker();
		}
	}

	renderMarker() {
		let {
			map, google, position, mapCenter
		} = this.props;

		let pos = position || mapCenter;
		position = new google.maps.LatLng(pos.lat, pos.lng);

		var image = {
			url: "images/house.svg",
			size: new google.maps.Size(32, 32),
			scaledSize: new google.maps.Size(32, 32)
		};
		this.state = {
			icon: image,
			map: map,
			animation: google.maps.Animation.DROP,
			position: position
		};
		this.marker = new google.maps.Marker(this.state);
		this.marker.addListener('click', this.toggleBounce)
	}

	toggleBounce() {
		if(this.marker.getAnimation() !== null) {
			this.marker.setAnimation(null);
		} else {
			this.marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
}

Marker.propTypes = {
	position: PropTypes.object,
	map: PropTypes.object,
	mapCenter: PropTypes.object
}

export default Marker;