import React, { Component } from 'react';
import Catalog from '../../containers/catalog';
import CatalogItems from '../../components/catalog-items';
import Pagination from '../../components/pagination';
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {

    const quantity = this.state.data.length;

    return (    
        <>
          <h3>Всего покемонов: {quantity}</h3>
            <Catalog>
              <CatalogItems data={this.state.data} />
              <Pagination data={this.state.data} />
            </Catalog>
        </>
    );

  }
}

export default HomePage;