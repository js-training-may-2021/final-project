import Card from '../UI/Card';
import classes from './PokemonCard.module.scss';

const PokemonCard = (props) => {

  return (
    <Card>
      <div className={classes["inner-card"]}>
        <img className={classes.img} src={props.pokemon.img} alt={props.pokemon.name} />
        <h2 className={classes.heading}>{props.pokemon.name}</h2>
        {props.children}
      </div>
    </Card>
  );
};

export default PokemonCard;