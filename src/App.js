import React, {useState, useEffect} from 'react'
import axios from "axios";
import _ from 'lodash';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import PokemonList from './components/pokemonList';
import PokemonCard from './components/pokemonCard';
import qs from "qs";


function getPokemons(params, setPokemonList) {
  const strParams = qs.stringify(params)
  let url = 'http://localhost:3000/pokemons';

  if (strParams) {
      url = url + "?" + strParams;
  }
  axios.get(url).then(response => setPokemonList(response.data))
}

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [caughtPokemons, setCaughtPokemons] = useState([]);
  
  
  useEffect(() => {
      getPokemons({_limit: 10}, setPokemons)
      
  }, [])
  

  const renderPokemonList = () => {
    return <PokemonList getPokemons={(params) => getPokemons(params, setPokemons)} 
                        catchPokemon={catchPokemon} 
                        pokemons={pokemons}
                        caughtPokemons={caughtPokemons}
                        scrollable={true} />
  }

  const renderCaughtPokemonList = () => {
    return <PokemonList pokemons={pokemons.filter(({ id }) => _.find(caughtPokemons, { id }))} 
                        catchPokemon={catchPokemon}
                        caughtPokemons={caughtPokemons}
                        scrollable={false} />
  }

  const renderPokemonCard = () => {
    return <PokemonCard pokemons={pokemons} caughtPokemons={caughtPokemons} />
  }

  const catchPokemon = (pokemon) => {
    setCaughtPokemons([...caughtPokemons, { id: pokemon.id, caughtAt: new Date().toLocaleString() }]);
  }

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path={'/pokemons'} exact render={renderPokemonList} />
        <Route path={'/caught'} exact render={renderCaughtPokemonList} />
        <Route path={'/pokemons/:id'} exact render={renderPokemonCard} />
        <Redirect path='/' exact to='/pokemons'/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;