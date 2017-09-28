import React from 'react';


export default class APIs extends React.Component {

    render () {
      return (
        <div className="apis">
          <div className="container">
            <h1>3 new APIs launching at the hackathon!</h1>
            <div className="apiCards">
              <div className="card light-blue">
                <span className="card-title">
                  OAuth
                </span>
              </div>
              <div className="card teal">
                <span className="card-title">
                  Timetable
                </span>
              </div>
              <div className="card amber">
                <span className="card-title">
                  Search
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    }

}
