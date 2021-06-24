import React from "react";
import Plate from "../plate/Plate";

export default function Plates(props) {
  return (
    <>
      <div className="row row-cols-4">
        {props.pokemons.map((pokemon) => (
            <Plate pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}

