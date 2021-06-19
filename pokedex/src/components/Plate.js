import React from "react";
import store from "../store/store";
import catchPokemonAction from "../store/actions/actions";

export default function Plate(props) {
  let catchPokemon = function (e) {
    let pokemonId = e.target.getAttribute("pokemonid");
    let date = new Date();
    store.dispatch(catchPokemonAction(pokemonId, date));
  };

  let getPok = function (id) {
    const pokemons = store.getState();
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id == id) {
        return pokemons[i];
      }
    }
  };

  let getAtr = function () {
    let pok = getPok(props.pokemon.id)
    if (!pok.caught) {
      return {
        className: "btn btn-success",
        word: "Catch",
        disabled: false,
      };
    } else {
      console.log("come");
      return {
        className: "btn btn-danger",
        word: "Caught",
        disabled: true,
      };
    }
  };
  return (
    <div className="card col">
      <img
        className="card-img-top"
        src={require(`../pokemons/${props.pokemon.id}.png`).default}
        alt="Picture"
      />
      <h5 className="card-title">Name: {props.pokemon.name} </h5>
      <button
        className={getAtr().className}
        disabled={getAtr().disabled}
        pokemonid={props.pokemon.id}
        onClick={catchPokemon}
      >
        {getAtr().word}
      </button>
    </div>
  );
}
