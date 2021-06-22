import React from "react";
import Plates from "../components/Plates";
import { connect } from "react-redux";

function Caught(props) {
  let caughtPokemons = props.pokemons.filter((pok) => pok.caught);

  return (
    <div className="container" id="plate">
      <Plates pokemons={caughtPokemons} />
    </div>
  );
}

let mapStateToProps = function (state) {
  return { pokemons: state.pokemonsList };
};
export default connect(mapStateToProps)(Caught);
