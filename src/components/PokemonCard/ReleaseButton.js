import { useDispatch, useSelector } from 'react-redux';

import classes from './ReleaseButton.module.css';

const ReleaseButton = (props) => {

  const dispatch = useDispatch();

  const catchedPokemons = useSelector(store => store.catch.catchedPokemons);
  const isDisabled = catchedPokemons.findIndex(pokemon => pokemon.name === props.pokemon.name) === -1;

  const ReleaseHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'RELEASE_POKEMON', payload: props.pokemon });
    console.log(props.pokemon.name, ' is deleted');
  };


  return <button className={classes.btn} onClick={ReleaseHandler} disabled={isDisabled}>Release!</button>;
};

export default ReleaseButton;