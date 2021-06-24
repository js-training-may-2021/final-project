import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Caught} from './Caught.jsx';
import {history, noop, testStore} from '../../../utils.js';
import {pokemons} from '../../../mock.js';

it(`Render Caught page with pokemons`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Caught
            caughtPokemons={pokemons}
            isLoading={false}
            errorMessage={null}
            onCardClick={noop}
            onButtonClick={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Caught page with Loader`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Caught
            caughtPokemons={[]}
            isLoading={true}
            errorMessage={null}
            onCardClick={noop}
            onButtonClick={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Caught page with ErrorMessage`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Caught
            caughtPokemons={[]}
            isLoading={false}
            errorMessage={'Failed to load pokemons. Please try again later.'}
            onCardClick={noop}
            onButtonClick={noop}
            loadPokemons={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
