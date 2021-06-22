import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  PokemonsListContainer as HomePage,
  CatchedPokemonsListContainer as CatchedPokemonsPage,
  PokemonCardContainer as PokemonPage,
} from './containers';
import { Navigation } from './components/Navigation';

import './App.css';

export const App = () => {
  return (
    <div className="App container">
      <Navigation />
      <div className="page-content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/catched-pokemons">
            <CatchedPokemonsPage />
          </Route>
          <Route path="/pokemons/:id">
            <PokemonPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
