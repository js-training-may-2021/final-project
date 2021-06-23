// import React from "react";
// import Card from "./Card";
// import { connect } from "react-redux";
// import { caughtAC, setPokemonsAC } from "../../redux/pokemonList-reducer";

// let mapStateToProps = (state) => {
//     return {
//         pokemons: state.pokemonListPage.pokemons
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         caught: (pokemonID) => {
//             dispatch(caughtAC(pokemonID));
//         },
//         setPokemons: (pokemons) => {
//             dispatch(setPokemonsAC(pokemons));
//         },
//     }
    
// }

// export default connect (mapStateToProps, mapDispatchToProps) (Card);