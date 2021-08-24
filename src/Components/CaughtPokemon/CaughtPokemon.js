import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from './../Pagination/Pagination';

let CaughtPokemon = (props) => {
    return (
        <div className="container-xl">
            {/* <Pagination 
                totalPokemonsCount={props.totalCaughtPokemonsCount}
                pageSize={props.pageSize}
                currentPage={props.currentPageCaught}
                onPageChanged={props.onPageChangedCaught}
                /> */}
                   
            <div className="row">
                {props.pokemons.map(pokemonItem => {
                    if (pokemonItem.isCaught) {
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
                                                // axios.put(`http://localhost:8000/pokemons/${pokemonItem.id}`,{
                                                //     name: pokemonItem.name,
                                                //     id: pokemonItem.id,                
                                                //     isCaught: "false",
                                                // })
                                                // .then(response => {
                                                //     console.log(response);
                                                //     props.c_letgo(pokemonItem.id) 
                                                //     });
                                            }}
                                            className="btn btn-secondary">LET GO</button>
                                            
                                            : <button href="#" onClick={ () => { 
                                                let date = new Date().toLocaleString();
                                                props.catchIt(pokemonItem.id, date); 
                                                // axios.put(`http://localhost:8000/pokemons/${pokemonItem.id}`,{
                                                //     name: pokemonItem.name,
                                                //     id: pokemonItem.id,                
                                                //     isCaught: "true",
                                                // })
                                                // .then(response => {
                                                //     console.log(response);
                                                //     props.c_catchIt(pokemonItem.id) 
    
                                                //     });
    
                                                } } 
                                                className="btn btn-primary">CATCH IT!</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        } 
                    }
                    
                )}
            </div>
        </div>
    )
}

export default CaughtPokemon;