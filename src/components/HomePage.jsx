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
import {
  Row, Column, TextView, ButtonView, CardView,
  ImageView, NavBar, Footer, Explosion, MapFragment
} from 'Layout/Items.jsx';

// Data
import { builtApps, ideas } from 'Layout/data/Examples.jsx'

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

const randIndex = arr => Math.floor(Math.random() * arr.length)

const FocusIn = posed.div({
  open: { 'padding': '0' },
  closed: { 'padding': '50px' }
});

const LeftSlideIn = posed.div({
  open: { 'marginLeft': '0', 'marginRight' : '0'},
  closed: { 'marginLeft': '-200px' }
});

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.DEBUGGING = true;

    this.state = {
      showMore: false,
      ideaIndex: randIndex(ideas),
      animations: {
        "landingpage": false,
        "description": false,
        "categories": false,
        "2018image": false,
        "2018description": false,
        "examples": false,
      }
    }

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation(name, isOn) {
    if (this.DEBUGGING) { console.log("animation triggered for: " + name); }

    const ANIMATION_DELAY = 400;

    setTimeout(() => {
      var animationsChange = this.state.animations;
      animationsChange[name] = isOn;

      this.setState({
        animations: animationsChange
      });
    }, 400);
  }

  render() {
    const { animations, showMore, ideaIndex } = this.state

    const date = "9th - 10th March 2019"
    const location = "Malet Place Building, UCL"
    const registerLink = ""

    const categoryImageSize = "50px"

    const locations = [{lat: 51.524463, lng: -0.133628},
      {lat: 51.524670, lng: -0.133853},
      {lat: 51.524729, lng: -0.133724},
      {lat: 51.524982, lng: -0.133976},
      {lat: 51.525054, lng: -0.133778},
      {lat: 51.524574, lng: -0.133274},
      {lat: 51.524463, lng: -0.133628},]

    return (
      <React.Fragment>

        <NavBar />

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("landingpage", true) }}
        />

        <Row height='600px' styling='splash-parallax'>
          <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
            <TextView text='UCL API Hackathon' heading={1} align={'center'} />
            <TextView text={date} heading={2} align={'center'} />
            <TextView text={location} heading={3} align={'center'} />
            <LeftSlideIn pose={animations["landingpage"] ? 'open' : 'closed'} style={{ 'transitionTimingFunction': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
              <ButtonView text={'Register Now'} link={registerLink} type="alternate" />
            </LeftSlideIn>
          </Column>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("description", true) }}
        />

        <Row styling="primary">
          <Column width='4-10' horizontalAlignment='center'>
            <TextView text="What is UCL API Hackathon?" heading={1} align={'center'} />
            <TextView text={`UCL API Hackathon is a 24-hour event held at UCL. It's an 
                  opportunity for you to spend a weekend building on top of the student-developed
                  API for UCL.`} heading={5} align={'left'} />
            <TextView text={`The API has been built to create a simple programmatic interface 
              to UCL’s digital services, enabling the development of an ecosystem of student-made
                tools and applications. Students can now build tools which they themselves will 
                use and maintain!`} heading={5} align={'left'} />
            <TextView text={`If you want to use the API to build tools that help yourself and 
                other students, then this event is for you! Or, if you want to learn more about 
                APIs, programming, and new technologies, then come along and dive right in!`} heading={5} align={'left'} />
            <TextView text={`At the end of the event, you can show off what you've built 
                and learned by presenting to everyone who attended!`} heading={5} align={'left'} />
          </Column>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("categories", true) }}
        />

        <Row styling='splash-parallax'>
          <LeftSlideIn className='animated-card' pose={animations["categories"] ? 'open' : 'closed'}>
            <Column width='1-1' horizontalAlignment="center">
              <TextView text="Categories" heading="1" />
              {
                categories.map((category, i) =>
                  
                    <CardView width={"1-" + categories.length} minWidth="300px" key={i} style={{ "padding": "20px 0" }} snapAlign>
                      <Column width='2-3' horizontalAlignment='center'>
                        <ImageView width={categoryImageSize} height={categoryImageSize} src={category.image} />
                        <TextView text={category.title} heading={1} align='center' />
                        <TextView text={category.description} heading={5} align={'left'} />
                      </Column>
                    </CardView>
                  
                )
              }
            </Column>
          </LeftSlideIn>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("examples", true) }}
        />

        <Row styling="primary" style={ {paddingTop : `50px` } } noPadding>
          <Column width='4-10' horizontalAlignment='center'>
            <TextView heading={`1`} text={`The API In Action`}/>
            <TextView heading={`p`} text={`Here are some examples of things 
              people have already built that make use of the UCL API. 
              Check out the source code, play around with them, and get 
              inspired!`}/>
          </Column>
        </Row>

        <Row styling="primary" style={ {paddingBottom : `30px` } } noPadding>
          <Column width='8-10' horizontalAlignment='center'>
              <table className="built-apps-table">
                <tbody>
                  {
                    (showMore ? builtApps : builtApps.slice(0, 1)).map(({ title, description, status, links }) => (
                      <tr key={title}>
                        <td>
                          <h5>{title}</h5>
                        </td>
                        <td>
                          <p>{description}</p>
                        </td>
                        <td>
                          {
                            // status && <div className="chip status">{status}</div>
                          }
                          {
                            links.map(({ text, url }) => (
                              <p key={url}><a href={url}>{text}</a></p>
                            ))
                          }
                        </td>
                      </tr>
                    ))
                  }
                  { !showMore && (
                    <tr>
                      <td colSpan={3}>
                        <ButtonView text={'Show more'} type="alternate" 
                          onClick={() => {
                            this.setState({ showMore: true })
                          }} />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <TextView heading={`1`} text={`You could make...`}/>
          </Column>
          <Column width={`1-1`} horizontalAlignment='center' style={ {marginBottom : `20px`} }> 
            <CardView width={"1-1"} minWidth="300px" type={`alternate`} style={ { padding: `20px 0`, maxWidth : `300px`} } snapAlign>
              <Column width='2-3' horizontalAlignment='center'>
                <TextView text={ideas[ideaIndex]} heading={`p`} style={ { marginBottom : `0` } }/>
              </Column>
            </CardView>
          </Column>
          <Column width='8-10' horizontalAlignment='center'>
              <ButtonView text={'Inspire Me!'} type="alternate" 
                onClick={() => {
                  this.setState({ ideaIndex: randIndex(ideas) })
                }} />
          </Column>

        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("2018image", true) }}
        />

        <Row height='300px' styling='team-parallax' style={{ 'textAlign': 'center' }} noPadding>

          <Explosion particles={30} speed={800} maxsize={30}
            isOn={animations["2018image"] ? true : false} shape="square" gravity />

          <Column width='1-1' horizontalAlignment='center' verticalAlignment='center'>
            <LeftSlideIn pose={animations["2018image"] ? 'open' : 'closed'} style={{ 'transitionTimingFunction': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
              <TextView text="The 2018 Hackathon Class!" heading={1} align={'center'} />
            </LeftSlideIn>
          </Column>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("2018description", true) }}
        />

        <Row styling="primary">
          <Column width='4-10' horizontalAlignment='center'>
            <TextView text="What did the previous contestants make?" heading={1} align={'center'} />
            <TextView text={`UCL API Hackathon is a 24-hour event held at UCL. It's an 
                  opportunity for you to spend a weekend building on top of the student-developed
                  API for UCL.`} heading={5} align={'left'} />
            <TextView text={`The API has been built to create a simple programmatic interface 
              to UCL’s digital services, enabling the development of an ecosystem of student-made
                tools and applications. Students can now build tools which they themselves will 
                use and maintain!`} heading={5} align={'left'} />
            <TextView text={`If you want to use the API to build tools that help yourself and 
                other students, then this event is for you! Or, if you want to learn more about 
                APIs, programming, and new technologies, then come along and dive right in!`} heading={5} align={'left'} />
            <TextView text={`At the end of the event, you can show off what you've built 
                and learned by presenting to everyone who attended!`} heading={5} align={'left'} />
          </Column>
        </Row>

        <Row height="500px" noPadding styling="primary">
          <Column width='2-3' style={{ "display": "inline-block", "float": "left" }}>
            <MapFragment height="500px" locations={locations}/>
          </Column>
          <Column width='1-3' style={{ "display": "inline-block", "float": "left" }}>
            <Row height="500px" noPadding styling="secondary">
              <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
                <TextView text="Location:" heading={1} align={'center'} />
                <TextView text="North Cloisters" heading={1} align={'center'} />
              </Column>
            </Row>
          </Column>
        </Row>

        <Footer />

      </React.Fragment>
    )
  }

}
