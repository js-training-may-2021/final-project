export default class Pokemon {
  constructor(data) {
    this.id = data['id'];
    this.name = data['name'];
    this.isCaught = false;
    this.catchDate = null;
  }

  static parsePokemon(data) {
    return new Pokemon(data);
  }

  static parsePokemons(data) {
    return data.map(Pokemon.parsePokemon);
  }
}
