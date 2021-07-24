import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import { CATCH_BTN_NAME_OFF, CATCH_BTN_NAME, NO_PHOTO, LAST_IMG } from '../../constants';
import CaughtPokemonsContext from '../../contexts/caught-pokemons';
class SmallCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      id: this.props.id,
      isCaught: this.props.isCaught
      //handler: this.props.handler
    };
    this.catchPokemon = this.catchPokemon.bind(this);
  }

  render() {

    const imgPicture = this.state.id > LAST_IMG ? NO_PHOTO : this.state.id + '.png';
    const imgUrl = '../../images/' + imgPicture;
    const status = this.state.isCaught !== 'null';
    const btnText = !status ? CATCH_BTN_NAME : CATCH_BTN_NAME_OFF;

    return (
      <div className='card-small' key={this.state.id}>

        <Link to={{
          pathname: `/card/${this.state.id}`,
          id: this.state.id
          }} 
          className='card-small-info'>
          <img src={imgUrl} className='card-small-picture' alt={this.state.title} />
          <p>{this.state.title}</p>
        </Link>

        <Button 
          classNames='catch-button' 
          text={btnText} 
          isDisabled={status} 
          buttonType='catch-pokemon' 
          buttonId={this.state.id}
          catchHandler={this.catchPokemon} />
 
    </div>
    )
  }

  catchPokemon(evt, id) {
    evt.preventDefault();
    alert('Покемон ' + this.state.id + ' пойман!');
    const date = new Date().toDateString();
    this.setState({isCaught: true});
    CaughtPokemonsContext._currentValue2.push({isCaught: date, id: this.state.id});
    console.log(CaughtPokemonsContext);
  }

}

export default SmallCard;