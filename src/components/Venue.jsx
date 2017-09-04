import React from 'react';

import uclMap from './../img/uclMap.png';


export default class Venue extends React.Component {

    render () {
      return (
        <div className="venue">
          <div className="container">
            <h1>The Venue</h1>
            <p>
              The event will be held at University College London, in the gorgeous Wilkins Building. It's the big one with the columns and dome. Our location is: <br />
              <br />
              University College London <br />
              Gower Street <br />
              London <br />
              WC1E 6BT <br />
              <br />
              The closest tube stations are Euston Square (Circle, Hammersmith & City, Metropolitan Lines), Warren Street (Victoria, Northern Lines), Euston (Victoria, Northern Lines, National Rail), and Russell Square (Piccadilly Line). There's also a bus stop just outside the entrance served by the 14, 24, 29, 73, 134, and 390 buses.
            </p>

            <a className="waves-effect waves-light btn" target="_blank">
              <i className="material-icons left">map</i>Google Maps
            </a>

            <p>Here's a map for your convenience! If you get lost or don't know where to go, ask a volunteer or a mentor!</p>
            <img src={uclMap} className="responsive-img" />
          </div>
        </div>
      )
    }

}
