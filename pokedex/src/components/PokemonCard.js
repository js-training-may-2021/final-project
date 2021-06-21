import React from 'react';
import { Card, Button  } from 'react-bootstrap';
import pok from '../assets/25.png';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function PokemonCard(props) {

    const handleClick = () => {
        console.log('pushed!!')
    }

    return (
        <>
         
            <Card className = "pokemon-card">
               <Card.Img variant="top" src={pok} ></Card.Img>
               <Card.Body className = "card-body">
                    <Card.Title>Name</Card.Title>        
                    <Button variant="info" className="catch-btn" onClick = {handleClick}>Catch</Button>            
                    <Button variant="danger" className="free-btn" onClick = {handleClick}>Set free</Button>
                </Card.Body>    
           </Card>
        )
     
        </>
    )
}
