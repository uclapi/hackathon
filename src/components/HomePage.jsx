import React from 'react';
import posed from 'react-pose';
import { Waypoint } from 'react-waypoint';

// Styles
import 'Styles/uclapi-hackathon.scss';
// Legacy
import 'Styles/navbar.scss';

// Images
import individual from 'Images/icons/user.svg';
import society from 'Images/icons/user-group.svg';
import question from 'Images/icons/lightbulb.svg';

import aisoc from 'Images/sponsors/aisoc.png'
import techsoc from 'Images/sponsors/techsoc.png' 
import simplepoll from 'Images/sponsors/simplepoll.png'

// Components
import {
  Row, Column, TextView, ButtonView, CardView,
  ImageView, NavBar, Footer, Explosion, MapFragment
} from 'Layout/Items.jsx';

// Data
import { builtApps, ideas } from 'Layout/data/Examples.jsx'

// Constants
let partners = [
  {
    image: aisoc,
    name: `UCL Artificial Intelligence Society`,
    link: `http://studentsunionucl.org/clubs-societies/artificial-intelligence-society`,
  },
  {
    image: techsoc,
    name: `UCL Technology Society`,
    link: `https://ucltechsoc.com/`,
  },
  {
    image: simplepoll,
    name: `Simple Poll`,
    link: `https://simplepoll.rocks/`,
  },
]
let categories = [
  {
    'title': `Best individual use`,
    'image': individual,
    'description':
      (<ul>
        <li>Make an application any student can use</li>
        <li>Give it some innovative features</li>
        <li>Use the API and tell us how</li>
      </ul>)
  },
  {
    'title': `Best society use`,
    'image': society,
    'description':
      (<ul>
        <li>Make something that helps out societies</li>
        <li>Make it easy to use</li>
        <li>Use the API and tell us how</li>
      </ul>)
  },
  {
    'title': `Sponsor challenge`,
    'image': question,
    'description':
      (<ul>
        <li>Make an application </li>
        <li>Use our sponsor API</li>
        <li>More details to come soon</li>
      </ul>)
  }
]

const randIndex = arr => Math.floor(Math.random() * arr.length)

const FocusIn = posed.div({
  open: { 'paddingTop': '0' },
  closed: { 'paddingTop': '100px' }
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

    const date = "18th - 19th January 2020"
    const location = "North Cloisters and Gustave Tuck LT"
    
    const registerLink = "/login/process"
    const canRegister = true

    const categoryImageSize = "50px"
    
    const locations = [{lng: -0.1339282, lat: 51.5252156},
      {lng: -0.1338826, lat: 51.5251622},
      {lng: -0.1340731, lat: 51.5250854},
      {lng: -0.1340221, lat: 51.525042},
      {lng: -0.1339121, lat: 51.5250854},
      {lng: -0.1336359, lat: 51.5248384},
      {lng: -0.1336788, lat: 51.5248217},
      {lng: -0.1336412, lat: 51.5247917},
      {lng: -0.13355, lat: 51.5248284},
      {lng: -0.1335956, lat: 51.5248568},
      {lng: -0.13355, lat: 51.5248735},
      {lng: -0.1338183, lat: 51.5251154},
      {lng: -0.1337485, lat: 51.5251421},
      {lng: -0.1338558, lat: 51.5252406},
      {lng: -0.1339282, lat: 51.5252156}, ]

    return (
      <React.Fragment>

        <NavBar />

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("landingpage", true) }}
        />

        <Row height='800px' styling='splash-parallax' noPadding>
          <Explosion particles={30} speed={800} maxsize={30}
            isOn={true} isOn={animations["landingpage"] ? true : false}/>
          <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
            <TextView text='UCL API Hackathon' heading={1} align={'center'} />
            <TextView text={date} heading={2} align={'center'} />
            <TextView text={location} heading={3} align={'center'} />
            <FocusIn pose={animations["landingpage"] ? 'open' : 'closed'} style={{ 'transitionTimingFunction': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
              {canRegister ? ( 
                <ButtonView text={'Register Now'} link={registerLink} type="alternate" />
              ) : (
                <ButtonView text={'Registration not open'} link={registerLink} type="default" onClick={ () => {} } />
              )}
            </FocusIn>
          </Column>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("description", true) }}
        />

        <Row styling="primary">
          <Column width='2-3' maxWidth='700px' horizontalAlignment='center'>
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
          <FocusIn className='animated-card' pose={animations["categories"] ? 'open' : 'closed'} style={ { marginLeft: 0, marginRight: 0 } }>
            <Column width='1-1' horizontalAlignment="center">
              <TextView text="Challenges" heading="1" />
              {
                categories.map((category, i) =>
                  
                    <CardView width={"1-" + categories.length} minWidth="300px" key={i} height="380px" style={{ padding: `20px 0`}} snapAlign>
                      <Row height={`380px`} noPadding >
                        <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
                          <ImageView width={categoryImageSize} height={categoryImageSize} src={category.image} />
                          <TextView text={category.title} heading={1} align='center' />
                          <TextView text={category.description} heading={5} align={'left'} />
                        </Column>
                      </Row>
                    </CardView>
                  
                )
              }
            </Column>
          </FocusIn>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("examples", true) }}
        />

        <Row styling="primary" style={ {paddingTop : `50px` } } noPadding>
          <Column width='2-3' maxWidth='700px' horizontalAlignment='center'>
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
                        <td style={ { width : `25%` } }>
                          <h5>{title}</h5>
                        </td>
                        <td style={ { width : `50%`, textAlign : `left`} }>
                          <p>{description}</p>
                        </td>
                        <td style={ { width : `25%` } }>
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
          <Column width={`8-10`} horizontalAlignment='center' style={ {marginBottom : `20px`} }> 
            <CardView width={"1-1"} type={`alternate`} style={ { padding: `20px 0`, margin : `0`, marginBottom : `20px`, borderRadius : `0` } } noPadding>
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
            <FocusIn pose={animations["2018image"] ? 'open' : 'closed'} style={{ 'transitionTimingFunction': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
              <TextView text="The 2018 Hackathon Class!" heading={1} align={'center'} />
            </FocusIn>
          </Column>
        </Row>

        <Waypoint
          onEnter={(props) => { this.toggleAnimation("2018description", true) }}
        />

        <Row styling="primary">
          <Column width='2-3' maxWidth='700px' horizontalAlignment='center'>
            <TextView text="What did the previous contestants make?" heading={1} align={'center'} />
            <TextView text={`The 2018 hackathon took place in the computer science department labs and 
              had a variety of interesting hacks created. Some participants opted to create pages for the 
              UCL assistant app (UCL API's productivity app for students). Whilst other users opted to use 
              the API to create either web apps or local projects.`} heading={5} align={'left'} />
            <TextView text={`One team managed to use the UCL Union website to obtain information about all of 
              the events at UCL. Using this data the team added a page to the assistant app which allowed you 
              to look for and view events around UCL.`} heading={5} align={'left'} />
            <TextView text={`Another team utilised the workspaces endpoints to find free tables with enough space
            for a group of people. Not only this but it shows you on the map exactly where in the libraries
            you can sit together! `} heading={5} align={'left'} />
            <TextView text={`There were many other amazing projects which were created over the two days. 
              We hope to see many more amazing applications made using the API this time around!`} heading={5} align={'left'} />
          </Column>
        </Row>

        <Row height="500px" noPadding styling="primary">
          <div className={`default`}>
            <Column width='2-3' style={{ "display": "inline-block", "float": "left" }}>
              <MapFragment locations={locations}/>
            </Column>
            <Column width='1-3' style={{ "display": "inline-block", "float": "left" }}>
              <Row height="500px" noPadding styling="secondary">
                <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
                  <TextView text="Location:" heading={1} align={'center'} />
                  <TextView text="North Cloisters" heading={1} align={'center'} />
                </Column>
              </Row>
            </Column>
          </div>

          <div className={`mobile tablet`}>
            <Column width='1-1' style={{ "display": "inline-block", "float": "left" }}>
              <MapFragment locations={locations}/>
            </Column>
          </div>
        </Row>

        <Row styling='splash-parallax'>
          <Column width='1-1' horizontalAlignment="center">
              <TextView text="Partners" heading="1" style={ { paddingBottom : `0`} }/>
              {
                partners.map((partner, i) =>
                  
                    <CardView width={"1-3"} minWidth="300px" key={i} height="fit-content" 
                      style={{ padding: `20px 0`}} snapAlign link={partner.link}>
                      <Row noPadding>
                        <ImageView width={"100px"} height={"100px"} src={partner.image} />
                        <TextView text={partner.name} heading={3} align={'center'} />
                      </Row>
                    </CardView>
                  
                )
              }
            </Column>
        </Row>

        <Footer />

      </React.Fragment>
    )
  }

}
