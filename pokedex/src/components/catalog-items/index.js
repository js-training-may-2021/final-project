import SmallCard from "../small-card";
import { checkStatus, getPortion } from '../../utils';
import { MAX_ITEMS_IN_PORTION } from '../../constants';

//import CaughtPokemonsContext from "../../contexts/caught-pokemons";

const makeCardsMarkup = (data, caught, chosenPage = "15") => {

  let copy = [];
  data.forEach((item) => copy.push(item));

  console.log('it is copy!');

  if (copy.length > MAX_ITEMS_IN_PORTION) {
    copy = getPortion(copy, chosenPage);
  }

  console.log(copy);

  const markup = copy.map((item) => {
    const status = checkStatus(item, caught);
    return (
      <SmallCard title={item.name} id={item.id} isCaught={status} key={item.id} />
    );
  });

  return markup;
/*
  copy.map((item) => {
    const status = checkStatus(item, caught);
    return (
      <SmallCard title={item.name} id={item.id} isCaught={status} key={item.id}></SmallCard>
    );
  })
*/

  //return (<SmallCard title={data[3].name} id={data[3].id} key={data[3].id}></SmallCard>)

};

const CatalogItems = (props) => makeCardsMarkup(props.data, props.caught, props.chosenPage);

export default CatalogItems;