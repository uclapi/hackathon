import React from 'react';

import logoFile from './../img/simpleAPILogoWhite.svg';
import DjangoCSRFToken from './DjangoCSRFToken.jsx';


export default class Header extends React.Component {

  constructor (props) {
    super(props);
    console.log(JSON.stringify(window.initialData));
    this.state = window.initialData;
  }

  render () {
    let application = "";

    if (this.state.error) {
      application = (
        <div>
          <h5 className="yellow-text">There was an error authenticating you, please apply again!</h5>
          <form action="/applications/login/process" method="post">
            <DjangoCSRFToken />
            <button className="btn" type="submit">Apply Now</button>
          </form>
        </div>
      )
    }
    else if (this.state.applied === "True") {
      application = (
        <div>
          <h5 className="yellow-text">
            { this.state.user_data.given_name } Thanks for applying, you Eventbrite code is:
          </h5>
          <p>{ this.state.eventbrite_code }</p>
          <p>Hurry and register at { this.state.event_link }</p>
        </div>
      )
    }
    else {
      application = (
        <div>
          <h5 className="yellow-text">Applications Close 15th September!</h5>
          <form action="/applications/login/process" method="post">
            <DjangoCSRFToken />
            <button className="btn" type="submit">Apply Now</button>
          </form>
        </div>
      );
    }

    return (
      <div className="header">
        <img src={logoFile} />
        <h1>UCL API Hackathon</h1>
        <h2>7th-8th October 2017</h2>
        { application }
      </div>
    )
  }

}
