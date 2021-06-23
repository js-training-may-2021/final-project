import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes["nav-list"]}>
          <li>
            <NavLink to='/home' className={classes["nav-link"]} activeClassName={classes["active-nav-link"]}>
              All Pokemons
            </NavLink>
          </li>
          <li>
            <NavLink to='/my-pokemons' className={classes["nav-link"]} activeClassName={classes["active-nav-link"]} >
              My Pokemons
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;