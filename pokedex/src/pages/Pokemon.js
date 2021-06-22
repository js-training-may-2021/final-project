import React from "react";
import { Redirect } from "react-router-dom";
import imgLinks from "../pokemons/imgLinks";

export default function Pokemon(props) {
  if (!props.location.propsSearch) {
    return <Redirect to="/main" />;
  }
  let status = "didn`t catch";
  let time = "";
  let pok = props.location.propsSearch.pokemon;

  if (pok.caught) {
    status = "caught";
    time = pok.time;
  }

  return (
    <div>
      <h1>Pokemon: {pok.name}</h1>
      <img src={imgLinks[pok.id]} className="img-thumbnail" alt="pokemon"></img>
      <div>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">Time: {time}</p>
      </div>
    </div>
  );
}
