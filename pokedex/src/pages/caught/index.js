import React, { Component } from "react";

import Header from "../../components/header";
import Main from "../../components/main";
import Tabs from "../../components/tabs";
import Catalog from "../../components/catalog";
import CatalogItems from "../../components/catalog-items";
import Pagination from "../../components/pagination";

import CaughtPokemonsContext from "../../contexts/caught-pokemons";
import ChosenCardContext from "../../contexts/chosen-card";
import ChosenTabContext from "../../contexts/chosen-tab";
import ChosenPageContext from "../../contexts/chosen-page";

import pokemons from '../../db.json';

const parsedPokemons = JSON.parse(JSON.stringify(pokemons)).pokemons;

console.log(parsedPokemons, parsedPokemons[56]);

console.log('this is caught context! ', CaughtPokemonsContext);
console.log('this is card-id context! ', ChosenCardContext);
console.log('this is tab context! ', ChosenTabContext);
console.log('this is page context! ', ChosenPageContext);

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

const p = "2";

class CaughtPage extends Component {
  state = {
    data: parsedPokemons,
    caught: c,
    chosenPage: p,
  };

  /*
  componentDidMount() {
    const { getUserCardsRef } = this.context;
    getUserCardsRef().on("value", (response) => {
      this.setState({
        wordsArr: response.val() || [],
      });
    });
  }

  deleteItemHandler = (id) => {
    const { wordsArr } = this.state;
    const { getUserCardsRef } = this.context;

    const newWordsList = this.state.wordsArr.filter((item) => item.id !== id);
    getUserCardsRef().set(newWordsList);
  };

  addNewWordHandler = (engWord, rusWord) => {
    const { wordsArr } = this.state;
    const { getUserCardsRef } = this.context;

    getUserCardsRef().set([
      ...wordsArr,
      {
        id: Date.now(),
        eng: engWord,
        rus: rusWord,
      },
    ]);
  };

  buttonClickHandler = (evt) => {
    console.log("кликнули на кнопку в хедере!");
    evt.preventDefault();
    this.inputRef.current.focus();
  };
*/

  render() {
    //const { data } = this.state;
    //const { countNumber, plusAction, minusAction } = this.props;

    const quantity = this.state.caught.length;
    const len = Math.ceil(quantity / 12);

    return (
      <>
        <h3>Всего поймано покемонов: {quantity}</h3> 
          <Catalog>
            <CatalogItems data={this.state.caught} caught={this.state.caught} chosenPage={this.state.chosenPage} />
            <Pagination len={len} chosenPage={this.state.chosenPage} />
          </Catalog>
      </>
    );

    /*
    return (
      <>
        <div>{countNumber}</div>
        <div>
          <button onClick={() => plusAction(1)}>PLUS</button>
          <button onClick={() => minusAction(1)}>MINUS</button>
        </div>
        <CardList
          items={wordsArr}
          onDeleteItem={this.deleteItemHandler}
          onAddItem={this.addNewWordHandler}
          refEngInput={(elem) => this.refInput === elem}
        />{" "}
      </>
    );

    */
  }
}

//HomePage.contextType = FirebaseContext;

/* const mapStateToProps = (state) => {
  return {
    countNumber: state.counter.count,
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
*/

//export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default CaughtPage;