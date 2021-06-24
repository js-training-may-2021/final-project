import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import routes from './common/routerConstants';
import Main from './pages/Main';
import CaughtPokemon from './pages/CaughtPokemon';
import PokemonInfo from './pages/PokemonInfo';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={routes.main} component={Main} />
      <Route path={routes.pokemonInfo} component={PokemonInfo} />
      <Route path={routes.caughtPokemon} component={CaughtPokemon} />
      <Route path={routes.notFound} component={() => <h1>Not Found</h1>} />
    </Switch>
  </>
)

export default Routes;
