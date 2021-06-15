import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = (props) => {

  const [currentPokemon, setCurrentPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function getPokemonData() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`).
        then(res => res.json()).
        then(res => {
          const transformedPokemonInfo = {
            name: res.name,
            id: res.id
          };
          setCurrentPokemon(transformedPokemonInfo);
          setIsLoading(false);
        }).catch(err => err.message);
    }
    getPokemonData();
  }, [params]);

  const content = isLoading ?
    <h2>Loading details</h2> :
    <h2>Details for {currentPokemon.name}</h2>;


  return <div>{content}</div>
};

export default PokemonDetail;