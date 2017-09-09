import React from 'react';


export default class Description extends React.Component {

    render () {
      return (
        <div className="description">
          <div className="container">
            <h1>What is UCL API Hackathon?</h1>
            <p>
              UCL API Hackathon is a 24-hour event held at UCL, where the aim is for you to build cool, useful tools using the student-developed UCL API.
            </p>
            <p>
              The API has been built to increase access and usability of UCL services, enabling the development of an ecosystem of student-made tools and applications. Students can now build tools which they themselves will use and maintain!
            </p>
            <p>
              If you want to use the open API to build tools which will help yourself and other students, then this event is definitely for you! Or, if you want to learn about APIs, the technologies used, and learn about other new tech, then come along and attend our workshops and mini-events.
            </p>
            <p>
              You can show off what you built or learned by presenting to the rest of the awesome attendees, and our fantastic judges.
            </p>
          </div>
        </div>
      )
    }

}
