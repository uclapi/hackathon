import React from 'react';


let questions = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an event where people who attend work together, or alone, to build cool projects and learn new things!"
  },
  {
    question: "Who can attend?",
    answer: "Anybody who is a current UCL student, and is over 18, is able to attend."
  },
  {
    question: "Are under-18s allowed?",
    answer: "Unfortunately, if you are under 18 then you won’t be able to attend."
  },
  {
    question: "How large should my group be?",
    answer: "Teams of up to four are usually recommended at this type of event, but you can have as many, or few, people working on a project as you want!"
  },
  {
    question: "Can I stay the night?",
    answer: "Yes! We will have sleeping spaces set up, but you may want to bring some stuff to stay super comfy and warm."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, and charging cable, for definite. If you need anything else for your setup, such as a keyboard/mouse then of course bring that too. Any other gadgets, toiletries, sleeping items, should be brought as well. Please also bring your UCL Student ID."
  },
  {
    question: "Can I start my project early?",
    answer: "Go for it! If you have something you want to work a bit more on, add some features/documentation, or just show it off, then you are welcome to!"
  },
  {
    question: "Will I receive reimbursement for my travel?",
    answer: "Unfortunately, we won’t be able to provide travel reimbursements."
  },
  {
    question: "Is there a code of conduct?",
    answer: <p>For the safety and well-being of all attendees, sponsors, volunteers and staff, everyone present must follow the Code of Conduct at <a href='https://hackcodeofconduct.org' target='_blank'>hackcodeofconduct.org</a>.</p>
  },
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
