import React from 'react';

export const fetchPokemons = async () => {
    const response = await fetch(`http://localhost:3004/pokemons`);
    const responseData = await response.json();
    console.log('fetchPokemons data ',responseData)
    return responseData;
}