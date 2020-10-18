import React from 'react';

class PokemonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pokemonList: [] };
    }

    componentDidMount() {
        fetch('https://pokemon-academy-api-pbr.herokuapp.com/pokemons/list')
            .then(response => response.json())
            .then(jsonResponse => {
                const results = jsonResponse.results;
                this.setState({ pokemonList: results })
            })
    }

    renderList = (pokemonList) => {
        return pokemonList.map((pokemon, index) => {
            const { imageUrl, name, level } = pokemon;
            return <tr key={index}> 
                <td><img src={imageUrl}/></td>
                <td><p>{name}</p></td>
                <td><p>{level}</p></td>
            </tr>
        })
    }

    renderHeader = () => {
        return <tr>
            <td><p>Image</p></td>
            <td><p>Name</p></td>
            <td><p>Level</p></td>
        </tr>
    }

    render() {
        return(
            <div>
                <h1>Pokemon List:</h1>
                <table>
                    {this.renderHeader()}
                    {this.renderList(this.state.pokemonList)}
                </table>
            </div>
        )
    }
}

export default PokemonList;