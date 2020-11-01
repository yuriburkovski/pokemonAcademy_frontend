import React from 'react';
import { withRouter } from 'react-router-dom';
import loadingHOC from './loadingHOC';
import Search from './Search';

class PokemonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pokemonList: [], searchResult: [], next: null, prev: null };
    }

    componentDidMount() {
        this.fetchPokemonList('https://pokemon-academy-api.herokuapp.com/pokemons/list')
    }

    fetchPokemonList = (url) => {
        const token = localStorage.getItem('token');
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response=>{
            if(response.status >= 400) {
                throw new Error("User not authorized!");
            }
            return response;
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            const { results, next, prev } = jsonResponse; 
            this.setState({ pokemonList: results, searchResult: results, next: next, prev: prev });
            this.props.changeLoadingIndicator(false);
        })
        .catch(error=>{
            this.props.history.push({pathname: '/login'})
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

    logout = () => {
        localStorage.removeItem('token');
        window.location.reload(true);
    }

    onSearchInputChange = (pokemonToFind) => {
        const newSearchResult = this.state.pokemonList.filter((pokemonItem)=>{
            return pokemonItem.name.includes(pokemonToFind);
        });
        this.setState({searchResult: newSearchResult})
    } 

    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <h1>Pokemon List:</h1>
                <Search onInputChange={this.onSearchInputChange}/>
                {this.state.prev && <button onClick={this.onPrevButtonClick}>Prev</button>}
                {this.state.next && <button onClick={this.onNextButtonClick}>Next</button> }
                <table>
                    <thead>{this.renderHeader()}</thead>
                    <tbody>{this.renderList(this.state.searchResult)}</tbody>
                </table>
                {this.state.prev && <button onClick={this.onPrevButtonClick}>Prev</button>}
                {this.state.next && <button onClick={this.onNextButtonClick}>Next</button> }
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default loadingHOC(withRouter(PokemonList), 'Loading pokemon list');