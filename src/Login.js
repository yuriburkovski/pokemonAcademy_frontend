import React from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: false};
	}

	onLoginButtonClick = (event) => {
        event.preventDefault();
        const userLogin = {login: this.login.value, password: this.password.value};
        fetch('https://pokemon-academy-api.herokuapp.com/pokemons/login', {
            method: 'POST',
            body: JSON.stringify(userLogin),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            if(response.status == 200){
                const authHeader = response.headers.get('Authorization');
                const token = authHeader.split(' ')[1];
                if(token) {
                    console.log(token);
                    localStorage.setItem('token', token);
                    this.props.history.push({pathname: '/'});
                } else {
                    throw new Error("Try to login again!");
                }
            } else {
                throw new Error("Try to login again!");
            }
        }).catch(error=>{
            this.setState({error: true});
        })
    }
	render() {
        return(
            <div className = "Login">
                <div>
                    <form>
                        <p>Login:</p>
                        <input type="text" ref={ref=>{
                            this.login = ref;
                        }}/>
                        <p>Password:</p>
                        <input type="password" ref={ref=>{
                            this.password = ref;
                        }}/>
                    </form>
                    <button className = "App-button" onClick={this.onLoginButtonClick}>Login</button>
                </div>
                {this.state.error && <p>Try to login again!</p>}
            </div>
        )
    }
}
export default LoginForm;