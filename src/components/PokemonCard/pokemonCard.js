import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './pokemonCard.module.css';

const renderPokemon = (pokemon, caught = false, caughtAt = null) => {
    console.log(pokemon)
    if (!pokemon) {
        return <div>Pokemon is not found.</div>
    }

    return (
        <div className={classes.card}>
            <div className={classes.id}>ID Number :&nbsp;{pokemon.id}</div>
            <div className={classes.name}>Name :&nbsp;{pokemon.name}</div>
            <div className={classes.info}>
                <div className={classes.status}>Status :&nbsp;</div>
                <div className={classes.caught}>{caught ? 'In Pokedex' : 'Didnt get yet'}</div>
            </div>
            <img src={`../assets/pokemons/${pokemon.id}.png`} className={classes.img} alt={pokemon.name}/>
            <div className={classes.date}>Date of Capture : {caughtAt}</div>
        </div>
    )
}

export default function PokemonCard(props) {
    const { id } = useParams();
    const { pokemons, caughtPokemons } = props;
    const pokemon = pokemons.find(item => parseInt(item.id) === parseInt(id));
    const caughtSinglePokemon = caughtPokemons.find(item => parseInt(item.id) === parseInt(id));
    const caught = !!caughtSinglePokemon;
    const caughtAt = caughtSinglePokemon === undefined ? null : caughtSinglePokemon.caughtAt;
    return renderPokemon(pokemon, caught, caughtAt)
}
