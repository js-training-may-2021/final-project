import { useDispatch, useSelector } from 'react-redux';

import classes from './ReleaseButton.module.scss';

const ReleaseButton = (props) => {

  const dispatch = useDispatch();

  const caughtPokemons = useSelector(store => store.catch.caughtPokemons);
  const isDisabled = caughtPokemons.findIndex(pokemon => pokemon.name === props.pokemon.name) === -1;

  const ReleaseHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'RELEASE_POKEMON', payload: props.pokemon });
  };


  return <button className={classes.btn} onClick={ReleaseHandler} disabled={isDisabled}>Release!</button>;
};

export default ReleaseButton;