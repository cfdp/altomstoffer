import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Drug from './Drug';
import { getDrugs } from '../utils/api.js';

class DrugList extends Component {

  state = {
    loading: true,
    initialDrugs: [],
    currentDrugs: [],
  }

  constructor(props) {
    super(props);
    this.groupDrugs = this.groupDrugs.bind(this);
    this.filterDrugs = this.filterDrugs.bind(this);
  }

  async componentWillMount() {

    const drugs = await getDrugs();
    const allDrugs = this.extractAliases(drugs);
    const drugsGrouped = this.groupDrugs(allDrugs);
    this.setState({
      initialDrugs: allDrugs,
      currentDrugs: drugsGrouped,
    });
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  extractAliases(drugs) {

    const allDrugs = [];

    for(var i = 0; i < drugs.length; i++) {
      const drugPrim = [];
      drugPrim.nid = drugs[i].nid;
      drugPrim.title = drugs[i].title;
      drugPrim.type = 'stof';
      allDrugs.push(drugPrim);
      const aliases = drugs[i].aliases.split(",");
      aliases.forEach(function(alias) {
        const drugSec = [];
        drugSec.nid = drugs[i].nid;
        drugSec.title = alias.trim().substring(0, 20);
        drugSec.type = 'alias';
        allDrugs.push(drugSec);
      });
    }
    return allDrugs;
  }

  groupDrugs(drugs) {

    const drugsGrouped = {};

    for(var i = 0; i < drugs.length; i++) {
      var firstLetter = drugs[i].title.charAt(0).toLowerCase();
      if(drugsGrouped[firstLetter] == undefined){
        drugsGrouped[firstLetter] = [];
      }
      drugsGrouped[firstLetter].push(drugs[i]);
    }
    const drugsSorted = {};
    Object.keys(drugsGrouped).sort().forEach(function(key) {
      drugsSorted[key] = drugsGrouped[key];
    });
    return drugsSorted;
  }

  filterDrugs(event) {

    const initialDrugs = this.state.initialDrugs;
    const currentDrugs = initialDrugs.filter(function(item){
      return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    const drugsGrouped = this.groupDrugs(currentDrugs);
    this.setState({
      currentDrugs: drugsGrouped
    });
  }

  render() {

    const { loading, currentDrugs } = this.state;

    if (loading !== false) {
      return <Loading />
    }

    return (
      <div className="lexicon">
        <div className="lexicon-search">
          <input type="text" className="lexicon-search__input" placeholder="Search" onChange={this.filterDrugs} />
        </div>
        {
          Object.keys(currentDrugs).map((letter) => {
            return (
              <div className="lexicon-group" key={ letter }>
              <div className="lexicon-group__number">{ letter }</div>
              <div className="lexicon-list">
                {
                  currentDrugs[letter].map(({nid, title, type}) => {
                    return (
                      <a href={ "/node/" + nid }><div className={"lexicon-list__item" + " type-" + type}>
                        <span className="lexicon-list__type">{ type }</span>
                        <span className="lexicon-list__title">{ title }</span>
                      </div></a>
                    )
                  })
                }
              </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default DrugList;
