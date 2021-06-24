import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as backpackActions from '../actions/backpack';
import PokemonCard from '../components/PokemonCard';

const mapStateToProps = ({ backpack }, { id }) => ({
  addedCount: backpack.items.reduce((count, pokemon) => count + (pokemon.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(backpackActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonCard);
