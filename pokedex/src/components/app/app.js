import React, {Component} from 'react';
import PokemonProfile from '../pokemonProfile/pokemonProfile';
import CatchedPokemonsPage from '../catchedPokemonsPage/catchedPokemonsPage';
import AllPokemonsPage from '../allPokemonsPage/allPokemonsPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/catched' component={CatchedPokemonsPage}/>
        <Route exact path='/' component={AllPokemonsPage}/>
        <Route path='/pokemons/:id' render={
          ({match}) => {
            return <PokemonProfile id={match.params.id}/>
          }
        }/>
      </Router>
      
    )
  }
}