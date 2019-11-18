import React from 'react';
import posed from 'react-pose';
import { Waypoint } from 'react-waypoint';

// Styles
import 'Styles/uclapi-hackathon.scss';
// Legacy
import 'Styles/navbar.scss';

// Images
import glitch from 'Images/glitch.png';
import confetti from 'Images/confetti.png';

// Components
import { Row, Column, TextView, ButtonView, CardView, 
  ImageView, NavBar, Footer, Explosion, MapFragment } from 'Layout/Items.jsx';

// Constants#
let categories = [
  {
    'title': `app`,
    'image': glitch,
    'description': 
    (<ul>
      <li>Make a mobile application</li>
      <li>Give it some features</li>
      <li>Use the API and tell us how</li>
    </ul>)
  },
  {
    'title': `app`,
    'image': glitch,
    'description': 
    (<ul>
      <li>Make a mobile application</li>
      <li>Give it some features</li>
      <li>Use the API and tell us how</li>
    </ul>)
  },
  {
    'title': `app`,
    'image': glitch,
    'description': 
    (<ul>
      <li>Make a mobile application</li>
      <li>Give it some features</li>
      <li>Use the API and tell us how</li>
    </ul>)
  }
]

const FocusIn = posed.div({
  open: { 'padding': '0' },
  closed: { 'padding': '50px' }
});

const LeftSlideIn = posed.div({
  open: { 'marginLeft': '0' },
  closed: { 'marginLeft': '-200px' }
});

export default class HomePage extends React.Component {
    constructor(props) {
      super(props);

      this.DEBUGGING = true;

      this.state = {
        animations: {
            "landingpage" : false,
            "description" : false,
            "categories" : false,
            "2018image" : false,
        }
      }

      this.toggleAnimation = this.toggleAnimation.bind(this);
    }

    toggleAnimation(name, isOn) {
      if(this.DEBUGGING) { console.log("animation triggered for: " + name); }

      const ANIMATION_DELAY = 400;

      setTimeout(() => { 
        var animationsChange = this.state.animations;
        animationsChange[name] = isOn;

        this.setState({ 
          animations: animationsChange
        });
      }, 400);
    }

    render () {
      const { animations } = this.state

      var date = "9th - 10th March 2019"
      var location = "Malet Place Building, UCL"
      var registerLink = "";

      var categoryImageSize = "50px";

      return (
        <React.Fragment>

          <NavBar />

          <Waypoint
            onEnter={ (props) => {this.toggleAnimation("landingpage", true)} }
          />

          <Row height = '600px' styling='splash-parallax'>
            <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
              <TextView text='UCL API Hackathon' heading={1} align={'center'}/>
              <TextView text={date} heading={2} align={'center'}/>
              <TextView text={location} heading={3} align={'center'}/>
              <LeftSlideIn pose={animations["landingpage"] ? 'open' : 'closed'} style={{'transitionTimingFunction' :'cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>
                <ButtonView text={'Register Now'} link={registerLink} type="alternate"/>
              </LeftSlideIn>
            </Column>
          </Row>

          <Waypoint
            onEnter={ (props) => {this.toggleAnimation("description", true)} }
          />

          <Row styling="primary">
            <Column width='4-10' horizontalAlignment='center'>
              <TextView text="What is UCL API Hackathon?" heading={1} align={'center'}/>
              <TextView text={`UCL API Hackathon is a 24-hour event held at UCL. It's an 
                  opportunity for you to spend a weekend building on top of the student-developed
                  API for UCL.`} heading={5} align={'left'}/>
              <TextView text={`The API has been built to create a simple programmatic interface 
              to UCL’s digital services, enabling the development of an ecosystem of student-made
                tools and applications. Students can now build tools which they themselves will 
                use and maintain!`} heading={5} align={'left'}/>
              <TextView text={`If you want to use the API to build tools that help yourself and 
                other students, then this event is for you! Or, if you want to learn more about 
                APIs, programming, and new technologies, then come along and dive right in!`} heading={5} align={'left'}/>
              <TextView text={`At the end of the event, you can show off what you've built 
                and learned by presenting to everyone who attended!`} heading={5} align={'left'}/>
            </Column>
          </Row>

          <Waypoint
            onEnter={ (props) => {this.toggleAnimation("categories", true)} }
          />

          <Row styling='splash-parallax'>
            <Column width='2-3' horizontalAlignment="center">
              <TextView text="Categories" heading="1" />
              {
                categories.map( (category, i) => 
                  <FocusIn className='animated-card' pose={animations["categories"] ? 'open' : 'closed'}>
                    <CardView width={"1-"+categories.length} minWidth="300px" key={i} style={ { "padding" : "20px 0" } }>
                      <Column width='2-3' horizontalAlignment='center'>
                        <ImageView width={categoryImageSize} height={categoryImageSize} src={category.image}/>
                        <TextView text={category.title} heading={1} align='center'/>
                        <TextView text={category.description} heading={5} align={'left'}/>
                      </Column>
                    </CardView>
                  </FocusIn>
                )
              }
            </Column>
          </Row>

          <Waypoint
            onEnter={ (props) => {this.toggleAnimation("2018description", true)} }
          />

          <Row styling="primary">
            <Column width='4-10' horizontalAlignment='center'>
              <TextView text="What did the previous contestants make?" heading={1} align={'center'}/>
              <TextView text={`UCL API Hackathon is a 24-hour event held at UCL. It's an 
                  opportunity for you to spend a weekend building on top of the student-developed
                  API for UCL.`} heading={5} align={'left'}/>
              <TextView text={`The API has been built to create a simple programmatic interface 
              to UCL’s digital services, enabling the development of an ecosystem of student-made
                tools and applications. Students can now build tools which they themselves will 
                use and maintain!`} heading={5} align={'left'}/>
              <TextView text={`If you want to use the API to build tools that help yourself and 
                other students, then this event is for you! Or, if you want to learn more about 
                APIs, programming, and new technologies, then come along and dive right in!`} heading={5} align={'left'}/>
              <TextView text={`At the end of the event, you can show off what you've built 
                and learned by presenting to everyone who attended!`} heading={5} align={'left'}/>
            </Column>
          </Row>

          <Waypoint
            onEnter={ (props) => {this.toggleAnimation("2018image", true)} }
          />

          <Row height='300px' styling='team-parallax' style={{ 'textAlign' : 'center' }} noPadding>

            <Explosion width={1000} height={300} particles={30} speed={800} maxsize={30} 
              isOn={animations["2018image"] ? true : false} shape="square" gravity/>

            <Column width='1-1' horizontalAlignment='center' verticalAlignment='center'>
              <LeftSlideIn pose={animations["2018image"] ? 'open' : 'closed'} style={{'transitionTimingFunction' :'cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>
                <TextView text="The 2018 Hackathon Class!" heading={1} align={'center'}/>
              </LeftSlideIn>
            </Column>
          </Row>

          <Row height="500px" noPadding>
            <MapFragment height="500px"/>
          </Row>

          <Footer/>
          
        </React.Fragment>
      )
    }

}
