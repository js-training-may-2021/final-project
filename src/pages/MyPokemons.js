import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import classes from './MyPokemons.module.scss';

import PokemonCard from "../components/PokemonCard/PokemonCard";
import ReleaseButton from '../components/PokemonCard/ReleaseButton';

const MyPokemons = () => {

  const caughtPokemons = useSelector(state => state.catch.caughtPokemons);
  const numOfPokemonsToRender = useSelector(state => state.myPokemonsPagination.numberOfPokemons);
  const dispatch = useDispatch();

  const loadMoreHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "LOAD_MORE" });
  };

  const content =
    !caughtPokemons.length ?
      <p className={classes.text}>You haven't any pokemons yet</p> :
      <>
        <ul className={classes.list}>
          {caughtPokemons.slice(0, numOfPokemonsToRender).map(pokemon => {
            return (
              <li key={pokemon.id}>
                <Link to={`/pokemon-detail/${pokemon.name}`} className={classes.link}>
                  <PokemonCard pokemon={pokemon}>
                    <ReleaseButton pokemon={pokemon} />
                  </PokemonCard>
                </Link>
              </li>
            );
          })}
        </ul>
      </>;

  const isButtonToRender = caughtPokemons.length > 20 && caughtPokemons.length > numOfPokemonsToRender;

  return (
    <>
      <>{content}</>
      {isButtonToRender && <button onClick={loadMoreHandler} className={classes.btn}>Load More...</button>}
    </>
  );
};

export default MyPokemons;