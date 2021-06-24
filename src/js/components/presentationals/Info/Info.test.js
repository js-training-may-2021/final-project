import React from 'react';
import renderer from 'react-test-renderer';
import Info from './Info.jsx';
import {noop} from '../../../utils.js';
import {uncaughtPokemon, caughtPokemon} from '../../../mock.js';

it(`Render Info of uncaught pokemon`, () => {
  const tree = renderer
    .create(
      <Info
        pokemon={uncaughtPokemon}
        isToggleChecked={uncaughtPokemon.isCaught}
        onButtonClick={noop}
        onToggleClick={noop}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Info of caught pokemon`, () => {
  const tree = renderer
    .create(
      <Info
        pokemon={caughtPokemon}
        isToggleChecked={caughtPokemon.isCaught}
        onButtonClick={noop}
        onToggleClick={noop}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
