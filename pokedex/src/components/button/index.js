//import React, { Component } from 'react';
import CaughtPokemonsContext from "../../contexts/caught-pokemons";

const Button = (props) => {

  const catchPokemon = (evt, id) => {
    evt.preventDefault();
    console.log('pokemon is catched! ', id);
    alert('Покемон ' + id + ' пойман!');
    const date = new Date().toDateString();
    console.log(CaughtPokemonsContext._currentValue2);
    CaughtPokemonsContext._currentValue2.push({isCatched: date, id: id});
    console.log(CaughtPokemonsContext._currentValue2);
  };

  if (!!props.isDisabled) {
    return (
      <button className={props.classNames} disabled id={props.buttonId} type="button">{props.text}</button>
    );
  } else {    
      return (     
        <button 
          className={props.classNames} 
          id={props.buttonId} 
          type="button" 
          onClick={(evt) => catchPokemon(evt, props.buttonId)}>
            {props.text}
        </button>
      );
  }
}

export default Button;