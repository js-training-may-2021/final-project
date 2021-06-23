export const CATCH_POKEMON = "CATCH_POKEMON";
export const RELEASE_POKEMON = "RELEASE_POKEMON";

export const catchPokemonAction = (pokemon) => ({
  type: CATCH_POKEMON,
  payload: pokemon,
});

export const releasePokemonAction = (pokemon) => ({ 
  type: RELEASE_POKEMON,
	payload: pokemon,
});
