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
            {/* МАР не мутирует наш стейт а возвращ новый массив*/}
            <div className="row">
                
                {props.pokemons.map(pokemonItem => {
                    // console.log(pokemonItem.id);
                    // console.log(props.currentPage);
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
                                        { pokemonItem.isCaught === "true"
                                        ? <button href="#" onClick={ () => {
                                            props.letgo(pokemonItem.id) 
                                            // axios.put(`http://localhost:8000/pokemons/${pokemonItem.id}`,{
                                            //     name: pokemonItem.name,
                                            //     id: pokemonItem.id,                
                                            //     isCaught: "false",
                                            // })
                                            // .then(response => {
                                            //     console.log(response);
                                            //     props.letgo(pokemonItem.id) 
                                            //     // this.props.setPokemons(response.data);
                                            //     });
                                        }}
                                        className="btn btn-secondary">LET GO</button>
                                        
                                        : <button href="#" onClick={ () => { 
                                            props.catchIt(pokemonItem.id);
                                            // axios.put(`http://localhost:8000/pokemons/${pokemonItem.id}`,{
                                            //     name: pokemonItem.name,
                                            //     id: pokemonItem.id,                
                                            //     isCaught: "true",
                                            // })
                                            // .then(response => {
                                            //     console.log(response);
                                            //     props.catchIt(pokemonItem.id) 
                                            //     // this.props.setPokemons(response.data);
                                            //     });

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