import React from "react";
import Plates from "../components/Plates";
import {store} from "../store/store";


export default function Main() {

    let caughtPokemons = store.getState().filter(pok => pok.caught)

  return (
    <div className="container" id="plate">
      <Plates pokemons={caughtPokemons} />
    </div>
  );
}

