import React from 'react';

import logoFile from './../img/simpleAPILogoWhite.svg';


export default class Header extends React.Component {

    render () {
      return (
        <div className="header">
          <img src={logoFile} />
          <h1>UCL API Hackathon</h1>
          <h2>7th-8th October 2017</h2>
          <button className="btn">Register Now</button>
        </div>
      )
    }

}
