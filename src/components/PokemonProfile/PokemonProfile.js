import classes from './PokemonProfile.module.scss';
import Card from '../UI/Card';

const PokemonProfile = (props) => {

  return (
    <div className={classes.container}>
      <Card>
        <div className={classes["inner-card"]}>
          <h2 className={classes.heading}>{props.pokemon.name}</h2>
          <div className={classes["text-block"]}>
            <p>Id: {props.pokemon.id}</p>
            <p>{props.pokemon.isСaught ? `Сaught on ${props.pokemon.captureDate}` : `Not caught`}</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes["inner-card"]}>
          <img className={classes.img} src={props.pokemon.img} alt={props.pokemon.name} />
        </div>
      </Card>
    </div>
  );
};

export default PokemonProfile;