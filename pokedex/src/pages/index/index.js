import React, { Component } from "react";

import Header from "../../components/header";
import Main from "../../components/main";
import Tabs from "../../components/tabs";
import Catalog from "../../components/catalog";
import CatalogItems from "../../components/catalog-items";
import Pagination from "../../components/pagination";

//import AllPokemonsContext from "../../contexts/all-pokemons";
import CaughtPokemonsContext from "../../contexts/caught-pokemons";

//import { connect } from "react-redux";
//import { createStore, bindActionCreators } from "redux";
//import * as actions from "../../actions";
//import FirebaseContext from "../../context/firebaseContext";

//const wordsList = [];

import pokemons from '../../db.json';

const parsedPokemons = pokemons.pokemons;

console.log(parsedPokemons, parsedPokemons[56]);

const poookemons = [
  {
    name: "bulbasaur",
    id: 1
  },
  {
    name: "ivysaur",
    id: 2
  },
  {
    name: "venusaur",
    id: 3
  },{
    name: "charmander",
    id: 4
  },
  {
    name: "charmeleon",
    id: 5
  },
  {
    name: "charizard",
    id: 6
  },
  {
    name: "squirtle",
    id: 7
  },
  {
    name: "wartortle",
    id: 8
  },
  {
    name: "blastoise",
    id: 9
  },
  {
    name: "caterpie",
    id: 10
  },
  {
    name: "metapod",
    id: 11
  },
  {
    name: "butterfree",
    id: 12
  },
  {
    name: "weedle",
    id: 13
  },
  {
    name: "kakuna",
    id: 14
  },
  {
    name: "beedrill",
    id: 15
  },
  {
    name: "pidgey",
    id: 16
  },
  {
    name: "pidgeotto",
    id: 17
  },
  {
    name: "pidgeot",
    id: 18
  },
];

const c = [
  { name: "venusaur",
    isCaught: "12.03.1999",
    id: 3
  },
  { name: "pidgeotto",
    isCaught: "01/02/2005",
    id: 16
  },
  { name: "pidgeot",
    isCaught: "14/11/2011",
    id: 17
  },
];

const p = "1";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caught: c,
      chosenPage: p,
      data: parsedPokemons
    };
  }

  render() {
    //const { data } = this.state;

    const quantity = this.state.data.length;
    const len = Math.ceil(quantity / 12);

    return (
      <>
        <h3>Всего покемонов: {quantity}</h3>
          <Catalog>
     
            <CatalogItems data={this.state.data} caught={this.state.caught} chosenPage={this.state.chosenPage} />
            <Pagination len={len} chosenPage={this.state.chosenPage} />
  
          </Catalog>
      </>
    );

  }
}

export default HomePage;