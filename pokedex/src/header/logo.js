import React from 'react';
import './header.css';
import logo from './pokemon_logo.png'

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
    )
}