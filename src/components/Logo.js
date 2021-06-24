import React from 'react';
import logo from '../assets/images/pokemonLogo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logotype = styled.img`
    @media (max-width: 620px) {
        max-width: 140px;
    }
    @media (max-width: 370px) {
        max-width: 110px;
    }
`
function Logo() {
    return (
        <div>
            <Link to="/">
                <Logotype src={logo} alt={'logo'}/>
            </Link>
        </div>
    );
}

export default Logo