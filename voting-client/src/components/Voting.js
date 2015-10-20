import React from 'react';

export default class Voting extends React.Component {

  isDisabled() {
    return !!this.props.hasVoted
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    const entries = this.props.pair.map(entry => {

      const label = this.hasVotedFor(entry) ? <div className='label'>Voted</div> : null;

      return (
        <button
          key={entry}
          onClick={() => this.props.vote(entry)}
          disabled={this.isDisabled()}
        >
          <h1>{entry}</h1>
          {label}
        </button>
      );
    });

    const comp = this.props.winner ? <div ref='winner'>Winner is {this.props.winner}!</div> : entries;
    return <div className='voting'>{comp}</div>;
  }
}
