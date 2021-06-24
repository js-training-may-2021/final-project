import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    return (
                        <div className="col-md-3" key={pokemonItem.id}>
                            <div className="card mt-3" >
                                <NavLink to={'/profile/' + pokemonItem.id}>
                                    <img src={`/pokemons/${pokemonItem.id}.png`} className="card-img-top" alt="image" />
                                </NavLink>                              
                                <div className="card-body">
                                    <h5 className="card-title">{pokemonItem.name.toUpperCase()}</h5>
                                    <div>
                                        { pokemonItem.isCaught
                                        ? <button href="#" className="btn btn-secondary">DONE</button>
                                        : <button href="#" onClick={ () => { props.caught(pokemonItem.id) } } className="btn btn-primary">CAUGHT</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default PokemonList;