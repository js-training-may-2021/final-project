//import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
// CaughtPokemonsContext from "../../contexts/caught-pokemons";
const customHistory = createBrowserHistory();

const Button = (props) => {
  //let history = useHistory();

  const goBackToCatalog = (evt) => {
    evt.preventDefault();
    console.log('coming back!');
    customHistory.goBack();
  };

  const catchPokemon = (evt, id) => {
    evt.preventDefault();
    console.log('pokemon is catched!');
    //this.context.push({id: id, isCaught: new Data()})};
  };

  if (!!props.isDisabled) {
    return (
      <button className={props.classNames} disabled id="{props.buttonId}" type="button">{props.text}</button>
    );
  } else {
    if (props.buttonType === 'come-back') {
      return (
        <button className={props.classNames} type="button" onClick={goBackToCatalog} id="null">{props.text}</button>
      );
    } if (props.buttonType === 'catch-pokemon') {
      return (
        
        <button 
          className={props.classNames} 
          id={props.buttonId} 
          type="button" 
          onClick={catchPokemon}
        >{props.text}
        </button>
      );
    }
    
  }
}

//<button className={props.classNames} id={props.buttonId} type="button" onClick={goBackToCatalog}>{props.text}</button>

/*

class Button extends Component {
  contructor() {
    super();
  }

  render() {
    if (!!this.props.isDisabled) {
      return (
        <button className={this.props.classNames} disabled id={this.props.buttonId} type="button">{this.props.text}</button>
      );
    } else {
      if (this.props.direction === 'back') {
        return (
          <button className={this.props.classNames} id={this.props.buttonId} type="button" onClick={this.props.callback}>{this.props.text}</button>
        );
      } else {
        return (
          <button className={this.props.classNames} id={this.props.buttonId} type="button">{this.props.text}</button>
        );
      }
    }
  }
}

*/
export default Button;