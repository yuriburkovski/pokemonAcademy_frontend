import React from 'react';

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
        })
	}

	onBackButtonClick = () => {
        this.props.history.goBack();
    }

    renderPokemon = () => {
        const { imageUrl, name, types, abilities, height, weight } = this.state.pokemonDetails;
        return (
            <div>
                <p>{`name: ${name}`}</p>
                <p>{`types: ${types}`}</p>
                <p>{`abilities: ${abilities}`}</p>
                <p>{`height: ${height}`}</p>
                <p>{`weight: ${weight}`}</p>
                <img src={imageUrl}/>
            </div>
        )
    }

       render() {
        return (
            <div>
                <h1>Pokemon details</h1>
                {/* renderujemy szczegóły jeśli state pokemon details istnieje */}
                {this.state.pokemonDetails && this.renderPokemon()}
                {/* renderujemy napis ładowania jeśli state pokemon details nie istnieje */}
                {!this.state.pokemonDetails && <h2>Loading details</h2>}
                <button onClick={this.onBackButtonClick}>Back to list</button>
            </div>
        )
    }
}

export default PokemonDetails;