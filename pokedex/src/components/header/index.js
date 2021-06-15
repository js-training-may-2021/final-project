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

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="logo-line"></span>
        <h1 className="logo">Pokedex</h1>
        <span className="logo-line"></span>
      </header>
    );
  }
}

export default Header;