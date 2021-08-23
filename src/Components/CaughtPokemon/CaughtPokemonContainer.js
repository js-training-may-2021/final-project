import React from "react";
import { connect } from "react-redux";
import { catchIt, letgo, setPokemons } from "../../redux/pokemonList-reducer";
import CaughtPokemon from './CaughtPokemon';
// import { setTotalCaughtPokemonsCount, setCurrentPageCaught } from "../../redux/caughtPokemon-reducer";
 


class CaughtPokemonContainer extends React.Component {

  componentDidMount() {
    this.props.setPokemons(this.props.pokemons);

    // let caughtPokemonsCount = 0;
    // for (let pokemon of this.props.pokemons) {
    //   if (pokemon.isCaught) {
    //     caughtPokemonsCount += 1;
    //   }
    // }
    // this.props.setTotalCaughtPokemonsCount(caughtPokemonsCount);
 
  } 

  // onPageChangedCaught = (pageNumber) => {
  //   this.props.setCurrentPageCaught(pageNumber);
  // }

  render() {
    return (
        <CaughtPokemon 
          // totalPokemonsCount={this.props.totalPokemonsCount}
          // pageSize={this.props.pageSize}
          // currentPageCaught={this.props.currentPageCaught}
          // onPageChangedCaught={this.onPageChangedCaught}
          // totalCaughtPokemonsCount={this.props.totalCaughtPokemonsCount}
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
        // pageSize: state.pokemonListPage.pageSize,
        // totalPokemonsCount: state.pokemonListPage.totalPokemonsCount,
        // currentPageCaught: state.caughtPokemon.currentPageCaught,
        // totalCaughtPokemonsCount: state.caughtPokemon.totalCaughtPokemonsCount
        
        //берем лишь то что нужно компоненте
        //чтоб не перерисовывался лишний раз стейт

    }
}


export default connect (mapStateToProps, 
    { catchIt, letgo, setPokemons, 
      // setCurrentPageCaught, setTotalCaughtPokemonsCount 
    }) (CaughtPokemonContainer);