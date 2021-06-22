import React from "react";
import Plates from "../components/Plates";
import { connect } from "react-redux";
import { useState } from "react";

let Main = function (props) {
  const pokemonsCount = 12;
  const [loadedPokemonsCount, setLoad] = useState(pokemonsCount);
  return (
    <div className="container" id="plate">
      <Plates pokemons={props.pokemons.slice(0, loadedPokemonsCount)} />

      <button
        onClick={() => setLoad(loadedPokemonsCount + pokemonsCount)}
        className="load-more"
      >
        Load more
      </button>
    </div>
  );
};

let mapStateToProps = function (state) {
  return { pokemons: state };
};
export default connect(mapStateToProps)(Main);
