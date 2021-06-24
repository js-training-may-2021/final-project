import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home';
import CatchedPokemons from './pages/CatchedPokemons';
import PokemonFullCard from './components/PokemonFullCard';
import Pokemon from './pages/Pokemon';
import './App.css';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/catched">
            <CatchedPokemons />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>  
    </Router>
  );
}

export default App;
