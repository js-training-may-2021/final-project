import React from 'react';
import './pokemonPage.css';

export default function PokemonPage(props) {
    let id = window.location.pathname.slice(13) - 1;
    // console.log(id);
    return (
        // <div className="container">
            <div class="card mb-3 pokemon-page-card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={props.images[id]} class="img-fluid rounded-start" alt={props.pokemons[id].name}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.pokemons[id].name}</h5>
                            <p class="card-text">Id: {id + 1}</p>
                            <p class="card-text">{props.pokemons[id].time}</p>
                        </div>
                    </div>
                </div>
            </div>
            // {/* <div className="pokemon-container">
            //     <div className="pokemon-info">
            //         <p>Id: {id + 1}</p>
            //         <p>Name: {props.pokemons[id].name}</p>
            //         <p>{props.pokemons[id].time}</p>
            //     </div>
            //     <img src={props.images[id]} alt={`${props.pokemons[id].name}`}/>
            // </div> */}
        // </div>
    )
} 