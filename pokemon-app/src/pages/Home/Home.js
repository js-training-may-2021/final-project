import React, {useEffect, useState} from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setPokemons, appendPokemons} from "../../redux/actions/pokemonActions";

const Home = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [endOfData, setEndOfData] = useState(false);
    const [needToUpdate, setNeedToUpdate] = useState(false);

    const dispatch = useDispatch();

    const fetchPokemons = async (p) => {
        const response = await axios
            .get(`http://localhost:3004/pokemons?_page=${p}&_limit=10`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        if (response.data && response.data.length === 0) {
            setEndOfData(true);
            return;
        }

        dispatch(appendPokemons(response.data));

    }
    useEffect(() => {
        dispatch(setPokemons([]));

    }, []);

    const infiniteScroll = () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

        if (clientHeight + scrollTop >= scrollHeight - 40) {
            setNeedToUpdate(o => !o);
        }
    }

    const update = () => {
        if (endOfData)
            return;
        setPage(p => p + 1);
        setLoading(true);
        showLoading(page)
    }

    useEffect(() => {
        update();
    }, [needToUpdate]);

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [])

    function showLoading(pg) {
        fetchPokemons(pg);
        setTimeout(() => setLoading(false), 1000)
    }

    return (
        <div className="home">
                {<PokemonList/>}
                {loading && !endOfData && <p>Loading ...</p>}
        </div>

    )
}

export default Home;