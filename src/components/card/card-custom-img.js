import React from "react";

export default class CustomImg extends React.Component {
  render() {
    let image_path = "";
    try {
      image_path = require("../../images/pokemons/" + this.props.src + ".png");
    } catch (err) {
      image_path = require("../../images/pokemons/default.jpg");
    }
    return (
      <img
        width={this.props.width}
        src={image_path.default}
        className={this.props.className}
        alt={this.props.alt}
      />
    );
  }
}
