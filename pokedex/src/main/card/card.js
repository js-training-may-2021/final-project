import React from 'react';
import './card.css';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    let toCatch = (event) => {
        props.toCatch(event);
    }
    return (
        <div className="card-wrapper">
            <NavLink to={`/pokemonPage/${props.pokemon.id}`}>
                <div className="card pokemon-card" id={props.pokemon.id}>
                    <img src={props.img} className="card-img-top" alt={props.pokemon.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.pokemon.name}</h5>
                    </div>
                </div>
            </NavLink>
            <button type="button" className="card-btn catch-btn btn btn-primary" id={props.pokemon.id} disabled={props.pokemon.disabled} onClick={toCatch}>
                {(props.pokemon.disabled === 'disabled') ? 'Caught' : 'Catch'}
            </button>
        </div>

    )
}