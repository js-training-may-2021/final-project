import React from 'react';
import { Container, Alert } from 'react-bootstrap';

export default function About() {
    return (
        <Container className="about-container" fluid>
            <Alert variant="success" className="greetings">This is Pokedex react-app!!! Enjoy!</Alert>
        </Container>  
    )
};
