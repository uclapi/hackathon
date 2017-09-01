import React from 'react';


let sponsors = [
  {
    "title": "UCL ISD",
    "imageLink": "https://pbs.twimg.com/profile_images/3375409673/54825068b089a0dd74570723e8c054aa.png"
  },
  {
    "title": "Github",
    "imageLink": "https://www.pmg.com/content/uploads/2016/12/github-logo.png"
  },
  {
    "title": "Google",
    "imageLink": "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/new-google-logo-png.png"
  },
  {
    "title": "Facebook",
    "imageLink": "http://www.freeiconspng.com/uploads/facebook-announces-clickable-hashtags--resolution-media-17.png"
  },
]


const Sponsor = (s, key) => (
    <img key={key} src={s.imageLink} />
)

export default class Sponsors extends React.Component {

    render () {
      return (
        <div className="">
          <h1>Sponsors</h1>
          <div className="sponsors">
            {sponsors.map((s, i) => Sponsor(s, i))}
          </div>
        </div>
      )
    }

}
