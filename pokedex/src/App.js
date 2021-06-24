import React from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './header/header';
import MainContainer from "./main/mainContainer";
import CatchedContainer from './catched/catchedContainer';
import PokemonPageContainer from './pokemonPage/pokemonPageContainer';

function App(props) {
  return (
    <BrowserRouter>
        <Header/>
        <div className="container">
          <Route exact path="/catched" render={ () => <CatchedContainer/> } />
          <Route eaxct path="/pokemonPage/:id" render={ () => <PokemonPageContainer/> } />
          <Route path="/main" render={ () => <MainContainer /> } />
        </div>
    </BrowserRouter>
  );
}

export default App;
