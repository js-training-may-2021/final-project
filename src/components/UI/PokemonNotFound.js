import classes from './PokemonNotFound.module.css';

import { Link } from 'react-router-dom';

const PokemonNotFound = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Such pokemon does not exist</p>
      <Link to='/home' className={classes.btn}>Go back &larr;</Link>
    </div>
  );
};

export default PokemonNotFound;