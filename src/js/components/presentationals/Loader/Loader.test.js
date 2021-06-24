import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader.jsx';

it(`Render Loader`, () => {
  const tree = renderer
    .create(
      <Loader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
