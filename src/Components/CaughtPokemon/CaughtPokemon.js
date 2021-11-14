import React from 'react';
import PokemonGrid from '../PokemonGrig/PokemonGrid';

let CaughtPokemon = ({pokemons, letgo, catchIt }) => {
    return (
        <div className="container-xl">
            <div className="row">
                {pokemons.map(pokemonItem => {
                    if (pokemonItem.isCaught) {
                        return (
                            <PokemonGrid 
                                key={pokemonItem.id}
                                letgo={letgo}
                                catchIt={catchIt}
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