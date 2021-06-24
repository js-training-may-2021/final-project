import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import { CATCH_BTN_NAME_OFF, CATCH_BTN_NAME, NO_PHOTO, LAST_IMG } from '../../constants';
class SmallCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      id: this.props.id,
      isCaught: this.props.isCaught,
    };
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
          buttonId={this.state.id} />
 
    </div>
    )
  }
}

export default SmallCard;