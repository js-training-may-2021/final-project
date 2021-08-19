import PokemonList from "../components/PokemonList/pokemonList";
import React, { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPokemons, Catch } from "../redux/actions";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller'


const PokemonsPage = () => {
    const pokemons = useSelector((state) => state.pokemons)
    const caughtPokemons = useSelector((state) => state.caughtPokemons)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch();

    const fetchData = async() => {
       const  url = `http://localhost:3001/pokemons?_page=${page}&_limit=15`
        const response = await axios.get(url)
        dispatch(addPokemons(response.data))
        setPage((prev) => prev + 1);
    }

    const catchPokemon = (pokemon) => {
        const currentDate = new Date();
        const currentPokemon = {...pokemon, caughtAt: currentDate.toLocaleString(), caught: true};
        dispatch(Catch(currentPokemon))
    }

    return (
        <InfiniteScroll
            pageStart={1}
            initialLoad={true}
            loadMore={fetchData}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <PokemonList pokemons={pokemons} caughtPokemons={caughtPokemons} catchPokemon={catchPokemon}/>
        </InfiniteScroll>)
}

export default PokemonsPage;
