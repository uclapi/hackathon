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
      'time': "11:00 - 01:00",
      'title': "Hacking begins + team formation",
      'description': "Form your teams",
      'location': "Wilkins Marquee",
    },
    {
      'time': "01:00 - 02:00",
      'title': "Lunch",
      'description': "",
      'location': "Rooftop Garden",
    },
  ],
  "sunday": [
    {
      'time': "07:00 - 09:00",
      'title': "Registration",
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
      'time': "11:00 - 11:30",
      'title': "Hacking begins + team formation",
      'description': "Form your teams",
      'location': "Wilkins Marquee",
    },
    {
      'time': "01:00 - 02:00",
      'title': "Lunch",
      'description': "",
      'location': "Rooftop Garden",
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
        <p><i className="material-icons">location_on</i> {e.location}</p>
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
