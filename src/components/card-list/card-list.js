import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../../components/card";

import "./card-list.css";

const CardList = ({ pokemonsToDisplay }) => {
  const contentPokemons = pokemonsToDisplay.map((pokemon, index) => {
    return (
      <NavLink
        to={`/pokemon-info/${pokemon.id}`}
        className="card-group col-md-3 col-sm-6 mb-4"
        key={pokemon.id}
      >
        <Card
          pokemonToDisplay={pokemon}
          displayOnlyShortInfo={true}
          index={index + 1}
        />
      </NavLink>
    );
  });

  return <>{contentPokemons}</>;
};

export default CardList;
