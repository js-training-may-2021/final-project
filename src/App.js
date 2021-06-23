import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PokemonListContainer from './Components/PokemonList/PokemonListContainer';
import CaughtPokemon from './Components/CaughtPokemon/CaughtPokemon';
import ProfileContainer from './Profile/ProfileContainer';



function App(props) {
  return (
        <div className="App">
          <Navbar />
          <div>
            <Switch>
              <Route path='/' exact render={ () => <PokemonListContainer /> }/>
              <Route path='/caughtpokemon' render={ () => <CaughtPokemon /> }/>
              <Route path='/profile/:pokemonID?' render={ () => <ProfileContainer /> }/>
            </Switch>
          </div>
        </div>
  );
}

export default App;
