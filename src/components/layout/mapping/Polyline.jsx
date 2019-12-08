import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const wrappedPromise = function() {
    var wrappedPromise = {},
        promise = new Promise(function
           (resolve, reject) {
            wrappedPromise.resolve = resolve;
            wrappedPromise.reject = reject;
        });
    wrappedPromise.then = promise.then.bind(promise);
    wrappedPromise.catch = promise.catch.bind(promise);
    wrappedPromise.promise = promise;

    return wrappedPromise;
}

class Polyline extends React.Component {
	componentDidMount() {
	    this.polylinePromise = wrappedPromise();
	    this.renderPolyline();
  	}

    componentDidUpdate(prevProps) {
		if (this.props.map !== prevProps.map) {
		    if (this.polyline) {
		    	this.polyline.setMap(null);
		    }
		    this.renderPolyline();
		}
    }

	componentWillUnmount() {
	    if (this.polyline) {
	      this.polyline.setMap(null);
	    }
	}

    renderPolyline() {
    	const {
	        map,
	        google,
	        path,
	        strokeColor,
	        strokeOpacity,
	        strokeWeight,
	        fill,
	        ...props
    	} = this.props;

	    if (!google) {
	        return null;
	    }

	    const params = {
	      map,
	      path,
	      strokeColor,
	      strokeOpacity,
	      strokeWeight,
	      fill,
	      ...props
	    };

	    this.polyline = new google.maps.Polyline(params);

	    this.polylinePromise.resolve(this.polyline);
  }

  getPolyline() {
    return this.polylinePromise;
  }

  render() {
    return null;
  }
}

Polyline.propTypes = {
  path: PropTypes.array,
  strokeColor: PropTypes.string,
  strokeOpacity: PropTypes.number,
  strokeWeight: PropTypes.number
}

export default Polyline;