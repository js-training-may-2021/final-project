import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './HomePage.module.css';

import PokemonCard from "../components/PokemonCard/PokemonCard";

const HomePage = () => {

  // const catchedPokemons = useSelector(state => state.catchedPokemons);

  const [pokemonsList, setPokemonsList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    async function getPokemonList() {
      fetch(`https://pokeapi.co/api/v2/pokemon/`).
        then(res => res.json()).
        then(res => {
          setPokemonsList(res.results);
          setIsloading(false);
        }).
        catch(err => err.message);
    }
    getPokemonList();
  }, []);

  const content = isLoading ?
    <p>Loading...</p> :
    pokemonsList.map(pokemon => {
      return (
        <li key={pokemon.url}>
          <Link to={`/pokemon-detail/${pokemon.name}`} className={classes.link}>
            <PokemonCard
              name={pokemon.name}
              img='https://img.icons8.com/cotton/2x/image.png'
              isCaught={true} />
          </Link>
        </li>
      );
    });

  return (
    <>
      <ul className={classes.pokemonList}>{content}</ul>
      <button>Load more...</button>
    </>
  );
};

export default HomePage;