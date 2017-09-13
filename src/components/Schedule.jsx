import React from 'react';


let schedule = {
  'saturday': [
    {
      'time': "09:00 - 10:00",
      'title': "Registration + Breakfast",
      'description': "",
      'location': "Wilkins Marquee",
    },
    {
      'time': "10:00 - 11:00",
      'title': "Opening Ceremony",
      'description': "",
      'location': "Wilkins Marquee",
    },
    {
      'time': "11:00 - 13:00",
      'title': "Hacking begins + team formation",
      'description': "Form your teams",
      'location': "Wilkins Marquee",
    },
    {
      'time': "13:00 - 14:00",
      'title': "Lunch",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "14:00 - 15:00",
      'title': "Docker Workshop",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "15:00 - 16:00",
      'title': "UCL API Workshop",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "16:00 - 17:00",
      'title': "Vue Workshop",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "17:00 - 18:00",
      'title': "GraphQL Workshop",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "18:00 - 19:00",
      'title': "Slack Bot Workshop",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "19:00 - 21:00",
      'title': "Dinner",
      'description': "",
      'location': "Wilkins Marquee",
    },
  ],
  "sunday": [
    {
      'time': "00:00 - 01:00",
      'title': "Midnight Meal",
      'description': "",
      'location': "Wilkins Marquee",
    },
    {
      'time': "08:00 - 09:00",
      'title': "Breakfast",
      'description': "",
      'location': "Wilkins Marquee",
    },
    {
      'time': "10:00",
      'title': "Submissions Due",
      'description': "",
      'location': "Wilkins Marquee",
    },
    {
      'time': "11:00 - 12:00",
      'title': "Presentations",
      'description': "",
      'location': "Rooftop Garden",
    },
    {
      'time': "12:00 - 13:00",
      'title': "Lunch",
      'description': "",
      'location': "Wilkins Marquee",
    },
    {
      'time': "13:00 - 15:00",
      'title': "Presentations",
      'description': "",
      'location': "Wilkins Gustave Tuck LT",
    },
    {
      'time': "15:30 - 16:00",
      'title': "Closing words",
      'description': "",
      'location': "Wilkins Gustave Tuck LT",
    },
    {
      'time': "16:00",
      'title': "UCL API Hackathon ends",
      'description': "",
      'location': "Wilkins Gustave Tuck LT",
    },
  ]
}


const tableRow = (e, key) => (
    <tr key={key}>
      <td>
        <h5>{e.title}</h5>
      </td>
      <td>
        <p className="time">{e.time}</p>
        {/* <p><i className="material-icons">location_on</i> {e.location}</p> */}
      </td>
    </tr>
)


export default class Schedule extends React.Component {

    render () {
      return (
        <div className="schedule">
          <div className="container">
            <h1>Schedule</h1>
            <h3>Saturday</h3>
            <table>
              <tbody>
                {schedule.saturday.map((e, i) => tableRow(e, i))}
              </tbody>
            </table>

            <h3>Sunday</h3>
            <table>
              <tbody>
                {schedule.sunday.map((e, i) => tableRow(e, i))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

}
