import React from 'react';

import logoFile from './../img/simpleAPILogoWhite.svg';
import DjangoCSRFToken from './DjangoCSRFToken.jsx';


export default class Header extends React.Component {

  render () {
    return (
      <div className="header">
        <img src={logoFile} />
        <h1>UCL API Hackathon</h1>
        <h2>7th-8th October 2017</h2>
        <h5 className="yellow-text">Applications Close 15th September!</h5>
        <form action="/applications/login/process" method="post">
          <DjangoCSRFToken />
          <button className="btn" type="submit">Apply Now</button>
        </form>
      </div>
    )
  }

}
