import classes from './PokemonNotFound.module.scss';

import { Link } from 'react-router-dom';

const PokemonNotFound = () => {
  return (
    <>
      <p className={classes.text}>Such pokemon does not exist</p>
      <Link to='/home' className={classes.btn}>Go back &larr;</Link>
    </>
  );
};

export default PokemonNotFound;