import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './MyPokemons.module.css';

import PokemonCard from "../components/PokemonCard/PokemonCard";
import ReleaseButton from '../components/PokemonCard/ReleaseButton';

const MyPokemons = () => {

  const catchedPokemons = useSelector(state => state.catch.catchedPokemons);

  const content =
    !catchedPokemons.length ?
      <p className={classes.text}>You haven't any pokemons yet</p> :
      <>
        <ul className={classes.pokemonList}>
          {catchedPokemons.map(pokemon => {
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
      </>

  return (
    <main className={classes.main}>
      {content}
    </main>
  );
};

export default MyPokemons;