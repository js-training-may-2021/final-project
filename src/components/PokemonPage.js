import React from 'react';
import styled from 'styled-components';
import Button from '../containers/Button';

const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width: 880px;
    margin: 50px auto;
    padding: 0 35px;
    @media (max-width: 710px) {
        max-width: 600px;
    }
    @media (max-width: 460px) {
        max-width: 400px;
        display: block;
        text-align: center;
    }
`

const Photo = styled.img`
    max-width: 330px;
    margin-right: 100px;
    @media (max-width: 710px) {
        max-width: 230px;
    }
    @media (max-width: 550px) {
        margin-right: 50px;
        max-width: 180px;
    }
`

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 10px;
    @media (max-width: 710px) {
        font-size: 38px;
    }
    @media (max-width: 460px) {
        font-size: 28px;
    }
`
const Text = styled.p`
    font-size: 20px;
    color: #C1C1C1;
    margin-bottom: 40px;
    @media (max-width: 460px) {
        margin-bottom: 20px;
    }
`
const Date = styled.h4`
    font-size: 20px;
    color: #C1C1C1;
    margin-top: 25px;
`

function PokemonPage ({ pokemons }) {
    const ids = window.location.href.toString().match(/\d+/g)[1]
    const isCaught = pokemons[ids-1].caught ? true : false;

    return(
        <Container>
            <div>
                {(pokemons[ids-1].id<721) ? <Photo src={require(`../assets/pokemons/${pokemons[ids-1].id}.png`).default} alt='' /> : ' '}
            </div>
            <div>
                <Title>{pokemons[ids-1].name.charAt(0).toUpperCase()+pokemons[ids-1].name.slice(1)}</Title>
                <Text>{'ID: ' + pokemons[ids-1].id}</Text>
                <Button disabled={isCaught} id={pokemons[ids-1].id} name={pokemons[ids-1].name} isCaught={isCaught} />
                { isCaught  ? <Date>{pokemons[ids-1].caughtAt}</Date> : null}
            </div>
        </Container>
    )
}

export default PokemonPage