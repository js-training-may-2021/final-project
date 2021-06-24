import React from 'react';
import PokemonsList from '../components/PokemonsList';
import Header from '../components/Header';


const Home = () => {
    return (
        <>
            <Header />
            <h1>Pokemons</h1>
            <PokemonsList />
        </>
    );
}

export default Home;
