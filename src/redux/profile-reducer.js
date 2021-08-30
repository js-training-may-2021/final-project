const SET_POKEMON_PROFILE = 'SET_POKEMON_PROFILE';


let initialState = {
    profile: {},
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_POKEMON_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            }    
        default:
            return state;    
    }
}
 
 
export const setPokemonProfile = (profile) => ({type: SET_POKEMON_PROFILE, profile});

export default profileReducer;