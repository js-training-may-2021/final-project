import { Container, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const PokemonDetails = () => {
    const { id } = useParams();
    const { data: pokemon, error, isPending } = useFetch('http://localhost:8000/pokemons/' + id)

    return (
        <Container className="pokemon-card">
            { isPending && <Alert  variant='warning'> Loading... </Alert> }
            {error && <Alert variant='danger'>{error}!</Alert>}
            { pokemon && (
                <Container>
                    <img src={`../assets/pokemons/${pokemon.id}.png`}></img>
                    <h2>{ pokemon.name }</h2>
                    <p>{ pokemon.id }</p>
                </Container>
            )}
        </Container>
    )
}

export default PokemonDetails;