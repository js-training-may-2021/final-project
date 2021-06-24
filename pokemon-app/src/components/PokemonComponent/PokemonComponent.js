import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import './PokemonComponent.scss';
import PokemonCard from "../PokemonCard/PokemonCard";
import Grid from '@material-ui/core/Grid';
import {GlobalContext} from "../../redux/context";


const PokemonComponent = () => {
    const {
        caughtPokemons,
    } = useContext(GlobalContext);
    const pokemons = useSelector((state) => state.allPokemons.pokemons);
    // const pokemons = props.list;
 /*   let storedCaughtPokemons = caughtPokemons.find((pok) => pok.id === props.id);
console.log('storedCaughtPokemons ',caughtPokemons)*/
    const renderList = pokemons.map(pokemon => {
        const {id, name} = pokemon;
        const imgPath = `/pokemons/${id}.png`;

        return (
            <Grid className={caughtPokemons.find((pok) => pok.id === id) ?'caught-pok pokemon-component':'pokemon-component'}
                  key={id} md={3} sm={6} xs={12}
                  item>
                <PokemonCard name={name} id={id} image={id >= 720 ? '/unknownPok.jpg' : imgPath}/>
            </Grid>
        )
    })
    return (
        <>{renderList}</>
    )
}

export default PokemonComponent;