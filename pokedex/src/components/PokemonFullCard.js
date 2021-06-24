import React from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../store/actions/pokemonActions';
import '../index.css';

class PokemonFullCard extends React.Component {
    componentDidMount() {
        this.props.getPokemon(this.props.match.params.id);
    }
    render() {
       /*  const { name, id, isCatched } = this.props.pokemon;
        const imgUrl = `http://localhost:5000/pokemons/${id}.png`; */
         const { name, id, imgUrl } = this.props.pokemon;
        const isCatched = this.props.catchedPokemons.includes(this.props.match.params.id);
        
        return (
            
                 <div className="pokemon__item">
                    <p> { id } </p>
                    <div className="pokemon__item_img">
                        <img src={ imgUrl } />
                    </div>
                    <div className="pokemon__item_txt">
                            <p> { name } </p>
                    </div>
                    <div className="pokemon__item_iscatch">
                        Catched: <span>{isCatched}</span>
                    </div>
                </div>       
        );
    }
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        catchedPokemons: state.catchedPokemons
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
