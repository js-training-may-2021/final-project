import React, { Component } from "react";

import LargeCard from "../../components/large-card";
import BackLink from '../../components/back-link';

import CaughtPokemonsContext from "../../contexts/caught-pokemons";
//import ChosenPageContext from "../../contexts/chosen-page";
class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caught: this.props.caught,
      chosenPage: this.props.chosenPage,
      chosenTab: this.props.chosenTab,
      data: this.props.data
    };
  }

  render() {

    return (
      <>
        <CaughtPokemonsContext.Consumer>
          {(c) => {
            return (
              <>
                <BackLink tab="/caught" />
                <LargeCard id="90" data={this.state.data} caught={c._currentValue2} />
              </>
            )
          }}
        </CaughtPokemonsContext.Consumer> 
     </> 
    );

  }
}

export default CardPage;