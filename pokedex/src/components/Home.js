import {  Alert  } from 'react-bootstrap';
import  useFetch  from './useFetch';
import PokemonsList from '../containers/PokemonsList';

export default function Home() {
    const { data: pokemons, isPending, error} = useFetch('http://localhost:8000/pokemons');

  /*  const handleCatch = (id) => {
        pokemons.map(pokemon => pokemon.id === id);

    }*/
    return (
        <>
            <div className = "home-container"> 
             {error && <Alert variant='danger'>{error}!</Alert>}
             {isPending && <Alert  variant='warning'> Loading... </Alert>}
             {pokemons && <PokemonsList pokemons={pokemons} /*handleCatch={handleCatch}*//> }
            </div>
        </>
    )
}


/*
<Container >
<Row>
    <Col>
    <PokemonCard />
    </Col>
    <Col>
    <PokemonCard />
    </Col>
    <Col>
    <PokemonCard />
    </Col>
</Row>

</Container>*/