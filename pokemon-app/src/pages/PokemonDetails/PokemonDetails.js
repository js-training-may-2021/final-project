import React, {useContext, useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectedPokemon, removeSelectedPokemon} from "../../redux/actions/pokemonActions";
import Container from '@material-ui/core/Container';
import './PokemonDetails.scss';
import {GlobalContext} from "../../redux/context";
import StandardButton from "../../elements/StandardButton";
import Grid from "@material-ui/core/Grid";

const PokemonDetails = () => {
    const {
        caughtPokemons,
        catchPokemon,
        releasePokemon,
    } = useContext(GlobalContext);

    const {pokemonId} = useParams();
    let pokemon = useSelector((state) => state.pokemon);
    const {id, name} = pokemon;
    const imgPath =  pokemonId > 720 ? "/unknownPok.jpg" : `/pokemons/${pokemonId}.png`;
    const dispatch = useDispatch();
    const fetchPokemonDetails = async (id) => {
        const response = await axios
            .get(`http://localhost:3004/pokemons/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedPokemon(response.data));
    }

    useEffect(() => {
        if (pokemonId && pokemonId !== "") {
            fetchPokemonDetails(pokemonId)
        }
        return () => {
            dispatch(removeSelectedPokemon());
        }
    }, [pokemonId])

    const storedCaughtPokemon = caughtPokemons.find((pok) => parseInt(pok.id) === parseInt(pokemonId));
    const isCatchDisabled = !!storedCaughtPokemon;
    return (
        <div className="pokemon-details">
            <Container className='pokemon-details__container wrapper'>
                {Object.keys(pokemon).length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <section className='pokemon-details__header'>
                            <div className='pokemon-details__pagination'></div>
                            <div className="pokemon-details__title">
                                <h5>
                                    {name.charAt(0).toUpperCase()}{name.slice(1,)}
                                </h5>
                                <span className="pokemon-details__number">#{id >= 10 ? id : "0" + id}</span>
                            </div>
                        </section>
                        <Grid container spacing={2} className="pokemon-details__container">
                            <Grid className="pokemon-details__column"
                                  md={6} sm={6} xs={12}
                                  item>
                                <div className='pokemon-details__img'>
                                    <img src={imgPath} alt=""/>
                                </div>
                            </Grid>
                            <Grid className="pokemon-details__column"
                                  md={6} sm={6} xs={12}
                                  item>
                                <div className="pokemon-details__info">
                                    <div className='pokemon-details__info-col'>
                                        <div>Status:</div> <div>{isCatchDisabled ? 'Caught' : 'Free'}</div>
                                    </div>
                                    <div className='pokemon-details__info-col'>
                                        <div>Date of capture:</div> <div>{isCatchDisabled ? storedCaughtPokemon['captureDate'] : 'Not caught'}</div>
                                    </div>
                                    <div className="pokemon-details__btns">
                                        <StandardButton color="bright" size="small" variant="contained"
                                                        aria-label="catch" onClick={() => catchPokemon(parseInt(pokemonId))}
                                                        disabled={isCatchDisabled}>
                                            Catch
                                        </StandardButton>
                                        <StandardButton size="small" variant="contained"
                                                        aria-label="release"
                                                        onClick={() => releasePokemon(parseInt(pokemonId))}
                                                        disabled={!isCatchDisabled}>
                                            Release
                                        </StandardButton>
                                    </div>
                                </div>

                            </Grid>

                        </Grid>
                    </div>
                )}
            </Container>
        </div>

    )
}

export default PokemonDetails;