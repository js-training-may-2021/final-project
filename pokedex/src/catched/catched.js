import React from 'react';
import '../main/main.css';
// import Card from './../main/card/card';
import CatchedCard from './catchedCard';

export default function Catched(props) {
    console.log('catched: ' + props.pokemons);
    return (
        <main>
            <div className="card-container">
                {
                    props.pokemons.map(poke => {
                        return <CatchedCard pokemon={poke} img={props.images[poke.id - 1]} key={poke.id} />
                    })
                }
            </div>
        </main>

    )
}