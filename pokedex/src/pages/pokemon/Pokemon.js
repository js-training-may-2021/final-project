import React from "react";
import { Redirect } from "react-router-dom";
import imgLinks from "../../pokemons/imgLinks";
import styles from "./pokemon.module.css";

export default function Pokemon(props) {
  if (!props.location.propsSearch) {
    return <Redirect to="/main" />;
  }
  let status = "didn`t catch";
  let time = "";
  let pok = props.location.propsSearch.pokemon;

  if (pok.caught) {
    status = "caught";
    time = `Time: ${pok.time}`;
  }

  return (
    <div className={`${styles.pokemon_wrapper}`}>
      <img
        src={imgLinks[pok.id]}
        className={`${styles.pokemon_img}`}
        alt="pokemon"
      ></img>
      <div className={`${styles.pokemon_info}`}>
        <h1 className={`${styles.pokemon_title}`}>Pokemon: {pok.name}</h1>
        <p className={`${styles.pokemon_text} card-text`} >Status: {status}</p>
        <p className={`${styles.pokemon_text} card-text`} >{time}</p>
      </div>
    </div>
  );
}
