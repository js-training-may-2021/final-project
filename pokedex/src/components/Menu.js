import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .navbar-link {
        color: black;
        &:hover {
            color: green;
        }
    }
`

export default function Menu() {
    return (
    <>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className = "nav-link" exact="true" to="/">Home </Link>
                        <Link className = "nav-link" exact="true" to="/caught">Pokemons</Link> 
                        <Link className = "nav-link" exact="true" to="/about">About </Link> 
                    </Nav>
                    <Nav>
                        <Button variant="success" className ="m-2">Log in</Button>
                        <Button variant="primary" className ="m-2">Push me</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    </>
    )
}
