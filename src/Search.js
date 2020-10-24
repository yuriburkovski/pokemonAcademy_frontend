import React from 'react';

const Search = (props) => {

    const onInputChange = (event) => {
        props.onInputChange(event.target.value);
    }


    return (
        <div>
            <form>
                <p>Find Your pokemons!</p>
                <input type="text" onChange={onInputChange}/>
            </form>
        </div>
    )
}

export default Search;