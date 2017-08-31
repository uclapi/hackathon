import React from 'react';

import Header from './Header.jsx';
import Schedule from './Schedule.jsx';
import FAQ from './FAQ.jsx';

export default class HomePage extends React.Component {

    render () {
      return (
        <div className="schedule container">
          <Header />
          <Schedule />
          <FAQ />
        </div>
      )
    }

}
