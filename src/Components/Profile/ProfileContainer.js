import React from 'react';
import Profile from './Profile';
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
    }

    render() {
        return(
            <Profile props={this.props} profile={this.props.profile}/>
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