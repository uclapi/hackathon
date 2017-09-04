import React from 'react';


let questions = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is a day-long event where participants work together in teams to create interesting projects, and learn new things in the process."
  },
  {
    question: "Who can attend?",
    answer: "Anyone currently studying at a university at undergraduate, postgradurate level, or a recent (less than one year since) graduate are all welcome to join us. You'll need to bring your student ID with you so we can check this."
  },
  {
    question: "Are under-18s allowed?",
    answer: <p>Sadly we're unable to allow under-18s, but keep following <a href='https://www.facebook.com/UCLTechSoc/' target='_blank'>TechSoc on our social media pages</a>, because we'll be running an event for young people in early 2017.</p>
  },
  {
    question: "How large should my group be?",
    answer: "We recommend teams of up to four for the best experience, as we've found from experience that this is a good size for collaborating. Your teams can be of any size though! Keep in mind that to be eligible for awards, your team can only have a maximum of four people."
  },
  {
    question: "Can I stay the night?",
    answer: "Definitely! We'll be providing sleeping spaces. You may want to bring some stuff to keep you comfortable though."
  },
  {
    question: "What should I bring?",
    answer: "Definitely bring a laptop if you have one, as well as chargers for your gadgets, comfy clothes, toiletries, and a sleeping bag or blanket + pillow, as well as your ticket and student ID."
  },
  {
    question: "Can I start my project early?",
    answer: "Sure! However, to keep things fair, any projects started beforehand won't be valid for any awards or prizes."
  },
  {
    question: "Will I receive reimbursement for my travel?",
    answer: "Unfortunately, we are unable to provide travel reimbursements."
  },
  {
    question: "Is there a code of conduct?",
    answer: "For the safety and well-being of all attendees, sponsors, volunteers and staff, everyone present must follow the Code of Conduct at https://hackcodeofconduct.org."
  }
];


const Question = (q, key) => (
    <li key={key}>
      <div className="collapsible-header">{q.question}</div>
      <div className="collapsible-body">
      {
        (typeof(q.answer) === 'string'
        ? <p>{q.answer + "string"}</p>
        : q.answer)
      }
      </div>
    </li>
)


export default class FAQ extends React.Component {

  render () {
    return (
      <div className="faq">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <ul className="collapsible" data-collapsible="accordion">
            {questions.map((q, i) => Question(q, i))}
          </ul>
        </div>
      </div>
    )
  }

}
