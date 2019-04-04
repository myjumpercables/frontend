import React, { Component } from 'react';
import { Login } from './Login'
import { CreateAccount } from './CreateAccount'

export class OfflineView extends Component {
    state= {

    }
    
    render() {
    return (
        <>
            <div className="container bg-danger">
                <Login></Login>
                <CreateAccount></CreateAccount>
            </div>
        </>
        );
    }
  }