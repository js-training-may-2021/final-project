import { Container } from 'react-bootstrap';
import PokemonsList from '../containers/PokemonsList';

import { useSelector } from 'react-redux';



export default function Caught() {
  const pokemons = useSelector((state) => state)
  const caughtPokemons = pokemons.filter((pokemon) => pokemon.caught)
    return (
        <>
          <Container className = "caught-container" fluid>
            <PokemonsList pokemons={caughtPokemons} />
          </Container> 

        </>
    )
}
