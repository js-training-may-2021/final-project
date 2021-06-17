import React, { Component } from "react";

import Catalog from "../../components/catalog";
import CatalogItems from "../../components/catalog-items";
import Pagination from "../../components/pagination";

import CaughtPokemonsContext from "../../contexts/caught-pokemons";
import ChosenCardContext from "../../contexts/chosen-card";
import ChosenTabContext from "../../contexts/chosen-tab";
import ChosenPageContext from "../../contexts/chosen-page";

//import AllPokemonsContext from "../../contexts/all-pokemons";
//import CaughtPokemonsContext from "../../contexts/caught-pokemons";
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caught: this.props.caught,
      chosenPage: this.props.chosenPage,
      chosenTab: this.props.chosenTab,
      data: this.props.data,
    };
  }

  render() {

    

    /*return (
      <>
        <h3>Всего покемонов: {quantity}</h3>
          <Catalog>
            <CatalogItems data={this.props.data} caught={this.props.caught} chosenPage={this.props.chosenPage} catalogType={this.props.chosenTab} />
            <Pagination len={len} chosenPage={this.props.chosenPage} />
          </Catalog>
      </>
    );
    */

    

    return (
     
        <>
<ChosenPageContext.Consumer>
                          {(p) => {
                            return (


        <CaughtPokemonsContext.Consumer>
            {(c) => {
              const quantity = this.props.data.length;
              const len = Math.ceil(quantity / 12);
              console.log(this.props);

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
                          }
}
                        </ChosenPageContext.Consumer>
        </> 
    );

  }
}

export default HomePage;