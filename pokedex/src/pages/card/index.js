import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import LargeCard from "../../components/large-card";
import BackLink from '../../components/back-link';

import CaughtPokemonsContext from "../../contexts/caught-pokemons";
import ChosenTabContext from "../../contexts/chosen-tab";

class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caught: this.props.caught,
      chosenPage: this.props.chosenPage,
      chosenTab: this.props.chosenTab,
      data: this.props.data,
      id: this.props.location.id,
      tab: ChosenTabContext._currentValue2,
    };
  }

  render() {

    return (
      <>
        <CaughtPokemonsContext.Consumer>
          {(c) => {
            return (
              <>
                <BackLink tab={this.state.tab} />
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