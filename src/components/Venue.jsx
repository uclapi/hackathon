import React from 'react';

import uclMap from './../img/uclMap.png';


export default class Venue extends React.Component {

    render () {
      return (
        <div className="venue">
          <div className="container">
            <h1>The Venue</h1>
            <p>
              The event will be held at UCL (University College London), in the Wilkins Building which is the building in every picture ever of UCL.<br />
              <br />
              University College London <br />
              Gower Street <br />
              London <br />
              WC1E 6BT <br />
            </p>
            <p>
              How to get here?
            </p>
            <p>
              Tube:
              <br/>
              The closest tube stations are Euston Square (Circle, Hammersmith & City, Metropolitan Lines), Warren Street (Victoria, Northern Lines), Euston (Victoria, Northern Lines, National Rail), and Russell Square (Piccadilly Line).
            </p>
            <p>
              Bus:
              <br />
              There’s a bus stop just outside the entrance served by the 14, 24, 29, 73, 134, and 390 buses.
            </p>
            <p>
              Car:
              <br />
              There is strictly no parking at the venue, so you would have to be dropped off nearby or find your own parking spot.
            </p>
            <p>
              Train:
              <br />
              Euston Station is under a 10 minute walk away.
            </p>
            <p>
              We will put signs up around the venue to ensure you get to the right place, and there will be volunteers around campus to help out if you get lost!
            </p>

            <div className="video-container halign">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.1881378274823!2d-0.13432890772290793!3d51.52465804202041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f42f5b1d5%3A0xcf1c55b5dcac9dc!2s23-25+Gower+St%2C+Kings+Cross%2C+London+WC1E+6BT%2C+UK!5e0!3m2!1sen!2sus!4v1504491860432"
                frameBorder="0"
                style={{border: 0}}
                allowFullScreen />
            </div>
            <p>Here's a map for your convenience! If you get lost or don't know where to go, ask a volunteer or a mentor!</p>
            <img src={uclMap} className="responsive-img" />
          </div>
        </div>
      )
    }

}
