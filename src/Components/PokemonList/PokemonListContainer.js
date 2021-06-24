import React from "react";
import { connect } from "react-redux";
import { caught, setPokemons, setCurrentPage } from "../../redux/pokemonList-reducer";
import axios from "axios";
import './PokemonList.css';
import PokemonList from './PokemonList';

class PokemonListContainer extends React.Component {

//метод жизненного цикла компоненты, 
//компонента монтируется один раз в страницу 
  componentDidMount() {
    axios.get(`http://localhost:8000/pokemons?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
      .then(response => {
        this.props.setPokemons(response.data);
        console.log(response);
        // this.props.setTotalPokemonsCount(response.data.length);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://localhost:8000/pokemons?_limit=${this.props.pageSize}&_page=${pageNumber}`)
      .then(response => {
        this.props.setPokemons(response.data);
      });
  }

  render() {
    return (
        <PokemonList 
          totalPokemonsCount={this.props.totalPokemonsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          pokemons={this.props.pokemons}
          onPageChanged={this.onPageChanged}
          

          />
    )
  }
}


let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListPage.pokemons,
        pageSize: state.pokemonListPage.pageSize,
        totalPokemonsCount: state.pokemonListPage.totalPokemonsCount,
        currentPage: state.pokemonListPage.currentPage,
        //берем лишь то что нужно компоненте
        //чтоб не перерисовывался лишний раз стейт

    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         caught: (pokemonID) => {
//             dispatch(caughtAC(pokemonID));
//         },
//         setPokemons: (pokemons) => {
//             dispatch(setPokemonsAC(pokemons));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         // setTotalPokemonsCount: (totalPokemonsCount) => {
//         //     dispatch(setTotalPokemonsCountAC(totalPokemonsCount));
//         // },
//     }
    
// }



export default connect (mapStateToProps, 
    { caught, setPokemons, setCurrentPage }) (PokemonListContainer);