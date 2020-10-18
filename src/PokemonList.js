import React from 'react';

class PokemonList extends React.Component{
	componentDidMount() {
        fetch('https://pokemons-frontend.herokuapp.com/pokemons/list')
        .then(response => {
            console.log(response);
        })
    }
	
	
	render(){
		return(
			<h1> Pokemon List! </h1>
		)
	}
}
export default PokemonList;