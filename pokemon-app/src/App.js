import './App.scss';
import React from 'react';
import './App.scss';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages/Home/Home";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import page404 from "./pages/404/404";
import {GlobalProvider} from "./redux/context";
import {CaughtPokemons} from "./pages/CaughtPokemons/CaugthPokemons";
import Header from "./components/Header/Header";


function App() {
    return (
        <div id="pokemon-app" className="App">
            <GlobalProvider>
            <Router>
                <Header/>
                <div className='App__container'>
                    <div className="App__wrapper wrapper">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/pokemon/:pokemonId" exact component={PokemonDetails}></Route>
                    <Route path="/caught-pokemons" exact component={CaughtPokemons}></Route>
                    <Route component={page404}/>
                </Switch>
                    </div>
                </div>
            </Router>
        </GlobalProvider>

</div>
);
}

export default App;
