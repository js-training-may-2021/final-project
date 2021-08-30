import axios from 'axios';
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
                    if (pokemonItem.id >= ((props.currentPage - 1) * props.pageSize + 1) && pokemonItem.id <= (props.currentPage * (props.pageSize))) {
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
                                        ? <button href="#" onClick={ () => {
                                            let date = '';
                                            props.letgo(pokemonItem.id, date) 
                                        }}
                                        className="btn btn-secondary">LET GO</button>
                                        
                                        : <button href="#" onClick={ () => { 
                                            let date = new Date().toLocaleString();
                                            props.catchIt(pokemonItem.id, date);
                                            } } 
                                            className="btn btn-primary">CATCH!</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }}
                )}
            </div>
        </div>
    )
}

export default PokemonList;