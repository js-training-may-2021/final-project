import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './HomePage.module.css';
import PokemonCard from "../components/PokemonCard/PokemonCard";
import Spinner from '../components/UI/Spinner';

const HomePage = () => {

  const [pokemonsList, setPokemonsList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const mainRef = useRef();
  const btnRef = useRef();
  const pokemonsToRender = useSelector(store => store.homePagination.numberOfPokemonsToRender);
  const dispatch = useDispatch();

  async function getPokemonList(limit, needToLoadMore) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
      .then(res => res.json())
      .then(res => {
        setPokemonsList(res.results);
        setIsloading(false);
        // if (needToLoadMore) {
        dispatch({ type: 'LOAD_MORE' });
        // }

      })
      .catch(err => err.message);
  };

  useEffect(() => {
    setIsloading(true);
    getPokemonList(pokemonsToRender);
    console.log("useEffect: ", pokemonsToRender);
  }, []);

  const loadMoreHandler = () => {
    // dispatch({ type: 'LOAD_MORE' });
    getPokemonList(pokemonsToRender, true);
    console.log("clickHandler: ", pokemonsToRender);
  }

  // TODO: mb more elegant way
  const getPokemonId = (pokemonUrl) => {
    let copyUrl = pokemonUrl;
    copyUrl = copyUrl.slice(0, copyUrl.length - 1);
    return +copyUrl.slice(copyUrl.lastIndexOf('/') + 1);
  };

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
    <main ref={mainRef}>
      <ul className={classes.pokemonList}>{content}</ul>
      <button className={classes.btn} onClick={loadMoreHandler} ref={btnRef}>Load more...</button>
    </main>
  );
};

export default HomePage;