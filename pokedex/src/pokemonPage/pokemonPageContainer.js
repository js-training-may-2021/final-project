// import React from 'react';
import {connect} from 'react-redux';
import PokemonPage from './pokemonPage';

let mapStateToProps = (state) => {
    return {
        pokemons: state.allData.allData.data.pokemons,
        images: state.allData.allData.images
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonPage);

export default MainContainer;