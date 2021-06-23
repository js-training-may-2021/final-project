import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/pokemons/default.jpg";
import "./nav-bar-menu.css";

const NavBarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="d-flex navbar-brand" to="/">
          <h2>
            P<img src={logo} alt="logo" width="30" height="30" />
            kedex
          </h2>
        </NavLink>       
        <NavLink className="d-flex navbar-brand" to="/collection">
          <h2>
            С<img src={logo} alt="logo" width="30" height="30" />
            llecti
            <img src={logo} alt="logo" width="30" height="30" />n
          </h2>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBarMenu;
