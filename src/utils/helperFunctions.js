export const getPokemonId = (pokemonUrl) => {
  let copyUrl = pokemonUrl;
  copyUrl = copyUrl.slice(0, copyUrl.length - 1);
  return +copyUrl.slice(copyUrl.lastIndexOf('/') + 1);
};