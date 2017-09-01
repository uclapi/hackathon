import React from 'react';

import logoFile from './../img/simpleAPILogoWhite.svg';


export default class Header extends React.Component {

    render () {
      return (
        <div className="header">
          <img src={logoFile} />
          <h1>UCL API Hackathon</h1>
          <button className="btn">Register Now</button>
        </div>
      )
    }

}
