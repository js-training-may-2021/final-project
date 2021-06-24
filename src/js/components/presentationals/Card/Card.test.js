import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import Card from './Card.jsx';
import {noop, history} from '../../../utils.js';
import {uncaughtPokemon, caughtPokemon} from '../../../mock.js';

it(`Render Card of uncaught pokemon`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Card
          pokemon={uncaughtPokemon}
          isToggleChecked={uncaughtPokemon.isCaught}
          onCardClick={noop}
          onButtonClick={noop}
          onToggleClick={noop}
        />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toBe('list__card card');
});

it(`Render Card of caught pokemon`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Card
          pokemon={caughtPokemon}
          isToggleChecked={caughtPokemon.isCaught}
          onCardClick={noop}
          onButtonClick={noop}
          onToggleClick={noop}
        />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toBe('list__card card card--caught');
});
