import React from "react";
import NavBarMenu from "../nav-bar-menu/nav-bar-nemu";
import SearchPanel from "../search-panel/search-panel";

import "./app-header.css";

const AppHeader = () => {
  return (
    <div className="app-header d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <NavBarMenu />
      <SearchPanel />
    </div>
  );
};

export default AppHeader;
