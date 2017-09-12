import React from 'react';

import DjangoCSRFToken from './DjangoCSRFToken.jsx';


export default class Apply extends React.Component {

  constructor (props) {
    super(props);

    if (sessionStorage.getItem('eventbrite_code')) {
      this.state = {
        'applied': "True",
      }
    }
    else {
      this.state = window.initialData;
    }
  }

  render () {
    let application = "";

    if (this.state.applied === "True") {
      application = <div></div>
    }
    else {
      application = (
        <div className="apply">
          <div className="container">
            <h1>Register Now</h1>
            <form action="/applications/login/process" method="post">
              <DjangoCSRFToken />
              <button className="btn" type="submit">Register Now</button>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div>
        { application }
      </div>
    )
  }

}
