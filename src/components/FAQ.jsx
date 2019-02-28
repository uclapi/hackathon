import React from 'react';


let questions = [
  {
    question: "What is a hackathon?",
    answer: <p>Hackathons are awesome events full of creativity, technology and passionate tech-related students collaborating and creating. Attendees work in teams to create apps, websites, tools… literally anything you want to build & learn about! Still not sure whether to come? <a href="https://medium.com/tfogo/hackathons-are-for-beginners-77a9c9c0e000" target="_blank">Read why "Hackathons are for beginners"</a></p>
  },
  {
    question: "Who can attend?",
    answer: "If you're a current UCL student, and you're over 18, you can attend!"
  },
  {
    question: "How large should my team be?",
    answer: "Teams of up to four are usually recommended at this type of event, but you can have as many, or few, people working on a project as you want!"
  },
  {
    question: "What if I don't have a team?",
    answer: "No need to worry! Part of the fun of a hackathon is meeting new people. We will have time at the beginning of the event for everyone to meet and form teams."
  },
  {
    question: "Can I stay the night?",
    answer: "Yes! Most people will be staying overnight. We will have sleeping spaces set up, but you may want to bring some stuff to stay super comfy and warm."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charging cables, any other gadgets, toiletries, a sleeping bag, and yourself!. Please also don't forget to bring your UCL Student ID."
  },
  {
    question: "Can I start my project early?",
    answer: "Yes, go for it! Most people will start their projects at the hackathon, but there's no reason why you can't start early! You can spend the hackathon adding more features, documentation, or just show it off at the end!"
  },
  {
    question: "Is there a code of conduct?",
    answer: <p>For the safety and well-being of all attendees, sponsors, volunteers and staff, everyone present must follow the <a href='https://hackcodeofconduct.org/507-ucl_api_hackathon' target='_blank'>Code of Conduct</a>.</p>
  },
  {
    question: "What if I have another question?",
    answer: <p>Tweet @ us at <a href="https://twitter.com/uclapi">@uclapi</a> or email us: <a href="mailto:isd.apiteam@ucl.ac.uk">isd.apiteam@ucl.ac.uk</a>.</p>
  },
];


const Question = (q, key) => (
    <li key={key}>
      <div className="collapsible-header">{q.question}</div>
      <div className="collapsible-body">
      {
        (typeof(q.answer) === 'string'
        ? <p>{q.answer}</p>
        : q.answer)
      }
      </div>
    </li>
)


export default class FAQ extends React.Component {

  render () {
    return (
      <div className="faq light">
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
