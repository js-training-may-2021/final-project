import React, {useContext} from 'react';
import {GlobalContext} from "../../redux/context";
import './PokemonCard.scss'
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import StandardButton from "../../elements/StandardButton";

const PokemonCard = (props) => {
    const {
        pokemons,
        catchPokemon,
        releasePokemon,
        caughtPokemons,
    } = useContext(GlobalContext);


    let storedPokemon = pokemons.find((pok) => pok.id === props.id);
    let storedCaughtPokemons = caughtPokemons.find((pok) => pok.id === props.id);

    const isCatchDisabled = storedPokemon
        ? true : storedCaughtPokemons
            ? true : false;

    return (
        <Card className='pokemon-card' variant="outlined">
            <Link to={`/pokemon/${props.id}`}>
                <div className="pokemon-card__img-wrapper">
                    <CardMedia
                        className={'pokemon-card__img'}
                        title={props.name}
                        image={props.image}
                    />
                </div>
            </Link>

            <CardContent className="pokemon-card__info">
                <p className="pokemon-card__number">
                    #{props.id >= 10 ? props.id : "0" + props.id}
                </p>
                <h5 className="pokemon-card__name">
                    {props.name.charAt(0).toUpperCase()}{props.name.slice(1,)}
                </h5>
            </CardContent>
            <CardActions disableSpacing>
                <StandardButton color="bright" size="small" variant="contained"
                        aria-label="catch" onClick={() => catchPokemon(props.id)}
                        disabled={isCatchDisabled}>
                    Catch
                </StandardButton>
                <StandardButton size="small" variant="contained"
                        aria-label="release"
                        onClick={() => releasePokemon(parseInt(props.id))}
                        disabled={!isCatchDisabled}>
                    Release
                </StandardButton>

            </CardActions>
        </Card>
    )
}

export default PokemonCard;