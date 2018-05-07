import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alphabet extends Component {
  
  state = {
    letters: 'abcdefghijklmnopgrstuvwxyzæøå',
    alphabet: []
  }

  constructor(props) {
    super(props);
    this.setActiveLetters = this.setActiveLetters.bind(this);
  }

  componentDidMount() {
    const { letters } = this.state;
    const alphabetCol = letters.split('');

    const alphabet = []; 
    for(let i=0; i < alphabetCol.length; i++) {
      alphabet.push({
        name: alphabetCol[i],
        active: false
      });
    }

    this.setActiveLetters(this.props, alphabet);

  }

  componentWillReceiveProps(nextProps) {
    const { currentDrugs } = nextProps;
    this.setActiveLetters(nextProps);
  }

  setActiveLetters(props, alphabet = []) {
    const { currentDrugs } = props;

    if(alphabet.length == 0) {
      var { alphabet } = this.state;
    }

    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i].name in currentDrugs) {
        alphabet[i].active = true;
      }
      else {
        alphabet[i].active = false;
      }
    }

    this.setState({
      alphabet,
    })
  }
  
  render() {
    const { alphabet } = this.state;

    return (
      <ul className="lexicon-alphabet">
        {alphabet.map(function(letter) {
          return <li className={`lexicon-alphabet__letter state-${letter.active}`}><a href={`#letter-${letter.name}`}>{ letter.name }</a></li>
        })}
      </ul>
    )
  }
}

export default Alphabet;
