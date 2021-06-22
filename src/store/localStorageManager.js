export const loadState = () => {
  try {
    const storedСaughtPokemons = localStorage.getItem('caughtPokemons');
    if (storedСaughtPokemons === null) {
      return [];
    }
    return JSON.parse(storedСaughtPokemons);
  } catch (err) {
    return [];
  }
};

export const saveState = (state) => {
  try {
    const storedСaughtPokemons = JSON.stringify(state);
    localStorage.setItem('caughtPokemons', storedСaughtPokemons);
  } catch (err) {
    console.error(err.message);
  }
}