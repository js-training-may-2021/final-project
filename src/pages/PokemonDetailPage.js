import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PokemonProfile from '../components/PokemonProfile/PokemonProfile';
import PokemonNotFound from '../components/UI/PokemonNotFound';
import Spinner from '../components/UI/Spinner';
import classes from './PokemonDetailPage.module.css';

const PokemonDetailPage = () => {

  const caughtPokemons = useSelector(state => state.catch.caughtPokemons);
  const [currentPokemon, setCurrentPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function getPokemonData() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(res => {
          const transformedPokemonInfo = {
            name: res.name,
            id: res.id,
            img: `https://raw.githubusercontent.com/js-training-may-2021/final-project/main/pokemons/${res.id}.png`,
            isСaught: caughtPokemons.findIndex(pokemon => pokemon.name === res.name) > -1,
            captureDate: caughtPokemons.find(pokemon => pokemon.name === res.name)?.captureDate
          };
          setCurrentPokemon(transformedPokemonInfo);
          setIsLoading(false);
        })
        .catch(err => {
          console.error(err.message);
          setPokemonNotFound(true);
        });
    }
    getPokemonData();
  }, [params, caughtPokemons]);

  let content;

  if (pokemonNotFound) {
    content = <PokemonNotFound />;
  } else
    if (isLoading) {
      content = <Spinner />;
    } else {
      content = <PokemonProfile pokemon={currentPokemon} />;
    }

  return <main className={classes.main}>{content}</main>

};

export default PokemonDetailPage;