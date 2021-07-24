import React, { Component } from 'react';
import { makeClassList } from '../../utils';

class PageLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      isChosen: this.props.isChosen,
      handler: this.props.handler
    };
  }

  render() {
    const classNames = makeClassList(this.state.number, this.state.isChosen);
    return (
      <a href={this.state.number} className={classNames} onClick={this.state.handler}>
        {this.state.number}
      </a>
    );
  }

}

export default PageLink;