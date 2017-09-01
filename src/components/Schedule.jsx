import React from 'react';


let schedule = {
  'saturday': [
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
        <h4>{e.title}</h4>
        <p>{e.description}</p>
      </td>
      <td>
        <p>{e.time}</p>
        <p>{e.location}</p>
      </td>
    </tr>
)


export default class Schedule extends React.Component {

    render () {
      return (
        <div className="schedule container">
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
      )
    }

}
