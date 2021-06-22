import React from 'react';

const Paginator = (props) => {
  return (
    <div className="paginator__wrapper d-flex justify-content-center">
      <div className="paginator d-flex gap-1">
        <button className="btn btn-danger" onClick={props.prev}>Prev</button>
        <button className="btn btn-danger" onClick={props.next}>Next</button>
      </div>
    </div>
  )
}

export default Paginator;