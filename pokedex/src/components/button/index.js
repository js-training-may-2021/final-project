import CaughtPokemonsContext from "../../contexts/caught-pokemons";

const Button = (props) => {

  const catchPokemon = (evt, id) => {
    evt.preventDefault();
    alert('Покемон ' + id + ' пойман!');
    const date = new Date().toDateString();
    CaughtPokemonsContext._currentValue2.push({isCatched: date, id: id});
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