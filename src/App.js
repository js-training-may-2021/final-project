import { BrowserRouter,Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import PokemonCollection from './containers/PokemonCollection';
import MyCollection from './containers/MyCollection';
import PokemonPage from './components/PokemonPage';
import { useSelector } from 'react-redux';

//import { pokemons } from './components/db.json';
function App() {

  const pokemons = useSelector((state) => state)

  return (
    <BrowserRouter>
      <NavMenu />
      <div className="App">
        <Switch>
          <Route path='/mycollection'>
            <MyCollection />
          </Route>
          <Route path='/pokemons/:id'>
            <PokemonPage pokemons={pokemons}/>
          </Route>
          <Route path='/'>
            <PokemonCollection />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
