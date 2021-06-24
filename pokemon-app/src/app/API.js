import React from 'react';

export const getPoks = async (p) => {
        console.log('getPoks page ',p)
        const pokemonsResponse = await fetch(`http://localhost:3000/pokemons?_page=${p}&_limit=20`).json();
        // const poksData = await pokemonsResponse.json();
        console.log('poksData ', pokemonsResponse);
        return pokemonsResponse;
    }

export const getPokById = async (id) => {
        console.log('getPokById id ',id)

        const pokemonsResponse = await fetch(`http://localhost:3000/pokemons??id=${id}`);
        const poksData = await pokemonsResponse.json();
        console.log('poksData ', poksData);
        return poksData;
}