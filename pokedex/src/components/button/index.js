const Button = (props) => {

  if (!!props.isDisabled) {
    return (
      <button className={props.classNames} disabled id={props.buttonId} type='button'>{props.text}</button>
    );
  } else {    
      return (     
        <button 
          className={props.classNames} 
          id={props.buttonId} 
          type='button' 
          onClick={props.catchHandler}>
            {props.text}
        </button>
      );
  }
}

export default Button;