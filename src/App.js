import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Test from './components/Test';
import PokemonDetail from './pages/PokemonDetail';
import HomePage from './pages/HomePage';
import MainHeader from './components/Layout/MainHeader';
import MyPokemons from './pages/MyPokemons';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/test' exact>
            <Test />
          </Route>
          <Route path='/my-pokemons' exact>
            <MyPokemons />
          </Route>
          <Route path='/pokemon-detail/:pokemonId' exact>
            <PokemonDetail />
          </Route>
          <Route path='/'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
