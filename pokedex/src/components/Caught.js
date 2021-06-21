import React, { useState }  from 'react';
import { Container } from 'react-bootstrap';
import PokemonsList from '../containers/PokemonsList';



export default function Caught() {
    const [myPokemons, setMyPokemons] = useState([]);

    return (
        <>
      
        <div>
            <h1>Your pokemons</h1>
        </div>
        <Container>
            <PokemonsList pokemons={myPokemons}/>
        </Container>

        </>
    )
}
