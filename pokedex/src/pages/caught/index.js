import React, { Component } from "react";

import Catalog from "../../components/catalog";
import CatalogItems from "../../components/catalog-items";
import Pagination from "../../components/pagination";

import CaughtPokemonsContext from "../../contexts/caught-pokemons";

//import ChosenCardContext from "../../contexts/chosen-card";
//import ChosenTabContext from "../../contexts/chosen-tab";
import ChosenPageContext from "../../contexts/chosen-page";

/* const getDataFromContext = () => {
  const caughtArray = React.useContext(CaughtPokemonsContext);
          console.log(caughtArray);
          return caughtArray;

};
*/

console.log('this is caught context on low level! ', CaughtPokemonsContext);
//console.log('this is card-id context! ', ChosenCardContext);
//console.log('this is tab context! ', ChosenTabContext);
//console.log('this is page context on high level! ', ChosenPageContext);

class CaughtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caught: this.props.caught,
      //caught: CaughtPokemonsContext,
      chosenPage: this.props.chosenPage,
      //chosenPage: ChosenPageContext,
      chosenTab: this.props.chosenTab,
      data: this.props.data,
    };
  }

  render() {
    console.log(this.props);



    /*return (
      <>
        <CaughtPokemonsContext.Provider value={this.state.caught}>
          <ChosenPageContext.Provider value={this.state.chosenPage}>
            <h3>Всего поймано покемонов: {quantity}</h3> 
            <Catalog>
              <CatalogItems data={this.props.data} caught={this.props.caught} chosenPage={this.props.chosenPage} catalogType={this.props.chosenTab} />
              <Pagination len={len} chosenPage={this.props.chosenPage} />            
            </Catalog>
          </ChosenPageContext.Provider>
        </CaughtPokemonsContext.Provider>   
      </>
    );*/

    return (
<>
<ChosenPageContext.Consumer>
                  {(p) => {
return (
  <CaughtPokemonsContext.Consumer>
        {(c) => {
          

          const quantity = c._currentValue2.length;
          const len = Math.ceil(quantity / 12);
          console.log('caught page: ', c._currentValue2, this.props);
console.log(p._currentValue2, c._currentValue2);
          return (
            <>
              <h3>Всего поймано покемонов: {quantity}</h3> 
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

/*
    return (

          <>
        <h3>Всего поймано покемонов: {quantity}</h3> 
          <Catalog>
            <CatalogItems data={this.props.data} caught={this.props.caught} chosenPage={this.props.chosenPage} catalogType={this.props.chosenTab} />
            <Pagination len={len} chosenPage={this.props.chosenPage} />            
          </Catalog>
          </>
  
    );
*/
  }
}

export default CaughtPage;