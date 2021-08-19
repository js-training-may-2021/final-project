import PokemonList from "../components/PokemonList/pokemonList";
import React from "react";
import {useSelector} from "react-redux";

const CaughtPokemonsPage = () => {
    const caughtPokemons = useSelector((state) => state.caughtPokemons)
    return <PokemonList pokemons={caughtPokemons}/>
}

export default CaughtPokemonsPage;