
export default function catchPokemonAction(id, time) {
    return {
        type: 'CAUGHT',
        id: id,
        time: time
    }
}
