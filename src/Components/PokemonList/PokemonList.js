import React from 'react';
import PokemonGrid from '../PokemonGrig/PokemonGrid';
import Pagination from './../Pagination/Pagination';

let PokemonList = (props) => {
    return (
        <div className="container-xl">
            <Pagination 
                totalPokemonsCount={props.totalPokemonsCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                />
            <div className="row">
                {props.pokemons.map(pokemonItem => {
                    if (pokemonItem.id >= ((props.currentPage - 1) * props.pageSize + 1) && pokemonItem.id <= (props.currentPage * (props.pageSize))) {
                        return (
                            <PokemonGrid 
                                key={pokemonItem.id}
                                letgo={props.letgo}
                                catchIt={props.catchIt}
                                pokemonItem={pokemonItem}
                            />
                            )
                    }}
                )}
            </div>
        </div>
    )
}

export default PokemonList;