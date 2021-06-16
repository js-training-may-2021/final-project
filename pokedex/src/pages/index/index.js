import React, { Component } from "react";

import Catalog from "../../components/catalog";
import CatalogItems from "../../components/catalog-items";
import Pagination from "../../components/pagination";

//import AllPokemonsContext from "../../contexts/all-pokemons";
//import CaughtPokemonsContext from "../../contexts/caught-pokemons";
class HomePage extends Component {

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
    const quantity = this.state.data.length;
    const len = Math.ceil(quantity / 12);

    return (
      <>
        <h3>Всего покемонов: {quantity}</h3>
          <Catalog>
     
          <CatalogItems data={this.state.data} caught={this.state.caught} chosenPage={this.state.chosenPage} catalogType={this.state.chosenTab} />
            <Pagination len={len} chosenPage={this.state.chosenPage} />
  
          </Catalog>
      </>
    );

  }
}

export default HomePage;