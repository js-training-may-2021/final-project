import React from 'react';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const AppRoute = {
  MAIN: '/',
  DETAIL: '/detail/:id',
  CAUGHT: '/caught'
};

export const getCatchDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`
};

export const checkPokemons = (pokemons, text) => {
  if (pokemons.length === 0) {
    return (
      <p className="page__text">{text}</p>
    );
  }
};
