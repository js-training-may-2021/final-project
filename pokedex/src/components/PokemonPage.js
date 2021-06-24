import { Container, Alert, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from '../action';
import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';


const PokemonDetails = () => {
    const dispatch = useDispatch();
    const handleCatch = (id, name) => {
        dispatch(catchPokemon({id, name}));
    }
    const { id: stringId } = useParams();
    const id = Number(stringId);
    const { data: pokemon, error, isPending } = useFetch('http://localhost:8000/pokemons/' + id);
    const allPokemons = useSelector((state) => state.pokemonsBase);
    const myPokemons = useSelector((state) => state.collection)
    const actualPokemon = (myPokemons.find((pokemon) => pokemon.id === id)) || (allPokemons.find((pokemon) => pokemon.id === id));
    const caught = myPokemons.find((pokemon) => pokemon.id === id) ? true: false;
    
    
   return (
        <Container className="pokemon-page" fluid>
            { isPending && <Alert  variant='warning'> Loading... </Alert> }
            { error && <Alert variant='danger'>{ error }!</Alert> }
            { pokemon && (
                <Container className = "pokemon-info p-3">
                    <Card className="w-50 ml-auto mr-auto pokemon-card" border="light">
                        <Card.Img variant="top" src={`/pokemons/${pokemon.id}.png`} ></Card.Img>
                        <Card.Body className="p-0 bg-light">
                            <Card.Title className="pokemon-name">{ pokemon.name }</Card.Title>
                            <Card.Text>Pokemon id: { pokemon.id }</Card.Text>
                            <Card.Text>{!caught && 'Uncaught pokemon'}</Card.Text>
                            <Card.Text>{caught && `Caught: ${actualPokemon.caughtAt}`}</Card.Text>
                            <Button disabled={caught} variant="info" className="catch-btn"  onClick={() => handleCatch(pokemon.id, pokemon.name)}>Catch</Button>
                        </Card.Body>    
                    </Card>
                </Container>
            ) }
        </Container>
    )
}

export default PokemonDetails;