import React, { useState } from 'react'
import classes from './pokemonList.module.css';
import { Link } from 'react-router-dom';

export default function PokemonList({ pokemons = [] ,caughtPokemons = [], catchPokemon}) {
    // const [isActive, setIsActive] = useState(false);
    return (
        <div className={classes.main}>
            {pokemons.map(pokemon => {
                    const isCaught = !!caughtPokemons.find((p) => p.id === pokemon.id)
                    return (
                        <Link key={`pokemon_${pokemon.id}`} to={{pathname: `/pokemons/${pokemon.id}`}}>
                            <div className={classes.cover}>
                                <div className={classes.box}>
                                    <img src={`assets/pokemons/${pokemon.id}.png`} className={classes.img}
                                         alt={pokemon.name}/>
                                    <div>
                                        <h5 className={classes.name}>{pokemon.name}</h5>
                                        <button data-testid="button" onClick={(e) => {
                                            catchPokemon(pokemon);
                                            e.preventDefault();
                                            // setIsActive(true);
                                        }} className={classes.button}>
                                            {isCaught ? "Gotcha!" : "Catch him!"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                }
            )}
        </div>
    )
}