export const builtApps = [
  {
    title: 'Roomie McRoomFace',
    description: 'A room booking system for the UCL Engineering Hub. If you\'re an undergraduate student part of the engineering faculty, you can log in and start booking rooms. Fun fact: this was actually built before the API existed!',
    status: 'LIVE',
    links: [
      {
        text: 'Website',
        url: 'https://enghub.io/'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/uclapi/roomie_mcroomface',
      }
    ]
  },
  {
    title: 'UCL SocBot',
    description: 'A Twitter bot that tweets every time a UCL Society books a room',
    status: 'LIVE',
    links: [
      {
        text: 'Twitter',
        url: 'https://twitter.com/UCLSocBot',
      }
    ]
  },
  {
    title: 'UCL Room Buddy',
    description: 'A mobile app that provides you directions to the nearest free room in UCL.',
    status: 'WIP',
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/uclapi/room-buddy',
      }
    ]
  },
  {
    title: 'Room Bookings Heatmap',
    description: 'A simple page overlaying a heatmap of UCL room bookings over a map of UCL',
    status: '!LIVE',
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/uclapi/heatmap',
      }
    ]
  },
  {
    title: 'Society Room Bookings Visualisation',
    description: 'A calendar visualisation of all UCL room bookings by societies.',
    status: 'LIVE',
    links: [
      {
        text: 'Website',
        url: 'https://society-visualisation.uclapi.com/'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/uclapi/society-visualisation',
      }
    ]
  }
]

export const ideas = [
  'A Facebook messenger bot that messages your society group when a room booking made by your society is changed',
  'A Twitter bot that tweets when your society books a room',
  'A Twitter bot that tweets whenever a certain room is booked',
  'A Telegram bot that messages you whenever a certain room is free',
  'An iOS shortcut that shows you the booking diary of the closest room',
  'A IFTTT applet that emails you a weekly summary of all rooms booked by your society',
  'An app that shows you which parts of the library are the most empty',
  'An app that tells you how many more lectures/tutorials/seminars you have for each module',
  'An smart alarm clock that always wakes you an hour before your first class of the day',
  'An online voting system for your society, authenticated through UCL API',
  'An online forum that groups people based on their faculty',
  'A web app that shows you alternative tutorials / seminars you can attend if you missed your own',
  'A bot that tells you the closest empty room to continue studying in after every class',
  'An Alexa skill that reads out your timetable, complete with study location suggestions, every morning',
  'A smart room search system that can find a room that\'s "free sometime next week with a whiteboard that can accommodate 6 people"',
  'An app that lets you watch a certain seat in the library and be notified the moment it becomes vacant',
  'A web app that analyses your timetable and compares it with other timetables',
  'A Twitter bot that tweets whenever a library is unusually crowded',
]

export default {
  builtApps,
  ideas,
}