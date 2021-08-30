import React from 'react';
import PokemonGrid from '../PokemonGrig/PokemonGrid';

let CaughtPokemon = (props) => {
    return (
        <div className="container-xl">
            <div className="row">
                {props.pokemons.map(pokemonItem => {
                    if (pokemonItem.isCaught) {
                        return (
                            <PokemonGrid 
                                letgo={props.letgo}
                                catchIt={props.catchIt}
                                pokemonItem={pokemonItem}
                            />
                            )
                        } 
                    }
                    
                )}
            </div>
        </div>
    )
}

export default CaughtPokemon;