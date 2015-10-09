import React from 'react';

export default class Voting extends React.Component {

  render() {
    const entries = this.props.pair.map(entry => {
      return (
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      );
    });

    return <div className='voting'>{entries}</div>;
  }
}
