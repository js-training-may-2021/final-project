import React from "react";
import { connect } from "react-redux";
import { catchIt, letgo, setPokemons } from "../../redux/pokemonList-reducer";
import CaughtPokemon from './CaughtPokemon';

class CaughtPokemonContainer extends React.Component {
  render() {
    return (
        <CaughtPokemon 
          catchIt={this.props.catchIt}
          letgo={this.props.letgo}
          pokemons={this.props.pokemons}
          />
    )
  }
}
let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListPage.pokemons,
    }
}


export default connect (mapStateToProps, 
    { catchIt, letgo, setPokemons, 
    }) (CaughtPokemonContainer);