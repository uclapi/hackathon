import React from 'react';

import google from '../img/google-home-mini.png';

let challenges = [
  {
    "title": "The UCL Assistant Challenge",
    "description": "Add a new feature, redesign an existing page, or otherwise make a snazzy & impactful improvement to the new UCL Assistant App",
    "image_link": google,
    "prize": "Google Home Mini"
  },
  {
    title: "Most Entertaining Yet Actually Kinda Useful",
    description: "Build something absolutely ludicrous that fills a niche in our lives we never knew existed",
    prize: "Secret Prize"
  }
];

const Challenge = ({ title, description, image_link, prize }, key) => (
  <div className="challenge" key={key}>
    <h2>{title}</h2>
    <h5>{description}</h5>
    {
      image_link && (
        <div className="centralImage">
          <img src={image_link} width="200px" height="200px"></img>
        </div>
      )
    }
    <h2>{prize}</h2>
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
