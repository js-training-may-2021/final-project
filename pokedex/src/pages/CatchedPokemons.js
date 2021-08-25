import React from 'react';
import Header from '../components/Header';
import PokemonsList from '../components/PokemonsList'

const CatchedPokemons = () => {
    return (
        <>
            <Header />
            <h1>Catched Pokemons</h1>
            <PokemonsList onlyCatched="true"/>
        </>
    );
}

export default CatchedPokemons;
