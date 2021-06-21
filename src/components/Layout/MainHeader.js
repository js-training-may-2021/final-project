import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navList}>
          <li>
            <NavLink to='/home' className={classes.navLink} activeClassName={classes.activeNavLink}>
              All Pokemons
            </NavLink>
          </li>
          <li>
            <NavLink to='/my-pokemons' className={classes.navLink} activeClassName={classes.activeNavLink} >
              My Pokemons
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;