// import axios from "axios";
// import React from "react";
// import './PokemonList.css'


// const PokemonList = (props) => {

//     if (props.pokemons.length === 0) {
//       axios.get('http://localhost:8000/pokemons')
//       .then(response => {
//         // debugger;
//         props.setPokemons(response.data);
//       });  
//     }
//     //это сайд эффект, хотя мы и сделали заглушку. решение: классновый компонент или хуки
//     //нарушается правило чистых функций!!

//     return (
//         <div className="container-xl">
//             <div className="row">
//                 {props.pokemons.map(pokemonItem => {
//                     return (
//                         <div className="col-md-3" key={pokemonItem.id}>
//                             <div className="card" >
//                                 <img src={`pokemons/${pokemonItem.id}.png`} className="card-img-top" alt="image" />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{pokemonItem.name.toUpperCase()}</h5>
//                                     <a href="#" className="btn btn-primary">CAUGHT</a>
//                                 </div>
//                             </div>
//                         </div>
//                         )
//                     }
//                 )}
//             </div>
//         </div>
//     )
// }

// export default PokemonList;