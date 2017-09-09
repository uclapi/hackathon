import React from 'react';

import ISD from './../img/isd.png';
import Github from './../img/github.png';
import Travis from './../img/travis.png';
import Postman from './../img/postman.png';
import Slack from './../img/slack.png';


let sponsors = [
  {
    "title": "UCL ISD",
    "imageLink": ISD,
    "link": "http://www.ucl.ac.uk/isd"
  },
  {
    "title": "Github",
    "imageLink": Github,
    "link": "https://education.github.com/pack"
  },
];

let partners = [
  {
    "title": "Travis",
    "imageLink": Travis,
    "link": "https://travis-ci.org/"
  },
  {
    "title": "Postman",
    "imageLink": Postman,
    "link": "https://www.getpostman.com/"
  },
  {
    "title": "Slack",
    "imageLink": Slack,
    "link": "https://slack.com/"
  },
]


const Sponsor = (s, key) => (
  <a href={s.link} target="_blank">
    <img key={key} src={s.imageLink} />
  </a>
)

export default class Sponsors extends React.Component {

    render () {
      return (
        <div>
          <h1>Sponsors</h1>
          <div className="sponsors">
            {sponsors.map((s, i) => Sponsor(s, i))}
          </div>
          <h1>Partners</h1>
          <div className="sponsors">
            {partners.map((s, i) => Sponsor(s, i))}
          </div>
        </div>
      )
    }

}
