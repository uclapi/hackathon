import React from 'react';


export default class Description extends React.Component {

    render () {
      return (
        <div className="description">
          <div className="container">
            <h1>About The Hackathon</h1>
            <p>
              This is a 24-hour event run at UCL, where you'll be given all the
              workshops, tools, mentors and snacks you'll need to create new and
              interesting ideas. We have created an API around UCL's digital
              services that you can use to create applications which make life
              better for everyone at UCL. For examples of the type of projects
              you can create or to find out more about the API, check out <a target="_blank" href="https://uclapi.com">uclapi.com</a>.
            </p>
            <p>
              These kind of events are also known as hackathons, but don't worry! This isn't about hacking into banks or shops, but rather about creating something you think is interesting, life changing, or just plain ridiculous.
            </p>
            <p>
              Once the 24 hours are over, you'll be given the opportunity to show off what you've done in a 'science fair' style setting, and also the chance to demonstrate your creation in front of other attendees. Also, during the weekend, we'll be holding mini-events and games, to give you a break from your projects.
            </p>
          </div>
        </div>
      )
    }

}
