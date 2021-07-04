import React from 'react';
import '../index.css';

const PokemonCardView = (props) => {
    if (!props.pokemon) return <></>;

    const {id, name} = props.pokemon;
    const isCatched = Boolean(props.catchedPokemons.filter(item => item.id === id).length);
    const dateCatched = props.catchedPokemons.filter(item => item.id === id)[0]?.dateCatched.toLocaleString();
    let imgUrl = "";
    try {
        imgUrl = require(`../images/pokemons/${id}.png`);
    } catch (err) {
        imgUrl = require("../images/pokemons/1.png");
    }

  return (
        <div className="pokemon__item">
            <p>Id: {id}</p>
            <div className="pokemon__item_img">
                <img src={imgUrl.default} alt={name}/>
            </div>
            <div className="pokemon__item_txt">
                <p>Name: {name}</p>
            </div>
            <div className="pokemon__item_iscatch">
                Catched: <span>{isCatched ? 'Yes' : 'No'}</span>
            </div> 
                {isCatched ? 
                <div className="pokemon__item_iscatch">
                    Date of catch: <span>{dateCatched}</span>
                </div> : null}     
        </div>  
 
  );
};

export default PokemonCardView;
