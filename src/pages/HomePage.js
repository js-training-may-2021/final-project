import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './HomePage.module.css';

import PokemonCard from "../components/PokemonCard/PokemonCard";
import Spinner from '../components/UI/Spinner';

const HomePage = () => {

  const [pokemonsList, setPokemonsList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    async function getPokemonList() {
      fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => res.json())
        .then(res => {
          setPokemonsList(res.results);
          setIsloading(false);
        })
        .catch(err => err.message);
    }
    getPokemonList();
  }, []);

  const getPokemonId = (pokemonUrl) => {
    let copyUrl = pokemonUrl;
    copyUrl = copyUrl.slice(0, copyUrl.length - 1);
    return +copyUrl.slice(copyUrl.lastIndexOf('/') + 1);
  }

  const content = isLoading ?
    <Spinner /> :
    pokemonsList.map(pokemon => {
      return (
        <li key={getPokemonId(pokemon.url)}>
          <Link to={`/pokemon-detail/${pokemon.name}`} className={classes.link}>
            <PokemonCard
              pokemon={{
                name: pokemon.name,
                id: getPokemonId(pokemon.url),
                img: `https://raw.githubusercontent.com/js-training-may-2021/final-project/main/pokemons/${getPokemonId(pokemon.url)}.png`,
                isСaught: false
              }}
            />
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

            //  {/* name={pokemon.name}
            //   img={`https://raw.githubusercontent.com/js-training-may-2021/final-project/main/pokemons/${getPokemonId(pokemon.url)}.png`}
            //   isCaught={true}  */}