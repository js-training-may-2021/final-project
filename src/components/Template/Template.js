import React from 'react';
import './_style.scss';
import MainContent from '../MainContent/MainContent';
import CaughtPokemonContent from '../CaughtPokemonContent/CaughtPokemonContent';
import Header from "../Header/Header";
import PokemonInfoContent from "../PokemonInfoContent/PokemonInfoContent";

const Template = () => {
  return (
    <div className='template'>
      <Header />
      {window.location.href.includes('caughtPokemon') ? <CaughtPokemonContent />
      : window.location.href.includes('pokemonInfo') ? <PokemonInfoContent /> : <MainContent />}
      {/*<div className='scroll'>up</div>*/}
      <footer className='footer'>
        <div className='pokeball-wrapper'>
          <img
            src='https://raw.githubusercontent.com/jnannni/web-itmo/master/fourth_lab/img/top-pokeball.png'
            className='pokeball pokeball-top'/>
          <img
            src='https://raw.githubusercontent.com/jnannni/web-itmo/master/fourth_lab/img/bottom-pokeball.png'
            className='pokeball pokeball-bottom'/>
        </div>
      </footer>
    </div>
  )
}

export default Template;
