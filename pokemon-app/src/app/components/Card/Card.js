import React from 'react'
import './Card.scss'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import PokeBall from "../../elements/icons/pokeball";
import {Route, Link, NavLink} from 'react-router-dom';
import PokemonDetails from "../../containers/Pokemon-details/Pokemon-details";

const PokeCard = (props) => {
 /*   console.log('From pokecard with love, blyat` ',props)
    console.log('poka name, blyat` ',props.props.name)*/
    console.log('poka props, blyat` ',props)
    return (
    /*    <div >poka {props.name}
    {/!*        <div>{id}</div>
            <div>{name}</div>*!/}
        </div>*/
<Link to={props.path}>
        <Card className="card">
            <div className="card__number">
                <small>#{props.props.id >= 10 ? props.props.id : "0"+props.props.id}</small>
            </div>

            <CardMedia
                className='card__img'
                title={props.props.name}
                image={props.image}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="h3">
                    {props.props.name}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="delete">
                    <PokeBall/>
                </IconButton>
            </CardActions>

        </Card>
    </Link>
    )

}

export default PokeCard;
