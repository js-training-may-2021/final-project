import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import CardList from "../../components/card-list";
import LoadMoreButton from "../../components/load-more-button";

import {
  URL_GET_POKEMONS,
  CARD_LIST_PAGE_SETTINGS,
  CARD_LIST_INITIAL_LAST_INDEX,
  TOTAL_POKEMONS_COUNT,
} from "../../constants";

import "./card-list-page.css";

const CardsListPage = () => {
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
  const [newLastIndex, setNewLastIndex] = useState(
    CARD_LIST_INITIAL_LAST_INDEX
  );
  const [loading, setLoading] = useState(true);

  const { query } = useParams();  

  useEffect(() => {
    loadMorePokemons();
  }, [newLastIndex, query]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMorePokemons = () => {
    const queryString = query === undefined ? "" : query;    
    const url = `${URL_GET_POKEMONS}?_start=${CARD_LIST_PAGE_SETTINGS.START_INDEX}&_end=${newLastIndex}&q=${queryString}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsToDisplay(data);
        setLoading(false);
      });
  };

  const handleMoreClick = (e) => {
    setNewLastIndex(newLastIndex + CARD_LIST_PAGE_SETTINGS.PAGE_SIZE);
  };

  const hasPokemonsInCollection = pokemonsToDisplay.length > 0;
  const showLoadMore =
    hasPokemonsInCollection && TOTAL_POKEMONS_COUNT > newLastIndex;

  const loadMoreButton = <LoadMoreButton onClick={handleMoreClick} />;
  
  const textLine = loading ? 
  <div className="d-flex justify-content-center message-line">Loading pokemons...</div> :
  <div className="d-flex justify-content-center message-line">No pokemons</div>;
  const contentPokemons = hasPokemonsInCollection ? (
    <CardList pokemonsToDisplay={pokemonsToDisplay} />
  ) : (
    textLine
  );

  return (
    <div className="row">
      {contentPokemons}
      {showLoadMore && loadMoreButton}
    </div>
  );
};

export default CardsListPage;
