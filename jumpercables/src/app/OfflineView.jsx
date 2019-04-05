import React, { Component } from 'react';
import { Login } from './Login';
import { CreateAccount } from './CreateAccount';
import './styles/OfflineView.css';

export class OfflineView extends Component {
    state= {
        // changing this to false changes to Create Account Component //
        LoginForm: true,
    }
    
    switchForm(e){
        this.setState((state, props) => ({
            LoginForm: !state.LoginForm,
        }))
        e.target.value = `Switch to ${(this.state.LoginForm ? "Create Account" : "Login")}`;
    }

    render() {
    return (
        <>
            <>
            <div className="container d-flex justify-content-center">
                <div className="flex-column justify-content-center bg-light border pb-2" id="removewidth">
                    { this.state.LoginForm && <Login></Login>}
                    {!this.state.LoginForm && <CreateAccount></CreateAccount>}
                    <div className="d-flex justify-content-center">
                    <button className="btn btn-link mt-4 " onClick={e => this.switchForm(e)}>Switch to { (this.state.LoginForm) ? "Create Account" : "Login" }</button>
                    </div>
                </div>
            </div>
            </>
        </>
        );
    }
  }