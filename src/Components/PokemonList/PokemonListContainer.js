import React from "react";
import { connect } from "react-redux";
import { catchIt, letgo, setPokemons, setCurrentPage, setTotalPokemonsCount } from "../../redux/pokemonList-reducer";
import './PokemonList.css';
import PokemonList from './PokemonList';
import {getPokemons} from './../../api/api';
 
class PokemonListContainer extends React.Component {

// по умолчанию конструктор перебрасывает свое конструирование на
// react.component, поэтому удаляем
// constructor(props) {
//   super(props);
// }

//компонента монтируется один раз в страницу 
  componentDidMount() {
    getPokemons().then(response => {
        if (this.props.pokemons.length === 0) {
          this.props.setPokemons(response.data);
          this.props.setTotalPokemonsCount(response.data.length);
          // console.log(response.data.length);
        } 
      });
  }

  //метод
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
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
 

//mapStateToProps, mapDispatchToProps - функции, возвращающие объекты; 
//                                      их вызовет connect;
//mapStateToProps - передаем данные из стейта в пропсы
let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListPage.pokemons,
        pageSize: state.pokemonListPage.pageSize,
        totalPokemonsCount: state.pokemonListPage.totalPokemonsCount,
        currentPage: state.pokemonListPage.currentPage,
    }
}
// // mapDispatchToProps - возвращает объект, его свойства - колбэки

// let mapDispatchToProps = (dispatch) => {
//     return {
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
    { catchIt, letgo, setPokemons, setCurrentPage, setTotalPokemonsCount }) (PokemonListContainer);
    // экспортируем оборачивая в connect;
    // можем сократить код упростив mapDispatchToProps, так как connect делает это 
    // преобразование mapDispatchToProps и оборачивание в dispatch
    // можем упросить так как dispatch известен в коннекте и там сможет сам все сделать 

    // let name = 'Ivan';
    // let obj1 = { name: name };
    // let obj2 = { name };         // то же самое
