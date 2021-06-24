import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import PokeBall from "../../elements/icons/pokeball";
import { useHistory, Link } from "react-router-dom";
import './Header.scss';
import {GlobalContext} from "../../redux/context";
const useStyles = makeStyles((theme) => ({
    menuButton: {
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            width: 'auto',
        },
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const history = useHistory();

    function handleGoToCaught() {
        history.push("/caught-pokemons");
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" >
                <Toolbar className="wrapper" >
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
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

