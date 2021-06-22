import React, {Component, Fragment} from 'react';
import PokemonCard from '../pokemon-card/pokemon-card';
import './app.css';
import PokemonApi from '../api/api';
import Header from '../header/header';
import Paginator from '../paginator/paginator'

export default class App extends Component {
  state = {
    loading: true,
    pokemons: [],
    currentPage: 1,
  }

  async componentDidMount() {
    const pokemonApi = new PokemonApi();
    const pokemons = await pokemonApi.getPokemons(this.state.currentPage);
    this.setState({
      loading: false,
      pokemons: pokemons,
    });
  }

  async componentDidUpdate() {
    const pokemonApi = new PokemonApi();
    const pokemons = await pokemonApi.getPokemons(this.state.currentPage);
    this.setState({
      loading: false,
      pokemons: pokemons,
    });
  }

  next = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  prev = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      })
    }
  }

  render() {
    return (
      <>
        <Header/>
        <Paginator next={this.next} prev={this.prev}/>
        <div className="app d-flex flex-wrap justify-content-center">
          {this.state.loading ? <h2>Loading...</h2> : this.state.pokemons.map(pokemon => {
            return <PokemonCard name={pokemon.name} id={pokemon.id} key={pokemon.id}/>
          })}
        </div>
        <Paginator next={this.next} prev={this.prev}/>
      </>
    )
  }
}