import React from 'react';
import Logo from './logo';
import './header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <div className="header__links">
                    <NavLink to="/main" className="main-link">Main</NavLink>
                    <NavLink to="/catched" className="catched-link">Caught</NavLink>
                </div>
            </div>
        </header>

    )
}