import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import CardList from "../../components/card-list";
import LoadMoreButton from "../../components/load-more-button";

import { catchSelector } from "../../reducers";

import { COLLECTION_PAGE_SETTINGS } from "../../constants";

import "./collection-page.css";

const CollectionPage = () => {
  const reduxStorePokemons = useSelector(catchSelector);

  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
  const [newLastIndex, setNewLastIndex] = useState(
    COLLECTION_PAGE_SETTINGS.PAGE_SIZE
  );  

  const { query } = useParams();

  useEffect(() => {
    loadMorePokemons();
  }, [newLastIndex, reduxStorePokemons.length, query]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMorePokemons = () => {
    let reduxPokemonsBeforePaging = reduxStorePokemons;
    if (query !== undefined) {
      reduxPokemonsBeforePaging = findPokemonsByName(query);
    }
    const pokemons = reduxPokemonsBeforePaging.slice(
      COLLECTION_PAGE_SETTINGS.START_INDEX,
      newLastIndex
    );
    setPokemonsToDisplay(pokemons);    
  };

  const findPokemonsByName = (q) => {
    return reduxStorePokemons.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
  };

  const handleMoreClick = (e) => {
    setNewLastIndex(newLastIndex + COLLECTION_PAGE_SETTINGS.PAGE_SIZE);
  };

  const hasPokemonsInCollection = pokemonsToDisplay.length > 0;
  const showLoadMore =
    hasPokemonsInCollection && reduxStorePokemons.length > newLastIndex;

  const textLine = reduxStorePokemons.length > 0 ? 
    <div className="d-flex justify-content-center message-line">Not found pokemons</div> :
    <div className="d-flex justify-content-center message-line">No pokemons in Collection yet!</div>;  

  const contentPokemons = hasPokemonsInCollection ? (
    <CardList pokemonsToDisplay={pokemonsToDisplay} />
  ) : (
    textLine
  );

  const loadMoreButton = <LoadMoreButton onClick={handleMoreClick} />;

  return (
    <div className="row">
      {contentPokemons}
      {showLoadMore && loadMoreButton}
    </div>
  );
};

export default CollectionPage;
