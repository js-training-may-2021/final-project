import React from "react";
import { connect } from "react-redux";
import { catchIt, letgo, setPokemons, setCurrentPage } from "../../redux/pokemonList-reducer";
import axios from "axios";
import './PokemonList.css';
import PokemonList from './PokemonList';
 
class PokemonListContainer extends React.Component {
// по умолчанию конструктор перебрасывает свое конструирование на
// react.component, поэтому удаляем

// constructor(props) {
//   super(props);
// }

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

  //метод
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
          catchIt={this.props.catchIt}
          letgo={this.props.letgo}
          

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
        //функция берез из стейта значения и передает в пропсы компаненты
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
// // функция 

export default connect (mapStateToProps, 
    { catchIt, letgo, setPokemons, setCurrentPage }) (PokemonListContainer);