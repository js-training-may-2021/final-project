import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Card from "../../components/card";

import { handleErrors } from "../../utils";

import { URL_GET_POKEMONS } from "../../constants";

import "./pokemon-info-page.css";

const PokemonInfoPage = () => {
  const [pokemon, setPokemon] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [hasError, setHasError] = useState(false);

  const params = useParams();

  useEffect(() => {
    loadPokemon();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPokemon = () => {
    const url = `${URL_GET_POKEMONS}/${params.id}`;
    fetch(url)
      .then(handleErrors)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        setHasError(true);
        setErrorMessage(error.toString());
      });
  };

  const errorContent = <p className="message-line">{errorMessage}</p>;

  const renderContent =
    pokemon !== undefined ? (
      <Card
        className="" //TODO new class
        pokemonToDisplay={pokemon}
        displayOnlyShortInfo={false}
        key={pokemon.id}
      />
    ) : (
      <p className="message-line">Loading</p>
    );

  return (
    <div className="d-flex justify-content-center">
      {hasError && errorContent}
      {!hasError && renderContent}
    </div>
  );
};

export default PokemonInfoPage;
