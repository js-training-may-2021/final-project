import React from 'react';
import PokemonCard from './PokemonCard';
import Pageing from './Pageing';
import { connect } from 'react-redux';
import { initPokemon } from '../store/actions/pokemonActions';
import '../index.css';

class PokemonsList extends React.Component { 
    
    componentDidMount() {
        if(this.props.onlyCatched === "true") {
            this.props.initPokemon(this.props.limit, this.props.catchedPokemons);
        } else {
            this.props.initPokemon(this.props.limit);
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initPokemon: (limit, catchedPokemons) => {
            initPokemon(dispatch, limit, catchedPokemons)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
