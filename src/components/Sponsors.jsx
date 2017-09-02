import React from 'react';

import ISD from './../img/isd.png';
import Github from './../img/github.png';
import Google from './../img/google.png';
import Facebook from './../img/facebook.png';

let sponsors = [
  {
    "title": "UCL ISD",
    "imageLink": ISD
  },
  {
    "title": "Github",
    "imageLink": Github
  },
  {
    "title": "Google",
    "imageLink": Google
  },
  {
    "title": "Facebook",
    "imageLink": Facebook
  },
]


const Sponsor = (s, key) => (
    <img key={key} src={s.imageLink} />
)

export default class Sponsors extends React.Component {

    render () {
      return (
        <div className="topPad">
          <h1>Sponsors</h1>
          <div className="sponsors">
            {sponsors.map((s, i) => Sponsor(s, i))}
          </div>
        </div>
      )
    }

}
