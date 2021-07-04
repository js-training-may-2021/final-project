import React from 'react'
import { connect } from 'react-redux';
import { getPokemons } from '../store/actions/pokemonActions' 

class Pageing extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getPrevious = this.getPrevious.bind(this);
        this.getNext = this.getNext.bind(this);
    }

    handleClick = (e) => {
        if(this.props.onlyCatched === "true") {
            this.props.getPokemons((e.target.innerText - 1) * this.props.limit, this.props.limit, this.props.catchedPokemons);
        } else {
            this.props.getPokemons((e.target.innerText - 1) * this.props.limit, this.props.limit, undefined, this.props.totalCount);
        }
    }

    getPrevious = () => {
        if(this.props.onlyCatched === "true") {
            this.props.getPokemons(this.props.previousPage, this.props.limit, this.props.catchedPokemons);
        } else {
            this.props.getPokemons(this.props.previousPage, this.props.limit, undefined, this.props.totalCount);
        }
    } 

    getNext = () => {
        if(this.props.onlyCatched === "true") {
            this.props.getPokemons(this.props.nextPage, this.props.limit, this.props.catchedPokemons);
        } else {
            this.props.getPokemons(this.props.nextPage, this.props.limit, undefined, this.props.totalCount);
        }
    }

    render() {
        const pageLinks = [];
        for (var i=0; i<this.props.numberOfPage; i++) {
            pageLinks.push(<li className={ this.props.currentPage === (i + 1) ? 'active' : 'waves-effect' } key={i} onClick={this.handleClick}><a href="#!">{ i + 1 }</a></li>);
        }

        return (
            <div className="container">
                <ul className="pageing">
                    <li 
                        onClick={ this.props.previousPage !== null ? this.getPrevious : () => {} }>
                            <a href="#!">&lt;</a>
                    </li>
                    { pageLinks }
                    <li 
                        onClick={ this.props.nextPage !== null ? this.getNext : () => {} }>
                            <a href="#!">&gt;</a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        previousPage: state.previousPage,
        nextPage: state.nextPage,
        numberOfPage: state.numberOfPage,
        currentPage: state.currentPage,
        limit: state.limit,
        catchedPokemons: state.catchedPokemons,
        totalCount: state.totalCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPokemons: (offset, limit, catchedPokemons, totalCount) => {
            getPokemons(dispatch, offset, limit, catchedPokemons, totalCount)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pageing);
