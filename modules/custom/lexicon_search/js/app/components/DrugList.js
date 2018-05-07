import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Alphabet from './Alphabet';
import Drug from './Drug';
import { getDrugs } from '../utils/api.js';

class DrugList extends Component {

  state = {
    loading: true,
    filtering: false,
    searchStr: '',
    initialDrugs: [],
    currentDrugs: [],
  }

  constructor(props) {
    super(props);
    this.groupDrugs = this.groupDrugs.bind(this);
    this.filterDrugs = this.filterDrugs.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.renderDrugsList = this.renderDrugsList.bind(this);
  }

  async componentDidMount() {
    const drugs = await getDrugs();
    const allDrugs = this.extractAliases(drugs);
    const drugsGrouped = this.groupDrugs(allDrugs);
    this.setState({
      initialDrugs: allDrugs,
      currentDrugs: drugsGrouped,
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
    let filtering = false;
    const inputVal = this.inputSearch.value.toLowerCase();
    if (inputVal != '') {
      filtering = true;
    }
    const initialDrugs = this.state.initialDrugs;
    const currentDrugs = initialDrugs.filter(function(item){
      return item.title.toLowerCase().search(inputVal) !== -1;
    });
    const drugsGrouped = this.groupDrugs(currentDrugs);
    this.setState({
      currentDrugs: drugsGrouped,
      filtering
    });
  }

  resetFilter(event) {
    this.inputSearch.value = "";
    this.filterDrugs();
  }

  renderDrugsList() {
    const { currentDrugs } = this.state;

    if (Object.keys(currentDrugs).length !== 0) {
      const list = Object.keys(currentDrugs).map((letter) => {
        return (
          <div className="lexicon-group" key={letter} id={`letter-${letter}`}>
            <div className="lexicon-group__number">{letter}</div>
            <div className="lexicon-list">
              {
                currentDrugs[letter].map(({ nid, title, type }) => {
                  return (
                    <Drug nid={nid} title={title} type={type} />
                  )
                })
              }
            </div>
          </div>
        )
      })
      return list;
    }
    else {
      return <div className="no-results">Ingen resultater.</div>;
    }
  }

  render() {
    const { loading, currentDrugs, searchStr, filtering } = this.state;

    if (loading !== false) {
      return <Loading />
    }

    return (
      <div className="lexicon">
        <div className="lexicon-search">
          <input type="text" className="lexicon-search__input" placeholder="Søg her" onChange={this.filterDrugs} ref={el => this.inputSearch = el} />
          {filtering && (
            <a className="lexicon-search__cancel" onClick={this.resetFilter}></a>
          )}
        </div>
        <Alphabet currentDrugs={currentDrugs} />
        { this.renderDrugsList() }
      </div>
    )
  }
}

export default DrugList;
