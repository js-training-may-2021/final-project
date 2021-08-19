import PokemonList from "../components/PokemonList/PokemonList";
import React from "react";
import {useSelector} from "react-redux";
import classes from './NoMatchPage/NoMatchPage.module.css'

const CaughtPokemonsPage = () => {
    const caughtPokemons = useSelector((state) => state.caughtPokemons)

    if (!caughtPokemons.length) {
        return <div className={classes.main}>NOTHING IS HERE YET</div>
    }
    return <PokemonList pokemons={caughtPokemons}/>
}

export default CaughtPokemonsPage;