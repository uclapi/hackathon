import React from 'react';

import logoFile from './../img/simpleAPILogoWhite.svg';


export default class Header extends React.Component {

    render () {
      return (
        <div className="header">
          <img src={logoFile} />
          <h1>UCL API Hackathon</h1>
          <h2>7th-8th October 2017</h2>
          <h5 className="yellow-text">Applications Close 15th September!</h5>
          <button className="btn">Apply Now</button>
        </div>
      )
    }

}
