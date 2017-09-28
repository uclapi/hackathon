import React from 'react';

import GitHubForkRibbon from 'react-github-fork-ribbon';

import Header from './Header.jsx';
import Description from './Description.jsx';
import APIs from './APIs.jsx';
import Venue from './Venue.jsx';
import Schedule from './Schedule.jsx';
import FAQ from './FAQ.jsx';
import Info from './Info.jsx';
import Sponsors from './Sponsors.jsx';
import Apply from './Apply.jsx';


export default class HomePage extends React.Component {

    render () {
      return (
        <div>
          <GitHubForkRibbon
            href="https://github.com/uclapi/hackathon"
            target="_blank"
            position="right"
          >
            Fork me on GitHub
          </GitHubForkRibbon>
          <Header />
          <Description />
          <APIs />
          <Venue />
          <Schedule />
          <FAQ />
          <Info />
          <Sponsors />
          <Apply />
        </div>
      )
    }

}
