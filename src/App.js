import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import RegisterForm from './Register';
import LoginForm from './Login';
import { render } from 'react-dom';


class App extends React.Component {

  onLoginButtonClick = () => {
    render(
       <Redirect to="/login"/>
    );
          //   <BrowserRouter>
          //     <div> 
          //       <Route path="/login" component={LoginForm}/>
          //     </div>
          //   </BrowserRouter>
          // );
  }
  
  onSignUpButtonClick = () => {
    render(
      <BrowserRouter>
        <div> 
          <Route path="/register" component={RegisterForm}/>
        </div>
      </BrowserRouter>
    );
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
            <p>Hello world</p>
          </header>
          <body>
            <button className="App-button" onClick={this.onLoginButtonClick}>Login</button>
            <button Link to='/register' className="App-button">Sign Up</button>
          </body>
        </div>
      );
  }
  
}

export default App;
