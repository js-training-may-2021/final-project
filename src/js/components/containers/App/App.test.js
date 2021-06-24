import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {App} from './App.jsx';
import {history, noop, testStore} from '../../../utils.js';

Enzyme.configure({adapter: new Adapter()});

it(`Render App`, () => {
  const wrapper = shallow(
    <Provider store={testStore}>
      <App
        history={history}
        isLoading={false}
        errorMessage={null}
        onCardClick={noop}
        onButtonClick={noop}
      />
    </Provider>);

  expect(wrapper).toMatchSnapshot();
});
