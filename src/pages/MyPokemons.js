import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './MyPokemons.module.css';

import PokemonCard from "../components/PokemonCard/PokemonCard";

const MyPokemons = () => {

  const catchedPokemons = useSelector(state => state.catch.catchedPokemons);

  const content =
    !catchedPokemons.length ?
      <p className={classes.text}>You don't have any pokemons yet</p> :
      <ul className={classes.pokemonList}>
        {catchedPokemons.map(pokemon => {
          return (
            <li key={pokemon.id}>
              <Link to={`/pokemon-detail/${pokemon.name}`} className={classes.link}>
                <PokemonCard
                  pokemon={{
                    name: pokemon.name,
                    id: pokemon.id,
                    img: pokemon.img
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>

  return (
    <main>
      {/* <ul className={classes.pokemonList}>{content}</ul> */}
      {content}
    </main>
  );
};

export default MyPokemons;