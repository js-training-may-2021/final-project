import React, { useState } from 'react';
import './_style.scss';
import * as actions from "../../actions/pokedex";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "../../selectors/selector";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const currentPage = useSelector(selectors.getCurrentPage);
  const dispatch = useDispatch();
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPages = pageNumbers.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} className={currentPage === number ? 'page-number page' : 'page-number'} onClick={() => paginate(number)}>
          {number}
        </li>
      )
    } else return null;
  });
  console.log(currentPage)
  const onClickPrev = () => {
    if (currentPage - 1 <= 0) return;
    dispatch(actions.setCurrentPage(currentPage - 1));
    if ((currentPage - 1)%pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  const onClickNext = () => {
    if (currentPage + 1 > pageNumbers) return;
    dispatch(actions.setCurrentPage(currentPage + 1));
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  return (
    <div className='pagination-wrapper'>
      <ul className='pagination'>
        <li className='page-number' onClick={onClickPrev}>
          prev
        </li>
        {renderPages}
        <li className='page-number' onClick={onClickNext}>
          next
        </li>
      </ul>
    </div>
  )
}

export default Pagination;
