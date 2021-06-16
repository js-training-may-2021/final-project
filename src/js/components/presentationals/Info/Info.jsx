import React, {Fragment} from 'react';
import Button from '../Button/Button.jsx';
import './info.scss';

const Info = () => {
  return (
    <Fragment>
      <img className="page__img" src={new URL(`../../../../images/${1}.png`, import.meta.url)} alt="Name" />
      <article className="page__info info">
        <h1 className="info__title">NAME</h1>
        <p className="info__text">ID: <span className="info__data">777</span></p>
        <p className="info__text">STATUS: <span className="info__data">Caught</span></p>
        <p className="info__text">CAUGHT: <span className="info__data">Date</span></p>
				<Button />
      </article>
    </Fragment>
  );
}

export default Info;
