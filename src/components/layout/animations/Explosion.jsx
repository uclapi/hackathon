import React from 'react';

/**
REQUIRED ATTRIBUTES:
this.props.particles
this.props.speed
this.props.size
this.props.isOn
this.props.width
this.props.height

OPTIONAL ATTRIBUTES:
this.props.gravity
**/

export default class Explosion extends React.Component {

	constructor(props) {
		super(props);

		// Constants for the class
		this.DEBUGGING = false;
		this.DELTA_TIME = 16;
		this.WIDTH = this.props.width;
		this.HEIGHT = this.props.height;
		this.RESISTENCE = 50;
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
			delay.push(Math.random()*700);
			size.push( ( this.props.maxsize / 2 )+ ( Math.random()*(this.props.maxsize / 2) ) );
		}

		// Save class and stylings to the state
		this.state = {
			speed: this.props.speed,
			size: size,
			delay: delay,
			radius: radius,
			theta: theta,
			colors: ["#a864fd", "#29cdff", "78ff44", "ff718d", "#fdff6a",
			"#f6db5f", "ffb554", "fe5e51", "9e3d64", "36abb5"],
			intervalId: 0,
			totalTime: 0,
			verticalSpeed: 0, 
			verticalDisplacement: 0
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

		    var { radius, delay, theta, totalTime, size, colors, verticalDisplacement} = this.state;

			// Create the particles
			for(var i=0; i<this.props.particles; i++) {
				if(delay[i] < totalTime) {
					radius[i] =  radius[i] + (this.state.speed * 16 / 1000);
					if(this.DEBUGGING) { console.log("polar coords, r: " + radius[i] + " theta: " + theta[i]); }

					const x = centerX + (Math.cos(theta[i]) * radius[i]);
					var y = centerY + (Math.sin(theta[i]) * radius[i]);
					if(this.props.gravity) { y += verticalDisplacement; }

					context.beginPath();
				    context.arc(x, y, size[i], 0, 2 * Math.PI, false);
				    context.fillStyle = colors[colorIndex];
				    context.fill();
					colorIndex ++;

					if(colorIndex == colors.length) {
						colorIndex = 0;
					}

					if(this.DEBUGGING) { console.log("rendered at: (" + x + ", " + y + ")"); }
				}
			}	    

			const newSpeed = this.state.speed - (this.RESISTENCE * this.DELTA_TIME / 1000);
			const newTime = this.state.totalTime + this.DELTA_TIME;
			const newVerticalSpeed = this.state.verticalSpeed + (10 * this.DELTA_TIME / 1000);
			const newVerticalDisplacement = this.state.verticalDisplacement - (newVerticalSpeed * this.DELTA_TIME / 1000);

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
