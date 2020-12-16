import React from 'react';
import { withRouter } from 'react-router-dom';
import loadingHOC from './loadingHOC';
import './App.css';

class PokemonDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pokemonDetails: null }
    } 

    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`https://pokemon-academy-api.herokuapp.com/pokemons/${name}`)
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            this.setState({pokemonDetails: jsonResponse});
            this.props.changeLoadingIndicator(false);
        })
    }

    onBackButtonClick = () => {
        this.props.history.goBack();
    }

    renderPokemon = () => {
        const { imageUrl, name, types, abilities, height, weight } = this.state.pokemonDetails;
        return (
            <div>
                <h3>{`name: ${name}`}</h3>
                <h3>{`types: ${types}`}</h3>
                <h3>{`abilities: ${abilities}`}</h3>
                <h3>{`height: ${height}`}</h3>
                <h3>{`weight: ${weight}`}</h3>
                <img src={imageUrl}/>
            </div>
        )
    }

    render() {
        console.log(this.props.getLoadingStatus());
        return (
            <div className = "App">
                <h1>Pokemon details</h1>
                {!this.props.getLoadingStatus() && this.renderPokemon()}
                <button className = "App-button" onClick={this.onBackButtonClick}>Back to list</button>
            </div>
        )
    }
}

export default loadingHOC(withRouter(PokemonDetails), "Pokemon Details loading!");