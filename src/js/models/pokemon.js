export default class Pokemon {
  constructor(data) {
    this.id = data['id'];
    this.name = data['name'];
    this.isCaught = data['isCaught'] || false;
    this.catchDate = data['catchDate'] || null;
  }

  static parsePokemon(data) {
    return new Pokemon(data);
  }

  static parsePokemons(data) {
    return data.map(Pokemon.parsePokemon);
  }
}
