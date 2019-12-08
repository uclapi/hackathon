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

	constructor(props) {
		super(props)

		this.DEBUGGING = true

		this.arePathsEqual = this.arePathsEqual.bind(this)
	}

	componentDidMount() {
	    this.polylinePromise = wrappedPromise();

	    if(this.DEBUGGING) { console.log("componentDidMount: calling render function"); }

	    this.renderPolyline();
	    this.polyline.setMap(null);
	    this.renderPolyline();
  	}

    componentDidUpdate(prevProps) {
    	const arePathsEqual = this.arePathsEqual(this.props.path, prevProps.path)

    	if(this.DEBUGGING) { console.log("componentDidUpdate: Do i rerender my path? " + !arePathsEqual); }

		if (this.props.map !== prevProps.map || !arePathsEqual) {
		    if (this.polyline) {
		    	if(this.DEBUGGING) { console.log("componentDidUpdate: setting map to null...") }
		    	this.polyline.setMap(null);
		    }
		    if(this.DEBUGGING) { console.log("componentDidUpdate: calling render function") }
		    this.renderPolyline();
		}
    }

    arePathsEqual(path, prevPath) {
    	if(path.length != prevPath.length) { return false }

    	for(var i=0; i<path.length; i++) {
    		if(path[i].lng != prevPath[i].lng || 
    			path[i].lat != prevPath[i].lat) {
    			return false
    		}
    	}

    	return true
    }

	componentWillUnmount() {
	    if (this.polyline) {
	    	if(this.DEBUGGING) { console.log("componentWillUnmount: setting map to null...") }
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

    	if(this.DEBUGGING) { console.log("Trying to render...") }

	    if (!google) {
	    	if(this.DEBUGGING) { console.log("Cannot render...") }
	        return null;
	    }
	    
	    if(this.DEBUGGING) { console.log("Rendering...") }

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