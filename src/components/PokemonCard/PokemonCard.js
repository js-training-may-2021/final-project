import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './PokemonCard.module.css';
import { useSelector } from "react-redux";

export default function PokemonCard() {
    const { id: stringId } = useParams();
    const id = Number(stringId);
    const pokemon = useSelector((state) => state.pokemons.find((p) => p.id === id))
    const statePokemon = useSelector((state) => state.caughtPokemons.find((p) => p.id === id))

    const caught = !!statePokemon;
    const caughtAt = statePokemon?.caughtAt || ' did not catch';

    return (
        <div className={classes.card}>
            <div className={classes.id}>ID Number :&nbsp;{pokemon.id}</div>
            <div className={classes.name}>Name :&nbsp;{pokemon.name}</div>
            <div className={classes.info}>
                <div>Status :&nbsp;</div>
                <div className={classes.caught}>{caught ? 'In Pokedex' : 'Didnt get yet'}</div>
            </div>
            <img src={`../assets/pokemons/${pokemon.id}.png`} className={classes.img} alt={pokemon.name}/>
            <div className={classes.date}>Date of Capture : {caughtAt}</div>
        </div>
    )
}
