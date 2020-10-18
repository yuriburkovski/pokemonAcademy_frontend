import React from 'react';

class PokemonList extends React.Component {
	constructor(props) {
        super(props);
        this.state = { pokemonList: [], next: null, prev: null };
    }

    componentDidMount() {
        this.fetchPokemonList('https://pokemon-academy-api.herokuapp.com/pokemons/list')
    }

    fetchPokemonList = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            const { results, next, prev } = jsonResponse; 
            this.setState({ pokemonList: results, next: next, prev: prev });
        })
    }

    onNextButtonClick = () => {
        this.fetchPokemonList(this.state.next);
    }

    onPrevButtonClick = () => {
        this.fetchPokemonList(this.state.prev);
    }

    onItemClick(name){
        this.props.history.push({pathname: `/pokemon/${name}`});
    }

    renderList = (pokemonList) => {
        return pokemonList.map((pokemon, index) => {
            const { imageUrl, name, level } = pokemon;
            const itemClick = this.onItemClick.bind(this, name);
            return <tr onClick={itemClick} key={index}>
                <td><img src={imageUrl} /></td>
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
        window.scrollTo(0, 0)
        return (
            <div>
                <h1>Pokemon List:</h1>
                {this.state.prev && <button onClick={this.onPrevButtonClick}>Prev</button>}
                {this.state.next && <button onClick={this.onNextButtonClick}>Next</button> }
                <table>
                    <thead>{this.renderHeader()}</thead>
                    <tbody>{this.renderList(this.state.pokemonList)}</tbody>
                </table>
                {this.state.prev && <button onClick={this.onPrevButtonClick}>Prev</button>}
                {this.state.next && <button onClick={this.onNextButtonClick}>Next</button> }
            </div>
        )
    }
}

export default PokemonList;