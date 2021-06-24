// import React from 'react';
import {connect} from 'react-redux';
import Catched from './catched';

let mapStateToProps = (state) => {
    return {
        pokemons: state.allData.allData.catched.catchedPokemons,
        images: state.allData.allData.images
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Catched);

export default MainContainer;