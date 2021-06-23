import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.jsx';
import {noop} from '../../../utils.js';

it(`Render Button of uncaught pokemon`, () => {
  const tree = renderer
    .create(
      <Button
        isToggleChecked={false}
        onClick={noop}
        onToggleClick={noop}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.children[0]).toBe('Catch!');
  expect(tree.props.className).toBe('card__button button');
});

it(`Render Button of caught pokemon`, () => {
  const tree = renderer
    .create(
      <Button
        isToggleChecked={true}
        onClick={noop}
        onToggleClick={noop}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.children[0]).toBe('Release');
  expect(tree.props.className).toBe('card__button button button--checked');
});
