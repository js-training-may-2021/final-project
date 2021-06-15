import React, { Component } from "react";
//import { useHistory } from "react-router-dom";
//import { browserHistory } from "react-router";

import Header from "../../components/header";
import Main from "../../components/main";
import Tabs from "../../components/tabs";
import LargeCard from "../../components/large-card";
import Button from '../../components/button';

const pokemons = [
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

const chosenId = 17;


const cb = () => {
  
  console.log('back!');
  //BrowserHistory.goBack();
};


//const history = useHistory();

class CardPage extends Component {
  state = {
    data: pokemons,
    id: chosenId,
    caught: c,
  };

  render() {

    return (
      <>
        <Button classNames="back" text="&larr;&nbsp;&nbsp;Вернуться к&nbsp;списку" isDisabled="false" buttonType="come-back" />
        <LargeCard id={this.state.id} data={this.state.data} caught={this.state.caught} />
      </>
    );

  }
}

//<Button classNames="back" text="&larr;&nbsp;&nbsp;Вернуться к&nbsp;списку" isDisabled="false" buttonId="" onClick={cb} />
//<LargeCard title={this.state.data[this.state.id].name} id={this.state.id} isCaught={this.state.caught[this.state.id].isCaught}></LargeCard>

export default CardPage;