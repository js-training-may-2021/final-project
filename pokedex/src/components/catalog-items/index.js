import React, { Component } from 'react';
import { checkStatus, getPortion, findCommonItems } from '../../utils';
import SmallCard from '../small-card';
import { MAX_ITEMS_IN_PORTION } from '../../constants';
import ChosenPageContext from '../../contexts/chosen-page';
import ChosenTabContext from '../../contexts/chosen-tab';
import CaughtPokemonsContext from '../../contexts/caught-pokemons';

const makeCardsMarkup = (data, caught, chosenPage, catalogType/*, handler*/) => {
  
  let copy = [...data];

  if (catalogType === '/caught') {
    copy = findCommonItems(data, caught);
    console.log('common: ', chosenPage);
  }

  if (copy.length > MAX_ITEMS_IN_PORTION) {
    copy = getPortion(copy, chosenPage);
  }

  const markup = copy.map((item/*, handler*/) => {
    const status = checkStatus(item.id, caught);
    return (
      <SmallCard 
        title={item.name} 
        id={item.id} 
        isCaught={status} 
        /*handler={handler}*/
        key={item.id} />
    );
  });

  return markup;
};
class CatalogItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPage: ChosenPageContext._currentValue2,
      catalogType: ChosenTabContext._currentValue2,
      caught: CaughtPokemonsContext._currentValue2,
      data: this.props.data
    };
    //this.catchPokemon = this.catchPokemon.bind(this);
  }

  render() {
    console.log(this.state);
    const markup = makeCardsMarkup(this.state.data, this.state.caught, this.state.chosenPage, this.state.catalogType/*, this.catchPokemon*/);
    return markup;
  }
/*
  catchPokemon(evt, id) {
    evt.preventDefault();
    alert('Покемон ' + id + ' пойман!');
    const date = new Date().toDateString();
    const newValue = this.state.caught.push({isCaught: date, id: id});
    this.setState({caught: newValue});
    CaughtPokemonsContext._currentValue2.push(newValue);
  };*/
}

export default CatalogItems;