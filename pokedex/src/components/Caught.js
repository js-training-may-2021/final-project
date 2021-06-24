import { Container } from 'react-bootstrap';
import PokemonsList from '../containers/PokemonsList';
import { useSelector } from 'react-redux';



export default function Caught() {
  const pokemons = useSelector((state) => state.collection)
  
    return (
        <>
          <Container className = "caught-container" fluid>
            <PokemonsList pokemons={pokemons} />
          </Container> 
        </>
    )
}
