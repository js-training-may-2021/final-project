import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './MyPokemons.module.css';

import PokemonCard from "../components/PokemonCard/PokemonCard";

const MyPokemons = () => {

  const catchedPokemons = useSelector(state => state.catchedPokemons);

  const content = catchedPokemons.map(pokemon => {
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
  });

  return (
    <ul className={classes.pokemonList}>{content}</ul>
  );
};

export default MyPokemons;