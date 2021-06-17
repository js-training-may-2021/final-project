import React from 'react';
// import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../../utils';
import Main from '../Main/Main.jsx';
import Detail from '../Detail/Detail.jsx';
import Caught from '../Caught/Caught.jsx';

let pokemons = [
	{
		"name": "bulbasaur",
		"id": 1
	},
	{
		"name": "ivysaur",
		"id": 2
	},
	{
		"name": "venusaur",
		"id": 3
	},
	{
		"name": "charmander",
		"id": 4
	},
	{
		"name": "charmeleon",
		"id": 5
	},
	{
		"name": "charizard",
		"id": 6
	},
	{
		"name": "squirtle",
		"id": 7
	},
	{
		"name": "wartortle",
		"id": 8
	},
	{
		"name": "blastoise",
		"id": 9
	},
	{
		"name": "caterpie",
		"id": 10
	},
	{
		"name": "metapod",
		"id": 11
	},
	{
		"name": "butterfree",
		"id": 12
	},
	{
		"name": "weedle",
		"id": 13
	},
	{
		"name": "kakuna",
		"id": 14
	},
	{
		"name": "beedrill",
		"id": 15
	},
	{
		"name": "pidgey",
		"id": 16
	},
	{
		"name": "pidgeotto",
		"id": 17
	},
	{
		"name": "pidgeot",
		"id": 18
	},
	{
		"name": "rattata",
		"id": 19
	},
	{
		"name": "raticate",
		"id": 20
	},
	{
		"name": "spearow",
		"id": 21
	},
	{
		"name": "fearow",
		"id": 22
	},
	{
		"name": "ekans",
		"id": 23
	},
	{
		"name": "arbok",
		"id": 24
	},
	{
		"name": "pikachu",
		"id": 25
	},
	{
		"name": "raichu",
		"id": 26
	},
	{
		"name": "sandshrew",
		"id": 27
	},
	{
		"name": "sandslash",
		"id": 28
	},
	{
		"name": "nidoran-f",
		"id": 29
	},
	{
		"name": "nidorina",
		"id": 30
	},
];

pokemons = pokemons.slice(0, 50).map(pokemon => {
	pokemon.date = null;
	pokemon.isCaught = false;
	return pokemon;
});

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
						pokemons={pokemons}
					/>
        </Route>
        <Route exact path={AppRoute.CAUGHT}>
          <Caught 
						caughtPokemons={pokemons.slice(0, 10)}/>
        </Route>
        <Route path={AppRoute.DETAIL}>
          <Detail
						activePokemon={pokemons[0]}
					/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

/* App.propTypes = {

}; */

export default App;
