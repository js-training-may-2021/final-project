import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../redux/context";
import {useDispatch} from "react-redux";
import './CaughtPokemons.scss'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {appendPokemons, setPokemons} from "../../redux/actions/pokemonActions";
import PokemonComponent from "../../components/PokemonComponent/PokemonComponent";

export const CaughtPokemons = () => {
    const {caughtPokemons} = useContext(GlobalContext);
    const limit = 10;
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [endOfData, setEndOfData] = useState(false);
    const [needToUpdate, setNeedToUpdate] = useState(false);

    const dispatch = useDispatch();

    const fetchPokemonDetails = async (offSet) => {
        let ids = caughtPokemons.slice(offSet, offSet+limit);
        if(ids.length>1) {
            const queryParams = ids.map(x => `id=${x.id}`).join('&');
            const response = await axios
                .get(`http://localhost:3004/pokemons?${queryParams}`)
                .catch((err) => {
                    console.log("Err: ", err);
                });
            if(response.data && response.data.length === 0){
                setEndOfData(true);
                return ;
            }
            dispatch(appendPokemons(response.data));
        }else{
            setEndOfData(true)
        }
    }
useEffect(()=>{
    dispatch(setPokemons([]));

},[])
    const infiniteScroll = () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight - 40) {
            setNeedToUpdate(o => !o);
        }
    }

    const update = () => {
        if(endOfData) return;
        setOffset(prev => prev+limit);
        setLoading(true);
        showLoading(offset)
    }

    useEffect(() => {
        update();
    },[needToUpdate]);

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [])

    function showLoading(o) {
        fetchPokemonDetails(o);
        setTimeout(() => setLoading(false), 1000)
    }


    return (
        <div className="caught-pokemons">
            {caughtPokemons.length === 0 ?
                <div className='caught-pokemons__msg wrapper'>
                    <Typography variant="h5">
                        You haven't caught any pokemons yet...
                    </Typography>
                    <img src="https://media.giphy.com/media/QxGP7qB0DM0OoEU9mM/giphy.gif" alt="Good luck gif"/>
                </div>
                : <div className="wrapper caught-pokemons__wrapper">
                    <h2 className="caught-pokemons__title">Caught Pokemons</h2>
                    <Grid className="pokemon-component"
                          container spacing={3}>
                        <PokemonComponent/>
                    </Grid>
                </div>}
            {loading && !endOfData && <p>Loading ...</p>}
        </div>
    )
}