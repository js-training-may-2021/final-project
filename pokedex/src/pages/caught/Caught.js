import React from "react";
import Plates from "../../components/plates/Plates";
import { connect } from "react-redux";
import { useState } from "react";
import ButtonLoadMore from "../../components/generic/Button";
import styles from "./caught.module.css";

function Caught(props) {
  const pokemonsCount = 12;
  const [loadedPokemonsCount, setLoad] = useState(pokemonsCount);

  let caughtPokemons = props.pokemons.filter((pok) => pok.caught);

  return (
    <div className="container" id="plate">
      <Plates pokemons={caughtPokemons.slice(0, loadedPokemonsCount)} />
      {loadedPokemonsCount < caughtPokemons.length && (
        <ButtonLoadMore
          click={() => setLoad(loadedPokemonsCount + pokemonsCount)}
        />
      )}
      {caughtPokemons.length === 0 && (
        <p className={`${styles.text}`}>
          Try to catch pokemons on the main page!
        </p>
      )}
    </div>
  );
}

let mapStateToProps = function (state) {
  return { pokemons: state.pokemonsList };
};
export default connect(mapStateToProps)(Caught);
