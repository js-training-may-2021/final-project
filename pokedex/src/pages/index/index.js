import React, { Component } from "react";

import Catalog from "../../containers/catalog";
import CatalogItems from "../../components/catalog-items";
import Pagination from "../../components/pagination";

import CaughtPokemonsContext from "../../contexts/caught-pokemons";
import ChosenTabContext from "../../contexts/chosen-tab";
import ChosenPageContext from "../../contexts/chosen-page";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caught: this.props.caught,
      chosenPage: ChosenPageContext,
      chosenTab: this.props.chosenTab,
      data: this.props.data,
    };
  }

  render() {

    return (    
        <>
          <ChosenPageContext.Consumer>
            {(p) => {
              return (
                <CaughtPokemonsContext.Consumer>
                  {(c) => {
                    const quantity = this.props.data.length;
                    const len = Math.ceil(quantity / 12);
                    return (
                      <>
                        <h3>Всего покемонов: {quantity}</h3>
                        <Catalog>
                          <CatalogItems data={this.props.data} caught={c._currentValue2} chosenPage={p._currentValue2} catalogType={this.props.chosenTab} />
                          <Pagination len={len} chosenPage={p._currentValue2} />
                        </Catalog>
                      </> 
                    )
                  }}
                  </CaughtPokemonsContext.Consumer>  
                )
            }}
          </ChosenPageContext.Consumer>
        </> 
    );

  }
}

export default HomePage;