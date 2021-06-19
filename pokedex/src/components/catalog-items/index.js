//import React from "react";

import SmallCard from "../small-card";
import { checkStatus, getPortion, findCommonItems } from '../../utils';
import { MAX_ITEMS_IN_PORTION } from '../../constants';
//const AppContext = React.createContext();

//import CaughtPokemonsContext from "../../contexts/caught-pokemons";
//import ChosenCardContext from "../../contexts/chosen-card";
//import ChosenTabContext from "../../contexts/chosen-tab";
//import ChosenPageContext from "../../contexts/chosen-page";

const makeCardsMarkup = (data, caught, chosenPage = 1, catalogType) => {
  
  let copy = [...data];

  //console.log('copy while cards rendering 1: ', copy);

  if (catalogType === 'caught-only') {
      copy = findCommonItems(data, caught);
  }

  //console.log('copy while cards rendering 2: ', copy);

  if (copy.length > MAX_ITEMS_IN_PORTION) {
    copy = getPortion(copy, chosenPage);
  }

  //console.log('copy while cards rendering 3: ', copy);

  const markup = copy.map((item) => {
    const status = checkStatus(item.id, caught);
    return (
      <SmallCard title={item.name} id={item.id} isCaught={status} key={item.id} />
    );
  });

  return markup;
};


const CatalogItems = (props) => {
  const markup = makeCardsMarkup(props.data, props.caught, props.chosenPage, props.catalogType);
  return markup;
};

/*
const CatalogItems = (props) => {
  return <SmallCard title={props.data[4].name} id={props.data[4].id} isCaught="null" key={props.data[4].id} />
};
*/

//const CatalogItems = (props) => makeCardsMarkup(props.data, props.caught, props.chosenPage, props.catalogType);

/*
const CatalogItems = (props) => (
    <CaughtPokemonsContext.Consumer>
      {(context) => {
        let markup = makeCardsMarkup(props.data, context._currentValue2, props.chosenPage, props.catalogType);
        return markup;
        }
      }
    </CaughtPokemonsContext.Consumer>
);
*/

export default CatalogItems;