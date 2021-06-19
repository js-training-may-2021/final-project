import React, { Component } from 'react';

/*
const Header = () => {
  return (
    <header className="header">
      <span className="logo-line"></span>
      <h1 className="logo">Pokedex</h1>
      <span className="logo-line"></span>
    </header>
  );
};
*/

const Header = (props) => {
  return (
    <header className="header">{props.children}</header>
  );
};

export default Header;