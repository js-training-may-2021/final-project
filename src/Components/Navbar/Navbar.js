import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" >Pokedex</NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Pokemon List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/caughtpokemon">Caught Pokemon</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;