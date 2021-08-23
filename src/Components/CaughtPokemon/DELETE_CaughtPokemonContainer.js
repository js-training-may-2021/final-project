import React from "react";
import { connect } from "react-redux";
import { c_catchIt, c_letgo, c_setPokemons, c_setCurrentPage } from "../../redux/caughtPokemon-reducer";
import axios from "axios";
// import './../PokemonList/PokemonList.css';
import CaughtPokemon from './CaughtPokemon';
 
class CaughtPokemonContainer extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:8000/pokemons/`)
      .then(response => {
        this.props.c_setPokemons(response.data);
        console.log(response);
        // this.props.setTotalPokemonsCount(response.data.length);
      });
  } 
  onPageChanged = (pageNumber) => {
    this.props.c_setCurrentPage(pageNumber);
    axios.get(`http://localhost:8000/pokemons/`)
      .then(response => {
        this.props.c_setPokemons(response.data);
      });
  }
  render() {
    return (
        <CaughtPokemon 
          totalPokemonsCount={this.props.totalPokemonsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          pokemons={this.props.pokemons}
          onPageChanged={this.onPageChanged}
          c_catchIt={this.props.c_catchIt}
          c_letgo={this.props.c_letgo}
          

          />
    )
  }
}
 

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListPage.pokemons,
        pageSize: state.pokemonListPage.pageSize,
        totalPokemonsCount: state.pokemonListPage.totalPokemonsCount,
        currentPage: state.pokemonListPage.currentPage,
        //берем лишь то что нужно компоненте
        //чтоб не перерисовывался лишний раз стейт

    }
}


export default connect (mapStateToProps, 
    { c_catchIt, c_letgo, c_setPokemons, c_setCurrentPage }) (CaughtPokemonContainer);