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
      id: this.props.location.id
    };
  }

  render() {

    return (
      <>
        <CaughtPokemonsContext.Consumer>
        {(c) => {
          return (
            <>
              <BackLink />
              <LargeCard data={this.state.data} caught={c._currentValue2} id={this.state.id} />
            </>
          )
        }}
        </CaughtPokemonsContext.Consumer> 
     </> 
    );
  }

}

export default withRouter(CardPage);