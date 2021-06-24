import {reducer, ActionType, ActionCreator} from './app.js';

describe('Reducer works correctly', () => {
  it('Reducer without additional parameters should return initial state', () => {
    expect(reducer({
      isLoading: false,
      errorMessage: null,
    }, {})).toEqual({
      isLoading: false,
      errorMessage: null,
    });
  });

  it('Reducer should change loading status', () => {
    expect(reducer({
      isLoading: false,
    }, {
      type: ActionType.CHANGE_LOADING_STATUS,      
      payload: true,
    })).toEqual({
      isLoading: true,
    });
  });

  it('Reducer should change error message', () => {
    expect(reducer({
      errorMessage: null,
    }, {
      type: ActionType.CHANGE_ERROR_MESSAGE,      
      payload: 'Failed to load pokemons. Please try again later.',
    })).toEqual({
      errorMessage: 'Failed to load pokemons. Please try again later.',
    });
  });
});

describe('Action creators work correctly', () => {
  it('Action creator for changing loading status returns correct action', () => {
    expect(ActionCreator.changeLoadingStatus(true)).toEqual({
      type: ActionType.CHANGE_LOADING_STATUS,
      payload: true,
    });
  });
  it('Action creator for changing error message returns correct action', () => {
    expect(ActionCreator.changeErrorMessage('Failed to load pokemons. Please try again later.')).toEqual({
      type: ActionType.CHANGE_ERROR_MESSAGE,
      payload: 'Failed to load pokemons. Please try again later.',
    });
  });
});
