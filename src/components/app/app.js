import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AppHeader from "../app-header";
import CardsListPage from "../../pages/cards-list-page";
import CollectionPage from "../../pages/collection-page";
import PokemonInfoPage from "../../pages/pokemon-info-page";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <div className="content">
          <Switch>
            <Route exact path="/" component={CardsListPage} />
            <Route path="/collection" component={CollectionPage} />
            <Route path="/pokemon-info/:id" component={PokemonInfoPage} />
            <Route path="/search/:query" component={CardsListPage} />
            <Route
              path="/search-my-collection/:query"
              component={CollectionPage}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
