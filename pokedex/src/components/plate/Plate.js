import React from "react";
import catchPokemonAction from "../../store/actions/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import imgLinks from "../../pokemons/imgLinks";
import styles from "./plate.module.css";

function Plate(props) {
  let catchPokemon = function (e) {
    let pokemonId = e.target.getAttribute("pokemonid");
    let date = new Date();
    props.dispatch(catchPokemonAction(pokemonId, date));
  };

  let getAtr = function () {
    let pok = props.pokemon;
    if (!pok.caught) {
      return {
        className: "btn",
        word: "Catch",
        disabled: false,
      };
    } else {
      console.log("come");
      return {
        className: "btn ",
        word: "Caught",
        disabled: true,
      };
    }
  };
  return (
    <div className={`col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12`}>
      <div className={`${styles.card} m-1`}>
        <Link
          className={`${styles.card_link}`}
          to={{
            pathname: "/pokemon",
            propsSearch: {
              pokemon: props.pokemon,
            },
          }}
        >
          <img
            className={` ${styles.card_img} card-img-top`}
            src={imgLinks[props.pokemon.id]}
            alt=""
          />
          <h4 className={`${styles.card_title} card-title`}>
            Name: {props.pokemon.name}{" "}
          </h4>
        </Link>
        <button
          className={`${styles.card_btn} card col ${getAtr().className}`}
          disabled={getAtr().disabled}
          pokemonid={props.pokemon.id}
          onClick={catchPokemon}
        >
          {getAtr().word}
        </button>
      </div>
    </div>
  );
}
export default connect()(Plate);
