import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="header">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/main">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/caught">
              Caught
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/pokemon">
              Pokemon
            </Link>
          </li> */}
        </ul>
      </nav>
      <h1>Pokedex</h1>
    </>
  );
}
