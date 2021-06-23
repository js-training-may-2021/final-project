import React from "react";

const CaughtPokemon = (props) => {

    return (
        <div>
            <h1>Its a CaughtPokemon</h1>
            <div>
                
                { props.store.map(pokemonItem => {
                    return (
                        <div key = {pokemonItem.id}>
                            <h4>{pokemonItem.name}</h4>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CaughtPokemon;