import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import PokeBall from "../../elements/icons/pokeball";
import { useHistory, Link } from "react-router-dom";
import './Header.scss';
import {GlobalContext} from "../../redux/context";
const useStyles = makeStyles((theme) => ({
    title: {
        display: 'block',
        width: 'auto',
    },
    titleLink:{
        color: 'white',
    },
    sectionDesktop: {
        display: 'flex',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const {caughtPokemons} = useContext(GlobalContext);
    const classes = useStyles();
    const history = useHistory();

    function handleGoToCaught() {
        history.push("/caught-pokemons");
    }

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" >
                <Toolbar className="wrapper" >
                    <div className={classes.title}>
                        <Link to={'/'} className={classes.titleLink}>
                    <Typography  variant="h6" noWrap >
                        Pokémons
                    </Typography>
                        </Link>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="number of caught pokemons" onClick={handleGoToCaught}>
                            <Badge badgeContent={caughtPokemons.length} color="secondary">
                              <PokeBall/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

