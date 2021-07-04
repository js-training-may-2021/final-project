import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getPokemon } from '../store/actions/pokemonActions';
import PokemonCardView from './PokemonCardView';
import '../index.css';

const PokemonFullCard = (props) => {
    const params = useParams();   
    const pokemon = useSelector(state => state.pokemon);
    const catchedPokemons = useSelector(state => state.catchedPokemons);
    useEffect(() => {
        props.getPokemon(Number(params.id));
        if(!pokemon){
            return;   
        }
    }, [params, catchedPokemons])
        
    return <PokemonCardView pokemon={pokemon} catchedPokemons={catchedPokemons} />

}

const mapStateToProps = state => {
    return {
        /* pokemon: state.pokemon,
        catchedPokemons: state.catchedPokemons */
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPokemon: (id) => {
            getPokemon(dispatch, id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFullCard);
