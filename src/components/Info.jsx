import React from 'react';


export default class Info extends React.Component {

    render () {
      return (
        <div className="info">
          <div className="container">
            <h1>What is UCL API?</h1>
            <p>UCL API is a <b>student-built</b> platform for <b>student developers</b> to improve the <b>student experience</b> of everyone at UCL.</p>
            <p>
              Its goal is to provide a simple, well-documented, and comprehensive programmatic interface to UCL’s digital services. Anyone at UCL can build on top of this API to build apps, websites, tools, or simply to scratch their own itch.
            </p>
            <p>
              All of the information you need to get started can be found at <a href="https://uclapi.com">uclapi.com</a>, where you can see projects built using the API, as well as examples about how to use the API. Documentation is located at <a href="https://docs.uclapi.com">docs.uclapi.com</a>.
            </p>
            <p>
              UCL API is also open source, so if you want to help out, or have spotted an error, create an issue or pull request on <a href="https://github.com/uclapi">GitHub</a>.
            </p>
            <p>
              Once you're ready, hit the button below to dive right in and get started building on top of UCL API.
            </p>
            <a className="btn white teal-text" href="https://uclapi.com/dashboard/">Get Started with UCL API</a>
          </div>
        </div>
      )
    }

}
