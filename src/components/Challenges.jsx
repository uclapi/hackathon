import React from 'react';

import google from '../img/google-home-mini.png';

let challenges = [
  {
    "title": "The UCL assistant Challenge",
    "description": "Add a new feature, redesign an existing page, or otherwise make a snazzy & impactful improvement to the new UCL Assistant App",
    "image_link": google,
    "prize": "Google Home Mini"
  },
];

const Challenge = (s, key) => (
  <div className="challenge" key={key}>
    <h2>{s.title}</h2>
    <h5>{s.description}</h5>
    <div className="centralImage">
      <img src={s.image_link} width="200px" height="200px"></img>
    </div>
    <h2>{s.prize}</h2>
  </div>
)

export default class Challenges extends React.Component {

    render () {
      return (
        <div className="challenge-holder custom_green">
          <h1>Challenges</h1>
          <div className="challenges">
            {challenges.map((s, i) => Challenge(s, i))}
          </div>
        </div>
      )
    }

}
