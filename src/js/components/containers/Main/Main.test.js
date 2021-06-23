import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Main} from './Main.jsx';
import {history, noop, testStore} from '../../../utils.js';
import {pokemons} from '../../../mock.js';

it(`Render Main page with pokemons`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Main
            pokemons={pokemons}
            isLoading={false}
            errorMessage={null}
            onCardClick={noop}
            onButtonClick={noop}
            onScroll={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Main page with pokemons and Loader`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Main
            pokemons={pokemons}
            isLoading={true}
            errorMessage={null}
            onCardClick={noop}
            onButtonClick={noop}
            onScroll={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Main page with pokemons and ErrorMessage`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Main
            pokemons={pokemons}
            isLoading={false}
            errorMessage={'Failed to load pokemons. Please try again later.'}
            onCardClick={noop}
            onButtonClick={noop}
            onScroll={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Main page with Loader and without pokemons`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Main
            pokemons={[]}
            isLoading={true}
            errorMessage={null}
            onCardClick={noop}
            onButtonClick={noop}
            onScroll={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Main page with ErrorMessage and without pokemons`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Main
            pokemons={[]}
            isLoading={false}
            errorMessage={'Failed to load pokemons. Please try again later.'}
            onCardClick={noop}
            onButtonClick={noop}
            onScroll={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
