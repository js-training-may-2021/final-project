import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';

const Container = styled.div`
    max-width: 1230px;
    margin: 0 auto;
    text-align: center;
    padding: 30px;
`
const Title = styled.h1`
    margin: 20px 0;
    color: #696969;
`
function PokemonCollection() {
    
    const pokemons = useSelector((state) => state)
    
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 30;
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;

    const currentPokemons = pokemons.slice(firstIndex,lastIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Container>
            <Title>Вся коллекция</Title>
            <Card pokemons={currentPokemons}/>
            <Pagination 
                perPage={perPage} 
                total={pokemons.length}
                paginate={paginate}
            />
        </Container>
    );
}

export default PokemonCollection
