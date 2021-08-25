import React from 'react';
import Profile from './Profile';
// import axios from 'axios';
import { connect } from 'react-redux';
import { setPokemonProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component{

    componentDidMount() {     
        let pokemonID = this.props.match.params.pokemonID;
        if (!pokemonID) {
            pokemonID = 25;  
        }
        this.props.pokemons.map(pokemonItem => {
            if (pokemonItem.id == pokemonID) {
                this.props.setPokemonProfile(pokemonItem);
            }
        })
    //     axios.get(`http://localhost:8000/pokemons/${pokemonID}`)
    //       .then(response => {
    //         this.props.setPokemonProfile(response.data);
    //         //console.log(response);
    //       });
    }

    render() {
        return(
            <Profile profile={this.props.profile}/>
        )
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    pokemons: state.pokemonListPage.pokemons,
});



// export default connect (mapStateToProps, {setPokemonProfile}) (ProfileContainer);

//новая компонента WithUrlDataContainerComponent
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setPokemonProfile}) (WithUrlDataContainerComponent);