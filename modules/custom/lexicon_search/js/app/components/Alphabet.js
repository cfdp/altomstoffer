import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alphabet extends Component {
  
  state = {
    letters: 'abcdefghijklmnopgrstuvxyzæøå',
    alphabet: []
  }

  componentWillMount() {
    const { letters } = this.state;
    const alphabet = letters.split('');

    this.setState({
      alphabet,
    })
  }
  
  render() {

    const { alphabet } = this.state;

    return (
      <ul className="lexicon-alphabet">
        {alphabet.map(function(letter) {
          return <li className="lexicon-alphabet__letter"><a href="#">{ letter }</a></li>
        })}
      </ul>
    )
  }
}

export default Alphabet;
