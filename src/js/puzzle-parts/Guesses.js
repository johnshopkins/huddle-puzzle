import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Phrase from './Phrase';

import '../../css/Guesses.scss';

class Guesses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      triggerFocus: false
    };

    this.triggerRefocus = this.triggerRefocus.bind(this);
    this.onRefocusComplete = this.onRefocusComplete.bind(this);
  }

  /**
   * Change the state t
   */
  triggerRefocus() {
    this.setState({ triggerFocus: true });
  }

  onRefocusComplete() {
    this.setState({ triggerFocus: false });
  }

  render() {

    const attributes = {
      'aria-hidden': this.props.hidden,
      'aria-label': 'Guesses',
      className: 'guesses',
      onClick: this.triggerRefocus,
      role: 'region',
    };

    const answerDescription = `The answer consists of ${this.props.answerDescription}. You have ${this.props.remainingGuesses} ${this.props.remainingGuesses === 1 ? 'guess' : 'guesses'} remaining.`;

    return <div {...attributes}>
      <h2>Guesses</h2>
      <p className={'answer-description'}>{answerDescription}</p>
      {this.props.guesses.map((guess, i) =>
        <Phrase
          correctAnswer={this.props.correctAnswer}
          displayMessage={this.props.displayMessage}
          guess={guess}
          isComplete={this.props.status !== 'IN_PROGRESS' || i < this.props.currentRow}
          isCurrentRow={this.props.currentRow === i}
          key={i}
          onFail={this.props.onGuessFail}
          onPass={this.props.onPuzzlePass}
          onRefocusComplete={this.onRefocusComplete}
          phraseNumber={i}
          triggerFocus={this.state.triggerFocus}
        />
      )}
    </div>
  }

}

Guesses.propTypes = {
  answerDescription: PropTypes.string.isRequired,
  currentRow: PropTypes.number.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  displayMessage: PropTypes.func.isRequired,
  guesses: PropTypes.array.isRequired,
  hidden: PropTypes.bool.isRequired,
  onGuessFail: PropTypes.func.isRequired,
  onPuzzlePass: PropTypes.func.isRequired,
  remainingGuesses: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default Guesses;
