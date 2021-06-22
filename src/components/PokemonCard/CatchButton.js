import { useDispatch, useSelector } from 'react-redux';

import classes from "./CatchButton.module.css";

const CatchButton = (props) => {

  const caughtPokemons = useSelector(store => store.catch.caughtPokemons);
  const isDisabled = caughtPokemons.findIndex(pokemon => pokemon.name === props.pokemon.name) > -1;

  const dispatch = useDispatch();

  const catchHandler = (event) => {
    event.preventDefault();
    const captureDate = new Date().toDateString();
    const pokemonObj = { ...props.pokemon, isСaught: true, captureDate: captureDate };
    dispatch({ type: 'CATCH_POKEMON', payload: pokemonObj });
  };

  return <button className={classes.btn} onClick={catchHandler} disabled={isDisabled}>Catch!</button>;
};

export default CatchButton;