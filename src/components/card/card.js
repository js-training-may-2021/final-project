import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomImg from "../card/card-custom-img";

import { firstLetterToUpperCase, formatDate, padToThree } from "../../utils";
import { catchPokemonAction, releasePokemonAction } from "../../actions";
import { catchSelector } from "../../reducers";

import "./card.css";

const Card = ({ pokemonToDisplay, displayOnlyShortInfo, index }) => {
  const dispatch = useDispatch();
  const reduxStorePokemons = useSelector(catchSelector);

  const catchPokemon = (e) => {
    e.preventDefault();
    const now = new Date();
    const caughtPokemon = { ...pokemonToDisplay, caughtDate: now };
    dispatch(catchPokemonAction(caughtPokemon));
  };

  const releasePokemon = (e) => {
    e.preventDefault();
    dispatch(releasePokemonAction(pokemonToDisplay.id));
  };

  const isCaughtPokemon = () => {
    return getCaughtPokemon() !== undefined;
  };

  const getCaughtPokemon = () => {
    return reduxStorePokemons.find((el) => el.id === pokemonToDisplay.id);
  };

  const cardNumber = padToThree(index);

  const numberLine = <h5 className="card-header">№ {cardNumber}</h5>;
  const idLine = <p className="card-text">ID: {pokemonToDisplay.id}</p>;

  const isCaughtPokemonValue = isCaughtPokemon();

  const catchDateLine = isCaughtPokemonValue ? (
    <p className="card-text">
      Was caught: {formatDate(getCaughtPokemon().caughtDate)}
    </p>
  ) : (
    <p className="card-text">Not caught yet</p>
  );

  const content = (
    <div className="card text-center">
      {displayOnlyShortInfo && numberLine}
      <div className="card-body">
        <h5 className="card-title">
          {firstLetterToUpperCase(pokemonToDisplay.name)}
        </h5>
        {!displayOnlyShortInfo && idLine}
        {!displayOnlyShortInfo && catchDateLine}
        <CustomImg
          src={pokemonToDisplay.id}
          className="card-img"
          alt="sample Image"
        />
        <div className="d-flex btn-group" role="group">
          <button
            type="button"
            className="catch card-btn btn-success btn-block"
            disabled={isCaughtPokemonValue}
            onClick={(e) => catchPokemon(e)}
          >
            CATCH
          </button>
          <button
            type="button"
            className="release card-btn btn-success btn-block"
            disabled={!isCaughtPokemonValue}
            onClick={(e) => releasePokemon(e)}
          >
            RELEASE
          </button>
        </div>
      </div>
    </div>
  );

  return <> {content}</>;
};

export default Card;
