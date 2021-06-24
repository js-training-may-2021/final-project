import React from 'react';
import styles from './button.module.css';

export default function ButtonLoadMore(props) {
    return (
        <button
        className={`${styles.btn} btn btn-light `}
        onClick = {props.click}
          >
        Load more
      </button>

    )
}
