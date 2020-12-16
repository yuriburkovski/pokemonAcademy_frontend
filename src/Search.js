import React from 'react';
import './App.css';

const Search = (props) => {

    const onInputChange = (event) => {
        props.onInputChange(event.target.value);
    }

    return (
        <div className = "App">
            <form>
                <p>Find Your pokemons!</p>
                <input type="text" onChange={onInputChange}/>
            </form>
        </div>
    )
}

export default Search;
