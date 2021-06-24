import React from 'react';
import CaughtPokemons from '../components/CaughtPokemons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//clickHandler={clickHandler(pokemon.id, pokemon.name)}
const Title = styled.h1`
    margin: 20px 0;
    color: #696969;
    text-align: center;
`

function MyCollection() {

    const pokemons = useSelector((state) => state);
    const caughtPokemons = pokemons.filter((pokemon) => pokemon.caught)

    if (caughtPokemons.length === 0) {
      return <Title>Добавьте покемонов из коллекции</Title>
    } else {
      return (
        <div>
          <CaughtPokemons caughtPokemons={caughtPokemons}/>  
        </div>
      )
      
    }
}
export default MyCollection