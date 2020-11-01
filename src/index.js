import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PokemonList from './PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import RegisterForm from './Register';
import LoginForm from './Login';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={PokemonList}/>
      <Route path="/pokemon/:name" component={PokemonDetails}/>
      <Route path="/register" component={RegisterForm}/>
      <Route path="/login" component={LoginForm}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();