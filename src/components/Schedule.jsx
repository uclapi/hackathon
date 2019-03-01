import React from 'react';


let schedule = {
  'saturday': [
    {
      'time': "09:00 - 10:00",
      'title': "Registration Opens & Breakfast",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "10:00 - 11:00",
      'title': "Opening presentation",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "11:00 - 11:30",
      'title': "Hacking begins + Team Building",
      'description': "Form your teams",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "12:30 - 13:30",
      'title': "Lunch",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "19:00 - 20:00",
      'title': "Dinner",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "20:30",
      'title': "Hacking ends",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
  ],
  "sunday": [
    {
      'time': "09:00 - 11.30",
      'title': "Hacking begins",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "11:30",
      'title': "Submissions due",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "11:30 - 13:00",
      'title': "Presentations",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "13:00 - 14:30",
      'title': "Lunch and Networking",
      'description': "",
      'location': "Malet Place Building, CS Labs",
    },
    {
      'time': "15:30",
      'title': "Hackathon ends",
      'description': "",
      'location': "Malet Place Building, CS Labs",
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
        {
          (e.location) ? (
            <p><i className="material-icons">location_on</i> {e.location}</p>
          ) : (
            <div></div>
          )
        }
      </td>
    </tr>
)


export default class Schedule extends React.Component {

    render () {
      return (
        <div className="schedule custom_green">
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
