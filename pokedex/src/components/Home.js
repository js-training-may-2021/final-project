import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PokemonsList from '../containers/PokemonsList';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import { loadMorePokemons } from '../action';

export default function Home() {
   
    const pokemons = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isMore, setMore] = useState(true);
    const [page, setPage] = useState(2);
       

   const loadFunc = async() => {
    if (pokemons.length > 949) {
        
        setMore(false);
        return;
    }
        const response = await axios.get(`http://localhost:8000/pokemons?_page=${page}&_limit=20`);
        dispatch(loadMorePokemons(response.data));
        setPage(page + 1);
   }

    return (
        <Container className="home-container" fluid>
            <InfiniteScroll
                pageStart={page}
                initialLoad={false}
                loadMore={loadFunc}
                hasMore={isMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <PokemonsList pokemons={pokemons} />
            </InfiniteScroll>
        </Container>
    )
}


