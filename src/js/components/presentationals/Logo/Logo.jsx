import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../utils';
import './logo.scss';

const Logo = () => {
  return (    
    <div className="logo">
      <Link className="logo__link" to={AppRoute.MAIN}>POKEDEX</Link>
    </div>
  );
};

export default React.memo(Logo);