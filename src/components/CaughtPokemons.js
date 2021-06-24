import React from 'react';
import Button from '../containers/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
    margin: 20px auto;
    text-align: center;
`

const Element = styled.li`
    display: inline-block;
    width: 30%;
    max-width: 300px;
    max-height: 270px;
    background-color: #fff;
    border-radius: 16px;
    margin-left: 30px;
    margin-bottom: 60px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.07);
    color: #000;

    @media (max-width: 719px) {
        width: 300px;
        display: block;
        margin: 0 auto;
        margin-bottom: 75px;
    }
    @media (max-width: 370px) {
        width: 270px;
    }
`

const Photo = styled.img`
    max-width: 200px;
    max-height: 200px;
`

const Name = styled.h4`
    font-size: 26px;
    line-height: 36px;

`

const Text = styled.p`
    font-size: 13px;
    line-height: 19px;
    color: #C1C1C1;
`

const Info = styled.div`
    @media (max-width: 719px) {
        padding: 20px 20px 0;
    }
    @media (max-width: 719px) {
        padding: 10px 10px 0;
    }
`

function CaughtPokemons({caughtPokemons}) {
    
    return (
        <List>
            {
                caughtPokemons.map(pokemon => {
                    const isCaught = pokemon.caught ? true : false;
                    return (
                    <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id}>
                        <Element >
                            <Info>
                                {(pokemon.id<721) ? <Photo src={require(`../assets/pokemons/${pokemon.id}.png`).default} alt='' /> : null}
                                <Name>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</Name>
                                <Text>{'ID: ' + pokemon.id}</Text>
                            </Info>
                            <Button disabled={isCaught} />
                        </Element> 
                    </Link>
                )})  
            }
        </List>
    )
}
export default CaughtPokemons