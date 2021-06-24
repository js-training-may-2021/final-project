import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import background from '../assets/images/navbackground.svg';
import styled from 'styled-components';

const Button = styled.div`
    max-width: 170px;
    margin-left: 50px;
    align-self: center;

    padding: 15px;
    border: 2px solid #FFE34E;
    border-radius: 8px;
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    color: #000;

    &:hover {
        background: #FFEF9C;
    }

    @media (max-width: 620px) {
        max-width: 100px;
        font-size: 14px;
        margin-left: 30px;
        padding: 9px;
    }
    @media(max-width: 480px) {
        background-color: #FFE34E;
        color: #fff;
        max-width: 100px;
        font-size: 14px;
    }
    @media (max-width: 370px) {
        max-width: 80px;
        font-size: 10px;
    }
`

const Container = styled.div`
    max-width: 1230px;
    margin: 0 auto;
    padding: 20px 35px;
    display: flex;
    justify-content: flex-start;
    background-color: #fff;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 90% 5%;
`

const Navigation = styled.nav`
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.05);
`


function NavMenu() {
    return (
        <Navigation>
            <Container>
              <Logo />
            <Link to="/mycollection">
                <Button>
                    Моя коллекция
                </Button>
            </Link>  
            </Container>
            
        </Navigation>
    );
}

export default NavMenu