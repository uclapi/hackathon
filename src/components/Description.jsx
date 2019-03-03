import React from 'react';


export default class Description extends React.Component {

    render () {
      return (
        <div className="description light">
          <div className="container">
            <h1>What is <a href="https://uclapi.com">UCL API</a> Hackathon?</h1>
            <p>
              UCL API Hackathon is a 2-day event held at UCL. It's an opportunity for you to spend a weekend building on top of the student-developed <a href="https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82" target="_blank">API</a> for UCL.
            </p>
            <p>
              The API has been built to create a simple programmatic interface to UCL’s digital services, enabling the development of an ecosystem of student-made tools and applications. Students can now build tools which they themselves will use and maintain!
            </p>
            <p>
              If you want to use the API to build tools that help yourself and other students, then this event is for you! Or, if you want to learn more about APIs, programming, and new technologies, then come along and dive right in!
            </p>
            <p>
              At the end of the event, you can show off what you've built and learned by presenting to everyone who attended!
            </p>
          </div>
        </div>
      )
    }

}
