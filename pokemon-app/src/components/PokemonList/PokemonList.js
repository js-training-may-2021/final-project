import React from 'react';
import PokemonComponent from "../PokemonComponent/PokemonComponent";
import Grid from "@material-ui/core/Grid";

const PokemonList = () => {

    return (
        <div className="pokemon-list wrapper">
            <Grid className="pokemon-component"
                  container spacing={3}>
                <PokemonComponent/>
            </Grid>
        </div>
    )
}

export default PokemonList;