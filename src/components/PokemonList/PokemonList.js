import React from 'react'
import classes from './PokemonList.module.css';
import { Link } from 'react-router-dom';

export default function PokemonList({ pokemons = [] ,caughtPokemons = [], Capturing}) {
    // if (!caughtPokemons.length) {
    //     return <div className={classes.main}>Nothing is here yet</div>
    // }
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
                                        <button data-testid="button" disabled={isCaught} onClick={(e) => {
                                            Capturing(pokemon);
                                            e.preventDefault();
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