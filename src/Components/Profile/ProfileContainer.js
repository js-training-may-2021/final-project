import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setPokemonProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';


class ProfileContainer extends React.Component{
    componentDidMount() {     
        // debugger;
        const { pokemons, setPokemonProfile } = this.props;

        const queryParamId = this.props.match.params.pokemonID;
        const pokemonID = queryParamId ? parseInt(queryParamId) : 25;
        // const pokemonID = parseInt(this.props.match.params.pokemonID);
        // if (!pokemonID) {
        //     pokemonID = 25;  
        // }

        const foundedPokemon = pokemons.find(pokemon => pokemon.id === pokemonID);

        if(foundedPokemon){
            setPokemonProfile(foundedPokemon);
        } else {
            //this.props.setError()
        }

        // this.props.pokemons.map(pokemonItem => {
        //     if (pokemonItem.id === pokemonID) {
        //         this.props.setPokemonProfile(pokemonItem);
        //     } 
        // })
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

//compose - объединяет функции
export default compose(
    connect (mapStateToProps, {setPokemonProfile}),
    withRouter
)(ProfileContainer);


// withRouter:
// проблема - два источника истины
// путь url какой именно покемон - пишем в PokemonGrid при NavLink; пример 'http://localhost:3000/profile/4';
// получить доступ к этому пути чтобы при изменении в адресной строке менялся покемон: 
// 1) withRouter - HOC - оборачивает компаненту чтобы следить за путем
// 2) если после componentDidMount поставить debugger введем в косоли this.props и увидим новые объекты (match location history...))
// match - совпадение нашего URL c каким-то Route из <App />
// 3) match.isExact = false - роут совпал с путем (/profile) но не точь-в-точь - нужно чтобы было true, поэтому   
// 4) match.path - путь Route из <App />
//    match.url -  в строке адресной
// 5) для точного сопадегния нудно достать этот номер профиля, чтобы он приходил в match.params 
//    для этого в Route из <App /> пишем Route path='/profile/:pokemonID?' где 'pokemonID' имя параметра; '?' значит что он необязателен
// 6) сам путь до него будет: 'this.props.match.params.pokemonID' - записываем в константу при componentDidMount  
