import React from 'react';
import PokemonCard from './PokemonCard';
import Pageing from './Pageing';
import { connect } from 'react-redux';
import { initPokemon, getPokemons } from '../store/actions/pokemonActions';
import '../index.css';

class PokemonsList extends React.Component { 
    
    componentDidMount() {
        if(this.props.onlyCatched === "true") {
            if (this.props.totalCount !== 0) {
                this.props.getPokemons(0, this.props.limit, this.props.catchedPokemons, this.props.totalCount);
            } else {
                this.props.initPokemon(this.props.limit, this.props.catchedPokemons);
            }
        } else {
            if (this.props.totalCount !== 0) {
                this.props.getPokemons(0, this.props.limit, undefined, this.props.totalCount);
            } else {
                this.props.initPokemon(this.props.limit);
            }
        }
    }

    render() {
        return (
            <>
                <div className="pokemon__list">
                    { this.props.pokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />) } 
                </div>
                <Pageing onlyCatched={ this.props.onlyCatched }></Pageing>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
        limit: state.limit,
        catchedPokemons: state.catchedPokemons,
        totalCount: state.totalCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initPokemon: (limit, catchedPokemons) => {
            initPokemon(dispatch, limit, catchedPokemons)
        },
        getPokemons: (offset, limit, catchedPokemons, totalCount) => {
            getPokemons(dispatch, offset, limit, catchedPokemons, totalCount)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
