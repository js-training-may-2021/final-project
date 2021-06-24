import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import Footer from './Footer.jsx';
import {AppRoute, history} from '../../../utils.js';

it(`Render Footer on Main page`, () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Footer />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Footer on Caught page`, () => {
  history.push(AppRoute.CAUGHT);
  
  const tree = renderer
    .create(
      <Router history={history}>
        <Footer />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Footer on Detail page`, () => {
  history.push(AppRoute.DETAIL);
  
  const tree = renderer
    .create(
      <Router history={history}>
        <Footer />
      </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
