import React from "react";

const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="load-more btn btn-success btn-block"
      key="more-button"
      id="more-button"
      onClick={onClick}
    >
      LOAD MORE
    </button>
  );
};

export default LoadMoreButton;
