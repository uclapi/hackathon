import React from 'react'
import posed from 'react-pose';

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

// Components used within
import { ImageView } from 'Layout/Items.jsx'

// Repeat animation image
import replay from 'Images/repeat.svg'

// Fade animation
const FadeIn = posed.div({
  open: { opacity: '1' },
  closed: { opacity: 0 }
});

export default class Explosion extends React.Component {

	constructor(props) {
		super(props)

		// Constants for the class
		this.DEBUGGING = true
		this.DELTA_TIME = 16
		this.RESISTENCE = 50
		this.MAX_TIME = 2500
		this.FADE_TIME = 500

		// Bind functions
		this.updateCanvas = this.updateCanvas.bind(this)
		this.safeStopAnimation = this.safeStopAnimation.bind(this)
		this.setupAnimation = this.setupAnimation.bind(this)
		this.startAnimation = this.startAnimation.bind(this)

		// Save class and stylings to the state
		this.state = {
			speed: this.props.speed,
			size: [],
			delay: [],
			radius: [],
			theta: [],
			colors: ["#a864fd", "#29cdff", "78ff44", "ff718d", "#fdff6a",
			"#f6db5f", "ffb554", "fe5e51", "9e3d64", "36abb5"],
			intervalId: 0,
			totalTime: 0,
			verticalSpeed: 0, 
			verticalDisplacement: 0,
			width: 100,
			height: 100,
			active: false,
		}

		setTimeout(() => {
			this.setupAnimation()
		}, 100)
	}

	setupAnimation() {
		var radius = []
		var theta = []
		var delay = []
		var size = []

		// Create the particles
		for(var i=0; i<this.props.particles; i++) {
			radius.push(0)
			theta.push(Math.random()*Math.PI*2)
			delay.push(Math.random()*700)
			size.push( ( this.props.maxsize / 2 )+ ( Math.random()*(this.props.maxsize / 2) ) )
		}

		this.setState({
			speed: this.props.speed,
			size: size,
			delay: delay,
			radius: radius,
			theta: theta,
			totalTime: 0,
			verticalSpeed: 0, 
			verticalDisplacement: 0,
		})
	}

	startAnimation() {
		this.safeStopAnimation()

		setTimeout(() => {
			this.setupAnimation()

			var intervalId = setInterval(this.updateCanvas, 16)
			this.setState({intervalId: intervalId, active: true})
		}, 100)
	}

	safeStopAnimation() {
		// Only delete if active i.e not destroyed yet
		if(this.state.active) {
			clearInterval(this.state.intervalId)
			// Update state to prevent duplicate deletions
			this.setState({active: false})
		}
	}

	componentDidMount() {
		var intervalId = setInterval(this.updateCanvas, 16)
		// store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId, active: true})
	}

	componentWillUnmount() {
		// use intervalId from the state to clear the interval
		this.safeStopAnimation()
	}

	updateCanvas() {
    	var newWidth = this.refs.canvas.clientWidth
    	var newHeight = this.refs.canvas.clientHeight

    	if(newWidth != this.state.width ||
    		newHeight != this.state.height) {
    		
    		this.setState({
    			width: newWidth,
    			height: newHeight,
    		})
    	}

	    if(this.props.isOn) {
			var { radius, delay, theta, totalTime, size, colors, verticalDisplacement, width, height} = this.state

		    const context = this.refs.canvas.getContext('2d')
		    context.clearRect(0,0, width, height)

		    // Loop over colors
		    var colorIndex = 0
		    const centerX = width / 2
		    const centerY = height / 2

	    	if(this.DEBUGGING) { console.log("w: " + width + ", h: " + height + ", number: " + radius.length) }

		    const timeLeft = this.MAX_TIME - totalTime
		    if( timeLeft < this.FADE_TIME) {
		    	context.globalAlpha = timeLeft / this.FADE_TIME
		    } else {
		    	context.globalAlpha = 1
		    }

			// Create the particles
			for(var i=0; i<radius.length; i++) {
				if(delay[i] < totalTime) {
					radius[i] =  radius[i] + (this.state.speed * 16 / 1000)
					if(this.DEBUGGING) { console.log("polar coords, r: " + radius[i] + " theta: " + theta[i]) }

					const x = centerX + (Math.cos(theta[i]) * radius[i])
					var y = centerY + (Math.sin(theta[i]) * radius[i])
					if(this.props.gravity) { y += verticalDisplacement }
					if(y > height) { y = height }

				    context.fillStyle = colors[colorIndex]
				    context.beginPath()

					switch(this.props.shape) {
						case "square":
							context.rect(x - (size[i]/2), y - (size[i]/2), size[i], (size[i]/2))
							break

						default:
							context.arc(x, y, size[i], 0, 2 * Math.PI, false)
					}

				    context.fill()
					colorIndex ++

					if(colorIndex == colors.length) {
						colorIndex = 0
					}

					if(this.DEBUGGING) { console.log("rendered at: (" + x + ", " + y + ")") }
				}
			}	    

			const newSpeed = this.state.speed - (this.RESISTENCE * this.DELTA_TIME / 1000)
			const newTime = this.state.totalTime + this.DELTA_TIME
			const newVerticalSpeed = this.state.verticalSpeed + (500 * this.DELTA_TIME / 1000)
			const newVerticalDisplacement = this.state.verticalDisplacement + (newVerticalSpeed * this.DELTA_TIME / 1000)

			this.setState({ 
				radius : radius, 
				speed: newSpeed,
				totalTime: newTime,
				verticalSpeed: newVerticalSpeed,
				verticalDisplacement: newVerticalDisplacement
			})

			if(newTime > this.MAX_TIME) {
				this.safeStopAnimation()
			}
		} 
	}

	render() {
		const { width, height } = this.state

		return (
			<div className="canvas-holder" style={ { width : `100%`, height : `100%`} }
					onClick={this.startAnimation}>
			    <canvas ref="canvas" width={width} height={height}
			    		style={ { display : `inline`, width : `100%`, height : `100%`} }>
			     	Your browser doesn't support canvas
			    </canvas>

			    <FadeIn pose={(!this.state.active && this.props.isOn) ? 'open' : 'closed'} 
			    	style={{ 'transitionTimingFunction': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
			    	<ImageView src={replay} width={`50px`} height={`50px`} description={`click to replay animation`} 
			    			style = { { position : `absolute`, left : `50px`, bottom : `50px` } } />
    			</FadeIn>
		    </div>
		 )
	}

}
