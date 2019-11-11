import React from 'react';

// Styles
import 'Styles/uclapi-hackathon.scss';
// Legacy
import 'Styles/navbar.scss';

// Images
import glitch from 'Images/glitch.png';

// Components
import { Row, Column, TextView, ButtonView, CardView, ImageView, NavBar, Footer } from 'Layout/Items.jsx';

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

export default class HomePage extends React.Component {
    render () {
      var date = "9th - 10th March 2019"
      var location = "Malet Place Building, UCL"
      var registerLink = "";

      var categoryImageSize = "50px";

      return (
        <React.Fragment>

          <NavBar />

          <Row height = '600px' styling='splash-parallax'>
            <Column width='2-3' horizontalAlignment='center' verticalAlignment='center'>
              <TextView text='UCL API Hackathon' heading={1} align={'center'}/>
              <TextView text={date} heading={2} align={'center'}/>
              <TextView text={location} heading={3} align={'center'}/>
              <ButtonView text={'Register Now'} link={registerLink} type={'alternate'}/>
            </Column>
          </Row>

          <Row styling="secondary">
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

          <Row styling='splash-parallax'>
            <Column width='2-3' horizontalAlignment="center">
              <TextView text="Categories" heading="1"/>
              {
                categories.map( (category, i) => 
                  <CardView width={"1-"+categories.length} minWidth="300px" key={i} style={ { "padding" : "20px 0" } }>
                    <Column width='2-3' horizontalAlignment='center'>
                      <ImageView width={categoryImageSize} height={categoryImageSize} src={category.image}/> 
                      <TextView text={category.title} heading={1} align={'center'}/>
                      <TextView text={category.description} heading={5} align={'left'}/>
                    </Column>
                  </CardView>
                )
              }
            </Column>
          </Row>

          <Footer/>
          
        </React.Fragment>
      )
    }

}
