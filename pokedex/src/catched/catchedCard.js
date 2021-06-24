import React from 'react';
import { NavLink } from 'react-router-dom';
import '../main/card/card';

export default function CatchedCard(props) {
    return (
        <NavLink to={`/pokemonPage/${props.pokemon.id}`}>
            <div className="card pokemon-card catched-card" id={props.pokemon.id}>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.pokemon.name}</h5>
                    <p>This pokemon is caught</p>
                </div>
            </div>
        </NavLink>
    )
}