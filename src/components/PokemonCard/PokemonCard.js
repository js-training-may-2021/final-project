import { useSelector, useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './PokemonCard.module.css';
import store from '../../store';

// if pokemon is catched, then btn is disabled

const PokemonCard = (props) => {

  const catchedPokemons = useSelector(state => state.catchedPokemons);

  const dispatch = useDispatch();

  const catchHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_POKEMON', pokemonId: props.name });
    console.log(catchedPokemons);
  };

  return (
    <Card className={classes.pokemonCard}>
      <div className={classes.innerCard}>
        <div className={classes.imgContainer}>
          <img src={props.img} alt="img" />
        </div>
        <h2 className={classes.cardHeading}>{props.name}</h2>
        <button className={classes.cardBtn} onClick={catchHandler} disabled={catchedPokemons.includes(props.name)}>Catch!</button>
      </div>
    </Card>
  );
};

export default PokemonCard;