import * as types from '../common/actionTypes/pokedex';
import axios from 'axios';

export const getPokemon = () => async (dispatch) => {
  const res = await axios({
    url: 'http://localhost:3000/pokemons',
    method: 'GET',
  });
  dispatch({
    type: types.GET_POKEMON,
    data: res.data,
  });
};

export const catchPokemon = (pokemon) => async (dispatch) => {
  dispatch({
    type: types.CATCH_POKEMON,
    data: pokemon,
  });
};

export const getPokemonInfo = (id) => async (dispatch) => {
  const res = await axios({
    url: `http://localhost:3000/pokemons/${id}`,
    method: 'GET',
  });
  dispatch({
    type: types.SET_CURRENT_POKEMON_INFO,
    data: res.data,
  });
}

export const setCurrentPage = (number) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_PAGE,
    data: number,
  });
}

export const setCurrentPokemonID = (id) => async (dispatch) => {
  dispatch({
    type: types.CURRENT_POKEMON_ID,
    data: id,
  });
}



