import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PokemonDetailPage from './pages/PokemonDetailPage';
import HomePage from './pages/HomePage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './components/Layout/Main';
import MyPokemons from './pages/MyPokemons';

function App() {
  return (
    <>
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </>
  );
}

export default App;
