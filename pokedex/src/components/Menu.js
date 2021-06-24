import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Menu() {
    return (
    <>
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
            <Navbar.Brand>Pokedex</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className = "nav-link" exact="true" to="/">All Pokemons </Link>
                    <Link className = "nav-link" exact="true" to="/caught">My Pokemons</Link> 
                    <Link className = "nav-link" exact="true" to="/about">About </Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>      
    </>
    )
}
