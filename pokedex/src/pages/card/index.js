import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LargeCard from '../../components/large-card';
import BackLink from '../../components/back-link';
import CaughtPokemonsContext from '../../contexts/caught-pokemons';
class CardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      id: this.props.location.id,
      caught: CaughtPokemonsContext._currentValue2
    };
  }

  render() {
    return (
      <>
        <BackLink />
        <LargeCard data={this.state.data} caught={this.state.caught} id={this.state.id} />
      </>
    );
  }

}

export default withRouter(CardPage);