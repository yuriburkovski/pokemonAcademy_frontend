import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PokemonList from './PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

ReactDOM.render(
  // <React.StrictMode>
  //   <PokemonList/>
  // </React.StrictMode>,
  <BrowserRouter>
    <div>
      <Route exact path="/" component={PokemonList}/>
      <Route path="/pokemon/:name" component={PokemonDetails}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();