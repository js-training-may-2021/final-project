import React from 'react';
import { NavLink } from 'react-router-dom';

let PokemonGrid = (props) => {
    return (
        <div className="col-md-3" key={props.pokemonItem.id}>
            <div className="card mt-3" >
                <NavLink to={'/profile/' + props.pokemonItem.id}>
                    <img src={`/pokemons/${props.pokemonItem.id}.png`} className="card-img-top" alt="image" />
                </NavLink>                              
                <div className="card-body">
                    <h5 className="card-title">{props.pokemonItem.name.toUpperCase()}</h5>
                    <div>
                        { props.pokemonItem.isCaught
                        ? <button href="#" onClick={ () => {
                            let date = '';
                            props.letgo(props.pokemonItem.id, date) 
                        }}
                        className="btn btn-secondary">LET GO</button>
                        
                        : <button href="#" onClick={ () => { 
                            let date = new Date().toLocaleString();
                            props.catchIt(props.pokemonItem.id, date);
                            } } 
                            className="btn btn-primary">CATCH!</button>}
                    </div>
                </div> 
            </div>
        </div>
    )
} 

export default PokemonGrid;