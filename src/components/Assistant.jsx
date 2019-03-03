import React from 'react'
import StudySpacesScreenshot from '../img/assistant/assistant_device.png'

export default class Assistant extends React.Component {
  render(){
    return (
      <div className="assistant-section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6" style={{textAlign: 'left'}}>
              <img id="assistant-device" src={StudySpacesScreenshot} />
            </div>
            <div className="col s12 m6">
              <h1>UCL Assistant</h1>
              <h2>Coming soon to a campus near you.</h2>
              <div className="assistant-features">
                <p>
                  <i className="small material-icons">schedule</i>
                  <span>View your classes at a glance</span>
                </p>
                <p>
                  <i className="small material-icons">free_breakfast</i>
                  <span>Find the best study spots on the go</span>
                </p>
                <p>
                  <i className="small material-icons">group</i>
                  <span>Locate empty rooms around the campus</span>
                </p>
                <p>
                  <i className="small material-icons">new_releases</i>
                  <span>And much more!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}