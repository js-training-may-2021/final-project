import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './ErrorMessage.jsx';

it(`Render ErrorMessage`, () => {
  const tree = renderer
    .create(
      <ErrorMessage
        message={'Failed to load caught pokemons. Please try again later.'}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.children[0]).toBe('Failed to load caught pokemons. Please try again later.');
});
