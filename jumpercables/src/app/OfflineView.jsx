import React, { Component } from 'react';
import { Login } from './Login';
import { CreateAccount } from './CreateAccount';
import {BrowserRouter as Router, Route, Switch,  Redirect} from 'react-router-dom';


import './styles/OfflineView.css';

export class OfflineView extends Component {
    state= {
        // changing this to false changes to Create Account Component //
        loginForm: false,
        loginError: "",
        createAccountError: "",
    }
    
    switchForm(e){
        this.setState((state, props) => ({
            loginForm: !state.loginForm,
        }))
        e.target.value = `Switch to ${(this.state.loginForm ? "Create Account" : "Login")}`;
    }

    onLoginAttempt(login) {
        //TODO: route to server, return change state.loginError to reflect the state.
        console.log(login);
        this.props.onLogin();
    }

    onCreateAccount(account) {
        //TODO: route to server, return change state.createAccountError to reflect the state.
        console.log(account);
    }

    switchChange(e) {

    }

    render() {
    return(
        <Router>
            <div id="offlineview" className="container d-flex justify-content-center">
            <div className="flex-column justify-content-center bg-light border pb-2" id="removewidth">
            <Switch>
                <Route 
                    path="/register" 
                    render={(props) => <CreateAccount {...props} onLoginAttempt={e => this.onCreateAttempt(e)}/>}
                />
                <Route 
                    path="/login" 
                    render={(props) => <Login {...props} onLoginAttempt={e => this.onLoginAttempt(e)}/>}
                />
                <Redirect to="/register"/>
            </Switch>
            </div>
            </div>
        </Router>
    );
    }
  }