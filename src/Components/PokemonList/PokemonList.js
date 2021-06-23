import React from 'react';
import { NavLink } from 'react-router-dom';

let PokemonList = (props) => {

    let pagesCount = Math.ceil(props.totalPokemonsCount / props.pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    
    return (
        <div className="container-xl">
            {/* pagination */}
            <div>
                {pages.map ( p => {
                    return <button type="button" className={props.currentPage === p ? "btn btn-success" : "btn btn-outline-success"} 
                    onClick = { () => {props.onPageChanged(p)} } > {p} </button>
                })}
            </div>
            {/* pokemon cards */}
            <div className="row">
                {props.pokemons.map(pokemonItem => {
                    return (
                        <div className="col-md-3" key={pokemonItem.id}>
                            <div className="card" >
                                <NavLink to={'/profile/' + pokemonItem.id}>
                                    <img src={`/pokemons/${pokemonItem.id}.png`} className="card-img-top" alt="image" />
                                </NavLink>                              
                                <div className="card-body">
                                    <h5 className="card-title">{pokemonItem.name.toUpperCase()}</h5>
                                    <a href="#" className="btn btn-primary">CAUGHT</a>
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