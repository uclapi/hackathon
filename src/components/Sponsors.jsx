import React from 'react';


let sponsors = [
  {
    "title": "UCL ISD",
    "imageLink": "https://pbs.twimg.com/profile_images/3375409673/54825068b089a0dd74570723e8c054aa.png"
  },
  {
    "title": "UCL ISD",
    "imageLink": "https://pbs.twimg.com/profile_images/3375409673/54825068b089a0dd74570723e8c054aa.png"
  },
  {
    "title": "UCL ISD",
    "imageLink": "https://pbs.twimg.com/profile_images/3375409673/54825068b089a0dd74570723e8c054aa.png"
  },
  {
    "title": "UCL ISD",
    "imageLink": "https://pbs.twimg.com/profile_images/3375409673/54825068b089a0dd74570723e8c054aa.png"
  }
]


const Sponsor = (s, key) => (
    <div className="card-panel" key={key}>
      <img src={s.imageLink} className="responsive-img" />
    </div>
)

export default class Sponsors extends React.Component {

    render () {
      return (
        <div className="container">
          <h1>Sponsors</h1>
          <div className="sponsors">
            {sponsors.map((s, i) => Sponsor(s, i))}
          </div>
        </div>
      )
    }

}
