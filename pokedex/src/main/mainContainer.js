// import React from 'react';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/reducer';
import Main from './main';

let mapStateToProps = (state) => {
    return {
        pokemons: state.allData.allData.data.pokemons,
        images: state.allData.allData.images
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toCatch: (event) => {
            dispatch(actionCreator(event));
        },
        // setPokemons: (pokemons, images) => {
        //     dispatch(setPokemonsActionCreator(pokemons, images));
        // }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;