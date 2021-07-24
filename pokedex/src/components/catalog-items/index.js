import React, { Component, useContext } from 'react';
import { checkStatus, getPortion, findCommonItems } from '../../utils';
import { MAX_ITEMS_IN_PORTION } from '../../constants';
import SmallCard from '../small-card';
import ChosenPageContext from '../../contexts/chosen-page';
import ChosenTabContext from '../../contexts/chosen-tab';
import CaughtPokemonsContext from '../../contexts/caught-pokemons';

const makeCardsMarkup = (data, caught, chosenPage, catalogType) => {
  
  let copy = [...data];

  if (catalogType === '/caught') {
    copy = findCommonItems(data, caught);
  }

  if (copy.length > MAX_ITEMS_IN_PORTION) {
    copy = getPortion(copy, chosenPage);
  }

  const markup = copy.map((item) => {
    const status = checkStatus(item.id, caught);
    return (
      <SmallCard 
        title={item.name} 
        id={item.id} 
        isCaught={status} 
        key={item.id} />
    );
  });

  return markup;
};
/*
const CatalogItems = (props) => {
  
  const t = useContext(ChosenTabContext);
  const p = useContext(ChosenPageContext);
  const c = useContext(CaughtPokemonsContext);

  console.log(props.data, t._currentValue2, p._currentValue2, c._currentValue2);

  const markup = makeCardsMarkup(props.data, c._currentValue2, p._currentValue2, t._currentValue2);
  return markup;
};

*/
class CatalogItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ChosenPageContext._currentValue2,
      catalogType: ChosenTabContext._currentValue2,
      caught: CaughtPokemonsContext._currentValue2,
      data: this.props.data
    };
  }

  render() {

          const markup = makeCardsMarkup(this.state.data, this.state.caught, this.state.page, this.state.catalogType);
          return markup;
  }

}

export default CatalogItems;