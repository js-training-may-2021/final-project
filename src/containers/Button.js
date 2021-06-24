import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { catchPokemon } from '../store/actions';

const Btn = styled.button`
    border: none;
    border-radius: ${props => props.radius ? "16px" : "0px"};
    border-top-left-radius: 0px;
    border-top-right-radius:  0px;
    margin-bottom: 0;
    width: 100%;
    padding: 15px 0;
    background-color: #FFE34E;
    font-size: 14px;
    cursor: pointer;

    &:disabled {
        background-color: #DFDFDF;
        color: #fff;
    }

    &:hover {
        background-color: #FFEF9C;
    }
`;

const Button = ({disabled, id, name, isCaught}) => {

    const dispatch = useDispatch();

    const clickHandler = (id, name) => (e) => {
        e.preventDefault();
        dispatch(catchPokemon({id, name}))
    }

    return (
        <Btn disabled={disabled} onClick={clickHandler(id, name)}>
            { isCaught ? 'Caught!' : 'Catch!'}
        </Btn>
    )
}

export default Button;