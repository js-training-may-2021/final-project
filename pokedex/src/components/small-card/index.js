import Button from '../button';
//import CaughtPokemonsContext from "../../contexts/caught-pokemons";
import { CATCH_BTN_NAME_OFF, CATCH_BTN_NAME } from '../../constants';

const SmallCard = (props) => {

  const imgUrl = '../../images/' + props.id + '.png';
  const status = props.isCaught !== 'null';
  const btnText = !status ? CATCH_BTN_NAME : CATCH_BTN_NAME_OFF;
  const pageUrl = '/card';

  return (
    
    <div className="card-small">
      <a className="card-small-info" href={pageUrl}>
        <img src={imgUrl} className="card-small-picture" alt={props.title} />
        <p>{props.title}</p>
      </a>
        <Button 
        classNames="catch-button" 
        text={btnText} 
        isDisabled={status} 
        buttonType="catch-pokemon" 
        buttonId={props.id} 
        />
    </div>

  );
  
};

export default SmallCard;