import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const PokemonsList = ({ pokemons, handleCatch}) => {
    return (
        <>
        <Container className = "pokemons-list">
            {pokemons.map((pokemon) => (
                    <Card className = "pokemon-card" key={ pokemon.id }>
                        <Card.Img variant="top" src={`../assets/pokemons/${pokemon.id}.png`}></Card.Img>
                        <Card.Body className = "card-body">
                         <Link to={`/home/${pokemon.id}`}>
                             <Card.Title className="pokemon-name">{ pokemon.name }</Card.Title>
                         </Link>      
                        <Button variant="info" className="catch-btn"/* onClick={() => handleCatch(pokemon.id)}*/>Catch</Button>            
                        <Button variant="danger" className="free-btn" >Set free</Button>
                        </Card.Body> 
                    </Card>
            ))}
        </Container>
        </>
    )
}

export default PokemonsList;