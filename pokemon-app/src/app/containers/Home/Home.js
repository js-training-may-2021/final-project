import React, {useEffect, useState} from 'react';
import './Home.scss';
import Button from "@material-ui/core/Button";
import PokeCard from "../../components/Card/Card";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
// import {getPoks} from '../../API';

/*const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));*/

function Home() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [page, setPage] = useState(0);
    // const [loadMore, setLoadMore] = useState("http://localhost:3000/pokemons?_limit=10")
    const [loading, setLoading] = useState(false);
    const [scrollIsHandling, setScrollIsHandling] = useState(false);

if(!scrollIsHandling) {
    setScrollIsHandling(true);
    window.addEventListener('scroll', () => {
        console.log("handleScroll")

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        //console.log( { scrollTop, scrollHeight, clientHeight });

        if (clientHeight + scrollTop >= scrollHeight - 40 && !loading) {
            // show the loading animation
            setLoading(true);
            let tmpPg = 0;
            setPage(prev => { tmpPg = prev+1; return prev + 1; });
            showLoading(tmpPg);
            console.log('window inner scroll')

        }
    });
}

    function showLoading(pg) {
    console.log('showLoading')
        tryFetch(pg);
        // load more data
        setTimeout(() => setLoading(false), 1000)
    }

    const getPoks = async (p) => {
        console.log('getPoks page ',p)
        const pokemonsResponse = await fetch(`http://localhost:3000/pokemons?_page=${p}&_limit=20`);
        const poksData = await pokemonsResponse.json();
        console.log('poksData ', poksData);
        return poksData;
    }

    const tryFetch = async (pg) => {
        console.log('tryFetch')
        const newPoks = await getPoks(pg);
        setAllPokemons(prev => [...prev, ...newPoks]);
    }

    return (
        <div className='home wrapper'>
            <h1>HOME</h1>
            <button onClick={() => {
                showLoading();
            }}>FETCH
            </button>
            <div className="home__wrapper ">
                <div className="home__cards">

                    <Grid container justify="center" spacing={3}>
                        {allPokemons.map((pokemon, index) => {
                                let imgPath = `/public/pokemons/${pokemon.id}.png`;
                                return <Grid key={index} item>
                                    <PokeCard key={pokemon.id}
                                              props={pokemon}
                                              path={`/pokemon/${pokemon.id}`}
                                              image={index >= 720 ? '/public/unknownPok.jpg' : imgPath}
                                    />
                                </Grid>
                            }
                        )}
                    </Grid>
                    {loading && <p>Loading ...</p>}
                </div>

            </div>
        </div>
    )

}

export default Home;