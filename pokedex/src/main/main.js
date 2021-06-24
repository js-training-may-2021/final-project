import React from 'react';
import './main.css';
import Card from './card/card';

export default function Main(props) {
    return (
        <main>
            <div className="card-container">
                {
                    props.pokemons.map(poke => {
                        return (
                            <Card pokemon={poke} img={props.images[poke.id - 1]} toCatch={props.toCatch} key={poke.id}/>
                        )
                    })
                }
            </div>
        </main>

    )
}