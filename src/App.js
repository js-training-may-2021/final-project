import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PokemonsPage from "./pages/PokemonsPage";
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage";
import CaughtPokemonsPage from "./pages/CaughtPokemonsPage";
import PokemonCard from "./components/PokemonCard/PokemonCard";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <PokemonsPage/>
        </Route>
        <Route path='/caught' exact>
          <CaughtPokemonsPage/>
        </Route>
        <Route path='/pokemons/:id' exact>
          <PokemonCard/>
        </Route>
        <Route path='*'>
          <NoMatchPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;