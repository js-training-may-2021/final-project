import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPokemonProfile } from '../redux/profile-reducer';
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component{

    componentDidMount() {     

        let pokemonID = this.props.match.params.pokemonID;

        if (!pokemonID) {
            pokemonID = 25;  
        }

        axios.get(`http://localhost:8000/pokemons/?_limit=1&_page=${pokemonID}`)
          .then(response => {
            this.props.setPokemonProfile(response.data);
          });
      }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});



// export default connect (mapStateToProps, {setPokemonProfile}) (ProfileContainer);

//новая компонента WithUrlDataContainerComponent
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setPokemonProfile}) (WithUrlDataContainerComponent);