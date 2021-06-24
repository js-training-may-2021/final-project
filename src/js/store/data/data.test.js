import {reducer, ActionType, ActionCreator} from './data.js';
import {pokemons, uncaughtPokemon, caughtPokemon} from '../../mock.js';

describe('Reducer works correctly', () => {
  it('Reducer without additional parameters should return initial state', () => {
    expect(reducer({
      pokemons: [],
      caughtPokemons: [],
      activePokemon: null,
    }, {})).toEqual({
      pokemons: [],
      caughtPokemons: [],
      activePokemon: null,
    });
  });

  it('Reducer should update pokemons by loadPokemons', () => {
    expect(reducer({
      pokemons: [],
    }, {
      type: ActionType.LOAD_POKEMONS,      
      payload: pokemons,
    })).toEqual({
      pokemons,
    });
  });

  it('Reducer should load caughtPokemons by loadPokemons', () => {
    expect(reducer({
      caughtPokemons: [],
    }, {
      type: ActionType.LOAD_CAUGHT_POKEMONS,      
      payload: pokemons,
    })).toEqual({
      caughtPokemons: pokemons,
    });
  });

  it('Reducer should change activePokemon', () => {
    expect(reducer({
      activePokemon: null,
    }, {
      type: ActionType.CHANGE_ACTIVE_POKEMON,
      payload: uncaughtPokemon,
    })).toEqual({
      activePokemon: uncaughtPokemon,
    });
  });
});

describe('Action creators work correctly', () => {
  it('Action creator for loading pokemons returns correct action', () => {
    expect(ActionCreator.loadPokemons(pokemons)).toEqual({
      type: ActionType.LOAD_POKEMONS,
      payload: pokemons,
    });
  });
  it('Action creator for loading caught pokemons returns correct action', () => {
    expect(ActionCreator.loadCaughtPokemons(pokemons)).toEqual({
      type: ActionType.LOAD_CAUGHT_POKEMONS,
      payload: pokemons,
    });
  });

  it('Action creator for changing active pokemon returns correct action', () => {
    expect(ActionCreator.changeActivePokemon(caughtPokemon)).toEqual({
      type: ActionType.CHANGE_ACTIVE_POKEMON,
      payload: caughtPokemon,
    });
  });
});
