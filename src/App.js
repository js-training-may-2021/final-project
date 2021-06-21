import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PokemonDetailPage from './pages/PokemonDetailPage';
import HomePage from './pages/HomePage';
import MainHeader from './components/Layout/MainHeader';
import MainFooter from './components/Layout/MainFooter';
import MyPokemons from './pages/MyPokemons';

// import PokemonNotFound from './pages/PokemonNotFound';

function App() {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route path='/home' exact>
          <HomePage />
        </Route>
        <Route path='/my-pokemons' exact>
          <MyPokemons />
        </Route>
        <Route path='/pokemon-detail/:pokemonId' exact>
          <PokemonDetailPage />
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
      <MainFooter />
    </>
  );
}

export default App;
