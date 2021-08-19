import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.main}>
        <div>
            <img className={classes.icon} alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBr-npuA5hJrVOOaHcTGk_nRlFaFXtCCNZg&usqp=CAU"/>
        </div>
        <h4 className={classes.title}>POKEDEX</h4>
        <ul className={classes.menu}>
            <li className={classes.item}>
                <NavLink className={classes.link} to='/' exact>
                    POKEMON WIKI
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink className={classes.link} to='/caught'>
                    CAUGHT POKEMONS
                </NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar