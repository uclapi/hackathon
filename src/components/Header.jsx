import React from 'react';

import logoFile from './../img/simpleAPILogoWhite.svg';
import DjangoCSRFToken from './DjangoCSRFToken.jsx';


export default class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = window.initialData;
  }

  render () {
    let application = "";

    if (this.state.error) {
      application = (
        <div>
          <h5 className="yellow-text">There was an error authenticating you, please register again!</h5>
          <form action="/applications/login/process" method="post">
            <DjangoCSRFToken />
            <button className="btn" type="submit">Register Now</button>
          </form>
        </div>
      )
    }
    else if (this.state.applied === "True") {
      application = (
        <div>
          <h5 className="yellow-text">
            Thanks { this.state.given_name }! Complete registration <a target="_blank" href={ this.state.event_link + "?discount=" +  this.state.eventbrite_code}>on Eventbrite</a>
          </h5>
          <p><b>{ this.state.eventbrite_code }</b></p>
        </div>
      )
    }
    else {
      application = (
        <div>
          <form action="/applications/login/process" method="post">
            <DjangoCSRFToken />
            <button className="btn" type="submit">Register Now</button>
          </form>
          <br />
          <h6>
            First year and don't yet have a UCL user id and password? Complete pre enrolment on <a href="https://www.ucl.ac.uk/portico">Portico</a>
          </h6>
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
