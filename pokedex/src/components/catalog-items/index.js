import SmallCard from "../small-card";
import { checkStatus, getPortion, findCommonItems } from '../../utils';
import { MAX_ITEMS_IN_PORTION } from '../../constants';

//import CaughtPokemonsContext from "../../contexts/caught-pokemons";

const makeCardsMarkup = (data, caught, chosenPage = "6", catalogType) => {

  let copy = [...data];
console.log('copy on start ', copy);

if (catalogType === 'caught-only') {
    copy = findCommonItems(data, caught);
  }

  console.log('copy filtered/not filtered ', catalogType, copy);

  if (copy.length > MAX_ITEMS_IN_PORTION) {
    copy = getPortion(copy, chosenPage);
  }

  const markup = copy.map((item) => {
    const status = checkStatus(item.id, caught);
    return (
      <SmallCard title={item.name} id={item.id} isCaught={status} key={item.id} />
    );
  });

  return markup;
};

const CatalogItems = (props) => makeCardsMarkup(props.data, props.caught, props.chosenPage, props.catalogType);

export default CatalogItems;