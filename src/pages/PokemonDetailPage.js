import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PokemonProfile from '../components/PokemonProfile/PokemonProfile';
import PokemonNotFound from '../components/UI/PokemonNotFound';
import Spinner from '../components/UI/Spinner';
import classes from './PokemonDetailPage.module.css';

const PokemonDetailPage = () => {

  const catchedPokemons = useSelector(state => state.catch.catchedPokemons);
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
            throw new Error("Pokemon not found");
          }
          return res.json();
        })
        .then(res => {
          const transformedPokemonInfo = {
            name: res.name,
            id: res.id,
            img: `https://raw.githubusercontent.com/js-training-may-2021/final-project/main/pokemons/${res.id}.png`,
            isСaught: catchedPokemons.findIndex(pokemon => pokemon.name === res.name) > -1,
            captureDate: catchedPokemons.find(pokemon => pokemon.name === res.name)?.captureDate.toDateString()
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
  }, [params, catchedPokemons]);

  let content;

  if (pokemonNotFound) {
    content = <PokemonNotFound />;
  } else if (isLoading) {
    content = <Spinner />;
  } else {
    content = <PokemonProfile pokemon={currentPokemon} />;
  }

  return <main className={classes.main}>{content}</main>

};

export default PokemonDetailPage;