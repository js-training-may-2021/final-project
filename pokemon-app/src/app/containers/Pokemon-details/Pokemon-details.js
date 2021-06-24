import React from 'react';
import './Pokemon-details.scss'
import {useParams} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {getPokById, getPoks} from '../../API';


// import './Pokemon-details.scss';

function PokemonDetails(props) {
    let {id} = useParams();
    let imgPath = `/public/pokemons/${id}.png`;
    const pok = getPokById(id)
    const pokName = pok.name;
    if (!pok) {
        return (
            <Container className='pokemon-details'>
                <h1>SLOWPOK - NO POK</h1>
            </Container>)
    } else {
        return (
            <Container className='pokemon-details'>
                <section className='pokemon-details__header'>
                    <div className='pokemon-details__pagination'></div>
                    <div className="pokemon-details__title">
                        <Typography variant="body2" color="textSecondary" component="h3">{pokName}</Typography>
                    </div>
                </section>
                <h1>POKEMON PAGE</h1>

                <p>{id}</p>

                <img src={imgPath} alt=""/>

            </Container>
        )
    }
}

export default PokemonDetails;