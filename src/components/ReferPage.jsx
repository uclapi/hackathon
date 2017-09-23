import React from 'react';

export default class ReferPage extends React.Component {

    render () {
      return (
        <div>
          <h1>You have referred { window.initialData.referrals } people</h1>
        </div>
      )
    }

}
