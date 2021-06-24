import React, {useState} from 'react';
import {getPoks} from '../../API';


export const allPoks = async (p) => {
    const [allPokemons, setAllPokemons] = useState([]);
    const newPoks = await getPoks(pg);
    setAllPokemons(prev => [...prev, ...newPoks]);
    return allPokemons;
}