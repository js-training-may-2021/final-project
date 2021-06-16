import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PokemonProfile from '../components/PokemonProfile/PokemonProfile';
import Spinner from '../components/UI/Spinner';

const PokemonDetailPage = (props) => {

  const catchedPokemons = useSelector(state => state.catchedPokemons);

  const [currentPokemon, setCurrentPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function getPokemonData() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
        .then(res => res.json())
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
        .catch(err => err.message);
    }
    getPokemonData();
  }, [params, catchedPokemons]);

  const content = isLoading ?
    <Spinner /> :
    <PokemonProfile pokemon={currentPokemon} />;

  return <div>{content}</div>
};

export default PokemonDetailPage;