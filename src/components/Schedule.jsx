import React from 'react';


let schedule = {
  'saturday': [
    {
      'time': "09:00 - 10:00",
      'title': "Registration Opens & Breakfast",
      'description': "",
      'location': "Outside Wilkins Gustave Tuck LT",
    },
    {
      'time': "10:00 - 11:00",
      'title': "Opening presentation",
      'description': "",
      'location': "Wilkins Gustave Tuck Lecture Theatre",
    },
    {
      'time': "11:00 - 11:30",
      'title': "Hacking begins + Team Building",
      'description': "Form your teams",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "12:00 - 12:30",
      'title': "Sticker exchange - Bring yo stickers",
      'description': "",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "12:00 - 13:00",
      'title': "GitHub Workshop",
      'description': "Form your teams",
      'location': "Chadwick G08",
    },
    {
      'time': "13:00 - 14:00",
      'title': "Lunch",
      'description': "",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "14:00 - 15:00",
      'title': "Docker Workshop",
      'description': "",
      'location': "Chadwick G07",
    },
    {
      'time': "15:00 - 16:00",
      'title': "UCL API Workshop",
      'description': "",
      'location': "Chadwick G08",
    },
    {
      'time': "16:00 - 18:00",
      'title': "Vue + GraphQL Workshop",
      'description': "",
      'location': "Chadwick G07",
    },
    {
      'time': "18:00 - 19:00",
      'title': "User Experience Workshop",
      'description': "",
      'location': "Chadwick G07",
    },
    {
      'time': "19:00 - 20:00",
      'title': "Dinner",
      'description': "",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "20:00 - 21:00",
      'title': "Horrible UX minigame",
      'description': "",
      'location': "Chadwick G08",
    },
    {
      'time': "22:00 - 22:30",
      'title': "Sleeping Rooms Open",
      'description': "",
      'location': "Wilkins Garden Room (Female), Haldane room (Male)",
    },
    {
      'time': "23:00 - 23:45",
      'title': "Code in the Dark",
      'description': "",
      'location': "Chadwick G08",
    },
  ],
  "sunday": [
    {
      'time': "00:00 - 01:00",
      'title': "Midnight Meal",
      'description': "",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "08:00 - 09:00",
      'title': "Breakfast",
      'description': "",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "11:30 - 12:00",
      'title': "Submissions Due",
      'description': "",
      'location': "",
    },
    {
      'time': "12:00 - 13:00",
      'title': "Lunch",
      'description': "",
      'location': "Jeremy Bentham Room",
    },
    {
      'time': "13:30 - 15:30",
      'title': "Presentations - Everybody Presents",
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
