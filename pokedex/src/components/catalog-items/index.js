import { checkStatus, getPortion, findCommonItems } from '../../utils';
import SmallCard from '../small-card';
import { MAX_ITEMS_IN_PORTION } from '../../constants';

const makeCardsMarkup = (data, caught, chosenPage = 1, catalogType) => {
  
  let copy = [...data];

  if (catalogType === 'caught-only') {
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

const CatalogItems = (props) => {
  const markup = makeCardsMarkup(props.data, props.caught, props.chosenPage, props.catalogType);
  return markup;
};

export default CatalogItems;