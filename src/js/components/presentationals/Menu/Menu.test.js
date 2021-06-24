import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import Menu from './Menu.jsx';
import {AppRoute, history} from '../../../utils.js';

it(`Render Menu on Main page`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Menu />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Menu on Caught page`, () => {
  history.push(AppRoute.CAUGHT);

  const tree = renderer
    .create(
      <Router history={history}>
        <Menu />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Menu on Detail page`, () => {
  history.push(AppRoute.DETAIL);
  
  const tree = renderer
    .create(
      <Router history={history}>
        <Menu />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
