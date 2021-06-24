import React from "react";
import Plates from "../../components/plates/Plates";
import { connect } from "react-redux";
import { useState } from "react";
import ButtonLoadMore from "../../components/generic/Button";


let Main = function (props) {
  const pokemonsCount = 12;
  const [loadedPokemonsCount, setLoad] = useState(pokemonsCount);
  return (
    <div className="container" id="plate">
      <Plates pokemons={props.pokemons.slice(0, loadedPokemonsCount)} />
      { (loadedPokemonsCount < props.pokemons.length) &&
        <ButtonLoadMore  click={() => setLoad(loadedPokemonsCount + pokemonsCount)}/>
      }    </div>
  );
};

let mapStateToProps = function (state) {
  return { pokemons: state.pokemonsList };
};
export default connect(mapStateToProps)(Main);
