import React from "react";
import {store, getPokemonFromState} from "../store/store";
import catchPokemonAction from "../store/actions/actions";
import {Link} from "react-router-dom";

export default function Plate(props) {
  let catchPokemon = function (e) {
    let pokemonId = e.target.getAttribute("pokemonid");
    let date = new Date();
    store.dispatch(catchPokemonAction(pokemonId, date));
  };

  let getAtr = function () {
    let pok = getPokemonFromState(props.pokemon.id)
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
      <Link to={{
            pathname: "/pokemon",
            propsSearch: {pokemonId: props.pokemon.id},
        }} >
      <img
        className="card-img-top"
        src={require(`../pokemons/${props.pokemon.id}.png`).default}
        alt="Picture"
      />
      <h5 className="card-title">Name: {props.pokemon.name} </h5>
      </Link>
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
