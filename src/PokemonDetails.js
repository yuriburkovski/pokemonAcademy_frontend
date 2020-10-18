import React from 'react';

class PokemonDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pokemonDetails: null }
    } 

    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`https://pokemons-frontend.herokuapp.com/pokemons/${name}`)
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            this.setState({pokemonDetails: jsonResponse});
        })
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
                <h1>Pokemon details!</h1>
                {this.state.pokemonDetails && this.renderPokemon()}
            </div>
        )
    }
}

export default PokemonDetails;