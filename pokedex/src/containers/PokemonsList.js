import { Container, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { catchPokemon } from '../action';
import 'bootstrap/dist/css/bootstrap.min.css';


const PokemonsList = ({ pokemons }) => {
    const dispatch = useDispatch();
    const handleCatch = (id, name) => {
        dispatch(catchPokemon({id, name}));
    }
    const myPokemons = useSelector((state) => state.collection);
    const caught = (id) => { 
        if (myPokemons.find((pokemon) => pokemon.id === id)) {
            return true
        } else {
            return false
        }
    };
    
    return (
        <>
        <Container className = "pokemons-list">
            {pokemons.map((pokemon) => (
                    <Card className = "pokemon-card" key={ pokemon.id } >
                        <Link to={`/${pokemon.id}`}>  
                            <Card.Img variant="top" src={`/pokemons/${pokemon.id}.png`}></Card.Img>
                        </Link>  
                        <Card.Body className = "card-body">
                        <Link to={`/${pokemon.id}`}>
                             <Card.Title className="pokemon-name">{ pokemon.name }</Card.Title>
                        </Link>  
                        <Button disabled={caught(pokemon.id)} variant="info" className="catch-btn"  onClick={() => handleCatch(pokemon.id, pokemon.name)}>Catch</Button>            
                        </Card.Body>  
                    </Card>
            ))}
        </Container>
        </>
    )
}

export default PokemonsList;