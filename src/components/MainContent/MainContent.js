import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_style.scss';
import PokemonCard from '../PokemonCard/PokemonCard';
import Pagination from "../Pagination/Pagination";
import * as actions from '../../actions/pokedex';
import * as selectors from '../../selectors/selector';

const MainContent = () => {
  const pokemon = useSelector(selectors.getPokemon);
  const currentPage = useSelector(selectors.getCurrentPage);
  const pokemonPerPage = useSelector(selectors.getPokemonPerPage);
  const dispatch = useDispatch();

  const [loading, isLoading] = useState(false);
  let cards = [];
  let pokemonLength = 0;

  useEffect(() => {
    const getData = async () => {
      isLoading(true);
      await dispatch(actions.getPokemon());
      isLoading(false);
    }
    getData();
  }, [dispatch, currentPage]);

  const indexOfLastPost = currentPage * pokemonPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonPerPage;

  if (pokemon.length !== 0) {
    pokemonLength = pokemon[0].length;
    const currentPosts = pokemon[0].slice(indexOfFirstPost, indexOfLastPost);
    for (let i = 0; i < currentPosts.length; i++) {
      cards.push(
        <PokemonCard
          key={pokemon[0][indexOfFirstPost + i].id}
          pokemon={{
            name: pokemon[0][indexOfFirstPost + i].name,
            id: pokemon[0][indexOfFirstPost + i].id,
            image: `https://raw.githubusercontent.com/js-training-may-2021/final-project/main/pokemons/${pokemon[0][indexOfFirstPost + i].id}.png`,
            captureDate: null,
            isCaught: false}} />)
    }
  }

  const paginate = (pageNumber) => dispatch(actions.setCurrentPage(pageNumber));

  return (
    <div className='wrapper'>
      <div className='main-content'>
        {cards}
      </div>
      <Pagination
        postsPerPage={pokemonPerPage}
        totalPosts={pokemonLength}
        paginate={paginate} />
    </div>
  )
}

export default MainContent;
