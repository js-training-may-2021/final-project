
import React from 'react';

import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import pokemons from './db.json';

import CaughtPokemonsContext from './contexts/caught-pokemons';
import ChosenTabContext from './contexts/chosen-tab';
import ChosenPageContext from './contexts/chosen-page';

import Header from './containers/header';
import Main from './containers/main';
import Tabs from './containers/tabs';
import MenuLink from './components/menu-link';
import Logo from './components/logo';
import HomePage from './pages/index';
import CaughtPage from './pages/caught';
import CardPage from './pages/card';
import './App.css';

const parsedPokemons = pokemons.pokemons;
const customHistory = createBrowserHistory();
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: parsedPokemons,
      caught: CaughtPokemonsContext,
      chosenPage: ChosenPageContext,
      chosenTab: ChosenTabContext,
    };
  }

  render() {
    return (
      <>
        <CaughtPokemonsContext.Provider value={this.state.caught}>
        <ChosenPageContext.Provider value={this.state.chosenPage}>
        <ChosenTabContext.Provider value={this.state.chosenTab}>

        <Header>
          <Logo></Logo>
        </Header>

        <Main>
                <Router history={customHistory}>

                  <Tabs>
                    <MenuLink url='/home' title='Все покемоны' />
                    <MenuLink url='/caught' title='Пойманные' />
                  </Tabs>

                  <Route path='/caught'>
                    <CaughtPage 
                      data={this.state.data} 
                      caught={this.state.caught} 
                      chosenPage={this.state.chosenPage} 
                      chosenTab='caught-only' />
                  </Route>
                  <Route path='/home'>
                    <HomePage 
                      data={this.state.data} 
                      caught={this.state.caught} 
                      chosenPage={this.state.chosenPage} 
                      chosenTab='/home' />
                  </Route>
                  <Route exact path='/'>
                    <HomePage 
                      data={this.state.data} 
                      caught={this.state.caught} 
                      chosenPage={this.state.chosenPage} 
                      chosenTab='/home' />
                  </Route>
                  <Route path='/card/:id'>
                    <CardPage 
                      data={this.state.data} 
                      caught={this.state.caught} 
                      chosenPage={this.state.chosenPage} 
                      chosenTab={this.state.chosenTab} />
                  </Route>
        
                </Router>
        </Main> 

        </ChosenTabContext.Provider>
        </ChosenPageContext.Provider>
        </CaughtPokemonsContext.Provider>   
      </>
    );
  }
}

export default App;
