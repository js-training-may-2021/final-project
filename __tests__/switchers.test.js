import 'regenerator-runtime/runtime'; /* eslint react/jsx-filename-extension: 0 */
import '@testing-library/jest-dom';
import '../src/i18nInit.js';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';

import reducer from '@store';

import UiSettings from '@containers/UiSettings/index.jsx';

describe('Switchers', () => {
  const store = configureStore({ reducer });
  const vdom = (
    <Provider store={store}>
      <UiSettings />
    </Provider>
  );

  test('checking language switcher', () => {
    render(vdom);
    expect(screen.getByText('Светлая')).toBeInTheDocument();
    userEvent.click((screen.getAllByRole('checkbox'))[0]);
    expect(screen.getByText('Light')).toBeInTheDocument();
    userEvent.click((screen.getAllByRole('checkbox'))[0]);
    expect(screen.getByText('Светлая')).toBeInTheDocument();
  });

  test('checking theme switcher', () => {
    render(vdom);
    const firstLabel = document.querySelector('label');
    expect(firstLabel.classList.contains('dark')).toBe(false);
    userEvent.click((screen.getAllByRole('checkbox'))[1]);
    expect(firstLabel.classList.contains('dark')).toBe(true);
    userEvent.click((screen.getAllByRole('checkbox'))[1]);
    expect(firstLabel.classList.contains('dark')).toBe(false);
  });
});
