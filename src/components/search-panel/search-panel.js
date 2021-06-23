import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./search-panel.css";

const SearchPanel = () => {
  const [name, setName] = useState("");

  const history = useHistory();
  const location = useLocation();

  const searchSubmit = (e) => {
    e.preventDefault();
    if (
      location.pathname === "/collection" ||
      location.pathname.startsWith("/search-my-collection")
    ) {
      history.push(`/search-my-collection/${name}`);
    } else {
      history.push(`/search/${name}`);
    }
  };

  return (
    <form className="search-panel d-flex" onSubmit={searchSubmit}>
      <input
        onChange={(event) => setName(event.target.value)}
        className="form-control search-input"
        type="text"
        maxLength="20"
        placeholder="Pokemon search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
