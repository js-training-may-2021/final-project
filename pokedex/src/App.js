
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
//import { browserHistory } from "react-router";

import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Tabs from "./components/tabs";
import Catalog from "./components/catalog";
import CatalogItems from "./components/catalog-items";
import Pagination from "./components/pagination";
import LargeCard from "./components/large-card";
//import SmallCard from "./components/small-card";

import HomePage from "./pages/index";
import CaughtPage from "./pages/caught";
import CardPage from "./pages/card";

//import CaughtPokemonsContext from "./contexts/caught-pokemons";

//import pokemons from "./db.json";

//console.log(pokemons);

const customHistory = createBrowserHistory();

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
  }
];

const c = [
  {
    isCaught: "12.03.1999",
    id: 3
  }
];

const p = "2";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: poookemons
    };
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          
          <Router history={customHistory}>

          <Tabs>
            <NavLink to="/home" activeClassName="tab-active" className="tab">Все покемоны</NavLink>
            <NavLink to="/caught" activeClassName="tab-active" className="tab">Пойманные</NavLink>
          </Tabs>
          
          <Switch>
            <Route path="/caught">
              <CaughtPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/card">
              <CardPage />
            </Route>
          </Switch>
   
          </Router>
        
        </Main>    
      </>
    );
  }
}

export default App;
