import { useSelector, useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './PokemonCard.module.css';

const PokemonCard = (props) => {

  const catchedPokemons = useSelector(store => store.catch.catchedPokemons);

  const dispatch = useDispatch();

  const catchHandler = (event) => {
    event.preventDefault();
    const captureDate = new Date();
    const pokemonObj = { ...props.pokemon, isСaught: true, captureDate: captureDate };
    dispatch({ type: 'ADD_POKEMON', pokemonObj: pokemonObj });
  };

  return (
    <Card className={classes.pokemonCard}>
      <div className={classes.innerCard}>
        <img className={classes.cardImg} src={props.pokemon.img} alt={props.pokemon.name} />
        <h2 className={classes.cardHeading}>{props.pokemon.name}</h2>
        <button className={classes.cardBtn} onClick={catchHandler} disabled={catchedPokemons.findIndex(pokemon => pokemon.name === props.pokemon.name) > -1}>Catch!</button>
      </div>
    </Card>
  );
};

export default PokemonCard;