import React, { Component } from 'react';
import CreateAccount from './account/CreateAccount'
import './App.css';
import './account/AccountView';
import './account/LoginView';
import AccountView from './account/AccountView';
import LoginView from './account/LoginView';

  class App extends Component {
  render() {
    return (
        <>
          <CreateAccount></CreateAccount>
        </>
    );
  }
}

export default App;
