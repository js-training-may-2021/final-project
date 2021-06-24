import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as backpackActions from '../actions/backpack';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ backpack }) => ({
  totalPrice: backpack.items.reduce((total, pokemon) => total + pokemon.price, 0),
  count: backpack.items.length,
  items: uniqBy(backpack.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(backpackActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
