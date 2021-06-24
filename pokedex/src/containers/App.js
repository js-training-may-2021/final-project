import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonsActions from '../actions/pokemons';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (pokemons, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(pokemons, 'price', 'desc');
    case 'price_low':
      return orderBy(pokemons, 'price', 'asc');
    case 'author':
      return orderBy(pokemons, 'author', 'asc');
    default:
      return pokemons;
  }
};

const filterPokemons = (pokemons, searchQuery) =>
  pokemons.filter(
    o =>
      o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0      
  );

const searchPokemons = (pokemons, filterBy, searchQuery) => {
  return sortBy(filterPokemons(pokemons, searchQuery), filterBy);
};

const mapStateToProps = ({ pokemons, filter }) => ({
  pokemons: pokemons.items && searchPokemons(pokemons.items, filter.filterBy, filter.searchQuery),
  isReady: pokemons.isReady,
  pageSize: pokemons.pageSize,
  totalPokemonsCount: pokemons.totalPokemonsCount,
  currentPage: pokemons.currentPage
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(pokemonsActions, dispatch),
  setCurrentPage: (pageNumber) => {

  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
