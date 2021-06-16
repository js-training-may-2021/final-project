import React, { Component } from "react";
//import { useHistory } from "react-router-dom";
//import { browserHistory } from "react-router";

import LargeCard from "../../components/large-card";
import Button from '../../components/button';

const cb = () => {
  
  console.log('back!');
  //BrowserHistory.goBack();
};


//const history = useHistory();

class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caught: this.props.caught,
      chosenPage: this.props.chosenPage,
      chosenTab: this.props.chosenTab,
      chosenId: this.props.chosenId,
      data: this.props.data
    };
  }

  render() {

    console.log();

    return (
      <>
        <Button classNames="back" text="&larr;&nbsp;&nbsp;Вернуться к&nbsp;списку" isDisabled="false" buttonType="come-back" />
        <LargeCard id={this.state.chosenId} data={this.state.data} caught={this.state.caught} />
      </>
    );

  }
}

export default CardPage;