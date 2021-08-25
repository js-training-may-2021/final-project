import React from 'react';
import { connect } from 'react-redux';
import { catchPokemon } from '../store/actions/pokemonActions';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../index.css';

class PokemonCard extends React.Component {
    catchPokemon = () => {
        //console.log('catch ', this.props.pokemon.id);
        this.props.catchPokemon(this.props.pokemon.id);
    }
    render() {
        const { name, id } = this.props.pokemon;
        const isCatched = Boolean(this.props.catchedPokemons.filter(item => item.id === id).length);
        let imgUrl = "";
        try {
            imgUrl = require(`../images/pokemons/${id}.png`);
        } catch (err) {
            imgUrl = require("../images/pokemons/1.png");
        }

        return (
            
                <div className="pokemon__item">
                    <Link to={ "/pokemon/"+ id }>
                        <div>
                            <img src={ imgUrl.default } className="pokemon__item_img" alt={ name }/>
                        </div>
                        <div className="pokemon__item_txt">
                            <p> { name } </p>
                        </div>
                    </Link>
                    <button className="pokemon__item_catch"
                    onClick={ !isCatched ? this.catchPokemon : () => {} }
                    disabled={ isCatched ? true : false }>
                        Catch
                    </button>
                </div>       
        );
    }
}

const mapStateToProps = state => {
    return {
        catchedPokemons: state.catchedPokemons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        catchPokemon: (id) => {
            catchPokemon(dispatch, id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
