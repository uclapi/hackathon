import React from 'react';


export default class Info extends React.Component {

    render () {
      return (
        <div className="info">
          <div className="container">
            <h1>What is UCL API?</h1>
            <p>
              UCL API is a student-developed, simple, documentation first, comprehensive API built around UCL’s digital services. The aim is to establish an ecosystem of third party UCL apps and services which use the API, built by students for students.
            </p>
            <p>
              All of the information can be found at uclapi.com, where you can see projects built using the API, as well as examples about how to use the API. For further information about how to get started with UCL API, visit the documentation at docs.uclapi.com.
            </p>
            <p>
              If you want to help out, or have spotted an error, please make an issue or PR on the GitHub repository at <a href="https://github.com/uclapi" target="_blank">github.com/uclapi</a> !!
            </p>
            <a className="btn" href="https://uclapi.com/dashboard/">Get Started with UCL API</a>
          </div>
        </div>
      )
    }

}
