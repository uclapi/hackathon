import React from 'react';

/**
REQUIRED ATTRIBUTES:
this.props.particles
this.props.speed
this.props.size
this.props.isOn

OPTIONAL ATTRIBUTES:
**/

export default class Explosion extends React.Component {

	constructor(props) {
		super(props);

		// Constants for the class
		this.DEBUGGING = false;
		this.DELTA_TIME = 16;
		this.WIDTH = 500;
		this.HEIGHT = 500;
		this.RESISTENCE = 0;
		this.MAX_TIME = 2500;

		// Bind functions
		this.updateCanvas = this.updateCanvas.bind(this);

		var radius = [];
		var theta = [];
		var delay = [];
		var size = [];

		// Create the particles
		for(var i=0; i<this.props.particles; i++) {
			radius.push(0);
			theta.push(Math.random()*Math.PI*2);
			delay.push(Math.random()*1000);
			size.push(Math.random()*this.props.maxsize);
		}

		// Save class and stylings to the state
		this.state = {
			speed: this.props.speed,
			size: size,
			delay: delay,
			radius: radius,
			theta: theta,
			colors: ["#a864fd", "#29cdff", "78ff44", "ff718d", "#fdff6a"],
			intervalId: 0,
			totalTime: 0,
		};

	}

	startAnimation() {

	}

	componentDidMount() {
		var intervalId = setInterval(this.updateCanvas, 16);
		// store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
		// use intervalId from the state to clear the interval
		clearInterval(this.state.intervalId);
	}

	updateCanvas() {
	    if(this.props.isOn) {
		    const context = this.refs.canvas.getContext('2d');
		    context.clearRect(0,0, this.WIDTH, this.HEIGHT);

		    // Loop over colors
		    var colorIndex = 0;
		    const centerX = this.WIDTH / 2;
		    const centerY = this.HEIGHT / 2;

		    var { radius, delay, theta, totalTime, size } = this.state;

			// Create the particles
			for(var i=0; i<this.props.particles; i++) {
				if(delay[i] < totalTime) {
					radius[i] =  radius[i] + (this.state.speed * 16 / 1000);
					if(this.DEBUGGING) { console.log("polar coords, r: " + radius[i] + " theta: " + theta[i]); }

					const x = centerX + (Math.cos(theta[i]) * radius[i]);
					const y = centerY + (Math.sin(theta[i]) * radius[i]);

					context.beginPath();
				    context.arc(x, y, size[i], 0, 2 * Math.PI, false);
				    context.fillStyle = this.state.colors[colorIndex];
				    context.fill();
					colorIndex ++;

					if(this.DEBUGGING) { console.log("rendered at: (" + x + ", " + y + ")"); }
				}
			}	    

			const newSpeed = this.state.speed - (this.RESISTENCE * this.DELTA_TIME / 1000);
			const newTime = this.state.totalTime + this.DELTA_TIME;

			this.setState({ 
				radius : radius, 
				speed: newSpeed,
				totalTime: newTime
			});

			if(newTime > this.MAX_TIME) {
				clearInterval(this.state.intervalId);
			}
		} 
	}

	render() {
		return (
		     <canvas ref="canvas" width={this.WIDTH} height={this.HEIGHT} style={ { 'display' : 'inline'} }>
		     	Your browser doesn't support canvas
		     </canvas>
		 );
	}

}
