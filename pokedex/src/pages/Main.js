import React from "react";
import Plates from "../components/Plates";
import {store} from "../store/store";


export default function Main() {
  return (
    <div className="container" id="plate">
      <Plates pokemons={store.getState().slice(0, 12)} />
    </div>
  );
}
