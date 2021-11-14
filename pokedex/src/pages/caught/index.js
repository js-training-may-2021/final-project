import React, { Component } from 'react';
import Catalog from '../../containers/catalog';
import CatalogItems from '../../components/catalog-items';
import Pagination from '../../components/pagination';
import CaughtPokemonsContext from '../../contexts/caught-pokemons';
class CaughtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      caught: CaughtPokemonsContext._currentValue2
    };
  }

  render() {
  
    const quantity = this.state.caught.length;
    
    return (
      <>
        <h3>Всего поймано покемонов: {quantity}</h3> 
          <Catalog>
            <CatalogItems data={this.state.data} />
            <Pagination data={this.state.caught} />
          </Catalog>
      </>
    );

  }
}

export default CaughtPage;