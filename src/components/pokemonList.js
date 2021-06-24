import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import classes from './pokemonList.module.css';
import { Link } from 'react-router-dom';

const renderPokemons = (pokemons, caughtPokemons, catchPokemon) => pokemons.map(
    pokemon => {
        const caughtArray = caughtPokemons.filter((item) => item.id === pokemon.id)
        const caught = caughtArray.length === 0 ? false : true;
        return (
        <Link key={`pokemon_${pokemon.id}`} to={{pathname: `/pokemons/${pokemon.id}`}}>
            <div className={classes.cover}>
                <div className={classes.box}>
                <img src = {`assets/pokemons/${pokemon.id}.png`} className={classes.img} alt={pokemon.name}/>
                <div className={classes.body}>
                    <h5 className={classes.name}>{pokemon.name}</h5>
                    <button data-testid="button" disabled={caught} onClick={(e) => { catchPokemon(pokemon); e.preventDefault(); }} className={classes.button}>
                        {caught ? "Gotcha!" : "Catch him!"}
                    </button>
                </div>
                </div>
            </div>
        </Link>)}
);

export default function PokemonList(props) {
    const { getPokemons, catchPokemon, pokemons, caughtPokemons, scrollable } = props;

    if (scrollable) {
        return (
            <InfiniteScroll className={classes.main}
                pageStart={0}
                loadMore={() => getPokemons({_limit: pokemons.length + 10})}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}>
                {renderPokemons(pokemons, caughtPokemons, catchPokemon)}
            </InfiniteScroll>
        )
    } else {
        return (
            <div className={classes.main}>
                {renderPokemons(pokemons, caughtPokemons, catchPokemon)}
            </div>
        )
    }
}