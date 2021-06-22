import {Component} from 'react';

export default class PokemonApi extends Component {
  async getPokemons(page) {
    const url = `http://localhost:3000/pokemons?_page=${page}&_limit=30`;
    const data = await fetch(url);

    if (!data.ok) {
      throw new Error('Cannot fetch Pokemons\' data');
    }

    return await data.json();
  }
}