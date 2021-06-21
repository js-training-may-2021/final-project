import { useDispatch, useSelector } from 'react-redux';

import classes from "./CatchButton.module.css";

const CatchButton = (props) => {

  const catchedPokemons = useSelector(store => store.catch.catchedPokemons);
  const isDisabled = catchedPokemons.findIndex(pokemon => pokemon.name === props.pokemon.name) > -1;

  const dispatch = useDispatch();

  const catchHandler = (event) => {
    event.preventDefault();
    const captureDate = new Date();
    const pokemonObj = { ...props.pokemon, isСaught: true, captureDate: captureDate };
    dispatch({ type: 'CATCH_POKEMON', payload: pokemonObj });
  };

  return <button className={classes.btn} onClick={catchHandler} disabled={isDisabled}>Catch!</button>;
};

export default CatchButton;