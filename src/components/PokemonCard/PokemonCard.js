import Card from '../UI/Card';
import classes from './PokemonCard.module.css';

const PokemonCard = (props) => {

  return (
    <Card>
      <div className={classes.innerCard}>
        <img className={classes.cardImg} src={props.pokemon.img} alt={props.pokemon.name} />
        <h2 className={classes.cardHeading}>{props.pokemon.name}</h2>
        {props.children}
      </div>
    </Card>
  );
};

export default PokemonCard;