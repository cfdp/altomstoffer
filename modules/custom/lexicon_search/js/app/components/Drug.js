import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Drug extends Component {

  render() {
    const { nid, type, title } = this.props;

    return (
      <a href={"/node/" + nid}>
        <div className={"lexicon-list__item" + " type-" + type}>
          <span className="lexicon-list__type">{type}</span>
          <span className="lexicon-list__title">{title}</span>
        </div>
      </a>
    )
  }
}

Drug.propTypes = {
  nid: PropTypes.number,
  type: PropTypes.oneOf(['stof', 'alias']),
  title: PropTypes.string
};

export default Drug;
