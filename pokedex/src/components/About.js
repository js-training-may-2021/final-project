import React from 'react';
import { Container, Alert } from 'react-bootstrap';

export default function About() {
    return (
        <div className="about-container">
            <Container className="about">
                <Alert variant="success">This is Pokedex react-app!!! Enjoy!</Alert>
            </Container>
        </div>
    )
};
