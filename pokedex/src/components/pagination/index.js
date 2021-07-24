import React, { Component } from 'react';
import PageLink from '../page-link';
import { makeArrayFromValue, isPageInList } from '../../utils';
import { MAX_ITEMS_IN_PORTION } from '../../constants';
import ChosenPageContext from '../../contexts/chosen-page';

const makeLinksMarkup = (array, chosen, handler) => {
  return array.map((item) => {
    const isChosen = item === chosen ? true : false;
    return (
      <PageLink
        isChosen={isChosen} 
        number={item}
        handler={handler} 
        key={item} />
    );
  });
}

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: ChosenPageContext._currentValue2,
      data: this.props.data
    };
    this.choosePage = this.choosePage.bind(this);
  }

  render() {
    const quantity = this.state.data.length;
    const len = Math.ceil(quantity / MAX_ITEMS_IN_PORTION);

    if (len < 2) {
      return (
        <div className='pagination'></div>
      );

    } else {
  
      const arr = makeArrayFromValue(len);
      const correctPage = isPageInList(this.state.chosen, len);
      const linksMarkup = makeLinksMarkup(arr, correctPage, this.choosePage);

      return (
        <div className='pagination'>
          <a href='1' className='to-start' onClick={this.choosePage}>
            Начало
          </a>
          {linksMarkup}
          <a href={len} className='to-end' onClick={this.choosePage}>
            Конец
          </a>
        </div>
      );
    }
  }

  choosePage(evt) {
    evt.preventDefault();

    const value = evt.target.textContent;
    let number = null;

    if (value === 'Начало') {
      number = 1;
    } else if (value === 'Конец') {
      number = Math.ceil(this.state.data.length / MAX_ITEMS_IN_PORTION);
    } else {
      number = parseInt(value, 10);
    }
    this.setState({chosen: number});
    ChosenPageContext._currentValue2 = number;
  
  }
}

export default Pagination;