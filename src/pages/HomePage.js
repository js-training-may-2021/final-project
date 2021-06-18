import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './HomePage.module.css';
import PokemonCard from "../components/PokemonCard/PokemonCard";
import Spinner from '../components/UI/Spinner';

  const getPokemonId = (pokemonUrl) => {
    let copyUrl = pokemonUrl;
    copyUrl = copyUrl.slice(0, copyUrl.length - 1);
    return +copyUrl.slice(copyUrl.lastIndexOf('/') + 1);
  };

const HomePage = () => {

  // const [isLoading, setIsloading] = useState(false);
  // const mainRef = useRef();
  // const btnRef = useRef();
  const pokemons = useSelector(store => store.homePagination.pokemons);
  const isLoading = useSelector(store => store.homePagination.isLoading);
  const error = useSelector(store => store.homePagination.error);
  const dispatch = useDispatch();

  function getPokemonList(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "START_LOADING_POKEMONS"});
        dispatch({ type: "SET_POKEMONS", payload: res.results});
      })
      .catch(err => dispatch({ type: "ERROR" }));
  };

  useEffect(() => {
    if (!pokemons.length) {
     dispatch({ type: "START_LOADING_POKEMONS"});
     getPokemonList(0);
    }
  }, []);

  const loadMoreHandler = () => getPokemonList(pokemons.length);

  let content;

  // if (isLoading) {
  //   content = <Spinner />;
  // } else 
  if (error) {
    content = <p className={classes.error}>Something went wrong</p>
  } else {
    content = <>
    <ul className={classes.pokemonList}>
      {pokemons.map(pokemon => {
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
    })}
    </ul>
    <button className={classes.btn} onClick={loadMoreHandler}>Load more...</button>
    </>
  }

  return (
    <main className={classes.main}>
      {content}
    </main>
  );
};

export default HomePage;