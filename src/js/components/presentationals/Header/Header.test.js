import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import Header from './Header.jsx';
import {AppRoute, history} from '../../../utils.js';

it(`Render Header on Main page`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Header />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Header on Caught page`, () => {
  history.push(AppRoute.CAUGHT);

  const tree = renderer
    .create(
      <Router history={history}>
        <Header />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Header on Detail page`, () => {
  history.push(AppRoute.DETAIL);
  
  const tree = renderer
    .create(
      <Router history={history}>
        <Header />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
