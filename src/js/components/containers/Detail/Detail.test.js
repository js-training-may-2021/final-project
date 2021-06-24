import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Detail} from './Detail.jsx';
import {history, noop, testStore} from '../../../utils.js';
import {uncaughtPokemon, caughtPokemon} from '../../../mock.js';

it(`Render Detail page with uncaught pokemon`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={uncaughtPokemon}
            isLoading={false}
            errorMessage={null}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with caught pokemon`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={caughtPokemon}
            isLoading={false}
            errorMessage={null}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with Loader`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={null}
            isLoading={true}
            errorMessage={null}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with ErrorMessage`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={null}
            isLoading={false}
            errorMessage={'Failed to load pokemon. Please try again later.'}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with Loader and uncaught pokemon`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={uncaughtPokemon}
            isLoading={true}
            errorMessage={null}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with ErrorMessage and uncaught pokemon`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={uncaughtPokemon}
            isLoading={false}
            errorMessage={'Failed to load pokemon. Please try again later.'}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with Loader and caught pokemon`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={caughtPokemon}
            isLoading={true}
            errorMessage={null}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Detail page with ErrorMessage and caught pokemon`, () => {
  const tree = renderer
    .create(
      <Provider store={testStore}>
        <Router history={history}>
          <Detail
            activePokemon={caughtPokemon}
            isLoading={false}
            errorMessage={'Failed to load pokemon. Please try again later.'}
            onButtonClick={noop}
            loadPokemon={noop}
          />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
