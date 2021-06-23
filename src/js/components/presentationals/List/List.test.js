import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import List from './List.jsx';
import {noop, history} from '../../../utils.js';
import {pokemons} from '../../../mock.js';

it(`Render List`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <List
          pokemons={pokemons}
          onCardClick={noop}
          onButtonClick={noop}
        />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
