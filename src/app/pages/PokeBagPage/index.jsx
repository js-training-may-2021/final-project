import React from 'react';
import { useSelector } from 'react-redux';

import { mappingSortPokemons, isFound } from '@utils/pokemonUtils';
import { loc } from '@utils/languageUtils';

import ToolsComponent from '@containers/ToolsComponent';
import PokemonsList from '@containers/PokemonsList';

import styles from './PokeBagPage.module.scss';

const PokeBagPage = () => {
  const {
    caughtPokemons, sortedBy, searchText,
  } = useSelector(({ pokemonsState }) => pokemonsState);

  const currentPokemons = caughtPokemons.filter((pokemon) => isFound(pokemon, searchText));
  const sortedPokemons = mappingSortPokemons[sortedBy](currentPokemons);

  const emptyBagMessage = loc('emptyPokeBag');
  const noMatchesMessage = loc('notFoundSearch');

  return (
    <>
      <ToolsComponent />
      <div className={styles.feedback}>
        {sortedPokemons.length === 0 && searchText.length === 0 ? emptyBagMessage : null}
        {sortedPokemons.length === 0 && searchText.length !== 0 ? noMatchesMessage : null}
      </div>
      <div className={styles.pokemonBox}>
        <PokemonsList pokemons={sortedPokemons} />
      </div>
    </>
  );
};

export default PokeBagPage;
