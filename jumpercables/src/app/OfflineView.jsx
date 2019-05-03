import React, { Component } from 'react';
import { Login } from './Account/Login';
import { CreateAccount } from './Account/CreateAccount';
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
        this.props.onSetLogin(login);
    }

    onCreateAccount(account) {
        //TODO: route to server, return change state.createAccountError to reflect the state.
        console.log(account);
    }

    render() {
    return (
        <div id="offlineview" className="container d-flex justify-content-center">
            <div className="flex-column justify-content-center bg-light border pb-2" id="removewidth">
                { this.state.loginForm && <Login loginError={this.state.loginError} onLoginAttempt={login => this.onLoginAttempt(login)}></Login>}
                {!this.state.loginForm && <CreateAccount createAccountError={this.state.createAccountError} onCreateAccount={acc => this.onCreateAccount(acc)}></CreateAccount>}
                <div className="d-flex justify-content-center">
                <button className="btn btn-link mt-4 " onClick={e => this.switchForm(e)}>Switch to { (this.state.loginForm) ? "Create Account" : "Login" }</button>
                </div>
            </div>
        </div>
        );
    }
  }