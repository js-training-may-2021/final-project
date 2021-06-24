import 'regenerator-runtime/runtime'; /* eslint react/jsx-filename-extension: 0 */
import '@testing-library/jest-dom';
import '../src/i18nInit.js';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import reducer from '@store';
import { addPokemons, catchPokemon } from '@store/pokemonsStateSlice';

import App from '../src/app/App.jsx';

const pokemons = [
  { name: 'bulbasaur', id: 1 },
  { name: 'ivysaur', id: 2 },
  { name: 'venusaur', id: 3 },
  { name: 'charmander', id: 4 },
  { name: 'charmeleon', id: 5 },
  { name: 'charizard', id: 6 },
  { name: 'squirtle', id: 7 },
  { name: 'wartortle', id: 8 },
  { name: 'blastoise', id: 9 },
  { name: 'caterpie', id: 10 },
  { name: 'metapod', id: 11 },
  { name: 'butterfree', id: 12 },
  { name: 'weedle', id: 13 },
  { name: 'kakuna', id: 14 },
  { name: 'beedrill', id: 15 },
  { name: 'pidgey', id: 16 },
  { name: 'pidgeotto', id: 17 },
  { name: 'pidgeot', id: 18 },
  { name: 'rattata', id: 19 },
  { name: 'raticate', id: 20 },
];

const mock = new MockAdapter(axios);
mock.onGet('/pokemons').reply(200, pokemons);

afterAll(() => mock.reset());

describe('App', () => {
  const store = configureStore({ reducer });
  const vdom = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('render pokemons', async () => {
    render(vdom);
    const response = await axios.get('/pokemons');
    store.dispatch(addPokemons(response.data));

    expect(screen.getAllByRole('button', { name: /поймать/i })).toHaveLength(20);
  });

  test('cheking empty pokebag on start', () => {
    render(vdom);
    userEvent.click(screen.getByText('Пойманные'));
    expect(screen.getByText('У Вас нет пойманных покемонов')).toBeInTheDocument();
    userEvent.click(screen.getByText('Покемоны'));
  });

  test('catch pokemons', () => {
    render(vdom);
    expect((screen.getAllByRole('button', { name: /поймать/i }))[0]).not.toBeDisabled();
    store.dispatch(catchPokemon({ id: 1, name: 'asd' }));
    expect((screen.getAllByRole('button', { name: /поймать/i }))[0]).toBeDisabled();
    expect((screen.getAllByRole('button', { name: /поймать/i }))[1]).not.toBeDisabled();
  });

  test('cheking pokebag after catch', () => {
    render(vdom);
    userEvent.click(screen.getByText('Пойманные'));
    expect(screen.queryByTestId(/У Вас нет пойманных покемонов/i)).toBeNull();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    userEvent.click(screen.getByText('Покемоны'));
  });
});
