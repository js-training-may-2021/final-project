import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.main}>
        <div>
            <img className={classes.icon} alt='logo'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBr-npuA5hJrVOOaHcTGk_nRlFaFXtCCNZg&usqp=CAU"></img>
        </div>
        <h4 className={classes.title}>POKEDEX</h4>
        <ul className={classes.menu}>
            <li className={classes.item}>
                <NavLink className={classes.link} to='/' exact>
                    Pokemon Wiki
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink className={classes.link} to='/caught'>
                    Caught pokemons
                </NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar