import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import Logo from './Logo.jsx';
import {history} from '../../../utils.js';

it(`Render Logo`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Logo />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
