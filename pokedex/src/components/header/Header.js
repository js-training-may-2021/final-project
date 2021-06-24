import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css';


export default function Header() {
  return (
    <>
      <nav className="header">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className={`${styles.link} nav-link`} to="/main">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`${styles.link} nav-link`} to="/caught">
              Caught
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={`${styles.header}`}>Pokedex</h1>
    </>
  );
}
